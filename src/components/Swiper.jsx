import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


import { Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,} from "swiper/modules";

const Swipper = () => {
  return (
    <div className="container my-20">
      <Swiper
        loop={true}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
    
        <SwiperSlide>
          <div className="max-lg:h-[650px] max-lg:w-full max-md:h-[550px] max-sm:h-[450px]  h-[700px] bg-cover bg-no-repeat bg-center bg-[url('https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg')]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-lg:h-[650px] max-lg:w-full max-md:h-[550px] max-sm:h-[450px]  h-[700px] bg-cover bg-no-repeat bg-center bg-[url('https://images.squarespace-cdn.com/content/v1/5d777de8109c315fd22faf3a/1693407136044-G90XQURX1GABMYGAS8K1/shutterstock_1288634614.jpg?format=2500w')]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-lg:h-[650px] max-lg:w-full max-md:h-[550px] max-sm:h-[450px]  h-[700px] bg-cover bg-no-repeat bg-center bg-[url('https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/06/Female_Woods_hike_1296x728-header-1-1296x728.jpg?w=1155&h=1528')]"></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="max-lg:h-[650px] max-lg:w-full max-md:h-[550px] max-sm:h-[450px]  h-[700px] bg-cover bg-no-repeat bg-center bg-[url('https://images.herzindagi.info/image/2024/Jul/world-nature-conservation-day-theme.jpg')]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-lg:h-[650px] max-lg:w-full max-md:h-[550px] max-sm:h-[450px]  h-[700px] bg-cover bg-no-repeat bg-center bg-[url('https://img.freepik.com/free-photo/beautiful-water-view-anime-style_23-2151080251.jpg')]"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Swipper;
