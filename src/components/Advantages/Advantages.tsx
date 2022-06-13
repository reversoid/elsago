import React from "react";
import "./styles.scss";
import { nanoid } from "nanoid";

const groups = {
  title: <>КОМАНДНАЯ РАБОТА В <span className="text-blue"> ГРУППАХ</span></>,
  description: <>Наш опыт показывает, что именно за счет групповой&nbsp;работы быстрее достигаются высокие результаты.</>,
  parts: [
    {
      img: "first",
      text: `Все участники курса будут разделены на группы до 10 человек для командной работы и взаимопомощи при выполнении практических занятий.`,
    },
    {
      img: "second",
      text: `Благодаря этому вы сможете обмениваться опытом с другими участниками. Кто-то найдет себе партнеров, единомышленников и друзей.`,
    },
    {
      img: "third",
      text: `Обычно на этом история не заканчивается, и участники групп в дальнейшем вместе продолжают свой путь вместе с нами.`,
    },
  ],
};

const curator = {
  title: <>ЛИЧНЫЙ<span className="text-blue"> КУРАТОР</span></>,
  description: <>У вас будет свой куратор. <br/> Больше, чем просто модератор или специалист тех. поддержки. Это ваш наставник, который будет помогать вам осваивать курс, поддерживать, направлять вас и радоваться вашим успехам!</>,
  parts: [
    {
      img: "fourth",
      text: `Кураторы будут следить за продуктивностью работы в группах`,
    },
    {
      img: "fifth",
      text: `Ответят на все интересующие вас вопросы`,
    },
    {
      img: "sixth",
      text: `Проверят ваши практические задания и дадут обратную связь`,
    },
    {
      img: "seventh",
      text: `Придут на помощь в сложных ситуциях`,
    },
  ],
};

const topics = [groups, curator];

export default function Advantages() {
  return (
    <section className="container advantages">
      {topics.map((topic) => (
        <div className="topic" key={nanoid()}>
          <h2 className="title">{topic.title}</h2>
          <h3 className="text-larger">{topic.description}</h3>
          {topic.parts.map((part) => (
            <>
              <div className={`topic__img ${part.img}`}></div>
              <p className="text text-regular">{part.text}</p>
            </>
          ))}
        </div>
      ))}
      {/* <h2 className="title">
        КОМАНДНАЯ РАБОТА В <span className="color-blue"> ГРУППАХ</span>
      </h2>
      <h3 className="text-larger">
        Наш опыт показывает, что именно за счет групповой&nbsp;работы быстрее
        достигаются высокие результаты.
      </h3>
      <ul className="groups__container">
        <li className="groups__item">
          <div className="item__img first"></div>
          <p className="text"></p>
        </li>
        <li className="groups__item">
          <div className="item__img second"></div>
          <p className="text"></p>
        </li>
        <li className="groups__item">
          <div className="item__img third"></div>
          <p className="text"></p>
        </li>
      </ul> */}
    </section>
  );
}
