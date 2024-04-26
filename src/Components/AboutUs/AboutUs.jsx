import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";
import { Navigation } from "swiper/modules";
import human1 from '../../assets/Human/human1.jpg';
import human2 from '../../assets/Human/human2.jpg';
import human3 from '../../assets/Human/human3.jpg';
import human4 from '../../assets/Human/human4.jpg';
import human5 from '../../assets/Human/human5.jpg';
import human6 from '../../assets/Human/human6.jpg';

export const AboutUs = () => {
  return (
    <div className="bg-[url('/image.jpg')] h-[550px] bg-cover bg-bottom bg-no-repeat">
      <h1 className="text-white text-5xl text-center pt-3">
        What Our Client Say About Us
      </h1>
      <div className="">
        <Swiper
          navigation={true}
          slidesPerView={1}
          spaceBetween={30}
          //   pagination={{
          //     clickable: true,
          //   }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col shadow-lg gap-4 p-10">
              <div className="rounded-t-lg dark:bg-gray-50">
                <p className="relative text-lg italic text-center dark:text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  I had an amazing experience using this website for my
                  Southeast Asia trip. The information provided was accurate and
                  helped me plan my itinerary effectively. I highly recommend it
                  to fellow travelers!
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className=" my-10 flex items-center gap-4">
                <div className="size-16 ">
                  <img
                    src={human6}
                    alt=""
                    className=" object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="text-start">Olivia </p>
                  <p className="flex items-center gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfStroke />
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex flex-col shadow-lg gap-4 p-10">
              <div className="rounded-t-lg dark:bg-gray-50">
                <p className="relative text-lg italic text-center dark:text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  I had an amazing experience using this website for my
                  Southeast Asia trip. The information provided was accurate and
                  helped me plan my itinerary effectively. I highly recommend it
                  to fellow travelers!
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className=" my-10 flex items-center gap-4">
                <div className="size-16 ">
                  <img
                    src={human1}
                    alt=""
                    className=" object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="text-start">Sophia </p>
                  <p className="flex items-center gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfStroke />
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex flex-col shadow-lg gap-4 p-10">
              <div className="rounded-t-lg dark:bg-gray-50">
                <p className="relative text-lg italic text-center dark:text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  I had an amazing experience using this website for my
                  Southeast Asia trip. The information provided was accurate and
                  helped me plan my itinerary effectively. I highly recommend it
                  to fellow travelers!
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className=" my-10 flex items-center gap-4">
                <div className="size-16 ">
                  <img
                    src={human2}
                    alt=""
                    className=" object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="text-start">Liam </p>
                  <p className="flex items-center gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfStroke />
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex flex-col shadow-lg gap-4 p-10">
              <div className="rounded-t-lg dark:bg-gray-50">
                <p className="relative text-lg italic text-center dark:text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  I had an amazing experience using this website for my
                  Southeast Asia trip. The information provided was accurate and
                  helped me plan my itinerary effectively. I highly recommend it
                  to fellow travelers!
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className=" my-10 flex items-center gap-4">
                <div className="size-16 ">
                  <img
                    src={human3}
                    alt=""
                    className=" object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="text-start">Emma </p>
                  <p className="flex items-center gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfStroke />
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide> <div className="flex flex-col shadow-lg gap-4 p-10">
              <div className="rounded-t-lg dark:bg-gray-50">
                <p className="relative text-lg italic text-center dark:text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  I had an amazing experience using this website for my
                  Southeast Asia trip. The information provided was accurate and
                  helped me plan my itinerary effectively. I highly recommend it
                  to fellow travelers!
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className=" my-10 flex items-center gap-4">
                <div className="size-16 ">
                  <img
                    src={human4}
                    alt=""
                    className=" object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="text-start">Ava </p>
                  <p className="flex items-center gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfStroke />
                  </p>
                </div>
              </div>
            </div></SwiperSlide>
          <SwiperSlide> <div className="flex flex-col shadow-lg gap-4 p-10">
              <div className="rounded-t-lg dark:bg-gray-50">
                <p className="relative text-lg italic text-center dark:text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  I had an amazing experience using this website for my
                  Southeast Asia trip. The information provided was accurate and
                  helped me plan my itinerary effectively. I highly recommend it
                  to fellow travelers!
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className=" my-10 flex items-center gap-4">
                <div className="size-16 ">
                  <img
                    src={human5}
                    alt=""
                    className=" object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="text-start">Noah </p>
                  <p className="flex items-center gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfStroke />
                  </p>
                </div>
              </div>
            </div></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
