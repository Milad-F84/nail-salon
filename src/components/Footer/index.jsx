import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Footer() {
  return (
    <>
      <div className="bg-[#f5eae4] mt-5">
        <div className="container-primary flex flex-col justify-center gap-10 p-4 md:flex-row md:justify-between">
          <div className="flex flex-col justify-center gap-2">
            <h2 className=" font-bold text-[#625e5b] text-lg">آدرس</h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی از صنعت چاپ، و با استفاده از
              طراحان گرافیک است
            </p>
            <hr />
            <div className="flex items-center gap-2">
              <a href="https://www.instagram.com/ghazaleh.farajollahi/">
                <InstagramIcon />
              </a>
              <a href="https://wa.me/989335407792" target="_blank">
                <WhatsAppIcon />
              </a>
              <a className="block md:hidden" href="sms:09335407792">
                <EmailIcon />
              </a>
              <a
                className="hidden md:block"
                href="mailto:miladfarajollahi84@gmail.com"
              >
                <EmailIcon />
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <h2 className=" font-bold text-[#625e5b] text-lg">ساعت کاری</h2>
            <p>شنبه تا 5 شنبه : 10 صبح لغایت 18 عصر</p>
            <p>جمعه : 11 صبح لغایت 18 عصر</p>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <h2 className="md:-translate-y-6 font-bold text-[#625e5b] text-lg">
              تماس با ما
            </h2>
            <div className="flex items-center gap-2">
              <PhoneIcon />
              <p>09012345567</p>
            </div>
          </div>
          <div>
            <img className="md:w-35" src="\images\logo-no-bg.png" alt="" />
          </div>
        </div>
      </div>
      <div className="text-center p-2">
        <p className="text-[#625e5b] text-sm">
          تمامی حقوق مادی و معنوی این وبسایت متعلق به سالن زیبایی غزاله فرج الهی
          است .
        </p>
        <span>
          <a
            href="https://github.com/Milad-F84"
            className="text-sm text-blue-500"
          >
          <span className="text-sm text-blue-500">طراحی و سئو : </span>
            Milad Farajollahi
          </a>
        </span>
      </div>
    </>
  );
}
