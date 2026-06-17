const testimonials = [
  {
    quote: "Industry-leading developer experience",
    body: "When we undertook the biggest update to Stellar since its inception — fully programmable smart contracts — we knew we needed to ship an industry-leading developer experience. We searched far and wide for capable teams to help us. We found one.",
    author: "Tomer Weller",
    role: "Chief Product Officer",
    org: "Stellar Development Foundation",
    initials: "TW",
    color: "#1a56db",
  },
  {
    quote: "True co-creators who bring ideas to life",
    body: "Collaborating on Scaffold Stellar with the talented team they've built, I'm consistently impressed by their speed, capacity, and commitment to quality. For true co-creators who bring ideas to life, look no further than The Aha Company.",
    author: "Jane Wang",
    role: "PM, Developer Experience & RWA Tokenization",
    org: "Stellar Development Foundation",
    initials: "JW",
    color: "#0e9f6e",
  },
];

export default function Testimonials() {
  return (
    <section style={{ padding: "120px 32px", borderTop: "1px solid var(--border)", background: "var(--testimonial-bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 64, flexWrap: "wrap", gap: 16 }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.03em", color: "var(--fg)" }}>
            What they say
          </h2>
          <span className="tag">Testimonials</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          {testimonials.map((t) => (
            <div key={t.author} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <p style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)", fontWeight: 600, color: "var(--fg)", lineHeight: 1.45, letterSpacing: "-0.015em" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.75, flex: 1 }}>
                {t.body}
              </p>
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: 20, display: "flex", alignItems: "center", gap: 14 }}>
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(t.author)}&background=${t.color.replace("#", "")}&color=fff&size=80&bold=true&font-size=0.4`}
                  alt={t.author}
                  width={44}
                  height={44}
                  style={{ borderRadius: "50%", flexShrink: 0 }}
                />
                <div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "var(--fg)" }}>{t.author}</p>
                  <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 3 }}>{t.role} · {t.org}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
