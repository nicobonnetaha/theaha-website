const services = [
  {
    num: "01",
    title: "Developer Tooling",
    desc: "SDKs, scaffolding frameworks, and open-source libraries. We've built Scaffold Stellar — the standard for Stellar smart contract development.",
  },
  {
    num: "02",
    title: "Tokenization",
    desc: "Real-world asset tokenization infrastructure for equities, real estate and funds. Compliance built in from the protocol layer up.",
  },
  {
    num: "03",
    title: "DeFi Solutions",
    desc: "Liquidity management, AMM integrations, and native DEX protocols across Stellar, XRPL and Ethereum.",
  },
  {
    num: "04",
    title: "Compliance Infrastructure",
    desc: "KYC/AML workflows, regulated asset frameworks, and audit-ready architecture for institutional clients.",
  },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: "120px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 64, flexWrap: "wrap", gap: 16 }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.03em", color: "var(--fg)" }}>
            What we build
          </h2>
          <span className="tag">Services</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 1, background: "var(--border)" }}>
          {services.map((s) => (
            <div key={s.num} style={{ background: "var(--bg)", padding: "40px 32px" }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.1em", display: "block", marginBottom: 20 }}>
                {s.num}
              </span>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--fg)", marginBottom: 12, letterSpacing: "-0.02em" }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
