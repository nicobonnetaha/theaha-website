"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} style={{ padding: "140px 32px", borderTop: "1px solid var(--border)", background: "var(--blue-dim)", overflow: "hidden", position: "relative" }}>

      {/* Floating illustration top-right */}
      <motion.div
        initial={{ opacity: 0, x: 60, y: -20 }}
        animate={inView ? { opacity: 0.18, x: 0, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: "absolute", right: -40, top: "50%", transform: "translateY(-50%)", width: 340, pointerEvents: "none" }}
      >
        <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
          <Image src="/images/DevXisinourDNA.png" alt="" width={340} height={340} style={{ width: "100%", height: "auto" }} />
        </motion.div>
      </motion.div>

      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative" }}>

        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="tag"
          style={{ marginBottom: 24, display: "block", justifyContent: "center" }}
        >
          Get started
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "var(--fg)", lineHeight: 1.05, marginBottom: 24 }}
        >
          <span style={{ fontFamily: "var(--font-spectral), Georgia, serif" }}>Ready to build</span><br />
          something lasting?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.75, maxWidth: 480, margin: "0 auto 48px" }}
        >
          Let&apos;s talk about your blockchain project. We&apos;ll find the right approach and ship fast.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}
        >
          <a href="https://calendly.com/d/crt8-mrr-zy9/chat-with-aha-labs-30min" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Get a Demo <ArrowRight size={14} />
          </a>
          <a href="https://github.com/theahacompany" target="_blank" rel="noopener noreferrer" className="btn-ghost">
            View GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
