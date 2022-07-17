import React from "react";
import "./styles.scss";

const hamster = {
  title: "ХОМЯК",
  img: "hamster-w",
  points: [
    "Подойдет новичкам",
    "Работа с куратором",
    "Дополнительные материалы",
  ],
  price: "19 900",
};

const shark = {
  title: "АКУЛА",
  img: "shark-w",
  points: [
    "Подойдет продвинутым",
    "Работа с куратором",
    "Дополнительные материалы",
    "Доступ к Elsago Invest Club",
  ],
  price: "29 900",
};

const whale = {
  title: "КИТ",
  img: "whale-w",
  points: [
    "Подойдет новичкам",
    "Подойдет продвинутым",
    "Работа с куратором",
    "Дополнительные материалы",
    "Доступ к Elsago Invest Club",
    "Составление криптопортфеля",
  ],
  price: "43 990",
};

const satoshi = {
  title: "САТОШИ",
  img: "satoshi-w",
  points: [
    "Подойдет новичкам",
    "Подойдет продвинутым",
    "Работа с куратором",
    "Дополнительные материалы",
    "Доступ к Elsago Invest Club",
    "Составление криптопортфеля",
    "Дополнительные уроки",
    "Премиальный мерч",
    "Индивидуальное обучение",
  ],
  price: "200 000",
};
const items = [hamster, shark, whale, satoshi];

export default function Comparison() {
  return (
    <section className="container">
      <h2 className="title">СРАВНЕНИЕ ТАРИФОВ</h2>
      <div className="comparison">
        {items.map((item) => (
          <div className="comparison__item color-white">
            <div className="comparison-item__header">
              <h3 className="comparison-title">{item.title}</h3>
              <div className={`comparison-img ${item.img}`}></div>
            </div>
            <div className="comparison-item__body">
              <ul className="comparison-points">
                {item.points.map((point) => (
                  <li className="comparison-point">{point}</li>
                ))}
              </ul>
              <span data-rub=" &#8381;" className="comparison-price">{item.price}</span>
              <button className="btn">ВЫБРАТЬ</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
