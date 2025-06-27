import { useState } from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function Book() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `سلام من ${name} هستم. میخواهم برای ${service} در تاریخ ${date} یک وقت بگیرم .💅`;
    const phone = "989335407792";
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="mb-6">
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
          className="w-full border p-2 rounded"
          required
        >
          <option value="انتخاب خدمت">انتخاب خدمت</option>
          <option value="طراحی ناخن">طراحی ناخن</option>
          <option value="ترمیم ناخن">ترمیم ناخن</option>
          <option value="ژلیش">ژلیش</option>
        </select>

        <input
          type="date"
          placeholder="تاریخ"
          value={date}
          onChange={(item) => setDate(item.target.value)}
          className="w-full border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          ارسال از طریق واتساپ
        </button>
      </form>
    </>
  );
}
