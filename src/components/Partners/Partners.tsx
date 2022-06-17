import { nanoid } from "nanoid";
import React from "react";
import "./styles.scss";

interface IPartner {
  name: string;
  link: string;
}

const partners: Array<IPartner> = [
  {
    name: 'binance',
    link: 'https://www.binance.com/',
  },
  {
    name: 'huobi',
    link: 'https://www.huobi.com/',
  },
  {
    name: 'okex',
    link: 'https://www.okx.com/',
  },
  {
    name: 'tinkoff',
    link: 'https://www.tinkoff.ru/',
  },
  {
    name: 'bybit',
    link: 'https://www.bybit.com/',
  },
  {
    name: 'ftx',
    link: 'https://ftx.com/',
  },
]

export default function Partners() {
  return (
    <section className="partners container">
      <h2 className="partners__title text-center">
        НАШИ КЛЮЧЕВЫЕ ПАРТНЕРЫ - ЭТО<br/>КРУПНЕЙШИЕ КОМПАНИИ И БИРЖИ В СФЕРЕ
        КРИПТОВАЛЮТ
      </h2>
      <div className="partners__items">
        {partners.map((partner) => 
          <a href={partner.link} target='_blank' rel="noreferrer" key={nanoid()}>
            <div className={`partners__item ${partner.name}`}></div>
          </a>
        )}
      </div>
    </section>
  );
}
