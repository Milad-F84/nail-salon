import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (name) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="bg-[#bf998e]">
        <div className="flex justify-between items-center container-primary p-3">
          <div className="md:hidden block">
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 cursor-pointer"
            >
              <MenuIcon fontSize="large" />
            </button>

            {/* منوی باز شده */}
            {open && (
              <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-4 z-50">
                {/* دکمه بستن */}
                <div className="flex justify-end">
                  <button
                    onClick={() => setOpen(false)}
                    className="cursor-pointer"
                  >
                    <CloseIcon />
                  </button>
                </div>

                {/* جستجو */}
                <div className="border p-2 mt-4 flex items-center justify-between">
                  <input
                    type="text"
                    placeholder="اینجا جستجو کنید"
                    className="outline-none text-right flex-1"
                  />
                  <SearchIcon />
                </div>

                <div className="flex justify-between my-4 gap-2">
                  <button className="border px-4 py-1 rounded-md cursor-pointer">
                    منو
                  </button>
                  <button className="border px-4 py-1 rounded-md cursor-pointer">
                    دسته
                  </button>
                </div>

                <ul className="text-right space-y-3">
                  {["خانه", "رزرو آنلاین", "وبلاگ", "ارتباط با ما"].map((item) => (
                    <li key={item}>
                      <div
                        className="flex justify-between items-center cursor-pointer border-b pb-1"
                        onClick={() => toggleSubmenu(item)}
                      >
                        <span>{item}</span>
                        <KeyboardArrowDownIcon fontSize="small" />
                      </div>
                      {openSubmenu === item && (
                        <ul className="pr-4 text-sm text-gray-600 mt-1 space-y-1">
                          <li>زیرمنوی ۱</li>
                          <li>زیرمنوی ۲</li>
                        </ul>
                      )}
                    </li>
                  ))}
                  <li
                    className="cursor-pointer"
                    onClick={() => navigate("/login")}
                  >
                    ورود به حساب کاربری
                  </li>
                </ul>

                <div className="border rounded-xl p-2 mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">پشتیبانی ۲۴/۷</p>
                    <p className="font-bold">+۹۴۰ ۱۲۳ ۴۵۶۷ ۸۹۴</p>
                  </div>
                  <SupportAgentIcon />
                </div>
              </div>
            )}
          </div>
          <div className="hidden md:flex justify-between items-center gap-8">
            <p className="cursor-pointer text-lg hover:text-[#921A40] text-black duration-200">
              صفحه اصلی
            </p>
            <p className="cursor-pointer text-lg hover:text-[#921A40] text-black duration-200" onClick={() => navigate("/Booking")}>
              رزرو آنلاین
            </p>
            <p className="cursor-pointer text-lg hover:text-[#921A40] text-black duration-200" onClick={() => navigate("/Blog")}>
              وبلاگ
            </p>
            <p className="cursor-pointer text-lg hover:text-[#921A40] text-black duration-200" onClick={() => navigate("/Contact")}>
              ارتباط با ما
            </p>
          </div>
          <div>
            <img className="w-24" src="\images\logo-no-bg.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
