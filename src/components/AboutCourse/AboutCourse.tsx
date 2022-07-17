import React from "react";
import "./styles.scss";

export default function AboutCourse() {
  return (
    <section className="about-course container bg-blurred-bitcoin color-white br1">
      <h2 className="title text-center">О КУРСЕ</h2>
      <div className="about-course__description">
        <p className="text text-regular">
          Мы просто и доступно объясняем о мире криптовалют новичкам и продвинутым
          пользователям.
        </p>
        <p className="text text-regular">
          Образовательная программа наших курсов направлена на подготовку
          профессиональных участников рынка, которые смогут проявить свои знания,
          полученные при качественном обучении.
        </p>
        <p className="text text-regular">
          Ключевая цель программы – дать участникам абсолютно полезные знания о
          криптовалютном рынке.
        </p>
      </div>
      
    </section>
  );
}
