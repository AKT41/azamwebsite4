/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { useTranslation } from "react-i18next";

import "./style/mobile-menu.css";

export default function MobileNavbar() {
  const { t, i18n } = useTranslation();
  const [toggleMenu, SettoggleMenu] = useState(false);
  const [currentProduct, setCurrentProduct] = useState("");
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
    SettoggleMenu(!toggleMenu);
  };

  const toggleProductItem = () => {
    setCurrentProduct(!currentProduct);
  };

  const productitemsClass = `absolute -top-2 left-0 w-48 text-lg z-10 transition-all duration-300 mt-12 bg-slate-600 bg-opacity-70 backdrop-blur-lg shadow-lg rounded-lg p-4 ${
    currentProduct ? "translate-x-0" : "-translate-x-96"
  } `;
  const toggleClass = `hamburger-menu mr-4 ${toggleMenu ? "active" : ""} `;
  const menubarClass = `h-screen flex justify-center items-center w-2/3 bg-white bg-white bg-opacity-20 backdrop-blur shadow-lg rounded-lg  z-10 overflow-hidden fixed bottom-0 top-0 left-0 transition-all duration-300  ${
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
            <div className="border flex items-center px-2 lg:px-6 xl:px-8 ab">
              <button onClick={toggleLanguage}>
                <img
                  src={flagImage}
                  alt={currentLanguage === "tr" ? "EN" : "TR"}
                  className="mr-2 w-6 h-6"
                />
              </button>
            </div>
            <div className={toggleClass} onClick={toggle}>
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
            <img
              className="h-16"
              // src="https://i.hizliresim.com/ifwa0ei.png"
              src="https://i.hizliresim.com/l70khpo.png"
              alt=""
            />
          </NavLink>
          <nav className="flex flex-col justify-center items-center gap-4 text-white">
            <NavLink
              onClick={toggle}
              to="/"
              className="text-2xl font-bold  transition-all duration-300 underlineffect"
            >
              {t("NavbarHome")}
            </NavLink>
            <NavLink
              onClick={toggle}
              to="/Hakkımızda"
              className="text-2xl font-bold  transition-all duration-300 underlineffect"
            >
              {t("NavbarAbout")}
            </NavLink>
            <NavLink
              onClick={toggleProductItem}
              // to="/Ürünlerimiz"
              className="text-2xl flex-col font-bold relative  transition-all duration-300 underlineffect flex items-center group justify-center gap-1 products"
            >
              <div className="flex flex-row items-center justify-center gap-1">
                <span> {t("NavbarProducts")}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-down group-hover:rotate-180 group-active:rotate-180 transition-all duration-300 opacity-80"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M6 9l6 6l6 -6"></path>
                </svg>
              </div>
              <ul className={productitemsClass}>
                <li className="py-1">
                  <NavLink
                    onClick={toggle}
                    to="/Ürünlerimiz/Çelik Konstrüksiyon"
                    className="block hover:shadow-sm w-max duration-300 delay-700 hover:translate-x-1 underlineffect"
                  >
                    {t("ProductBoiler")}
                  </NavLink>
                </li>
                <li className="py-1">
                  <NavLink
                    onClick={toggle}
                    to="/Ürünlerimiz/Çelik Çatı"
                    className="block hover:shadow-sm w-max duration-300 hover:translate-x-1 underlineffect"
                  >
                    {t("ProductCombi")}
                  </NavLink>
                </li>
                <li className="py-1">
                  <NavLink
                    onClick={toggle}
                    to="/Ürünlerimiz/Çelik Çatı Kaplama"
                    className="block hover:shadow-sm w-max duration-300 hover:translate-x-1 underlineffect"
                  >
                    {t("ProductWaterHeaters")}
                  </NavLink>
                </li>
              </ul>
            </NavLink>
            <NavLink
              onClick={toggle}
              to="/İletişim"
              className="text-2xl font-bold  transition-all duration-300 underlineffect"
            >
              {t("NavbarContact")}
            </NavLink>
          </nav>
        </div>
      </nav>
    </>
  );
}
