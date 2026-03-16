const stats = [
  { number: "2020", label: "Established" },
  { number: "6+", label: "Source Countries" },
  { number: "1500+", label: "Happy customers" },
  { number: "Global", label: "Coverage" },
];

export default function StatsBar() {
  return (
    <div
      className="w-full border-t"
      style={{
        backgroundColor: "var(--color-primary)",
        borderColor: "rgba(255,255,255,0.10)",
        paddingBlock: "2rem",
      }}
    >
      <div className="container">
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ gap: "0" }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="stat-block"
              style={{
                borderRight:
                  i < stats.length - 1
                    ? "1px solid rgba(255,255,255,0.2)"
                    : "none",
              }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
