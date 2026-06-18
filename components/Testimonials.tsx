const testimonials = [
  {
    quote: "Industry-leading developer experience",
    body: "When we undertook the biggest update to Stellar since its inception, fully programmable smart contracts, we knew we needed to ship an industry-leading developer experience.\n\nWe searched far and wide for capable teams to help us. We found one. We've been glad to work with The Aha Company ever since.",
    author: "Tomer Weller",
    role: "Chief Product Officer",
    org: "Stellar Development Foundation",
    photo: "/images/tomer.jpg",
  },
  {
    quote: "True co-creators who bring ideas to life",
    body: "Since working alongside Chad and Willem, I've always appreciated that they fill critical gaps in the ecosystems they work in. More recently, collaborating on Scaffold Stellar with the talented team they've built, I'm consistently impressed by their speed, capacity, and commitment to quality. For true co-creators who bring ideas to life, look no further than The Aha Company.",
    author: "Jane Wang",
    role: "PM, Developer Experience & RWA Tokenization",
    org: "Stellar Development Foundation",
    photo: "/images/jane.jpg",
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
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
                {t.body.split("\n\n").map((para, i) => (
                  <p key={i} style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.75 }}>
                    {para}
                  </p>
                ))}
              </div>
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: 20, display: "flex", alignItems: "center", gap: 14 }}>
                <img
                  src={t.photo}
                  alt={t.author}
                  width={44}
                  height={44}
                  style={{ borderRadius: "50%", flexShrink: 0, objectFit: "cover", width: 44, height: 44 }}
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
