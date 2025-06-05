export default function About() {
  return (
    <>
      <div className="bg-[#f5eae4] mt-10 p-20">
        <h1 className="text-center font-bold text-xl md:text-3xl text-[#625e5b]">به سالن ناخن غزاله فرج الهی خوش آمدید</h1>
      </div>
      <div className="bg-[#f5eae4] mt-10">
        <div className="container-primary p-9">
          <div className="flex flex-col gap-5 md:gap-2 md:flex-row justify-between items-center">
            <div className="md:w-[50%]">
              <p className="text-lg">
                در سالن تخصصی ناخن غزاله فرج الهی ما تجربه و اشتیاق لازم برای
                بدست اوردن بهترین نتایج را داریم . همه کارکنان ما از دستورالعمل
                های دقیقی که آموزش دیده اند پیروی کرده تا بالاترین کیفیتی که
                بدان معروف هستیم را به ارمغان بیاورند . اگر شما هم بدنبال تخصصی
                ترین سالن ناخن تهران هستید از هر شخصی جویا شوید غزاله فرج الهی
                را به شما توصیه میکنند !
              </p>
            </div>
            <div className="md:w-[50%]">
              <img className="rounded-3xl mask-i" src="\images\product\p14.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
