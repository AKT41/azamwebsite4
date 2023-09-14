import React from "react";
import { motion } from "framer-motion";

import ContactForm from "../../components/contact";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center h-screen">
        <ContactForm />
      </div>
    </motion.div>
  );
}
export default Contact;
