import { motion } from "framer-motion";
import "../experience.css";
import overviewImage from "../../../assets/experience/3.png";

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
          <h2 className="experience-title">PEBBLES</h2>
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
