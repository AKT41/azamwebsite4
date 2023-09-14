import React from "react";

import Products from "../../components/products";

import { motion } from "framer-motion";

function Product() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Products />
    </motion.div>
  );
}
export default Product;
