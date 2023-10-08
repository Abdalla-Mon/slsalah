import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BsPlayFill } from "react-icons/bs";
import { motion } from "framer-motion";
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
      <Platform />
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

function Platform() {
  const [hoverd, sethoverd] = useState(false);
  const firstRow = [
    {
      text: "فكرة المشروع",
      index: 1,
      altText:
        "تقديم جلسة عصف ذهني لمناقشة فكرة المشروع والوصول الى أفضل فكرة تلامس حاجة السوق",
    },
    {
      text: "تصميم نموذج العمل التجاري",
      index: 2,
      altText: " تصميم نموذج العمل التجاري لإظهار ملامح المشروع.",
    },
    {
      text: "دراسة جدوى",
      index: 3,
      altText:
        "إعداد ملف دراسة جدوى معتمدة (المالية – القانونية –  الفنية – السوقية) للمشروع.",
    },
    {
      text: "دراسة وتحليل",
      index: 4,
      altText: "دراسة وتحليل السوق تحليل المنافسين  تحليل الجمهور المستهدف.",
    },
  ];
  const secondRow = [
    {
      text: "تصميم الهويةالبصرية للمشوع",
      index: 5,
      altText:
        "تصميم الهوية البصرية وفلسفة الشعار واختيار اسم تجاري إبداعي وفريد أو فكرة العلامة التجارية بما يتوافق مع النشاط والصناعة",
    },
    {
      text: "ملخص وعرض استثمار تصميم نموذج العمل التجاري",
      index: 6,
      altText: "تقديم ملخص وعرض استثمار لجذب التمويل والمستثمرين.",
    },
    {
      text: "الاستشارات والحلول القانونية",
      index: 7,
      altText: "تقديم الاستشارات والحلول القانونية.",
    },
    {
      text: "بناء هيكلية الموارد البشرية",
      index: 8,
      altText: "بناء هيكلية الموارد البشرية والتوصيف الوظيفي.",
    },
  ];
  const thirdRow = [
    {
      text: "الاستشارات والحلول التقنية.",
      index: 9,
      altText: "تقديم الاستشارات والحلول التقنية.",
    },
    {
      text: "بناء استراتيجية التسويق",
      index: 10,
      altText: "بناء استراتيجية التسويق حسب نوع النشاط وميزانية الانطلاقة.",
    },
    {
      text: "تحديد الأهداف ووضع خطةعمل متكاملة الاستشارات والحلول القانونية",
      index: 11,
      altText:
        " تحديد الأهداف ووضع خطة عمل متكاملة تتضمن الخطة التشغيلية والخطة التسويقية.",
    },
  ];
  return (
    <div className="platform">
      <h2>حقيبة ريادي</h2>
      <div className="container">
        <div className="row first-row">
          {firstRow.map((e) => {
            return (
              <PlatFomrCard
                key={e.index}
                text={e.text}
                altText={e.altText}
                index={e.index}
                sethoverd={sethoverd}
                hoverd={hoverd}
              />
            );
          })}
        </div>
        <div className="row second-row">
          {secondRow.map((e) => {
            return (
              <PlatFomrCard
                key={e.index}
                text={e.text}
                altText={e.altText}
                index={e.index}
                sethoverd={sethoverd}
                hoverd={hoverd}
              />
            );
          })}
        </div>
        <div className="row third-row">
          {thirdRow.map((e) => {
            return (
              <PlatFomrCard
                key={e.index}
                text={e.text}
                altText={e.altText}
                index={e.index}
                sethoverd={sethoverd}
                hoverd={hoverd}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
function PlatFomrCard({ hoverd, text, altText, index, sethoverd }) {
  return (
    <motion.div
      className={"platform_card col card" + `_${index}`}
      whileHover={() => sethoverd(true)}
      onHoverEnd={() => sethoverd(false)}
    >
      {hoverd ? (
        <motion.div
          className="text"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.3 }}
        >
          {altText}
        </motion.div>
      ) : (
        <motion.div
          className="text"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.3 }}
        >
          {text}
        </motion.div>
      )}
    </motion.div>
  );
}
