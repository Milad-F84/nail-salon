export default function Location() {
  return (
    <>
      <div>
        <div className="flex items-center p-5 container-primary justify-between">
          <div className="relative flex items-center justify-center py-20">
            <span className="hidden md:block absolute text-[9rem] font-bold text-black opacity-5 whitespace-nowrap pointer-events-none select-none z-0">
              LOCATION
            </span>
            <div className="hidden md:w-[50%] md:flex justify-center items-center gap-5 relative z-10 space-x-4 rtl:space-x-reverse">
              <a
                href="https://maps.app.goo.gl/uWhryfndQUgSe9Bp8"
                className="hover:text-white duration-200 bg-[#bf998e] p-2 rounded-lg font-bold w-[150px] text-center"
              >
                گوگل
              </a>
              <a
                href="https://balad.ir/p/31ToergZav40Ua"
                className="hover:text-white duration-200 bg-[#bf998e] p-2 rounded-lg font-bold w-[150px] text-center"
              >
                بلد
              </a>
              <a
                href="https://nshn.ir/a9_bvvkDOxiO45"
                className="hover:text-white duration-200 bg-[#bf998e] p-2 rounded-lg font-bold w-[150px] text-center"
              >
                نشان
              </a>
            </div>
          </div>
          <div className="md:w-[50%]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2288.493917224111!2d51.422902297333025!3d35.78964240880053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e06718c49459f%3A0xa0ab3363315f549a!2sFereshteh%20Palace%20Garden%20Tower!5e0!3m2!1sen!2s!4v1749043937602!5m2!1sen!2s"
              width="600"
              height="450"
              style={{ border: 0, width: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </>
  );
}
