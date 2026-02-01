import { motion } from "framer-motion";
import "../experience.css";
import overviewImage from "../../../assets/experience/2.jpg";

export default function OverviewSection() {
  return (
    <motion.section
      className="experience-section light"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="experience-container experience-split">
        <div>
          <motion.h2
            className="experience-title"
            initial={{ fontSize: "56px", letterSpacing: "-0.02em" }}
            whileInView={{ fontSize: "88px", letterSpacing: "-0.04em" }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
          >
            PEBBLES
          </motion.h2>

          <p className="experience-text">
            A modern AI-powered operations platform designed to streamline
            onboarding, invoicing, compliance, and financial workflows with
            clarity and confidence.
          </p>
        </div>

        <div className="experience-visual center">
          <img
            src={overviewImage}
            alt="PEBBLES platform overview"
          />
        </div>
      </div>
    </motion.section>
  );
}
