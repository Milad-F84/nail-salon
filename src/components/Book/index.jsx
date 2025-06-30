import { useState } from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

export default function Book() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `سلام من ${name} هستم و می‌خواهم برای ${service} در تاریخ ${date} وقت بگیرم.💅`;
    const phone = "989335407792";
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="max-w-4xl mx-auto py-8 px-4 flex justify-between items-center">
        <div className="">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            sx={{
              "& .MuiBreadcrumbs-li": {
                display: "flex",
                alignItems: "center",
                fontSize: "1rem",
              },
            }}
          >
            <Link
              underline="hover"
              color="inherit"
              href="/"
              sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
            >
              <HomeIcon sx={{ fontSize: 20 }} />
              خانه
            </Link>
            <Typography
              color="primary"
              sx={{ display: "flex", alignItems: "center", fontWeight: 500 }}
            >
              رزرو وقت
            </Typography>
          </Breadcrumbs>
        </div>
        <div className="flex items-center gap-1 cursor-pointer" onClick={() => navigate("/")}>
          <a className="text-sm underline">بازگشت</a>
          <ArrowBackIcon fontSize="small"/>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-10 p-4 bg-white rounded-xl shadow-md space-y-4"
      >
        <input
          type="text"
          placeholder="نام"
          value={name}
          onChange={(item) => setName(item.target.value)}
          className="w-full border p-2 rounded"
          required
        />

        <select
          value={service}
          onChange={(item) => setService(item.target.value)}
          className="w-full border p-2 rounded cursor-pointer"
          required
        >
          <option value="انتخاب خدمت">انتخاب خدمت</option>
          <option value="طراحی ناخن">طراحی ناخن</option>
          <option value="ترمیم ناخن">ترمیم ناخن</option>
          <option value="ژلیش">ژلیش</option>
        </select>

        <DatePicker
          value={date}
          onChange={setDate}
          calendar={persian}
          locale={persian_fa}
          calendarPosition="bottom-right"
          inputClass="w-full border p-2 rounded cursor-pointer"
          placeholder="تاریخ را انتخاب کنید"
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition cursor-pointer"
        >
          ارسال از طریق واتساپ
        </button>
      </form>
    </>
  );
}
