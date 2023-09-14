import React from "react";
import AboutFirst from "../../components/about";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AboutFirst />
    </motion.div>
  );
}
export default About;
