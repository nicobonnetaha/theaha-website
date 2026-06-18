"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "5", label: "Years building on-chain" },
  { value: "20+", label: "Projects shipped" },
  { value: "4+", label: "Chains" },
  { value: "∞", label: "Open-source code" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} style={{ padding: "120px 32px", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Text block */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, marginBottom: 72, alignItems: "start" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="tag" style={{ marginBottom: 24, display: "block" }}>Who we are</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 900, letterSpacing: "-0.03em", color: "var(--fg)", lineHeight: 1.1 }}>
              The team behind<br />your blockchain infrastructure
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            style={{ paddingTop: 8 }}
          >
            <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.75, marginBottom: 16 }}>
              We help financial institutions and fintechs design and deploy compliant blockchain infrastructure — from tokenized fund rails to stablecoin issuance and smart contract systems.
            </p>
            <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.75 }}>
              We implemented SG Forge&apos;s Euro stablecoin (EURCV) on Stellar, built tokenization infrastructure with Ripple and a Big Four consultancy, and continue to ship the developer tooling the ecosystem runs on.
            </p>
          </motion.div>
        </div>

        {/* Team photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ borderRadius: 16, overflow: "hidden", marginBottom: 1 }}
        >
          <Image
            src="/images/team.jpg"
            alt="The Aha Company team"
            width={1200}
            height={600}
            style={{ width: "100%", height: "auto", display: "block", objectFit: "cover", maxHeight: 520 }}
          />
        </motion.div>

        {/* Stats strip */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "var(--border)" }}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.35 + i * 0.08 }}
              style={{ background: "var(--bg)", padding: "32px 28px" }}
            >
              <div style={{ fontSize: "clamp(2rem, 2.8vw, 2.8rem)", fontWeight: 900, color: "var(--accent)", letterSpacing: "-0.04em", lineHeight: 1 }}>
                {s.value}
              </div>
              <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 8, lineHeight: 1.4 }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div > div:first-child { grid-template-columns: 1fr !important; gap: 24px !important; }
          #about > div > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
