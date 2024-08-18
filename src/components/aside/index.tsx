import React, { FC } from 'react';

import Icon from '../../ui-kit/icon';
import './aside.style.scss';

const FILES_MENU = [
  'По проекту',
  'Объекты',
  'РД',
  'МТО',
  'СМР',
  'График',
  'МиМ',
  'Рабочие',
  'Капвложения',
  'Бюджет',
  'Финансирование',
  'Панорамы',
  'Камеры',
  'Поручения',
  'Контрагенты',
] as const;

const Aside: FC = () => {
  return (
    <aside id="--aside-view">
      <div className="aside-head">
        <div className="title">
          <span>Название проекта</span>
          <span>Аббревиатура</span>
        </div>
        <div>
          <Icon size={24} name="arrowUp" color="#FFFFFF" />
        </div>
      </div>
      <div className="aside-list">
        {FILES_MENU.map((item, index) => (
          <div key={index}>
            <Icon size={22} name="asideMenu" color="#FFFFFF" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Aside;
