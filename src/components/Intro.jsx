import React from "react";
import bgImg from "../assets/img/bgImg4.png";
import arrow from "../assets/icons/arrowIcon.svg";
import { FaInstagram, FaFacebookF, FaTelegramPlane } from "react-icons/fa";

const Intro = () => {
  return (
    <>
      <div className="w-full h-full overflow-hidden">
        <div
          className="w-full bg-cover bg-center h-full object-cover bg-no-repeat overflow-hidden flex flex-col items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 70%, #000), url(${bgImg})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="w-[700px] h-[261px] relative z-10 p-10">
            <div className="flex text-[#FFC178] items-center">
              <div className="w-13 h-[1px] bg-[#FFC178] "></div>
              <p className="font-bold text-[18px] ml-3">
                Иcследуй красоту природы
              </p>
            </div>
            <div className="text-white">
              <div className="text-[70px]">Открой</div>
              <div className="text-[50px] w-[800px]">
                Для себя прекрасную Германию
              </div>
            </div>
            <button
              onClick={() => {
                document
                  .getElementById("second")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="animate-bounce mt-20 cursor-pointer"
            >
              <div className="text-white flex items-center ml-56">
                <p>Прокрутить вниз</p>
                <img src={arrow} alt="" />
              </div>
            </button>
          </div>
          <div className="fixed left-0 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-4 px-2 z-50">
            <div className="text-white text-sm [writing-mode:vertical-rl] pb-1">
              Подпишись на нас
            </div>
            <div className="ml-2 flex flex-col items-center justify-around h-23">
              <a
                href="https://t.me/abjukm"
                target="_blank"
                className="text-white hover:text-blue-400 hover:scale-120"
              >
                <FaTelegramPlane />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="text-white hover:text-pink-500 hover:scale-120 "
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                className="text-white hover:text-blue-600 hover:scale-120 "
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
