import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./style.css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";
import image1 from '../../assets/banner/tourist1.jpg';
import image2 from '../../assets/banner/tourist2.jpg';
import image3 from '../../assets/banner/tourist3.jpg';
import image4 from '../../assets/banner/tourist4.jpg';
import image5 from '../../assets/banner/tourist5.jpg';
import image6 from '../../assets/banner/tourist6.jpg';
import image7 from '../../assets/banner/tourist7.jpg';


export const Banner = () => {
  return (
    <div
      className=" bg-[url('https://images.pexels.com/photos/547119/pexels-photo-547119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] h-[550px] bg-cover  bg-no-repeat my-5"
    >
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
          <Link>
            <button className="btn btn-primary">Explore Now</button>
          </Link>
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
