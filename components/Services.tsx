"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    num: "01",
    title: "Developer Tooling",
    desc: "SDKs, scaffolding frameworks, and open-source libraries. We've built Scaffold Stellar — the standard for Stellar smart contract development.",
    image: "/images/DevXisinourDNA.png",
    alt: "DevX is in our DNA",
  },
  {
    num: "02",
    title: "Tokenization",
    desc: "Real-world asset tokenization infrastructure for equities, real estate and funds. Compliance built in from the protocol layer up.",
    image: "/images/SmartContractDeveloppment.png",
    alt: "Smart Contract Development",
  },
  {
    num: "03",
    title: "DeFi Solutions",
    desc: "Liquidity management, AMM integrations, and native DEX protocols across Stellar, XRPL and Ethereum.",
    image: "/images/SmartContractTooling.png",
    alt: "Smart Contract Tooling",
  },
  {
    num: "04",
    title: "Compliance Infrastructure",
    desc: "KYC/AML workflows, regulated asset frameworks, and audit-ready architecture for institutional clients.",
    image: "/images/HolisticDeveloperExperienceOptimization.png",
    alt: "Holistic Developer Experience",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} style={{ padding: "120px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 64, flexWrap: "wrap", gap: 16 }}
        >
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.03em", color: "var(--fg)" }}>
            What we build
          </h2>
          <span className="tag">Services</span>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 1, background: "var(--border)" }}>
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ background: "var(--bg)", padding: "40px 32px", display: "flex", flexDirection: "column", gap: 20 }}
            >
              <motion.div
                whileHover={{ scale: 1.04, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ width: 100, height: 100 }}
              >
                <Image
                  src={s.image}
                  alt={s.alt}
                  width={100}
                  height={100}
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </motion.div>

              <div>
                <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.1em", display: "block", marginBottom: 12 }}>
                  {s.num}
                </span>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--fg)", marginBottom: 10, letterSpacing: "-0.02em" }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7 }}>
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
