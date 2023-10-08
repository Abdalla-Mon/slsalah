import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <UpperNavBar />
      <LowerNavbar />
    </header>
  );
}
function UpperNavBar() {
  return (
    <nav className="upper-nav">
      <div className="container d-flex justify-content-between  flex-row-reverse">
        <NavIcons />
        <div className="d-flex gap-3 contact-info align-items-center">
          <div className="d-flex gap-2 align-items-center  flex-row-reverse">
            <img src="./navbar_imgs/phone.png" />
            <p className="number">+966 023 11 4564</p>
          </div>
          <div className="d-flex gap-2 align-items-center flex-row-reverse">
            <img src="./navbar_imgs/mail.png" />
            <p>info@gmail.com</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
function NavIcons() {
  const icons = [
    "./navbar_imgs/linkedin.png",
    "./navbar_imgs/twitter.png",
    "./navbar_imgs/facebook.png",
    "./navbar_imgs/instagram.png",
  ];
  return (
    <>
      <div className="nav-icons gap-3 d-flex align-items-center">
        {icons.map((e, index) => (
          <img src={e} alt="social_icon" key={index} />
        ))}
      </div>
    </>
  );
}
function LowerNavbar() {
  const navItems = [
    { text: "الصفحة الرئيسية", route: "/" },
    { text: "من نحن", route: "about" },
    { text: "الخدمات", route: "services" },
    { text: "معرض الأعمال", route: "portfolio" },
    { text: "المدونة", route: "bolg" },
    { text: "اتصل بنا", route: "contact" },
  ];
  return (
    <nav className="navbar lower-navbar navbar-expand-lg bg-body-tertiary">
      <div className="container flex-row-reverse ">
        <a className="navbar-brand" href="#">
          <img src="./navbar_imgs/logo.png" alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse  flex-row-reverse"
          id="navbarText"
        >
          <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0  gap-4">
            {navItems.map((e, index) => {
              return (
                <li className="nav-item" key={e.text}>
                  <NavLink className="nav-link" to={e.route}>
                    {e.text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <button className="asking_btn">اطلب استشارة</button>
        </div>
      </div>
    </nav>
  );
}
