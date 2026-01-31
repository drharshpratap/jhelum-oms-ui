import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import "../experience.css";

export default function VideoSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      className="experience-section light"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="experience-container">
        <h3 className="experience-subtitle">
          Unified AI Experience
        </h3>

        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          className="experience-video"
        >
          <source
            src="/videos/dashboard-demo.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </motion.section>
  );
}
