import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, Link } from "react-router-dom";
import { Fade } from "react-reveal";

import logoLight from "./assets/azam-logo-light.png";
import logoA from "./assets/azam-logo-A.png";

import "./style/style.css";

function Footer() {
  const { t, i18n } = useTranslation();

  const isTurkish = i18n.language === "tr";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <footer className="footer-bg -mt-7">
        <div className="relative mx-auto px-4 py-16 sm:px-6 lg:px-8 text-white">
          <div className="flex md:flex-row flex-col justify-center md:justify-between items-center mt-3">
            <div className="relative">
              <NavLink
                onClick={goTop}
                to="/"
                className="border flex-shrink-0 flex items-center justify-center"
              >
                <Fade bottom>
                  <img
                    className="w-40 relative z-[2] mb-4 md:mb-0"
                    src={logoLight}
                    alt="AzamLogo"
                  />
                </Fade>
              </NavLink>
              <img
                src={logoA}
                alt="AzamLogoA"
                className="absolute w-36 -top-14 opacity-20 select-none"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <Fade bottom cascade>
                <ul className="flex items-center justify-center relative z-[10] gap-4 md:text-2xl footer-items">
                  <li className="footer-item">
                    <NavLink to="/">{t("NavbarHome")}</NavLink>
                  </li>
                  <li className="footer-item">
                    <NavLink to="/Hakkımızda">{t("NavbarAbout")}</NavLink>
                  </li>
                  <li className="footer-item relative group">
                    <NavLink onClick={toggleMenu} to="/Ürünlerimiz">
                      {t("NavbarProducts")}
                    </NavLink>
                  </li>
                  <li className="footer-item">
                    <NavLink to="/İletişim">{t("NavbarContact")}</NavLink>
                  </li>
                </ul>
              </Fade>
              <Fade bottom cascade>
                <div className="flex items-center md:flex-row flex-col justify-center gap-5 mt-4">
                  <div className="tel-no flex gap-3 justify-center items-center">
                    <a
                      className="hover:text-red-500 transition-all duration-300 flex items-center justify-center gap-1"
                      href="tel:+903622648999"
                      style={{
                        fontFamily: "Gilroy-Light",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-phone-call"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                      <span>
                        +90 362{" "}
                        <span
                          style={{
                            fontFamily: "Gilroy-SemiBold",
                          }}
                        >
                          264 89 99
                        </span>{" "}
                      </span>
                    </a>
                    <span className="ml-1">|</span>
                    <a
                      className="hover:text-red-500 transition-all duration-300 flex items-center justify-center gap-1"
                      href="tel:+905308778055"
                      style={{
                        fontFamily: "Gilroy-Light",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-phone-call"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                      <span>
                        +90 530{" "}
                        <span
                          style={{
                            fontFamily: "Gilroy-SemiBold",
                          }}
                        >
                          877 80 55
                        </span>
                      </span>
                    </a>
                  </div>
                  <div
                    style={{
                      fontFamily: "Gilroy-Light",
                    }}
                    className="info-mail"
                  >
                    <a
                      className="hover:text-red-500 transition-all duration-300 flex items-center justify-center gap-1"
                      href="mailto:info@azamisi.com.tr"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-mail"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                        <path d="M3 7l9 6l9 -6"></path>
                      </svg>
                      <span>
                        info@
                        <span
                          style={{
                            fontFamily: "Gilroy-SemiBold",
                          }}
                        >
                          azamisi
                        </span>
                        .com.tr
                      </span>
                    </a>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </footer>
      <div className="flex text-white bg-[#161715] justify-between items-center">
        <p
          className="text-left pl-5 text-sm  selection:bg-yellow-600 selection:text-blue-700"
          style={{ fontFamily: "Gilroy-Light" }}
        >
          {isTurkish ? (
            <>
              &copy;
              {new Date().getFullYear()} AzamTX. Her hakkı saklıdır.{" "}
              <Link
                className="text-white hover:underline"
                to="https://ahmetkemal.dev"
                target="_blank"
                style={{ fontFamily: "Gilroy-Bold" }}
              >
                AKT
              </Link>{" "}
              tarafından tasarlandı.
            </>
          ) : (
            <p style={{ fontFamily: "Gilroy-Light" }}>
              &copy; {new Date().getFullYear()} AzamTX. All Rights Reserved.
              Designed By{" "}
              <Link
                className="text-white hover:underline"
                to="https://ahmetkemal.dev"
                target="_blank"
                style={{ fontFamily: "Gilroy-Bold" }}
              >
                AKT
              </Link>
            </p>
          )}
        </p>
      </div>
    </>
  );
}

export default Footer;
