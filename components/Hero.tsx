"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// colour tokens matching the live site's editor theme
const KW  = "#c084fc"; // keywords: use, const, impl, pub fn, #[…]
const MOD = "#4ade80"; // modules / identifiers
const CMT = "#6b7280"; // comments ///
const TXT = "#e2e8f0"; // plain text
const PUN = "#94a3b8"; // punctuation { } ( ) ; :
const STR = "#fbbf24"; // macro calls / special

export default function Hero() {
  return (
    <section className="grid-bg" style={{ minHeight: "100vh", padding: "0 32px", paddingTop: 100, overflow: "hidden", position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", minHeight: "calc(100vh - 100px)", display: "flex", alignItems: "center" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", width: "100%", paddingBottom: 60 }}>

          {/* Left: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{ marginBottom: 40, display: "flex", alignItems: "center", gap: 12 }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
              <span style={{ fontSize: 12, fontWeight: 500, color: "var(--muted)", letterSpacing: "0.08em" }}>
                Trusted by Stellar Development Foundation
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: "clamp(3.2rem, 5.5vw, 5.8rem)", fontWeight: 900, lineHeight: 1.02, letterSpacing: "-0.04em", color: "var(--fg)", marginBottom: 32 }}
            >
              Blockchain<br />
              Solutions<br />
              <span style={{ color: "var(--accent)" }}>Built to Last</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.16, ease: "easeOut" }}
              style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.65, maxWidth: 480, marginBottom: 48, fontWeight: 400 }}
            >
              We bridge institutions and startups with blockchain — developer tooling, tokenization, and DeFi. Compliance-ready solutions that scale across Stellar, XRPL, Ethereum & Cosmos.
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

            <div className="line" style={{ marginTop: 64 }} />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.32 }}
              style={{ display: "flex", gap: 40, marginTop: 24, flexWrap: "wrap" }}
            >
              {["Stellar", "XRPL", "Ethereum", "Cosmos"].map((c) => (
                <span key={c} style={{ fontSize: 13, color: "var(--subtle)", fontWeight: 500, letterSpacing: "0.05em" }}>{c}</span>
              ))}
            </motion.div>
          </div>

          {/* Right: code editor card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", justifyContent: "center", position: "relative" }}
          >
            {/* Editor window */}
            <div style={{
              background: "#1c1e26",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.07)",
              padding: "0 0 24px",
              width: "100%",
              maxWidth: 500,
              boxShadow: "0 32px 80px rgba(0,0,0,0.22), 0 4px 16px rgba(0,0,0,0.14)",
              overflow: "hidden",
            }}>
              {/* Title bar */}
              <div style={{ display: "flex", alignItems: "center", gap: 7, padding: "14px 20px", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "#161720" }}>
                {["#6272a4","#50fa7b","#bd93f9"].map(c => (
                  <span key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c, display: "block" }} />
                ))}
                <span style={{ marginLeft: 10, fontSize: 11, color: "#6272a4", fontFamily: "monospace", letterSpacing: "0.04em" }}>
                  open_infrastructure.rs
                </span>
              </div>

              {/* Code */}
              <div style={{ padding: "20px 24px 0", fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: 12.5, lineHeight: 1.9 }}>
                {[
                  <><span style={{color:KW}}>use</span> <span style={{color:MOD}}>admin_sep</span><span style={{color:PUN}}>::{"{"}</span><span style={{color:MOD}}>Administratable</span><span style={{color:PUN}}>, </span><span style={{color:MOD}}>Upgradable</span><span style={{color:PUN}}>{"}"}</span><span style={{color:PUN}}>;</span></>,
                  <><span style={{color:KW}}>use</span> <span style={{color:MOD}}>stellar_registry</span><span style={{color:PUN}}>::</span><span style={{color:MOD}}>import_contract_client</span><span style={{color:PUN}}>;</span></>,
                  <><span style={{color:KW}}>const</span> <span style={{color:TXT}}>XLM</span> <span style={{color:PUN}}>= </span><span style={{color:STR}}>import_contract_client!</span><span style={{color:PUN}}>(</span><span style={{color:MOD}}>xlm</span><span style={{color:PUN}}>);</span></>,
                  <>&nbsp;</>,
                  <><span style={{color:KW}}>{"#[contractimpl]"}</span></>,
                  <><span style={{color:KW}}>impl</span> <span style={{color:MOD}}>OpenInfrastructure</span> <span style={{color:PUN}}>{"{"}</span></>,
                  <>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:CMT}}>{"/// Composable, secure Smart Contract tooling"}</span></>,
                  <>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:CMT}}>{"/// holistically considered"}</span></>,
                  <>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:KW}}>pub fn</span> <span style={{color:MOD}}>get_started</span><span style={{color:PUN}}>(</span><span style={{color:TXT}}>env</span><span style={{color:PUN}}>: &amp;</span><span style={{color:MOD}}>Env</span><span style={{color:PUN}}>, </span><span style={{color:TXT}}>who</span><span style={{color:PUN}}>: </span><span style={{color:MOD}}>Address</span><span style={{color:PUN}}>) {"{"}</span></>,
                  <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:MOD}}>Self</span><span style={{color:PUN}}>::</span><span style={{color:TXT}}>require_admin</span><span style={{color:PUN}}>(</span><span style={{color:TXT}}>env</span><span style={{color:PUN}}>);</span></>,
                  <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:MOD}}>XLM</span><span style={{color:PUN}}>::</span><span style={{color:TXT}}>transfer</span><span style={{color:PUN}}>(</span><span style={{color:MOD}}>Self</span><span style={{color:PUN}}>::</span><span style={{color:TXT}}>get_admin</span><span style={{color:PUN}}>(</span><span style={{color:TXT}}>env</span><span style={{color:PUN}}>),…</span></>,
                  <>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:PUN}}>{"}"}</span></>,
                  <><span style={{color:PUN}}>{"}"}</span></>,
                ].map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25, delay: 0.4 + i * 0.1, ease: "easeOut" }}
                    style={{ whiteSpace: "pre", minHeight: "1.9em" }}
                  >
                    {line}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quality badge */}
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "absolute",
                bottom: -16,
                right: -12,
                background: "var(--bg)",
                borderRadius: 12,
                border: "1px solid var(--border)",
                padding: "14px 18px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                minWidth: 200,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <span style={{ fontSize: 13, fontWeight: 600, fontStyle: "italic", color: "var(--fg)", fontFamily: "var(--font-spectral)" }}>Quality</span>
                <span style={{ fontSize: 13, fontWeight: 800, color: "var(--fg)", letterSpacing: "0.05em" }}>HIGH</span>
              </div>
              <div style={{ height: 6, background: "var(--border)", borderRadius: 99, overflow: "hidden" }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1.9, ease: [0.16, 1, 0.3, 1] }}
                  style={{ height: "100%", background: "#4ade80", borderRadius: 99 }}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
                <span style={{ fontSize: 10, color: "var(--subtle)" }}>0 %</span>
                <span style={{ fontSize: 10, color: "var(--subtle)" }}>100 %</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          section > div > div { grid-template-columns: 1fr !important; gap: 48px !important; }
          section > div > div > div:last-child { display: none !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>
    </section>
  );
}
