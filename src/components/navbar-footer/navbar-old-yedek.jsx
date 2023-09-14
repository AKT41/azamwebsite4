<header className={headerClassName}>
  <NavLink
    to="/"
    className="border flex-shrink-0 flex items-center  justify-center px-4 lg:px-6 xl:px-8"
  >
    <img
      className="w-40 h-20 "
      src={isHomePage ? "https://i.hizliresim.com/l70khpo.png" : logoLight}
      alt=""
    />
  </NavLink>
  <nav className="header-links contents font-semibold text-base lg:text-lg">
    <ul
      className={`
            flex items-center ml-4 xl:ml-8 mr-auto ${
              isScrolled ? "text-black" : "text-white"
            }
            `}
    >
      <li className="p-3 xl:p-6">
        <NavLink className="underlineffect-f home" to="/">
          <span className="spanbefore duration-300">{t("NavbarHome")}</span>
        </NavLink>
      </li>
      <li className="p-3 xl:p-6">
        <NavLink className="underlineffect-f" to="/Hakkımızda">
          <span className="spanbefore duration-300">{t("NavbarAbout")}</span>
        </NavLink>
      </li>
      <li className="p-3 xl:p-6 relative group">
        <NavLink to="/Ürünlerimiz" className="flex items-center products">
          <span className="spanbefore duration-300 ">
            {t("NavbarProducts")}
          </span>
          <svg
            aria-hidden="true"
            focusable="false"
            data-icon="chevron-down"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="group-hover:rotate-180 group-active:rotate-180 transition-all duration-300 h-3 opacity-60 ml-2 svg-inline--fa fa-chevron-down fa-w-14 fa-7x"
          >
            <path
              fill="currentColor"
              d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"
            ></path>
          </svg>
        </NavLink>
        <ul className="absolute top-2 left-0 w-48 -translate-y-96 group-hover:translate-y-0 group-active:translate-y-0 transition-all duration-300 mt-12 bg-slate-600 text-white bg-opacity-70 backdrop-blur-lg rounded-lg p-4 ">
          <li className="p-2">
            <NavLink
              to="/Ürünlerimiz/Çelik Konstrüksiyon"
              className="block hover:shadow-sm w-max duration-300 hover:translate-x-1 underlineffect-f"
            >
              {t("ProductBoiler")}
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink
              to="/Ürünlerimiz/Çelik Çatı"
              className="block hover:shadow-sm w-max duration-300 hover:translate-x-1 underlineffect-f"
            >
              {t("ProductCombi")}
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink
              to="/Ürünlerimiz/Çelik Çatı Kaplama"
              className="block hover:shadow-sm w-max duration-300 hover:translate-x-1 underlineffect-f"
            >
              {t("ProductWaterHeaters")}
            </NavLink>
          </li>
        </ul>
      </li>
      <li className="p-3 -ml-3 xl:p-6">
        <NavLink className="underlineffect-f" to="/İletişim">
          <span className="spanbefore duration-300">{t("NavbarContact")}</span>
        </NavLink>
      </li>
    </ul>
  </nav>
  <nav className="hidden xl:contents">
    <ul
      className={`
            flex items-center mr-2 lg:mr-6 xl:mr-4 ${
              isScrolled ? "text-black" : "text-white"
            }
            `}
    >
      <li className="p-1">
        <Link
          href=""
          className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-300 hover:-translate-y-0.5"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="facebook-f"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="svg-inline--fa h-4 fa-facebook-f fa-w-10 fa-7x"
          >
            <path
              fill="currentColor"
              d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
            ></path>
          </svg>
        </Link>
      </li>
      <li className="p-1">
        <Link
          href=""
          className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-300 hover:-translate-y-0.5"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="linkedin-in"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="svg-inline--fa h-4 fa-linkedin-in fa-w-14 fa-9x"
          >
            <path
              fill="currentColor"
              d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
            ></path>
          </svg>
        </Link>
      </li>
      <li className="p-1">
        <Link
          href=""
          className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-300 hover:-translate-y-0.5"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="instagram"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="svg-inline--fa h-4 fa-instagram fa-w-14 fa-9x"
          >
            <path
              fill="currentColor"
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            ></path>
          </svg>
        </Link>
      </li>
    </ul>
  </nav>
  <div className="border flex items-center px-2 lg:px-6 xl:px-8">
    <button onClick={toggleLanguage}>
      <img
        src={flagImage}
        alt={currentLanguage === "tr" ? "EN" : "TR"}
        className="mr-2 w-5 h-5"
      />
    </button>
  </div>
</header>;
