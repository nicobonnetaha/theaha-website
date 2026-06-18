"use client";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} style={{ padding: "140px 32px", borderTop: "1px solid var(--border)", background: "var(--blue-dim)", overflow: "hidden" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: "clamp(2.8rem, 5.5vw, 5rem)", lineHeight: 1.05, letterSpacing: "-0.03em", color: "var(--fg)", marginBottom: 48 }}
        >
          <span style={{ fontFamily: "var(--font-spectral), Georgia, serif", fontWeight: 700 }}>
            Let&apos;s build something
          </span>
          <br />
          <span style={{ fontFamily: "var(--font-space), sans-serif", fontWeight: 900, letterSpacing: "-0.04em" }}>
            that lasts.
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}
        >
          <a href="https://calendly.com/d/crt8-mrr-zy9/chat-with-aha-labs-30min" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Get a Demo <ArrowRight size={14} />
          </a>
          <a href="mailto:hello@theaha.co" className="btn-ghost">
            hello@theaha.co
          </a>
        </motion.div>

      </div>
    </section>
  );
}
