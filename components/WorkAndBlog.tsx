"use client";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const cases = [
  {
    num: "01",
    category: "Developer Tooling · Stellar",
    title: "Scaffold Stellar",
    desc: "Open-source scaffolding template for Soroban smart contracts, cutting project setup from days to minutes. The go-to starting point for Stellar developers worldwide.",
    year: "2024",
    href: "https://github.com/theahaco/soroban-init-template",
  },
  {
    num: "02",
    category: "Tokenization · Stellar",
    title: "Equitx",
    desc: "Equity tokenization infrastructure built on Stellar, bringing real-world asset issuance on-chain with compliance at the protocol layer.",
    year: "2024",
    href: "https://github.com/theahaco/equitxdev",
  },
  {
    num: "03",
    category: "Asset Management · Stellar",
    title: "Authline",
    desc: "Stellar asset and trustline management dApp, enabling institutions to manage tokenized assets, issuance rights, and account authorization at scale.",
    year: "2025",
    href: "https://github.com/theahaco/authline",
  },
];

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

type Tab = "work" | "blog";

export default function WorkAndBlog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [tab, setTab] = useState<Tab>("work");

  return (
    <section id="work" ref={ref} style={{ padding: "120px 32px", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header + tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 56, flexWrap: "wrap", gap: 20 }}
        >
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.03em", color: "var(--fg)" }}>
            {tab === "work" ? "From vision to reality" : "From the blog"}
          </h2>

          <div style={{ display: "flex", gap: 4, padding: 4, background: "var(--bg-2)", borderRadius: 10, border: "1px solid var(--border)" }}>
            {(["work", "blog"] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  padding: "8px 20px",
                  borderRadius: 7,
                  border: "none",
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: 600,
                  fontFamily: "inherit",
                  letterSpacing: "-0.01em",
                  background: tab === t ? "var(--bg)" : "transparent",
                  color: tab === t ? "var(--fg)" : "var(--muted)",
                  boxShadow: tab === t ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
                  transition: "all 0.15s ease",
                }}
              >
                {t === "work" ? "Case Studies" : "Articles"}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Case studies tab */}
        {tab === "work" && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {cases.map((c, i) => (
              <motion.div
                key={c.num}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                whileHover={{ x: 6 }}
                className="hover-dim"
              >
                <Link
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "80px 1fr 120px",
                    gap: 40,
                    padding: "36px 0",
                    borderTop: i === 0 ? "1px solid var(--border)" : undefined,
                    borderBottom: "1px solid var(--border)",
                    alignItems: "center",
                    textDecoration: "none",
                    transition: "opacity 0.15s",
                  }}
                >
                  <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.1em" }}>
                    {c.num}
                  </span>
                  <div>
                    <span style={{ fontSize: 11, fontWeight: 600, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                      {c.category}
                    </span>
                    <h3 style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "var(--fg)", letterSpacing: "-0.025em", marginBottom: 8 }}>
                      {c.title}
                    </h3>
                    <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.65, maxWidth: 560 }}>
                      {c.desc}
                    </p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 16 }}>
                    <span style={{ fontSize: 12, color: "var(--subtle)" }}>{c.year}</span>
                    <ArrowUpRight size={16} style={{ color: "var(--muted)" }} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* Blog tab */}
        {tab === "blog" && (
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }}>
              {posts.map((post, i) => (
                <motion.div key={post.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: i * 0.1 }}>
                  <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
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
                </motion.div>
              ))}
            </div>
            <div style={{ marginTop: 40, display: "flex" }}>
              <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--muted)", textDecoration: "none", fontWeight: 500 }}>
                All posts <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 640px) {
          #work > div > div > div[style*="grid-template-columns"] {
            grid-template-columns: 48px 1fr !important;
          }
          #work > div > div > div > :last-child { display: none !important; }
        }
        @media (max-width: 900px) {
          #work > div > div:last-child > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
