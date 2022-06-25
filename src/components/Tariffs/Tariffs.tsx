import { nanoid } from "nanoid";
import React from "react";
import Dropdown from "./Dropdown/Dropdown";
import "./styles.scss";

interface ILesson {
  title: JSX.Element;
  description: string;
}

const HamsterLessons: ILesson[] = [
  {
    title: (
      <p className="text-bold dropdown-header">
        <span className="color-blue">1.</span> ЧТО ТАКОЕ КРИПТОВАЛЮТА?
      </p>
    ),
    description:
      "На этом уроке мы познакомимся с миром криптовалют. Узнаем о том, что такое Bitcoin и технология Блокчейн. Поговорим о преимуществах криптовалюты и ее перспективах.",
  },
  {
    title: (
      <p className="text-bold dropdown-header">
        <span className="color-blue">2.</span> ЦЕНТРАЛИЗОВАННЫЕ БИРЖИ
      </p>
    ),
    description:
      "Узнаем о том, как пользоваться крупнейшими централизованными биржами (CEX) для покупки и продажи криптовалют. Научимся покупать/продавать монеты, выставлять различные ордера и пользоваться различными функциями площадок.",
  },
  {
    title: (
      <p className="text-bold dropdown-header">
        <span className="color-blue">3.</span> ДЕЦЕНТРАЛИЗОВАННЫЕ БИРЖИ
      </p>
    ),
    description:
      "Узнаем о том, что такое децентрализованная биржа (DEX) и ее основные преимущества. Покажем, как создать кошелёк Metamask и пользоваться им. Научимся работать с DEX различных сетей блокчейна.",
  },
  {
    title: (
      <p className="text-bold dropdown-header">
        <span className="color-blue">4.</span> КРИПТОВАЛЮТНЫЙ РЫНОК
      </p>
    ),
    description:
      "На этом уроке узнаем, как работает Криптовалютный Рынок. Разберемся во фьючерсных контрактах и других биржевых инструментах. Расскажем о психологии рынка.",
  },
  {
    title: (
      <p className="text-bold dropdown-header">
        <span className="color-blue">5.</span> ИНВЕСТИЦИИ В КРИПТОВАЛЮТУ
      </p>
    ),
    description:
      "Узнаем о том, как составлять криптовалютный портфель. Подробно разберем инвестиционный план, риск-менеджмент и покажем возможные стратегии для успешного заработка.",
  },
];

const SharkLessons: ILesson[] = [
  {
    title: (
      <p className="text-bold dropdown-header">
        <span className="color-blue">1.</span> DeFi
      </p>
    ),
    description:
      "Узнаем о том, что такое децентрализованные финансы. Разберемся в работе DeFi и научимся пользоваться dApps. Расскажем о способах пассивного заработка на криптовалюте и подробно изучим DEX-биржи.",
  },
  {
    title: (
      <p className="text-bold dropdown-header">
        <span className="color-blue">2.</span> ТОКЕНСЕЙЛ
      </p>
    ),
    description:
      "Узнаем о способах покупки монет до появления на биржах. Подробно изучим каждый метод (ICO, IDO, IEO) и поговорим об их доходности. Расскажем о самых перспективных и лучших площадках для покупки монет.",
  },
  {
    title: (
      <p className="text-bold dropdown-header">
        <span className="color-blue">3.</span> Фундаментальный Анализ
      </p>
    ),
    description:
      "Подробно рассмотрим Фундаментальный Анализ рынка. Узнаем о том, как анализировать криптовалютные проекты, а затем искать среди них наиболее перспективные. Расскажем о работе ончейн-метрик и других инструментов анализа для успешного инвестирования.",
  },
  {
    title: (
      <p className="text-bold dropdown-header">
        <span className="color-blue">4.</span> Технический Анализ
      </p>
    ),
    description:
      "Подробно рассмотрим Технический Анализ рынка. Научимся пользоваться графиком и читать графические паттерны. Расскажем об основных индикаторах для торговли на рынке и разберемся в том, как ими пользоваться. С помощью сервиса TradingView подробно рассмотрим графики и закрепим полученные знания на различных примерах.",
  },
  {
    title: (
      <p className="text-bold dropdown-header">
        <span className="color-blue">5.</span> NFT
      </p>
    ),
    description:
      "Узнаем о том, что такое NFT и где их можно купить или продать. Познакомимся с историей NFT, самыми успешными коллекциями и объясним их ценность. Расскажем о том, как выявлять перспективные и успешный NFT-проекты и как на этом заработать.",
  },
  {
    title: (
      <p className="text-bold dropdown-header">
        <span className="color-blue">6.</span> Метавселенная
      </p>
    ),
    description:
      "Узнаем о том, что такое Метавселенная и причём здесь NFT-игры Play-to-Earn (играй, чтобы зарабатывать). Изучим различные Метавселенные, их преимущество и особенности. Обсудим перспективы развития индустрии и способы на этом заработать.",
  },
];

