import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


export default function HomeLanding() {

    const swiperData=[
        
        {text:"من المملكة موطن الريادة ورمز الطموح",bg:"/home_imgs/landing_1.png"},
        {text:"إلى رائدي الأعمال أصحاب الرؤى وفكر التطوير",bg:"/home_imgs/landing_2.png"},
        {text:"سلسلة معكم لتحقيق الرؤية وتحويلها إلى واقع",bg:"/home_imgs/landing_3.png"},
]

const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <Swiper
    direction={'vertical'}
    pagination={pagination}

    modules={[Pagination]}
    className="home_swiper"
  >
  
    {swiperData.map((e)=>{
        return(
            <SwiperSlide key={e.text}> <div className={"landing_page "} style={{backgroundImage:`url(${e.bg})`}}><h1>{e.text}</h1></div></SwiperSlide>
        )
    })}

  </Swiper>  
  )
}
