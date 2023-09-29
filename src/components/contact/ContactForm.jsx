import { TextField } from "@mui/material";
import i18next, { t } from "i18next";
import React from "react";
import { Fade } from "react-reveal";

function ContactForm() {
  const isTurkish = i18next.language === "tr";

  return (
    <section
      className="bg-white -900 w-full h-full pt-20 home-contact-bg"
      style={{ fontFamily: "Gilroy-Medium" }}
    >
      <div className="container px-6 py-12 mx-auto">
        <div className="lg:flex lg:items-center lg:-mx-6">
          <Fade left cascade>
            <div className="lg:w-2/3 lg:mx-6 flex flex-col gap-5">
              <h1
                className="text-2xl text-white capitalize  lg:text-3xl"
                style={{ fontFamily: "Gilroy-SemiBold" }}
              >
                {isTurkish ? (
                  <>
                    Daha fazla bilgi İçin <br />
                    Bizimle İletişime geçin
                  </>
                ) : (
                  <>
                    Contact us for <br /> more info
                  </>
                )}
              </h1>

              <div className="mt-6 flex flex-col md:items-start justify-center gap-7">
                <p className="flex items-center -mx-2 w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-slate-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <span className="text-white md:w-1/2 w-full leading-6">
                    Köprübaşı Mahallesi Selanik Caddesi No: 235/A Tekkeköy,
                    Samsun / TURKEY
                  </span>
                </p>

                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-slate-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>

                  <span className="mx-2 text-white truncate w-72">
                    +90 (362) 264 89 99
                  </span>
                </p>

                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-slate-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                  <span className="mx-2 text-white truncate w-72">
                    info@azamisi.com.tr
                  </span>
                </p>
              </div>

              <div className="mt-6 w-80 ">
                <h3
                  className="text-white text-xl ml-2"
                  style={{ fontFamily: "Gilroy-Light" }}
                >
                  {t("ContactFollowUs")}
                </h3>

                <div className="flex mt-2 -mx-1.5 ">
                  <a
                    className="mx-1.5 -red-400 text-gray-400 transition-colors duration-300 transform hover:text-[#1DA1F2]  hover:bg-white/70 rounded-full p-1.5"
                    href="##"
                  >
                    <svg
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z"
                        fill="currentColor"
                      />
                      <path
                        d="M7.2 9.6001H4V19.2001H7.2V9.6001Z"
                        fill="currentColor"
                      />
                      <path
                        d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>

                  <a
                    className="mx-1.5 -red-400 text-gray-400 transition-colors duration-300 transform hover:text-[#4267B2]  hover:bg-white/70 rounded-full p-1.5"
                    href="##"
                  >
                    <svg
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>

                  <a
                    className="mx-1.5 -red-400 text-gray-400 transition-colors duration-300 transform hover:text-[#E1306C]  hover:bg-white/70 rounded-full p-1.5"
                    href="##"
                  >
                    <svg
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Fade>
          <Fade left cascade>
            {" "}
            <form
              className="relative md:mx-7 py-12 px-7 mx-auto md:w-2/3 w-full flex flex-col gap-4 rounded-3xl"
              style={{
                fontFamily: "Gilroy-Regular",

                background:
                  "radial-gradient(circle farthest-corner at 50% 50%, rgba(145, 7, 0, 1) 0%, rgba(98, 28, 18, .4) 100%)",
              }}
            >
              <h2
                className="text-white text-2xl md:text-3xl text-center mb-4"
                style={{ fontFamily: "Gilroy-SemiBold" }}
              >
                {t("ContactWhatCanWeDo")}
              </h2>
              <div className="form-input w-full flex -16 gap-5 flex-col -row justify-center items-start">
                <TextField
                  id="standard-basic"
                  label={`${t("HomeContact-Name")}`}
                  variant="standard"
                  className="w-[95%] -[45%]"
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
                  required
                />
                <TextField
                  id="standard-basic"
                  label={t("HomeContact-Compony")}
                  variant="standard"
                  className="w-[95%] -[45%]"
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
              <div className="form-input w-full flex -16 gap-5 flex-col -row justify-center items-start">
                <TextField
                  id="standard-basic"
                  label={`${t("HomeContact-Email")}`}
                  variant="standard"
                  className="w-[95%] -[45%]"
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
                  required
                />
                <TextField
                  id="standard-basic"
                  label={`${t("HomeContact-Phone")}`}
                  variant="standard"
                  className="w-[95%] -[45%]"
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
              <div className="form-input w-full flex justify-center items-start flex-col mt-4 -0">
                {" "}
                <label htmlFor="message" className="text-white -3">
                  {t("HomeContact-Message")} *
                </label>
                <textarea
                  id="message"
                  className="form-input w-[98%] h-[60px] -[100px] text-xl py-2 -3 bg-transparent text-white placeholder:text-white border-b border-solid border-gray-200 border-opacity-70 focus:border-b-2 focus:border-white focus:border-opacity-100 resize-none focus:outline-none"
                  style={{ fontFamily: "Gilroy-Regular" }}
                  spellCheck="false"
                  required
                ></textarea>
              </div>
              <div className="form-input w-full flex justify-center items-center -end flex-col -2 mt-4 -0">
                <button
                  className=" w-[200px] border border-solid hover:bg-white text-white hover:text-red-500 py-2 transition-all duration-300 rounded-xl"
                  style={{ fontFamily: "Gilroy-Bold" }}
                >
                  {t("HomeContact-Send")}
                </button>
              </div>
            </form>
          </Fade>
        </div>
      </div>
    </section>
  );
}
export default ContactForm;
