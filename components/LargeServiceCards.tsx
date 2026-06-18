"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    num: "01",
    title: "Smart Contract Development",
    desc: "We build robust, production-ready smart contracts for some of the biggest financial institutions on Stellar.",
    image: "/images/SmartContractDeveloppment.png",
    bg: "#F4D5FF",
    fg: "#490063",
    tag: "#e8b8ff",
  },
  {
    num: "02",
    title: "Smart Contract Tooling",
    desc: "We pioneer standard-redefining tools at all levels of the Stellar software stack, making it easier to build, test, and ship dapps.",
    image: "/images/SmartContractTooling.png",
    bg: "#D1E3FF",
    fg: "#1A3B60",
    tag: "#aeceff",
  },
  {
    num: "03",
    title: "Holistic Developer Experience Optimization",
    desc: "From world-class pedagogy to the deepest nuts & bolts of your stack, we help developers find the spark, the a-ha, the joy in your DevX, because better developer experience means better adoption.",
    image: "/images/HolisticDeveloperExperienceOptimization.png",
    bg: "#F1E6E7",
    fg: "#534747",
    tag: "#ddc8c9",
  },
];

export default function LargeServiceCards() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} style={{ padding: "0 32px 120px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 40 }}
        >
          <span className="tag">Your End-to-End Blockchain Partner</span>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {cards.map((card, i) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: card.bg,
                borderRadius: 20,
                padding: "56px 64px",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 40,
                alignItems: "center",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                  <span style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    padding: "4px 12px",
                    borderRadius: 40,
                    background: card.tag,
                    color: card.fg,
                  }}>
                    {card.num}
                  </span>
                </div>

                <h3 style={{
                  fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  color: card.fg,
                  lineHeight: 1.1,
                  marginBottom: 20,
                  maxWidth: 480,
                }}>
                  {card.title}
                </h3>

                <p style={{
                  fontSize: 15,
                  color: card.fg,
                  opacity: 0.72,
                  lineHeight: 1.75,
                  maxWidth: 520,
                }}>
                  {card.desc}
                </p>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ flexShrink: 0 }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={260}
                  height={260}
                  style={{ width: 260, height: 260, objectFit: "contain" }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #large-cards > div > div > div {
            grid-template-columns: 1fr !important;
            padding: 40px 28px !important;
          }
          #large-cards > div > div > div > div:last-child {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
