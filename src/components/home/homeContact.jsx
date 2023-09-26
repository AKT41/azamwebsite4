import React from "react";
import { useTranslation } from "react-i18next";
import { Fade } from "react-reveal";
import { TextField } from "@mui/material";

import "./style/homeContact.css";

function HomeContact(props) {
  const { t } = useTranslation();
  const contactFormId = props.id;

  return (
    <>
      <div className="home-contact-bg h-screen w-full text-white flex flex-col items-center justify-center">
        <Fade bottom cascade>
          {" "}
          <div
            className="flex justify-start items-end md:max-w-screen-lg md:w-full md:ml-10 md:mb-7 mb-3 md:gap-3 gap-2 uppercase mt-10"
            style={{
              fontFamily: "Gilroy-Bold",
            }}
          >
            <p className="md:text-7xl text-5xl">
              {t("HomeContactFormTitle-1")}
            </p>
            <p id={contactFormId} className="md:pb-1 md:text-5xl text-3xl">
              {t("HomeContactFormTitle-2")}
            </p>
          </div>
        </Fade>
        <Fade bottom cascade>
          {" "}
          <form
            className="relative mx-7 md:mx-auto py-12 px-7 w-full md:w-[1000px] flex flex-col md:gap-6 gap-4 rounded-3xl"
            style={{
              fontFamily: "Gilroy-Regular",

              background:
                "radial-gradient(circle farthest-corner at 50% 50%, rgba(145, 7, 0, 1) 0%, rgba(98, 28, 18, .4) 100%)",
            }}
          >
            <div className="form-input w-full flex md:gap-16 gap-5 flex-col md:flex-row justify-center items-start">
              <TextField
                id="standard-basic"
                label={t("HomeContact-Name")}
                variant="standard"
                className="w-[95%] md:w-[45%]"
                spellCheck="false"
                sx={{
                  "& label.Mui-focused": {
                    color: "white",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "white",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
              />
              <TextField
                id="standard-basic"
                label={t("HomeContact-Compony")}
                variant="standard"
                className="w-[95%] md:w-[45%]"
                spellCheck="false"
                sx={{
                  "& label.Mui-focused": {
                    color: "white",
                  },
                  "& css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                    borderBottom: "white",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "white",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
              />
            </div>
            <div className="form-input w-full flex md:gap-16 gap-5 flex-col md:flex-row justify-center items-start">
              <TextField
                id="standard-basic"
                label={t("HomeContact-Email")}
                variant="standard"
                className="w-[95%] md:w-[45%]"
                spellCheck="false"
                sx={{
                  "& label.Mui-focused": {
                    color: "white",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "white",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
              />
              <TextField
                id="standard-basic"
                label={t("HomeContact-Phone")}
                variant="standard"
                className="w-[95%] md:w-[45%]"
                spellCheck="false"
                sx={{
                  "& label.Mui-focused": {
                    color: "white",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "white",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
              />
            </div>
            <div className="form-input w-full flex justify-center items-start flex-col mt-4 md:mt-0">
              {" "}
              <label htmlFor="message" className="text-white md:pl-3">
                {t("HomeContact-Message")}
              </label>
              <textarea
                id="message"
                className="form-input w-[98%] h-[60px] md:h-[100px] text-xl py-2 md:mx-3 bg-transparent placeholder:text-white border-b border-solid border-gray-200 border-opacity-70 focus:border-b-2 focus:border-white focus:border-opacity-100 resize-none focus:outline-none"
                style={{ fontFamily: "Gilroy-Regular" }}
                spellCheck="false"
              ></textarea>
            </div>
            <div className="form-input w-full flex justify-center items-center md:items-end flex-col md:pr-2 mt-4 md:mt-0">
              <button
                className="w-full md:w-[250px] border border-solid hover:bg-white text-white hover:text-red-500 py-2 transition-all duration-300 rounded-md text-xl font-semibold"
                style={{ fontFamily: "Gilroy-Bold" }}
              >
                {t("HomeContact-Send")}
              </button>
            </div>
          </form>
        </Fade>
      </div>
    </>
  );
}
export default HomeContact;
