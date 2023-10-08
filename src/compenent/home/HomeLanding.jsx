import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BsPlayFill } from "react-icons/bs";

// Import Swiper styles
import "swiper/css";
// import 'swiper/css/pagination';

// import required modules
import { Pagination } from "swiper/modules";

export default function HomeLanding() {
  const swiperData = [
    {
      text: "من المملكة موطن الريادة ورمز الطموح",
      bg: "/home_imgs/landing_1.png",
    },
    {
      text: "إلى رائدي الأعمالأصحاب الرؤى وفكر التطوير",
      bg: "/home_imgs/landing_2.png",
    },
    {
      text: "سلسلة معكم لتحقيق الرؤية وتحويلهاإلى واقع",
      bg: "/home_imgs/landing_3.png",
    },
  ];

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="home">
      <Swiper
        direction={"vertical"}
        pagination={pagination}
        mousewheel={true}
        modules={[Pagination]}
        className="home_swiper"
      >
        {swiperData.map((e) => {
          return (
            <SwiperSlide
              className="landing_page"
              style={{ backgroundImage: `url(${e.bg})` }}
              key={e.text}
            >
              {" "}
              <div className={"container "}>
                <h1>{e.text}</h1>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <VideoSection />
    </div>
  );
}

function VideoSection() {
  return (
    <div className="video_section">
      <div className="container">
        <h2>
          تعرف على <span>سلسلة</span> بفيديو
        </h2>
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          vestibulum lectus vitae justo tristique, nec malesuada elit{" "}
        </h5>
        <div className="video_container ">
          <img src="./home_imgs/video.png" className="video_player" />
          <div className="video_icon">
            <BsPlayFill />
          </div>
        </div>
      </div>
    </div>
  );
}
