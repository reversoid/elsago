import React from "react";
import "./styles.scss";
import { nanoid } from "nanoid";

const groups = {
  title: (
    <>
      КОМАНДНАЯ РАБОТА В <span className="color-blue"> ГРУППАХ</span>
    </>
  ),
  description: (
    <>
      Наш опыт показывает, что именно за счет групповой&nbsp;работы быстрее
      достигаются высокие результаты.
    </>
  ),
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
  title: (
    <>
      ЛИЧНЫЙ<span className="color-blue"> КУРАТОР</span>
    </>
  ),
  description: (
    <>
      У вас будет свой куратор. <br /> Больше, чем просто модератор или
      специалист тех. поддержки. Это ваш наставник, который будет помогать вам
      осваивать курс, поддерживать, направлять вас и радоваться вашим успехам!
    </>
  ),
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
    <>
      <section className="container advantages" key={nanoid()}>
        <h2 className="title">{groups.title}</h2>
        <h3 className="text-larger">{groups.description}</h3>
        <div className="advantages__list">
          {groups.parts.map((part) => (
            <div className="advantage advantage-col" key={nanoid()}>
              <div className={`advantages__img ${part.img}`}></div>
              <p className="text text-regular">{part.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container advantages" key={nanoid()}>
        <h2 className="title">{curator.title}</h2>
        <h3 className="text-larger">{curator.description}</h3>
        <div className="advantages__list">
          {curator.parts.map((part) => (
            <div className="advantage advantage-row" key={nanoid()}>
              <div className={`advantages__img ${part.img}`}></div>
              <p className="text text-regular">{part.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
