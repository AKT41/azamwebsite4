import React from "react";
import { useTranslation } from "react-i18next";
import { Fade } from "react-reveal";

import "./style/style.css";
import ProductList from "./product-list";

export default function Products() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen">
      <div className="flex flex-col justify-center items-center h-96 bg-products">
        <Fade top>
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-800 transition-all duration-300 hover:tracking-wider mt-24 title-bg p-4 pr-6"
            style={{
              fontFamily: "Gilroy-SemiBold",
            }}
          >
            {t("HomeMiddleProductsText")}
          </h1>
        </Fade>
        <Fade top delay={200}>
          {" "}
          <p
            className="text-lg  md:text-2xl text-gray-800 transition-all duration-300 hover:tracking-wider mt-7 title-bg p-4 pr-12"
            style={{
              fontFamily: "Gilroy-SemiBold",
            }}
          >
            {t("Homebg-text1")} {t("Homebg-text2")}
          </p>
        </Fade>
      </div>
      <ProductList/>
    </div>
  );
}
