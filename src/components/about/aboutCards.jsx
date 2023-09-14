import { Fade } from "react-reveal";
import dots from "./assets/dotsLine.png";

function AboutCards() {
  return (
    <div style={{ fontFamily: "Gilroy-Medium" }} className="-mt-24">
      <Fade bottom cascade>
        <div
          className="flex flex-col md:flex-row flex-wrap justify-evenly items-center gap-2 max-w-screen-xl mx-auto"
          style={{ color: "#B32518" }}
        >
          <div className="w-1/2 md:w-2/12 h-44 px-5 py-14 bg-gray-100 shadow-lg rounded-md bg-opacity-70 flex flex-col items-center justify-evenly">
            <p className="text-xl -mt-3">1000+</p>
            <img className="select-none all w-8/12" src={dots} alt="dots" />
            <p className="text-2xl -mt-3">Clients</p>
          </div>
          <div className="w-1/2 md:w-2/12 h-44 px-5 py-14 bg-gray-100 shadow-lg rounded-md bg-opacity-70 flex flex-col items-center justify-evenly">
            <p className="text-2xl">30 Years</p>
            <img className="select-none all w-8/12" src={dots} alt="dots" />
            <p className="text-2xl">Experience</p>
          </div>
          <div className="w-1/2 md:w-2/12 h-44 px-5 py-14 bg-gray-100 shadow-lg rounded-md bg-opacity-70 flex flex-col items-center justify-evenly">
            <p className="text-2xl">25</p>
            <img className="select-none all w-8/12" src={dots} alt="dots" />
            <p className="text-2xl">Employee</p>
          </div>
          <div className="w-1/2 md:w-2/12 h-44 px-5 py-14 bg-gray-100 shadow-lg rounded-md bg-opacity-70 flex flex-col items-center justify-evenly">
            <p className="text-2xl">100%</p>
            <img className="select-none all w-8/12" src={dots} alt="dots" />
            <p className="text-2xl">Quality</p>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default AboutCards;
