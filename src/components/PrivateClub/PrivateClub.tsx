import React from "react";
import "./styles.scss";

export default function PrivateClub() {
  return (
    <section className="private-club color-white">
      <div className="container">
        <h2 className="title">
          Закрытый клуб
          <br />
          <span className="color-blue">ELSAGO INVEST CLUB</span>
        </h2>
        <div className="private-club__options">
          <div className="private-club__option">
            <h3 className="private-club__title">Что вас ждет?</h3>
            <p className="private-club__text mb1">
              Закрытый <span className="color-blue">Telegram</span>-канал:
            </p>
            <ul className="private-club-ul">
              <li className="private-club-ul__li">С идеями для заработка</li>
              <li className="mb1 private-club-ul__li">
                С доступом к премиальным индикаторам для прогнозирования рынка
              </li>
              <li className="private-club-ul__li">С доступом к инсайдерской информации</li>
              <li className="private-club-ul__li">С мнением и обзорами на рынок</li>
            </ul>
          </div>

          <div className="private-club__option">
            <h3 className="private-club__title">Как попасть в клуб?</h3>
            <p className="private-club__text mb1">
              Для участия в клубе необходимо пройти обучение курса Криптостарт:
            </p>
            <ul>
              <li>По тарифу КИТ</li>
              <li>По тарифу АКУЛА</li>
              <li> По тарифу САТОШИ</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
