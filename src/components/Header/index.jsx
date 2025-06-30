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
                  <li>
                    <div
                      className="flex justify-between items-center cursor-pointer border-b pb-1"
                      onClick={() => navigate("/")}
                    >
                      <span>صفحه اصلی</span>
                    </div>
                  </li>
                  <li>
                    <div
                      className="flex justify-between items-center cursor-pointer border-b pb-1"
                      onClick={() => navigate("/Login")}
                    >
                      <span>رزرو وقت</span>
                    </div>
                  </li>
                  <li>
                    <div
                      className="flex justify-between items-center cursor-pointer border-b pb-1"
                      onClick={() => navigate("/Contact")}
                    >
                      <span>ارتباط با ما</span>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="hidden md:flex justify-between items-center gap-8">
            <p className="cursor-pointer text-lg hover:text-[#921A40] text-black duration-200" onClick={() => navigate("/")}>
              صفحه اصلی
            </p>
            <p
              className="cursor-pointer text-lg hover:text-[#921A40] text-black duration-200"
              onClick={() => navigate("/Login")}
            >
              رزرو آنلاین
            </p>
            <p
              className="cursor-pointer text-lg hover:text-[#921A40] text-black duration-200"
              onClick={() => navigate("/Contact")}
            >
              ارتباط با ما
            </p>
          </div>
          <div>
            <img className="w-28" src="\images\logo-gold-nobg.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
