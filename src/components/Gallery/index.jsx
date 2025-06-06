import { useEffect, useState } from "react";
import sample from "../../api/nail-sample";
import { Dialog } from "@mui/material";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  return (
    <>
      <div className="bg-[#f5eae4] mt-10 p-20">
        <h1 className="text-center font-bold text-xl md:text-3xl text-[#625e5b]">
          نمونه کارها
        </h1>
      </div>
      <div className="bg-[#f5eae4] mt-10">
        <div className="container-primary p-9">
          <div className="flex flex-col justify-center items-center">
            <div className="grid grid-cols-4 space-x-4 w-max px-4 space-y-4">
              {sample.map((item) => (
                <div key={item.id} className="min-w-[250px] max-w-[250px] bg-white rounded-xl shadow-md cursor-pointer hover:scale-105 transition duration-300">
                  <img className="rounded-xl w-full h-48 object-cover" src={item.image_url} alt={item.title} />
                </div>
              ))}
            </div>
            <div>
              <button className="cursor-pointer hover:text-white duration-200 bg-[#bf998e] p-2 rounded-lg font-bold text-center">
                رزرو آنلاین
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
