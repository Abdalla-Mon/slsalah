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
      <Services />
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
  const platformData = [
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
    {
      text: `تصميم
       الهوية
       البصرية
        للمشوع`,
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
          {platformData.map((e) => {
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
      className={
        "platform_card col-12 col-md-6 col-lg-4 col-x d-flex justify-content-between card" +
        `_${index}`
      }
      whileHover={() => sethoverd(true)}
      onHoverEnd={() => sethoverd(false)}
    >
      {hoverd ? (
        <motion.div
          className="text_hover"
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
      <div className="number">
        <span>
          {index}
          <p></p>
        </span>
      </div>
    </motion.div>
  );
}
function Services() {
  const servcesData = [
    {
      text: `الاستشارات والحلول الإدارية  والمالية`,
      img: "./home_imgs/services1.svg",
    },
    {
      text: `الاستشارات والحلول القانونية`,
      img: "./home_imgs/services2.svg",
    },
    {
      text: `استشارات الموارد البشرية`,
      img: "./home_imgs/services3.svg",
    },
    {
      text: `الاستشارات والحلول التقنية
`,
      img: "./home_imgs/services4.svg",
    },
    {
      text: `الاستشارات والحلول التسويقية
`,
      img: "./home_imgs/services5.svg",
    },
    {
      text: `الخدمات التسويقية
`,
      img: "./home_imgs/services6.svg",
    },
    {
      text: `خدمات التصميم والحملات 
      الإعلانية`,
      img: "./home_imgs/services7.svg",
    },
  ];

  return (
    <>
      <div className="services">
        <div className="container">
          <h2>الخدمات</h2>
          <h5>
            بفضل خبرتنا الواسعة والمتنوعة، نقدم مجموعة متنوعة من الخدمات التي
            تلبي احتياجاتك بكفاءة واحترافية.
          </h5>
        </div>
        <div className="row ">
          {servcesData.map((e) => (
            <ServiceCard key={e.text} e={e} />
          ))}
        </div>
      </div>
    </>
  );
}

function ServiceCard({ e }) {
  return (
    <div className="col-12 col-md-6 col-lg-4 ">
      <div className={e.text.length > 0 ? "service_card" : "empty"}>
        <img src={e.img} alt={e.text} />
        <h4>{e.text}</h4>
        {e.text.length > 0 && (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vestibulum lectus vitae justo tristique, nec malesuada elit{" "}
          </p>
        )}
      </div>
    </div>
  );
}
