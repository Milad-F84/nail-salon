export default function Banner() {
  return (
    <>
      <div className="bg-[#f5eae4]">
        <div className="container-primary flex flex-col md:flex-row md:justify-between items-center p-4 gap-10">
          <div className="flex flex-col justify-center items-center text-center md:text-start gap-7">
            <h1 className="font-bold text-3xl text-[#625e5b]">
              سالن تخصصی ناخن غزاله فرج الهی
            </h1>
            <p>
              ناخن های زیبای و روی فرم فقط با کلینیک کاشت ناخن غزاله فرج الهی
              صرفاً برای اینکه ناخن هایتان زود شکسته می شوند و یا شکل و فرم
              نامناسبی دارند شما محکوم به تحمل این وضعیت نیستید. با خدمات کاشت
              ناخن ما به راحتی می توانید ناخن هایی زیبا درست همانطور که در ذهن
              می پرورانید داشته باشید.
            </p>
            <div className="md:flex">
              <span className="font-bold text-lg">مشتاق دیدارتان هستیم !</span>
              <p className="text-lg">
                ما بهترین کیفیت کاشت ناخن رو با مناسب‌ترین قیمت ارائه می‌کنیم .
              </p>
            </div>
          </div>
          <div>
            <img className="rounded-3xl" src="\images\product\p1.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
