import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Fade } from "react-reveal";
import Slider from "react-animated-slider";

import { productList } from "../../components/products/productsdb";

import "react-animated-slider/build/horizontal.css";
import "./style/style.css";

function ProductDetails() {
  const { slug } = useParams();
  const product = productList.products.find((p) => p.slug === slug);
  const { t } = useTranslation();

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formattedProductName =
    product.name.charAt(0).toUpperCase() + product.name.slice(1).toLowerCase();

  return (
    // <motion.div
    //   initial={{ opacity: 0, scale: 0.8 }}
    //   animate={{ opacity: 1, scale: 1 }}
    //   transition={{ duration: 0.5 }}
    // >
    <>
      <Helmet>
        <title>{product.name} | Azam Tx</title>
      </Helmet>
      <div
        className="text-gray-700 body-font overflow-hidden bg-white min-h-[100vh]"
        style={{
          fontFamily: "Gilroy-Regular",
        }}
      >
        <Fade bottom cascade>
          <div className="container px-5 md:pt-36 py-16 mx-auto">
            <nav className="mb-10 ml-14 md:block hidden w-full relative z-50">
              <ul className="flex gap-4 text-sm items-center text-gray-900 w-full">
                <li className="nav-items hover:text-gray-500 transition-all duration-200 before:py-0 before:pr-2">
                  <Link to="/">{t("NavbarHome")}</Link>
                </li>

                <li className="nav-items hover:text-gray-500 transition-all duration-200">
                  <Link to={`/${t("NavbarProducts")}`}>
                    {t("NavbarProducts")}
                  </Link>
                </li>
                <li className="nav-items hover:text-gray-500 transition-all duration-200">
                  <p className="cursor-pointer !capitalize">
                    {formattedProductName}
                  </p>
                </li>
              </ul>
            </nav>
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <Slider infinite={true}>
                {product.image.map((img) => (
                  <img
                    alt="ecommerce"
                    className="select-none object-contain object-center rounded-lg h-64"
                    src={img}
                  />
                ))}
              </Slider>
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-6">
                <h2
                  className="text-sm title-font text-gray-500 tracking-widest"
                  style={{
                    fontFamily: "Gilroy-Light",
                  }}
                >
                  {product.productCode}
                </h2>
                <h1
                  className="text-gray-900 text-3xl title-font font-medium mb-4 uppercase"
                  style={{
                    fontFamily: "Gilroy-SemiBold",
                  }}
                >
                  {product.name}
                </h1>
                <p className="mb-9">
                  <p
                    className={`leading-relaxed pb-1 ${
                      showMore ? "" : "line-clamp-[7]"
                    }`}
                  >
                    {product.description}
                  </p>
                  {product.description.length > 50 && (
                    <span
                      onClick={toggleShowMore}
                      className="text-blue-600 text-opacity-50 hover:text-opacity-100 duration-200 cursor-pointer"
                      style={{ fontFamily: "Gilroy-SemiBold" }}
                    >
                      {showMore ? `${t("ShowLess")}` : `${t("ReadMore")}`}
                    </span>
                  )}
                </p>

                <div className="flex justify-between">
                  <div>
                    <a
                      href="#technical-specifications"
                      className="flex ml-auto text-white btn-graident border-0 py-3 px-6 outline-outward capitalize"
                      style={{
                        fontFamily: "Gilroy-SemiBold",
                      }}
                    >
                      {t("ProductTechnicalSpecifications")}
                    </a>
                  </div>{" "}
                  <div>
                    <button
                      className="flex ml-auto text-white btn-graident-wp border-0 py-3 px-6 outline-outward outline-outward-wp"
                      style={{
                        fontFamily: "Gilroy-SemiBold",
                      }}
                    >
                      {t("GetInformation")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <div id="technical-specifications">
        <div className="min-h-screen max-w-screen-xl px-5 md:py-16 py-8 mx-auto">
          <h2
            className="text-gray-900 text-3xl title-font font-medium mb-4 uppercase !text-center underline-style underline-style-ts"
            style={{
              fontFamily: "Gilroy-SemiBold",
            }}
          >
            <Fade bottom>{t("ProductTechnicalSpecifications")}</Fade>
          </h2>
          <Fade bottom cascade>
            <ul className="list-disc list-inside ml-5 flex flex-col">
              {product.technicalSpecificationsList.map((item) => (
                <li className="text-gray-700 pb-2 text-lg">{item}</li>
              ))}
            </ul>
          </Fade>
        </div>
      </div>
    </>
    // </motion.div>
  );
}

export default ProductDetails;
