/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { useTranslation } from "react-i18next";

import "./style/mobile-menu.css";
import { Fade } from "react-reveal";

export default function MobileNavbar() {
  const { t, i18n } = useTranslation();
  const [toggleMenu, SettoggleMenu] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "tr" ? "en" : "tr";
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };
  const flagImage =
    currentLanguage === "tr"
      ? "https://i.hizliresim.com/he7t4iy.png"
      : "https://i.hizliresim.com/5fe14h3.png";

  const toggle = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    SettoggleMenu(!toggleMenu);
  };

  const handleRefreshPage = () => {
    window.location.reload(); // Sayfayı yenile
    window.location.href = "/"; // Ana sayfaya yönlendir
  };
  const toggleClass = `hamburger-menu mr-4 ${toggleMenu ? "active" : ""} `;
  const menubarClass = `h-screen flex justify-center items-center w-2/3 bg-white bg-black bg-opacity-30 backdrop-blur shadow-lg rounded-lg  z-10 overflow-hidden fixed bottom-0 top-0 left-0 transition-all duration-300  ${
    toggleMenu ? "translate-x-0" : "-translate-x-[500px]"
  }`;

  return (
    <>
      <nav className="md:hidden block relative z-20 mobilebg">
        <div className="flex justify-between items-center bg-transparent shadow-sm fixed top-0 left-0 right-0 ">
          <NavLink
            to="/"
            className="border flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8"
          >
            <img
              className="h-16"
              // src="https://i.hizliresim.com/ifwa0ei.png"
              src="https://i.hizliresim.com/l70khpo.png"
              alt=""
            />
          </NavLink>

          <div className="flex flex-row gap-4 items-center">
            <div
              className="border flex items-center px-2 lg:px-6 xl:px-8 ab"
              onClick={handleRefreshPage}
            >
              <button onClick={toggleLanguage}>
                <img
                  src={flagImage}
                  alt={currentLanguage === "tr" ? "EN" : "TR"}
                  className="mr-2 w-6 h-6"
                />
              </button>
            </div>
            <div
              className={toggleClass}
              onClick={() => {
                SettoggleMenu(!toggleMenu);
              }}
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
        <div className={menubarClass}>
          <NavLink
            onClick={toggle}
            to="/"
            className="border flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8 absolute top-0 left-0 drop-shadow-sm "
          >
            <Fade top>
              <img
                className="h-16"
                // src="https://i.hizliresim.com/ifwa0ei.png"
                src="https://i.hizliresim.com/l70khpo.png"
                alt=""
              />
            </Fade>
          </NavLink>
          <Fade left cascade>
            <nav
              className="flex flex-col justify-center items-center gap-10 text-center w-full mobile-nav-items"
              style={{ fontFamily: "Gilroy-Medium" }}
            >
              <NavLink
                onClick={toggle}
                to="/"
                className="text-3xl font-bold  transition-all duration-300 "
              >
                <span className="mobile-nav"> {t("NavbarHome")}</span>
              </NavLink>
              <NavLink
                onClick={toggle}
                to={t("NavbarAbout")}
                className="text-3xl font-bold  transition-all duration-300 "
              >
                <span className="mobile-nav"> {t("NavbarAbout")}</span>
              </NavLink>
              <NavLink
                onClick={toggle}
                to={t("NavbarProducts")}
                className="text-3xl flex-col"
              >
                <span className="mobile-nav"> {t("NavbarProducts")}</span>
              </NavLink>
              <NavLink
                onClick={toggle}
                to={t("NavbarContact")}
                className="text-3xl font-bold  transition-all duration-300 "
              >
                <span className="mobile-nav"> {t("NavbarContact")}</span>
              </NavLink>
            </nav>
          </Fade>
        </div>
      </nav>
    </>
  );
}
