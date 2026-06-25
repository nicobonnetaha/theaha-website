"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="grid-bg" style={{ minHeight: "100vh", padding: "0 32px", paddingTop: 100, overflow: "hidden", position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", minHeight: "calc(100vh - 100px)", display: "flex", alignItems: "center" }}>
        <div style={{ maxWidth: 680, paddingBottom: 60 }}>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ marginBottom: 40, display: "flex", alignItems: "center", gap: 12 }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
            <span style={{ fontSize: 12, fontWeight: 500, color: "var(--muted)", letterSpacing: "0.08em" }}>
              Since 2019
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: "clamp(3.8rem, 7vw, 7rem)", lineHeight: 1.02, letterSpacing: "-0.04em", marginBottom: 32 }}
          >
            <span style={{ display: "block", fontFamily: "var(--font-spectral), Georgia, serif", fontWeight: 400, fontStyle: "italic", color: "var(--fg)" }}>
              Blockchain
            </span>
            <span style={{ display: "block", fontFamily: "var(--font-spectral), Georgia, serif", fontWeight: 400, fontStyle: "italic", color: "var(--fg)" }}>
              Solutions
            </span>
            <span style={{ display: "block", fontFamily: "var(--font-space), sans-serif", fontWeight: 900, color: "var(--accent)" }}>
              Built to Last
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16, ease: "easeOut" }}
            style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.65, maxWidth: 520, marginBottom: 48, fontWeight: 400 }}
          >
            The Aha Company unlocks next-generation financial infrastructure for top-tier banks & institutions. From stablecoin rails to tokenized funds, we design and deploy the systems that make it real.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.24, ease: "easeOut" }}
            style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
          >
            <a href="https://calendly.com/d/crt8-mrr-zy9/chat-with-aha-labs-30min" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Get a Demo <ArrowRight size={15} />
            </a>
            <a href="#work" className="btn-ghost">View Case Studies</a>
          </motion.div>


        </div>
      </div>
    </section>
  );
}
