import Tilt from "react-parallax-tilt";
import { useTranslation } from "react-i18next";
import { Fade } from "react-reveal";

import "./style/style.css";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

function AboutTop() {
  const { t } = useTranslation();

  const [showText, setShowText] = useState(false);

  const toggleReadMore = () => {
    setShowText(!showText);
  };

  return (
    <>
      <div className="md:min-h-[screen]">
        <div className="flex flex-col justify-center items-center h-96 bg- red-500 bg-aboutus">
          <Fade top>
            <h1
              className="text-4xl md:text-5xl font-bold text-gray-800 transition-all duration-300 hover:tracking-wider mt-24 title-bg p-4 pr-6"
              style={{
                fontFamily: "Gilroy-SemiBold",
              }}
            >
              {t("NavbarAbout")}
            </h1>
          </Fade>
          <Fade top delay={200}>
            {" "}
            <p
              className="text-xl md:text-2xl text-gray-800 transition-all duration-300 hover:tracking-wider mt-7 title-bg p-4 pr-8"
              style={{
                fontFamily: "Gilroy-SemiBold",
              }}
            >
              {t("AboutSlogan")}
            </p>
          </Fade>
        </div>
        <div className="max-w-screen-xl mx-auto min-h-screen flex items-center flex-col justify-around md:-mt-24 -mt-16">
          <div className="flex flex-col gap-8 md:flex-row justify-between items-center h-full">
            <div className="md:w-1/2 w-8/12">
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.25}
                scale={1.05}
                glareColor="#fff"
                glarePosition="all"
              >
                <Fade left>
                  <img
                    className="w-full drop-shadow-xl object-contain cursor-pointer rounded-2xl"
                    src="https://i.hizliresim.com/6p8fbqw.png"
                    alt="r1"
                  />
                </Fade>
              </Tilt>
            </div>

            <div className="w-full h-full mb-10 md:my-40">
              <h1
                className="text-4xl text-gray-900 px-4 underline-style"
                style={{ fontFamily: "Gilroy-Medium" }}
              >
                {t("AboutUsTitle")}
              </h1>
              <p
                className="text-xl text-gray-800 mt-7 p-4 pr-6 pb-0"
                style={{ fontFamily: "Gilroy-Light" }}
              >
                {t("AboutUsText")}
              </p>
              <CSSTransition
                in={showText}
                timeout={300}
                classNames="fade"
                unmountOnExit
              >
                <div style={{ fontFamily: "Gilroy-Light" }}>
                  <p className="text-xl text-gray-800 mt-7 p-4 pr-6 pb-0">
                    {t("AboutUsText2")}
                  </p>
                  <p className="text-xl text-gray-800 mt-7 p-4 pr-6 pb-0">
                    {t("AboutUsText3")}
                  </p>
                  <p className="text-xl text-gray-800 mt-7 p-4 pr-6 pb-0">
                    {t("AboutUsText4")}
                  </p>
                </div>
              </CSSTransition>
              <p
                className="text-blue-500 cursor-pointer pl-4 pt-2"
                style={{ fontFamily: "Gilroy-Light" }}
                onClick={toggleReadMore}
              >
                {showText ? t("ShowLess") : t("ReadMore")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutTop;
