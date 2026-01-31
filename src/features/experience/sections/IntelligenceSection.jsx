import { motion } from "framer-motion";
import "../experience.css";
import intelligenceImage from "../../../assets/experience/3.png";

export default function IntelligenceSection() {
  return (
    <motion.section
      className="experience-section soft"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="experience-container experience-split">
        <div>
          <h3 className="experience-subtitle">
            Intelligence Built Into Every Workflow
          </h3>

          <p className="experience-text">
            The PEBBLES platform embeds intelligence across documents,
            invoices, and compliance processes — enabling proactive insights
            and smarter decisions.
          </p>
        </div>

        <div className="experience-visual center">
          <img
            src={intelligenceImage}
            alt="AI intelligence layer"
          />
        </div>
      </div>
    </motion.section>
  );
}
