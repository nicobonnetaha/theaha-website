const stats = [
  { value: "5+", label: "Years building on-chain" },
  { value: "20+", label: "Projects shipped" },
  { value: "4", label: "Chains" },
  { value: "∞", label: "Open-source code" },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "120px 32px", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <span className="tag" style={{ marginBottom: 24, display: "block" }}>Who we are</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 900, letterSpacing: "-0.03em", color: "var(--fg)", lineHeight: 1.1, marginBottom: 24 }}>
              The team behind<br />Scaffold Stellar
            </h2>
            <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.75, marginBottom: 16 }}>
              Founded by Chad Barraford and Willem Wyndham, The Aha Company fills critical gaps in blockchain ecosystems. We&apos;re practitioners first — we ship production code, then share it with the world.
            </p>
            <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.75 }}>
              We built the developer experience for Stellar Smart Contracts alongside the Stellar Development Foundation and continue to push the boundaries of what&apos;s possible on-chain.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--border)" }}>
            {stats.map((s) => (
              <div key={s.label} style={{ background: "var(--bg)", padding: "32px 28px" }}>
                <div style={{ fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: 900, color: "var(--accent)", letterSpacing: "-0.04em", lineHeight: 1 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 8, lineHeight: 1.4 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div > div { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
