import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

import "./style/style.css";

function HomeMiddle() {
  const { t } = useTranslation();
  return (
    <>
      <div className="min-h-[110vh]  relative flex flex-col justify-center text-white">
        <div className="home-middle-bg " />
        <div className="max-w-screen-xl md:mx-auto flex flex-col gap-8 -mt-10">
          {" "}
          <Fade left>
            {" "}
            <h1 className="products-title-font uppercase md:text-6xl text-5xl md:mb-8 md:mt-0 mt-12 md:text-left text-center">
              {t("HomeMiddleProductsText")}
            </h1>
          </Fade>
          <Fade bottom cascade>
            <div>
              {" "}
              <div className="cards flex items-center justify-center md:flex-row flex-col gap-6 md:gap-0">
                <div className="product-card w-[90%] mx-auto md:w-1/3">
                  <Link
                    to={`/${t("NavbarProducts")}`}
                    className="product-card-desc"
                  >
                    <div className="product-card-text items-center justify-center flex flex-col md:block">
                      <img
                        src="https://i.hizliresim.com/8jepwyw.png"
                        alt="boiler"
                        className="w-10/12 h-80 object-contain"
                      />
                      <h3
                        className="text-3xl uppercase py-4"
                        style={{ fontFamily: "Gilroy-Bold" }}
                      >
                        {" "}
                        <span>{t("ProductBoiler")}</span>
                      </h3>
                      <p
                        className="w-10/12"
                        style={{ fontFamily: "Gilroy-Medium" }}
                      >
                        {t("AboutBoilerText")}
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="product-card w-[90%] mx-auto md:w-1/3">
                  <Link
                    to={`/${t("NavbarProducts")}`}
                    className="product-card-desc"
                  >
                    <div className="product-card-text items-center  justify-center md:items-start md:justify-start flex flex-col md:flex-col-reverse ">
                      <img
                        src="https://i.hizliresim.com/6geohvf.png"
                        alt="boiler"
                        className="w-10/12 h-80 object-contain"
                      />
                      <div className="flex md:items-start md:justify-start items-center justify-center flex-col">
                        <h3
                          className="text-3xl uppercase py-4"
                          style={{ fontFamily: "Gilroy-Bold" }}
                        >
                          {" "}
                          {t("ProductCombi")}
                        </h3>
                        <p
                          className="w-10/12 pb-3"
                          style={{ fontFamily: "Gilroy-Medium" }}
                        >
                          {t("AboutBoilerText")}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="product-card w-[90%] mx-auto md:w-1/3 mb-12 md:mb-0">
                  <Link
                    to={`/${t("NavbarProducts")}`}
                    className="product-card-desc"
                  >
                    <div className="product-card-text items-center justify-center flex flex-col md:block">
                      <img
                        src="https://i.hizliresim.com/k2pm31a.png"
                        alt="boiler"
                        className="w-10/12 h-80 object-contain  "
                      />
                      <h3
                        className="text-3xl uppercase py-4"
                        style={{ fontFamily: "Gilroy-Bold" }}
                      >
                        {" "}
                        {t("ProductWaterHeaters")}
                      </h3>
                      <p
                        className="w-10/12"
                        style={{ fontFamily: "Gilroy-Medium" }}
                      >
                        {t("AboutBoilerText")}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}
export default HomeMiddle;
