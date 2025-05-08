import React from "react";
import img from "../assets/img/sectionImg.png";
import arrow from "../assets/icons/sectionArrow.svg";

export const Section = () => {
  return (
    <>
      <div className="w-full bg-black">
        <div className="w-[70%] ml-[15%] flex justify-around items-center h-[700px]">
          <img src={img} alt="img" className="w-[500px] h-[620px]" />
          <div className="text-white ml-[150px] flex flex-col justify-around h-115">
            <div className="flex text-[#FFC178] items-center">
              <div className="w-13 h-[1px] bg-[#FFC178]"></div>
              <p className="font-bold text-[18px] ml-3 uppercase">
                Бранденбургские Ворота
              </p>
            </div>
            <p className="text-[46px] h-60">
              Вы уже видели Бранденбургские ворота?
            </p>
            <p>
              Вы будете впечатлены, оказавшись у подножия легендарных
              Бранденбургских ворот — символа единства, свободы и исторической
              памяти Германии. Расположенные в самом сердце Берлина, эти
              неоклассические ворота не просто архитектурное чудо, а живая часть
              истории Европы. Прогуляйтесь по площади Паризер Плац, откройте для
              себя музеи поблизости и прочувствуйте атмосферу города, в котором
              прошлое встречается с будущим.
            </p>
            <button
              onClick={() => {
                document
                  .getElementById("next-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-40 cursor-pointer"
            >
              <div className="text-[#FFC178] flex items-center justify-between mt-5 w-[140px] h-[25px]">
                <p>читать дальше</p>
                <img src={arrow} alt="" className="mt-1" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
