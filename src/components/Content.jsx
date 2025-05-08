import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import berlin from "/berlin.png";
import munhen from "../assets/img/contentImg/munhen.png";
import gamburg from "../assets/img/contentImg/gamburg.png";
import frankfurt from "../assets/img/contentImg/frankfurt.png";
import arrow from "../assets/icons/arrow.svg";
import Slider from "react-slick";

export const slides = [
  {
    image: berlin,
    title: "БЕРЛИН",
    opisanie: "Пусть стены говорят, а мы напишем новые истории!",
    text: "Прогуливаясь по эхо истории, ты услышишь, как каждый кирпич Берлинской стены шепчет о свободе. От ярких граффити до вечных музеев — Берлин приглашает пройти между эпохами.",
  },
  {
    image: munhen,
    title: "МЮНХЕН",
    opisanie: "Вдохни Альпы — и шагни в традиции!",
    text: "Почувствуй баварский дух среди старинных улиц Мюнхена, насладись тишиной Английского сада или подними бокал на Октоберфесте. Между горами и барочной красотой живёт настоящая гармония.",
  },
  {
    image: gamburg,
    title: "ГАМБУРГ",
    opisanie: "Следуй за волнами — твоё путешествие начинается!",
    text: "Пусть течение Эльбы проведёт тебя сквозь огни гавани и музыку улиц. Здесь звучат истории моряков, оживают старые склады, и поднимается современный HafenCity. Город у моря ждёт тебя.",
  },
  {
    image: frankfurt,
    title: "ФРАНКФУРТ",
    opisanie: "Между стеклом и наследием — поднимемся вместе!",
    text: "Франкфурт тянется к небу своими башнями, но хранит уют старины в узких улочках. Здесь встречаются бизнес и вдохновение, будущее и покой — на берегах реки Майн.",
  },
];

const Content = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="bg-black h-screen w-screen overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div className="w-full h-full relative" key={idx}>
            <div
              className="relative w-[70%] ml-[15%] h-[600px] inset-0 bg-cover bg-center mt-20"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 text-center text-white px-4">
                <p className="text-[30px] tracking-[4px] mb-2 text-[#FFC179]">
                  {slide.title}
                </p>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 max-w-2xl">
                  {slide.opisanie}
                </h2>
                <p className="text-sm md:text-base max-w-3xl mb-6">
                  {slide.text}
                </p>
                <div className="text-[#FFC178] flex items-center justify-between mt-5 w-[140px] h-[25px] cursor-pointer">
                  <p>читать дальше</p>
                  <img src={arrow} alt="" className="mt-1" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Content;
