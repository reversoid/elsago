import React from "react";
import "./styles.scss";

export default function StartOfCourse() {
  return (
    <div className="startOfCourse">
      <section className=" container color-white">
        <h2 className="title">
          СТАРТ
          <span className="color-blue"> 2</span>
          -го потока
          <span className="color-blue"> 7 июля 2022</span>
        </h2>
        <p className="count-regs">
          КОЛИЧЕСТВО РЕГИСТРАЦИЙ: <span className="text-bold">48</span>
        </p>
        <button className="btn btn-light">записаться на курс</button>
      </section>
    </div>
  );
}
