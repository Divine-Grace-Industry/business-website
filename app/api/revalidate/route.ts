import { NextRequest, NextResponse } from "next/server"
import { revalidatePath, revalidateTag } from "next/cache"
import { createHmac, timingSafeEqual } from "crypto"

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  })
}

function isValidSignature(rawBody: string, signature: string, secret: string): boolean {
  console.log("🔐 [SIGNATURE CHECK] Starting signature verification...")
  console.log("🔐 [SIGNATURE CHECK] Full received signature:", signature)

  // Step 1: Parse "t=timestamp,v1=hash" format
  const parts = signature.split(",")
  const tPart = parts.find(p => p.startsWith("t="))
  const v1Part = parts.find(p => p.startsWith("v1="))

  if (!tPart || !v1Part) {
    console.log("❌ [SIGNATURE CHECK] Missing t= or v1= in signature")
    return false
  }

  const timestamp = tPart.slice(2)       // "1773046621032"
  const receivedHash = v1Part.slice(3)   // "23yX5EFaJyIm..."

  console.log("🔐 [SIGNATURE CHECK] Parsed timestamp:", timestamp)
  console.log("🔐 [SIGNATURE CHECK] Parsed receivedHash:", receivedHash)

  // Step 2: Build the signed payload — Sanity signs "timestamp.body"
  const signedPayload = `${timestamp}.${rawBody}`
  console.log("🔐 [SIGNATURE CHECK] Signed payload preview:", signedPayload.slice(0, 80))

  // Step 3: Compute HMAC-SHA256 and encode as base64url
  const hmac = createHmac("sha256", secret)
  hmac.update(signedPayload)
  const computedHash = hmac.digest("base64url")  // base64url, NOT hex!

  console.log("🔐 [SIGNATURE CHECK] Computed hash:", computedHash)
  console.log("🔐 [SIGNATURE CHECK] Received hash:", receivedHash)
  console.log("🔐 [SIGNATURE CHECK] Match:", computedHash === receivedHash)

  if (computedHash.length !== receivedHash.length) {
    console.log("❌ [SIGNATURE CHECK] Length mismatch!", computedHash.length, "vs", receivedHash.length)
    return false
  }

  return timingSafeEqual(Buffer.from(computedHash), Buffer.from(receivedHash))
}

export async function POST(req: NextRequest) {
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
  console.log("📥 [WEBHOOK] Incoming request received")
  console.log("📥 [WEBHOOK] Time:", new Date().toISOString())
  console.log("📥 [WEBHOOK] Method:", req.method)
  console.log("📥 [WEBHOOK] URL:", req.url)

  // --- STEP 1: LOG ALL HEADERS ---
  console.log("📋 [STEP 1] Reading headers...")
  const headers: Record<string, string> = {}
  req.headers.forEach((value, key) => { headers[key] = value })
  console.log("📋 [STEP 1] All headers:", JSON.stringify(headers, null, 2))

  const signature = req.headers.get("sanity-webhook-signature") ?? ""
  console.log("📋 [STEP 1] sanity-webhook-signature:", signature || "⚠️ MISSING - no signature header found!")

  // --- STEP 2: READ RAW BODY ---
  console.log("📦 [STEP 2] Reading raw body...")
  let rawBody: string
  try {
    rawBody = await req.text()
    console.log("📦 [STEP 2] Raw body length:", rawBody.length)
    console.log("📦 [STEP 2] Raw body:", rawBody)
  } catch (err) {
    console.log("❌ [STEP 2] Failed to read body:", err)
    return NextResponse.json({ error: "Failed to read body" }, { status: 400 })
  }

  // --- STEP 3: PARSE JSON ---
  console.log("🔍 [STEP 3] Parsing JSON body...")
  let body: any
  try {
    body = JSON.parse(rawBody)
    console.log("🔍 [STEP 3] Parsed body:", JSON.stringify(body, null, 2))
    console.log("🔍 [STEP 3] Document _type:", body._type)
    console.log("🔍 [STEP 3] Document _id:", body._id)
  } catch (err) {
    console.log("❌ [STEP 3] Failed to parse JSON:", err)
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  const type = body._type

  // --- STEP 4: CHECK ENV SECRET ---
  console.log("🔑 [STEP 4] Checking environment secret...")
  const secret = process.env.SANITY_WEBHOOK_SECRET
  if (!secret) {
    console.log("❌ [STEP 4] SANITY_WEBHOOK_SECRET is NOT set in environment variables!")
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 })
  }
  console.log("🔑 [STEP 4] SANITY_WEBHOOK_SECRET exists ✅, length:", secret.length)

  // --- STEP 5: VERIFY SIGNATURE ---
  console.log("🔐 [STEP 5] Verifying signature...")
  if (!signature) {
    console.log("❌ [STEP 5] No signature header present — rejecting request")
    return NextResponse.json({ message: "Missing signature" }, { status: 401 })
  }

  const isValid = isValidSignature(rawBody, signature, secret)
  console.log("🔐 [STEP 5] Signature valid:", isValid)

  if (!isValid) {
    console.log("❌ [STEP 5] Invalid signature — rejecting request")
    return NextResponse.json({ message: "Invalid signature" }, { status: 401 })
  }
  console.log("✅ [STEP 5] Signature verified successfully!")

  // --- STEP 6: REVALIDATE PATHS ---
  console.log("🔄 [STEP 6] Starting revalidation for type:", type)
  try {
    if (type === "category") {
      console.log("🔄 [STEP 6] Type is 'category' — revalidating '/' and '/products'")
      revalidatePath("/")
      console.log("✅ [STEP 6] Revalidated: /")
      revalidatePath("/products", "layout")
      console.log("✅ [STEP 6] Revalidated: /products (layout)")
       revalidateTag("sitemap", "default")
      console.log("✅ [STEP 6] Revalidated: /sitemap.xml")
    } else if (type === "product") {
      console.log("🔄 [STEP 6] Type is 'product' — revalidating '/products'")
      revalidatePath("/products", "layout")
      console.log("✅ [STEP 6] Revalidated: /products (layout)")
       revalidateTag("sitemap", "default")
      console.log("✅ [STEP 6] Revalidated: /sitemap.xml")
    } else if (type === "certificates") {
      console.log("🔄 [STEP 6] Type is 'certificates' — revalidating '/certificates'")
      revalidatePath("/certificates")
      console.log("✅ [STEP 6] Revalidated: /certificates")
    } else {
      console.log("⚠️ [STEP 6] Unknown document type:", type, "— no paths revalidated")
    }

    console.log("✅ [WEBHOOK] Done! Sending success response")
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
    return NextResponse.json({ revalidated: true, type })
  } catch (error) {
    console.log("❌ [STEP 6] Revalidation failed:", error)
    return NextResponse.json({ error: "revalidation failed" }, { status: 500 })
  }
}