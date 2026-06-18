"use client";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const items = [
  {
    id: 0,
    num: "01",
    title: "We're Core Contributors",
    desc: "We don't just build on Stellar. We help build Stellar itself.",
    image: "/images/WereCoreContributors.png",
  },
  {
    id: 1,
    num: "02",
    title: "DevX is in our DNA",
    desc: "We understand how crucial developer onboarding is. It's the front door to your platform, and we make sure it works.",
    image: "/images/DevXisinourDNA.png",
  },
  {
    id: 2,
    num: "03",
    title: "Multi-Chain, No Bias",
    desc: "Ethereum, NEAR, Cosmos, Flow. We're fluent in multiple ecosystems and pick the right tools for the job.",
    image: "/images/MultiChainNoBias.png",
  },
  {
    id: 3,
    num: "04",
    title: "Artisan Mindset",
    desc: "Strong opinions, loosely held. We're collaborators, working alongside you to make your product or platform the best it can be.",
    image: "/images/ArtisanMindset.png",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  return (
    <section id="why-us" ref={ref} style={{ padding: "120px 32px", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 64, flexWrap: "wrap", gap: 16 }}
        >
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.03em", color: "var(--fg)" }}>
            The Aha Difference
          </h2>
          <span className="tag">Why Us?</span>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>

          {/* Left: interactive list */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActive(item.id)}
                style={{
                  padding: "28px 0",
                  borderBottom: "1px solid var(--border)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
                  <span style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: active === item.id ? "var(--accent)" : "var(--subtle)",
                    letterSpacing: "0.1em",
                    paddingTop: 3,
                    transition: "color 0.2s",
                    flexShrink: 0,
                  }}>
                    {item.num}
                  </span>
                  <div>
                    <motion.h3
                    layout="position"
                    style={{
                      fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                      fontWeight: 700,
                      color: active === item.id ? "var(--fg)" : "var(--muted)",
                      letterSpacing: "-0.02em",
                      transition: "color 0.2s",
                    }}>
                    {item.title}
                  </motion.h3>
                  <AnimatePresence>
                    {active === item.id && (
                      <motion.p
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7, marginTop: 12 }}
                      >
                        {item.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: illustration panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "sticky",
              top: 120,
              background: "var(--illus-bg)",
              borderRadius: 20,
              border: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 40,
              minHeight: 380,
              overflow: "hidden",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src={items[active].image}
                    alt={items[active].title}
                    width={320}
                    height={320}
                    style={{ width: 320, height: 320, objectFit: "contain" }}
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #why-us > div > div:last-child { grid-template-columns: 1fr !important; gap: 40px !important; }
          #why-us > div > div:last-child > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  );
}
