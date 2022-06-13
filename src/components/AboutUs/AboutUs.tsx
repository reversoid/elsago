import React from "react";
import "./styles.scss";

export default function AboutUs() {
  return (
    <section className="about-us container bg-blurred-bitcoin color-white">
      <h2 className="title text-center">О НАС</h2>
      <p className="text text-regular">
        <span className="text-bold">ELSAGO Crypto</span> появилась в 2021 году,
        благодаря объединению специалистов по криптовалюте и цифровым активам.
        Мы убеждены, что инвестирование и заработок доступен каждому независимо
        от стартового капитала, возраста и профессии. ELSAGO Crypto поможет
        разобраться в криптовалюте и заработать на ней.
      </p>
    </section>
  );
}
