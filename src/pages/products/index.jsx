import React from "react";
import { Helmet } from "react-helmet";
import { t } from "i18next";

import Products from "../../components/products";


function Product() {
  return (
    <>
      <Helmet>
        <title>{t("NavbarProducts")} | Azam Tx</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://i.hizliresim.com/rzffzme.jpg"
        />
      </Helmet>
      <Products />
    </>
  );
}
export default Product;
