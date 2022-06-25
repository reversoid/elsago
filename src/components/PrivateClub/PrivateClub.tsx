import React from "react";
import "./styles.scss";

export default function PrivateClub() {
  return (
    <section className="private-club container color-white">
      <h2 className="title">
        Закрытый клуб
        <br />
        <span className="color-blue">ELSAGO INVEST CLUB</span>
      </h2>
      <div className="private-club__options">
        <div className="private-club__option">
          <h3 className="private-club__title">Что вас ждет?</h3>
          <p className="private-club__text">
            Закрытый <span className="color-blue">Telegram</span>-канал:
          </p>
          <ul>
            <li>С идеями для заработка</li>
            <li>
              С доступом к премиальным индикаторам для прогнозирования рынка
            </li>
            <li>С доступом к инсайдерской информации</li>
            <li>С мнением и обзорами на рынок</li>
          </ul>
        </div>

        <div className="private-club__option">
          <h3 className="private-club__title">Как попасть в клуб?</h3>
          <p className="private-club__text">
            Для участия в клубе необходимо пройти обучение курса Криптостарт:
          </p>
          <ul>
            <li>По тарифу КИТ</li>
            <li>По тарифу АКУЛА</li>
            <li> По тарифу САТОШИ</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
