import { useEffect, useState } from "react";
import sample from "../../api/nail-sample";
import { Dialog, Slide } from "@mui/material";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1280,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
};

export default function Gallery() {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-[#f5eae4] mt-10 p-10 md:p-20">
        <h1 className="text-center font-bold text-xl md:text-3xl text-[#625e5b]">
          نمونه کارها
        </h1>
      </div>
      <div className="bg-[#f5eae4]">
        <div className="container-primary px-4 py-10">
          <div className="max-w-6xl mx-auto">
            <Slider {...settings}>
              {sample.map((product) => (
                <div
                  key={product.id}
                  className="p-2 bg-white rounded-xl shadow-md cursor-pointer hover:scale-105 transition duration-300"
                >
                  <div className="bg-white shadow rounded-lg p-4 text-center">
                    <img
                      src={product.image_url}
                      alt={product.title}
                      className="rounded-xl w-full h-48 object-cover md:h-56"
                    />
                  </div>
                </div>
              ))}
            </Slider>
            <div className="text-center p-6">
              <button
                className="cursor-pointer hover:text-white duration-200 bg-[#bf998e] px-6 py-2 rounded-lg font-bold"
                onClick={() => navigate("/Login")}
              >
                رزرو آنلاین
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
