import React, { FC } from 'react';

import Icon from '../../ui-kit/icon';
import './header.style.scss';

const Header: FC = () => {
  return (
    <div id="--header-view">
      <div className="header-buttons">
        <Icon name="menu" size={24} color="#A1A1AA" />
        <Icon name="arrowBack" size={24} color="#A1A1AA" />
      </div>
      <nav className="navigation">
        <ul>
          <li className="crumb">Просмотр</li>
          <li className="crumb">Управление</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
