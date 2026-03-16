
export interface ProductData {
    name: string,
    image: SanityImageSource,
    slug: string,
    description: string,
    materials?: string[]
}

export interface Certificates {
    name: string,
    image: SanityImageSource
}