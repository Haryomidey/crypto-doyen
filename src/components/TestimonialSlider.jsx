import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./App.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const TestimonialSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper pb-10"
      >
        <SwiperSlide>
            <div className="font-light italic">
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita porro beatae similique atque rem, architecto nam provident. Esse, veniam? Esse ipsum at possimus consectetur nobis quaerat molestias facere quas? Quas laborum ab repudiandae eligendi, expedita eum facere minima quis eveniet?"
            </div>
            <p className="text-[16px] italic font-semibold pt-2">"Lorem ipsum dolor sit amet."</p>
        </SwiperSlide>
        <SwiperSlide>
            <div className="font-light italic">
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita porro beatae similique atque rem, architecto nam provident. Esse, veniam? Esse ipsum at possimus consectetur nobis quaerat molestias facere quas? Quas laborum ab repudiandae eligendi, expedita eum facere minima quis eveniet?"
            </div>
            <p className="text-[16px] italic font-semibold pt-2">"Lorem ipsum dolor sit amet."</p>
        </SwiperSlide>
        <SwiperSlide>
            <div className="font-light italic">
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita porro beatae similique atque rem, architecto nam provident. Esse, veniam? Esse ipsum at possimus consectetur nobis quaerat molestias facere quas? Quas laborum ab repudiandae eligendi, expedita eum facere minima quis eveniet?"
            </div>
            <p className="text-[16px] italic font-semibold pt-2">"Lorem ipsum dolor sit amet."</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}


export default TestimonialSlider;
