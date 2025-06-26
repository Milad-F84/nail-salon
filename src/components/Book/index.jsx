import { useState } from "react";

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
