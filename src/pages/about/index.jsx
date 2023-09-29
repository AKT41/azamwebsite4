import React from "react";
import AboutFirst from "../../components/about";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { t } from "i18next";

function About() {
  return (
    // <motion.div
    //   initial={{ opacity: 0, scale: 0.5 }}
    //   animate={{ opacity: 1, scale: 1 }}
    //   transition={{ duration: 0.5 }}
    // >
    <>
      <Helmet>
        <title>{t("NavbarAbout")} | Azam Tx</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://i.hizliresim.com/rzffzme.jpg"
        />
      </Helmet>
      <AboutFirst />
    </>
    // </motion.div>
  );
}
export default About;
