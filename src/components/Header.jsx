import React from "react";
import icon from "../assets/icons/coolicon.svg";

export const Header = () => {
  return (
    <>
      <div className="absolute z-20 w-[90%] h-[25px] flex mt-[64px] ml-[5%] justify-between items-center text-white">
        <h1 className="text-[20px]">WunderTrip</h1>
        <ul className="w-[430px] flex justify-between items-center text-[15px]">
          <li className="hover:scale-120 cursor-pointer">Информация</li>
          <li className="hover:scale-120 cursor-pointer">Наши предложения</li>
          <li className="hover:scale-120 cursor-pointer">Культура</li>
        </ul>
        <div className="w-[88px] flex items-center mr-6">
          <img src={icon} alt="" />
          <input
            type="text"
            placeholder="Search"
            className="placeholder: mb-1 ml-4 w-[54px] h-[23px]"
          />
        </div>
      </div>
    </>
  );
};
