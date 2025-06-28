import Location from "../Location";
import PhoneIcon from "@mui/icons-material/Phone";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import PlaceIcon from "@mui/icons-material/Place";
import PersonIcon from "@mui/icons-material/Person";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  firstName: yup.string().required("نام الزامی است."),
  lastName: yup.string().required("نام خانوادگی کاربری الزامی است."),
  phoneNum: yup
    .string()
    .required("شماره تلفن الزامی است.")
    .min(11, "شماره تلفن باید حداقل 11 کاراکتر باشد."),
});

export default function ContactUs() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    login();
    navigate("/Booking");
  };

  return (
    <>
      <Location />

      <div className="bg-[#f5eae4] mt-5">
        <div>
          <div>
            <PhoneIcon />
            <p>شماره های تماس</p>
            <span>09335407792</span>
          </div>
          <div>
            <PriorityHighIcon />
            <p>
              توجه داشته باشید که تنها ایمیل های دریافتی از ایمیل بالا از سمت
              مجموعه غزاله فرج الهی بوده و معتبر خواهد بود.
            </p>
          </div>
          <div>
            <PlaceIcon />
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی از صنعت چاپ، و با استفاده از
              طراحان گرافیک است
            </p>
          </div>
          <div>
            <div>
              <PersonIcon />
              <p>شبکه های اجتماعی</p>
            </div>
            <div>
              <InstagramIcon />
              <p>اینستاگرام</p>
            </div>
            <div>
              <WhatsAppIcon />
              <p>واتساپ</p>
            </div>
            <div>
              <EmailIcon />
              <p>پیامک</p>
            </div>
          </div>
          <div>
            <PriorityHighIcon />
            <p>
              همچنین برای ارتباط مستقیم با مدیریت مجموعه از طریق فرم زیر اقدام
              نمایید.
            </p>
          </div>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-md mx-auto mt-10"
          >
            <div className="flex flex-col gap-2 justify-center">
              <label>نام کاربری:</label>
              <input
                {...register("username")}
                className="border w-full p-2 mb-2 rounded"
              />
              <p className="text-red-600">{errors.username?.message}</p>
            </div>
            <div className="flex flex-col gap-2 justify-center">
              <label>رمز ورود:</label>
              <input
                type="password"
                {...register("password")}
                className="border w-full p-2 mb-2 rounded"
              />
              <p className="text-red-600">{errors.password?.message}</p>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded w-full cursor-pointer"
            >
              ورود
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
