import React from "react";
import "./styles.scss";

export default function WelcomeScreen() {
  return (
    <div className="welcome-screen bg-bitcoin">
      <section className="container">
        <h1 className="mega-title">
          <span className="color-black">КУРС:</span>
          <br />
          <span className="color-white">КРИПТОСТАРТ</span>
        </h1>
        <div className="welcome-screen__description">
          <p className="text">
            Пройдите курс
            <br />и выйдите на криптовалютный рынок уже через месяц.
          </p>
          <p className="text">
            Запишитесь сейчас
            <br />и получите наш специальный подарок!
          </p>
        </div>
        <button className="welcome-screen__btn btn">записаться на курс</button>
      </section>
    </div>
  );
}
