import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    category: "Tokenization",
    title: "Why Stellar is the Right Chain for Tokenization in 2025",
    excerpt: "From RWA to stablecoins, Stellar's compliance-first architecture makes it the go-to chain for institutional tokenization.",
    date: "Sep 15, 2025",
    slug: "stellar-tokenization-2025",
  },
  {
    category: "Developer Tools",
    title: "Scaffold Stellar: How We Built the Developer Toolkit for the Next Wave of dApps",
    excerpt: "A deep dive into the open-source framework we built to make it easier for developers to ship production-ready apps on Stellar.",
    date: "Oct 20, 2025",
    slug: "scaffold-stellar-developer-toolkit",
  },
  {
    category: "DeFi",
    title: "DeFi on XRPL: Compliance, Liquidity and the Road Ahead",
    excerpt: "XRPL's native DEX and AMM features make it uniquely positioned for compliant DeFi. We explore the opportunities and challenges.",
    date: "Nov 10, 2025",
    slug: "defi-xrpl-compliance-liquidity",
  },
];

export default function BlogPreview() {
  return (
    <section style={{ padding: "120px 32px", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 64, flexWrap: "wrap", gap: 16 }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.03em", color: "var(--fg)" }}>
            From the blog
          </h2>
          <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--muted)", textDecoration: "none", fontWeight: 500 }}>
            All posts <ArrowRight size={14} />
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
              <article style={{ paddingTop: 24, borderTop: "1px solid var(--border)" }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 16 }}>
                  {post.category}
                </span>
                <h3 style={{ fontSize: "clamp(1rem, 1.5vw, 1.1rem)", fontWeight: 700, color: "var(--fg)", lineHeight: 1.4, letterSpacing: "-0.02em", marginBottom: 12 }}>
                  {post.title}
                </h3>
                <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7, marginBottom: 20 }}>
                  {post.excerpt}
                </p>
                <span style={{ fontSize: 12, color: "var(--subtle)" }}>{post.date}</span>
              </article>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          section > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
