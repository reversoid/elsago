import React from 'react';
import './styles.scss';
import { nanoid } from 'nanoid';

const listItems = [
  'Покупать, продавать и переводить криптовалюту',
  'Пользоваться централизованными и децентрализованными биржами',
  'Составлять правильный инвестиционной портфель для криптовалют', 
  'Использовать специальные сайты для поиска перспективных монет',
  'Методам пассивного заработка',
  'Как пользоваться Метавселенной и заработать на этом',
  'Покупать монеты на ранних этапах ido появление на бирже',
  'Техническому и фундаментальному анализу',
  'Как находить и выявлять самые перспективные NFT-проекты',
];

export default function WhatToLearn() {
  return (
    <section className="container what-to-learn">
      <h2 className="title">
        ЧЕМУ ВЫ
        <div className="color-blue d-inline"> НАУЧИТЕСЬ</div>
      </h2>
      <ul className="learn-list">
        {listItems.map((item) =>
          <li className='learn-item text text-regular' key={nanoid()}>
            <div className="learn-item__check"></div>
            {item}
          </li>
        )}
      </ul>
    </section>
  )
}
