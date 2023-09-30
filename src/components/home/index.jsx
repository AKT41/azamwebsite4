import { Fade } from "react-reveal";
import { useTranslation } from "react-i18next";

import "./style/style.css";
import { Link } from "react-router-dom";

function HomeTop() {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="h-screen w-full bg-fixed bg-cover relative overflow-hidden home-main-bg"
        style={{
          backgroundImage: `url(${"https://i.hizliresim.com/avef0fr.png"})`,
          boxShadow: "0px 25px 100px rgba(0, 0, 0, 0.5)", // Gölge efekti ayarları
          transition: "box-shadow 0.3s ease-in-out", // Yumuşak geçiş efekti
        }}
      >
        <Fade left cascade>
          <div className="text-white  z-10 max-w-7xl md:mx-auto mx-4 flex flex-col items-start justify-center h-full home-text-font uppercase relative">
            <div className="home-bg-graident !left-0 md:left-[5%]" />
            <h1 className="md:text-[7rem] text-[5.5rem] tracking-[1px]">
              {t("Homebg-text1")}
            </h1>
            <h2 className="md:text-[8.5rem] text-[6.4rem] tracking-[1px]">
              {" "}
              {t("Homebg-text2")}
            </h2>
            <Link
              to={`/${t("NavbarAbout")}`}
              className="text-white mt-2 text-[1.7rem] btn-graident py-3 relative z-10 !cursor-pointer  px-4 tracking-wide rounded-full transition-all duration-300 outline-outward hover:!bg-red-600"
            >
              {t("Homebg-btn-more")}
            </Link>
          </div>
        </Fade>
      </div>
    </>
  );
}

export default HomeTop;
