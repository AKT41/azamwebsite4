import React from "react";
import { Fade } from "react-reveal";
import { useTranslation } from "react-i18next";
import Tilt from "react-parallax-tilt";

function MissinAndVision() {
  const { t } = useTranslation();
  return (
    <>
      <div className="md:min-h-[90vh] my-20">
        <div className="max-w-screen-xl mx-auto flex items-center flex-col justify-around md:-mt-48 -mt-16">
          <div className="flex flex-col md:gap-8 md:flex-row-reverse justify-between items-center">
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
                <Fade right>
                  <img
                    className="w-full drop-shadow-xl object-contain cursor-pointer rounded-2xl overflow-hidden"
                    src="https://i.hizliresim.com/qsyim9k.png"
                    alt="r1"
                  />
                </Fade>
              </Tilt>
            </div>
            <div className="w-full">
              <h1
                className="text-4xl text-gray-900 px-4 underline-style"
                style={{ fontFamily: "Gilroy-Medium" }}
              >
                <Fade top> {t("OurMissonTitle")}</Fade>
              </h1>
              <p
                className="text-xl text-gray-800 mt-7 p-4 pr-6"
                style={{ fontFamily: "Gilroy-Light" }}
              >
                <Fade left> {t("OurMissonText")}</Fade>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:min-h-[80vh] h-full">
        <div className="max-w-screen-xl mx-auto flex items-center flex-col justify-around md:-mt-48 -mt-16">
          <div className="flex flex-col md:gap-8 md:flex-row justify-between items-center">
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
                    className="w-full drop-shadow-xl object-contain cursor-pointer "
                    src="https://i.hizliresim.com/rq32pmz.png"
                    alt="r1"
                  />
                </Fade>
              </Tilt>
            </div>
            <div className="w-full">
              <h1
                className="text-4xl text-gray-900 px-4 underline-style"
                style={{ fontFamily: "Gilroy-Medium" }}
              >
                <Fade top> {t("OurVisionTitle")}</Fade>
              </h1>
              <p
                className="text-xl text-gray-800 mt-7 p-4 pr-6"
                style={{ fontFamily: "Gilroy-Light" }}
              >
                <Fade right>
                  <span className="overflow-hidden"> {t("OurVisionText")}</span>
                </Fade>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MissinAndVision;
