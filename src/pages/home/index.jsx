import HomeTop from "../../components/home";
import HomeMiddle from "../../components/home/homeMiddle.jsx";
import HomeContact from "../../components/home/homeContact";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HomeTop />
      <HomeMiddle />
      <HomeContact id="contactHome" />
    </motion.div>
  );
}