const hamster = (
  <div className="tariff color-white">
    <div className="img hamster-img"></div>
    <div className="tariff__info">
      <h3 className="tariff__title text-center">ХОМЯК</h3>
      <p className="tariff__text mb2">
        Тариф <span className="color-blue">Хомяк</span> — для тех, кто пока
        ничего не знает о криптовалюте.
      </p>
      <div className="color-blue text-bold mb1">УРОКИ</div>
      {HamsterLessons.map((lesson) => (
        <Dropdown
          header={<div>{lesson.title}</div>}
          body={<div>{lesson.description}</div>}
        />
      ))}
    </div>
    <div className="tariff__price">19 900 &#8381;</div>
    <button className="btn bg-blue">ВЫБРАТЬ</button>
  </div>
);
const shark = (
  <div className="tariff color-white">
    <div className="img shark-img"></div>
    <div className="tariff__info">
      <h3 className="tariff__title text-center">АКУЛА</h3>
      <p className="tariff__text mb2">
        Модуль <span className="color-blue">Акула</span>— для тех, кто уже
        знаком с криптовалютой и хочет шагнуть на продвинутый уровень. Вы
        узнаете о методах пассивного заработка, способах покупки монет до
        появления на биржах, обучение фундаментальному и техническому анализу
        рынка, а также окунемся в мир NFT и Метавселенной.
      </p>
      <div className="color-blue text-bold mb1">УРОКИ</div>
      {SharkLessons.map((lesson) => (
        <Dropdown
          header={<div>{lesson.title}</div>}
          body={<div>{lesson.description}</div>}
        />
      ))}
      <span className="prize mb2">
        ELSAGO Invest Club на 2 месяца в подарок!
      </span>
    </div>
    <div className="tariff__price">29 990 &#8381;</div>
    <button className="btn bg-blue">ВЫБРАТЬ</button>
  </div>
);
const whale = (
  <div className="tariff color-white">
    <div className="img whale-img"></div>
    <div className="tariff__info">
      <h3 className="tariff__title text-center">КИТ</h3>
      <p className="tariff__text mb2">
        Тариф <span className="color-blue">Кит</span> — для тех, кто хочет
        полностью освоить криптовалютный рынок с нуля и обладать всеми
        необходимыми знаниями.
      </p>
      <p className="tariff__text">
        Включает в себя все уроки из тарифов
        <span className="color-blue"> Хомяк</span> и
        <span className="color-blue"> Акула</span>
      </p>

      <span className="prize">ELSAGO Invest Club на 3 месяца в подарок!</span>
    </div>
    <div className="tariff__price">43 990 &#8381;</div>
    <button className="btn bg-blue">ВЫБРАТЬ</button>
  </div>
);
const satoshi = (
  <div className="tariff color-white">
    <div className="img satoshi-img"></div>
    <div className="tariff__info">
      <h3 className="tariff__title text-center">САТОШИ</h3>
      <p className="tariff__text mb2">
        Тариф <span className="color-blue">Сатоши</span> — для тех, кто пока не
        знаком с криптовалютой, но хочет шагнуть на продвинутый уровень
        благодаря персональным онлайн-занятиям.
      </p>

      <p className="prize mb2">Вы получите</p>
      <p className="satoshi__get">
        Персональные онлайн-занятия с ведущим курса
      </p>
      <p className="satoshi__get">
        Уроки тарифа <span className="prize">Кит</span>
      </p>
      <p className="satoshi__get">
        Составление индивидуального инвестиционного портфеля
      </p>
      <p className="satoshi__get">Персональная аналитика портфеля</p>
      <p className="satoshi__get">Дополнительные учебные материалы</p>
      <p className="satoshi__get">
        Дополнительный урок:
        <br />
        Майнинг и как начать им заниматься
      </p>
      <p className="satoshi__get">
        Премиальный мерч <span className="prize"> ELSAGO</span>
      </p>
    </div>
    <div className="tariff__price">200 000 &#8381;</div>
    <button className="btn bg-blue">ВЫБРАТЬ</button>
  </div>
);

const tariffs = [hamster, shark, whale, satoshi];

export default function Tariffs() {
  return (
    <section className="tariffs container" key={nanoid()}>
      <h2 className="title">ТАРИФЫ</h2>
      <div className="column-container">{tariffs.map((tariff) => tariff)}</div>
    </section>
  );
}
