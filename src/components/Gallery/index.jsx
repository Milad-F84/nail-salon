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
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function Gallery() {
    const navigate = useNavigate();

  return (
    <>
      <div className="bg-[#f5eae4] mt-10 p-20">
        <h1 className="text-center font-bold text-xl md:text-3xl text-[#625e5b]">
          نمونه کارها
        </h1>
      </div>
      <div className="bg-[#f5eae4] mt-10">
        <div className="container-primary p-9">
          <div className="">
            <div className="max-w-6xl mx-auto px-4 mt-10">
              <Slider {...settings}>
                {sample.map((product) => (
                  <div key={product.id} className="p-2 min-w-[250px] max-w-[250px] bg-white rounded-xl shadow-md cursor-pointer hover:scale-105 transition duration-300">
                    <div className="bg-white shadow rounded-lg p-4 text-center">
                      <img
                        src={product.image_url}
                        alt={product.title}
                        className=" rounded-xl w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="text-center p-3">
              <button className="cursor-pointer hover:text-white duration-200 bg-[#bf998e] p-2 rounded-lg font-bold text-center" onClick={() => navigate("/Booking")}>
                رزرو آنلاین
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
