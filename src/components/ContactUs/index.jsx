import Location from "../Location";
import PhoneIcon from "@mui/icons-material/Phone";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import PlaceIcon from "@mui/icons-material/Place";
import PersonIcon from "@mui/icons-material/Person";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const schema = yup.object({
  firstName: yup.string().required("نام الزامی است."),
  lastName: yup.string().required("نام خانوادگی الزامی است."),
  phoneNum: yup
    .string()
    .required("شماره تلفن الزامی است.")
    .min(11, "شماره تلفن باید حداقل 11 کاراکتر باشد."),
  message: yup.string().required("پیام الزامی است."),
});

export default function ContactUs() {
  const navigate = useNavigate();

  const [messagee, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    const subject = "ارتباط با مدیر";
    const message = `${messagee}`;
    const email = "miladfarajollahi84@gmail.com";
    const url = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="bg-[#f5eae4] mt-5 flex flex-col md:flex-row md:justify-between md:items-center container-primary">
        <div className="md:w-[50%] p-3 flex flex-col gap-4 justify-center">
          <div className="flex items-center gap-2">
            <PhoneIcon />
            <p>شماره های تماس:</p>
            <span>09335407792</span>
          </div>
          <div className="flex items-center gap-2">
            <PriorityHighIcon />
            <p>
              توجه داشته باشید که تنها ایمیل های دریافتی از ایمیل بالا از سمت
              مجموعه غزاله فرج الهی بوده و معتبر خواهد بود.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <PlaceIcon />
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی از صنعت چاپ، و با استفاده از
              طراحان گرافیک است
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <div className="flex items-center gap-2">
              <PersonIcon />
              <p>شبکه های اجتماعی</p>
            </div>
            <a
              href="https://www.instagram.com/ghazaleh.farajollahi/"
              className="flex items-center gap-2"
            >
              <InstagramIcon />
              <p>اینستاگرام</p>
            </a>
            <a
              href="https://wa.me/989335407792"
              className="flex items-center gap-2"
            >
              <WhatsAppIcon />
              <p>واتساپ</p>
            </a>
            <a href="sms:09335407792" className="flex items-center gap-2">
              <EmailIcon />
              <p>پیامک</p>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <PriorityHighIcon />
            <p>
              همچنین برای ارتباط مستقیم با مدیریت مجموعه از طریق فرم زیر اقدام
              نمایید.
            </p>
          </div>
        </div>
        <div className="md:w-[50%] p-3">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-md mx-auto mt-10"
          >
            <div className="flex flex-col gap-2 justify-center">
              <label>نام:</label>
              <input
                {...register("firstName")}
                className="border w-full p-2 mb-2 rounded"
              />
              <p className="text-red-600">{errors.firstName?.message}</p>
            </div>
            <div className="flex flex-col gap-2 justify-center">
              <label>نام خانوادگی:</label>
              <input
                {...register("lastName")}
                className="border w-full p-2 mb-2 rounded"
              />
              <p className="text-red-600">{errors.lastName?.message}</p>
            </div>
            <div className="flex flex-col gap-2 justify-center">
              <label>تلفن همراه:</label>
              <input
                type="tel"
                {...register("phoneNum")}
                className="border w-full p-2 mb-2 rounded"
              />
              <p className="text-red-600">{errors.phoneNum?.message}</p>
            </div>
            <div className="flex flex-col gap-2 justify-center">
              <label>پیام:</label>
              <input
              onChange={(item) => setMessage(item.target.value)}
                {...register("message")}
                className="border w-full p-2 mb-2 rounded"
              />
              <p className="text-red-600">{errors.message?.message}</p>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded w-full cursor-pointer"
            >
              ارسال
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
