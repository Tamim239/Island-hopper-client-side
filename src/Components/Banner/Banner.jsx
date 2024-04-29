import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./style.css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";
import image1 from "../../assets/banner/tourist1.jpg";
import image2 from "../../assets/banner/tourist2.jpg";
import image3 from "../../assets/banner/tourist3.jpg";
import image4 from "../../assets/banner/tourist4.jpg";
import image5 from "../../assets/banner/tourist5.jpg";
import image6 from "../../assets/banner/tourist6.jpg";
import image7 from "../../assets/banner/tourist7.jpg";

export const Banner = () => {
  return (
    <div className=" bg-[url('https://images.pexels.com/photos/547119/pexels-photo-547119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] h-[550px] bg-cover  bg-no-repeat my-5">
      <div className="grid grid-cols-6 gap-3 h-full">
        <div className="md:col-span-3 col-span-full text-white flex flex-col justify-center md:pl-10 max-sm:p-5 space-y-3">
          <h1 className="text-4xl md:text-6xl">
            KEEP TRAVEL ON
            <span>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[" CALM & TRAVEL", " CALM & SAFE", " CALM & SECURE"]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p>
            Explore bustling metropolises, serene temples, and breathtaking
            natural landscapes. Create lasting memories on your Asian odyssey.
          </p>
         <div>
         <Link
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group"
          >
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span className="relative text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
            Explore Now
            </span>
          </Link>
         </div>
        </div>
        <div className="md:col-span-3 col-span-full text-white">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={image1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image3} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image4} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image5} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image6} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image7} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
