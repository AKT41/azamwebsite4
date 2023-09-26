import HomeTop from "../../components/home";
import HomeMiddle from "../../components/home/homeMiddle.jsx";
import HomeContact from "../../components/home/homeContact";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Azam Tx</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://i.hizliresim.com/rzffzme.jpg"
        />
      </Helmet>
      <HomeTop />
      <HomeMiddle />
      <HomeContact id="contactHome" />
    </motion.div>
  );
}
