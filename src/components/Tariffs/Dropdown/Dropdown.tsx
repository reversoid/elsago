import React, { useState } from "react";
import "./styles.scss";

export default function Dropdown(props: {
  header: JSX.Element;
  body: JSX.Element;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown-wrapper">
      <div className="dropdown" onClick={() => setIsOpen(!isOpen)}>
        <div>{props.header}</div>
        <button className="arrow-btn" onClick={() => setIsOpen(!isOpen)}>
          <div className={`arrow-btn__img ${isOpen ? "rotated" : ""}`}></div>
        </button>
      </div>
      <div className={`body ${isOpen ? "body-displayed" : "body-hidden"}`}>
        {props.body}
      </div>
    </div>
  );
}
