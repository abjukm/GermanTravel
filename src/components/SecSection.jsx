import React from "react";
import img from "../assets/img/culture.jpg";
import arrow from "../assets/icons/arrow.svg";

const SecSection = () => {
  return (
    <>
      <div className="w-full bg-black h-screen">
        <div className="w-[70%] ml-[15%] flex justify-around items-center h-[700px]">
          <div className=" w-[400px] text-white flex flex-col justify-around h-115 p-2">
            <div className="flex text-[#FFC178] items-center">
              <div className="w-13 h-[1px] bg-[#FFC178]"></div>
              <p className="font-bold text-[18px] ml-3 uppercase">
                Культура Германии
              </p>
            </div>
            <p className="w-[450px] text-[40px] h-70 leading-10">
              Наша культура здесь известна своей точностью и крепкими
              традициями.
            </p>
            <p className="mt-[-120px] text-[14px]">
              Славится эффективностью, дисциплиной и новаторством — эти качества
              определяют наш образ жизни и взаимодействие с другими. Они лежат в
              основе наших ценностей и помогают находить общий язык с разными
              культурами.
            </p>
            <button
              onClick={() => {
                document
                  .getElementById("next-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-40 cursor-pointer"
            >
              <div className="text-[#FFC178] flex items-center justify-between mt-5 w-[140px] h-[25px] mt-[-22px] hover:scale-110">
                <p>читать дальше</p>
                <img src={arrow} alt="" className="mt-1" />
              </div>
            </button>
          </div>
          <img src={img} alt="img" className="w-[470px] h-[590px] ml-[200px]" />
        </div>
      </div>
    </>
  );
};

export default SecSection;
