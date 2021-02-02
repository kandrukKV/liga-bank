import './header.scss';
import sprite from '../../img/header-sprites.svg';
import rect1 from '../../img/rect-1.png';
import rect2 from '../../img/rect-2.png';
import rect3 from '../../img/rect-3.png';
import rect4 from '../../img/rect-4.png';
import cardBlack from '../../img/card-black.png';
import cardWhite from '../../img/card-white.png';

import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

import Logo from '../logo/logo';

import Nav from '../nav/nav';
import {MENU_LIST} from '../../const';

const Header = () => {
  return(
    <header className="header">
      <div className="header__top">
        <div className="header__left">
          <Logo/>
          <Nav menuList={MENU_LIST}/>
        </div>
        <div className="header__login">
          <Link className="heder__login-link" to={AppRoute.LOGIN}>
            <svg className="header__icon">
              <use href={sprite + "#exit"}/>
            </svg>
            <p className="header__login-name">Войти в Интернет банк</p>
          </Link>
        </div>
      </div>
      <div className="header__buttom">
        <div className="header__left-decor">
          <img src={rect3} width="150" height="400" alt="декоративный элемент"/>
          <img src={rect4} width="150" height="269" alt="декоративный элемент"/>
        </div>
        <div className="header__right-decor">
          <img src={rect1} width="270" height="269" alt="декоративный элемент"/>
          <img src={rect2} width="298" height="400" alt="декоративный элемент"/>
        </div>
        <div className="header__inner">
          <div className="header__label">
            <h2 className="header__title">Лига Банк</h2>
            <p className="header__subtitle">Кредиты на любой случай</p>
            <Link className="header__btn" to={AppRoute.CREDIT}>
              Рассчитать кредит
            </Link>
          </div>
          <div className="header__cards">
            <img className="header__card header__card--white" src={cardWhite} width="297" height="186" alt="декоративный элемент"/>
            <img className="header__card header__card--black" src={cardBlack} width="290" height="184" alt="декоративный элемент"/>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
