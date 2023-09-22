import React from "react";
import { motion } from "framer-motion";

import ContactForm from "../../components/contact";
import { Helmet } from "react-helmet";
import { t } from "i18next";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>{t("NavbarContact")} | Azam Tx</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://i.hizliresim.com/rzffzme.jpg"
        />
      </Helmet>
      <div className="flex items-center justify-center h-screen">
        <ContactForm />
      </div>
    </motion.div>
  );
}
export default Contact;
