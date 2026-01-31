import { motion } from "framer-motion";
import "../experience.css";
import onboardingImage from "../../../assets/experience/1.jpg";

export default function OnboardingSection() {
  return (
    <motion.section
      className="experience-section soft"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="experience-container experience-split reverse">
        <div className="experience-visual center">
          <img
            src={onboardingImage}
            alt="Client onboarding workflow"
          />
        </div>

        <div>
          <h3 className="experience-subtitle">
            Structured Client Onboarding
          </h3>

          <p className="experience-text">
            Guided onboarding experiences ensure clean data intake,
            intelligent validation, and faster operational readiness
            without manual friction.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
