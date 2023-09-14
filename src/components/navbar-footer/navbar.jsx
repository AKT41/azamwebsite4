/* eslint-disable react/jsx-no-duplicate-props */
import React, { useRef, useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./style/style.css";

import logoLight from "./assets/azam-logo-light.png";

function Navbar() {
  const { t, i18n } = useTranslation();

  const [position, setPosition] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "tr" ? "en" : "tr";
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };
  // const extraWidth = window.location.pathname === "/Ürünlerimiz" ? 20 : 0;

  const clickHandle = (e) => {
    const { top, width, height } = e.target.getBoundingClientRect();
    const left = e.target.offsetLeft;
    setPosition({
      left,
      top,
      width,
      height,
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const ref = useRef();

  useEffect(() => {
    const el = ref.current.querySelector(".active");
    const { top, width, height } = el.getBoundingClientRect();
    const left = el.offsetLeft;
    setPosition({
      left,
      top,
      width,
      height,
    });
  }, []);

  const flagImage =
    currentLanguage === "tr"
      ? "https://i.hizliresim.com/he7t4iy.png"
      : "https://i.hizliresim.com/5fe14h3.png";

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scrollTo");

    if (scrollTo) {
      // scrollTo değeri mevcutsa, ilgili id'ye gitmek için JavaScript kullanın
      const element = document.getElementById(scrollTo);
      if (element) {
        const yOffset = -100; // İstenen yerden biraz yukarı kaydırmak için bir yOffset ekleyebilirsiniz
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location.search]);

  return (
    <>
      <nav className="md:block hidden nav-shadow">
        <div className="nav-style max-w-7xl mx-auto absolute top-10 right-0 left-0 z-10 md:flex hidden justify-between items-center">
          <div className="-mb-1">
            <Link to="/" className="logo">
              <img src={logoLight} alt="logo" className="w-40" />
            </Link>
          </div>
          <div className="pb-4">
            <ul
              className="text-white flex items-center text-[1.37rem] gap-12 relative nav-list"
              ref={ref}
            >
              {Object.values(position).length > 0 && (
                <div
                  className="divider"
                  style={{
                    "--left": position.left + "px",
                    "--top": position.top + "px",
                    "--width": position.width + "px",
                    "--height": position.height + "px",
                  }}
                />
              )}
              <li>
                {" "}
                <NavLink onClick={clickHandle} to="/" className="nav-item">
                  {t("NavbarHome")}
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink
                  onClick={clickHandle}
                  to="/Hakkımızda"
                  className="nav-item"
                >
                  {t("NavbarAbout")}
                </NavLink>
              </li>
              <li className="group">
                {" "}
                <NavLink
                  onClick={clickHandle}
                  to="/ürünlerimiz"
                  className="nav-item flex items-center justify-center gap-1 relati ve"
                >
                  <span>{t("NavbarProducts")}</span>
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink
                  onClick={clickHandle}
                  to="/İletişim"
                  className="nav-item"
                >
                  {t("NavbarContact")}
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="pb-4 flex items-center justify-center gap-4">
            <div className="relative group" onClick={toggleLanguage}>
              <img
                src={flagImage}
                alt={currentLanguage === "tr" ? "EN" : "TR"}
                className="mr-2 w-5 h-5 cursor-pointer"
              />
            </div>
            <a
              className="text-white text-[1.37rem] btn-graident py-2 px-5 rounded-full transition-all duration-300 outline-outward"
              href="/?scrollTo=contactHome"
              // onClick={scrollToContact} // Tıklamada scrollToContact fonksiyonunu çağırın
            >
              {t("NavbarGetOffer")}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
