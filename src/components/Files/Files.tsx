import { nanoid } from 'nanoid';
import React from 'react';
import './styles.scss';

const filenames = [
  '10 советов по обеспечению безопасности криптовалюты',
  'Способы купить криптовалюту',
  'Основные паттерны технического анализа',
  ' Основные криптобиржи',
  'Список основных лаунчпадов',
  'Основные крипто-кошельки',
  'Инструкция по установке кошелька MetaMask',
  'Как фармить с PancakeSwap',
  'Законодательство и налоги на криптовалюты',
  'Покупка токенов через Uniswap',
  'Книга "Как это DeFi”. Базовая версия',
  'Фундаментальный анализ криптопроектов',
  'Список новостных ресурсов о криптовалютах', 
  'Книга "Как это DeFi”. Расширенная',
  'Книга "Как это NFT”'
];

export default function Files() {
  return (
    <div className='container'>
      <h2 className="title">ВЫ ПОЛУЧАЕТЕ ДОСТУП К БОЛЕЕ<br/><span className='color-blue'> ЧЕМ 20 ФАЙЛАМ КУРСА</span></h2>
      <div className="files">
        {
          filenames.map(filename =>
          <div className="file" key={nanoid()}>
            <div className="file__img"></div>
            <div className="file__desc text text-regular">
              <span>
                {filename}
              </span>
            </div>
          </div>
        )
        }
        
      </div>
    </div>
  )
}
