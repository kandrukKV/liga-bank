import './footer.scss';
import sprites from '../../img/footer-sprites.svg';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

import Logo from '../logo/logo';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrap">
        <div className="footer__name">
          <Logo/>
          <p className="footer__descr footer__descr--mt20">150015, г. Москва, ул. Московская, д. 32</p>
          <p className="footer__descr">Генеральная лицензия Банка России №1050</p>
          <p className="footer__descr">Ⓒ Лига Банк, 2019</p>
        </div>
        <ul className="footer__nav-list">
          <li className="footer__nav-item"><Link to={AppRoute.SERVICE}>Услуги</Link></li>
          <li className="footer__nav-item"><Link to={AppRoute.CREDIT}>Рассчитать кредит</Link></li>
          <li className="footer__nav-item"><Link to={AppRoute.CONTACTS}>Контакты</Link></li>
          <li className="footer__nav-item"><Link to={AppRoute.QUESTION}>Задать вопрос</Link></li>
        </ul>
        <div className="footer__phone">
          <svg className="footer__phone-img" width="10" height="16">
            <use href={sprites + "#phone-one" }/>
          </svg>
          <p className="footer__number">*0904</p>
          <p className="footer__descr">Бесплатно для абонентов</p>
          <p className="footer__descr">МТС, Билайн, Мегафон, Теле2</p>
        </div>
        <div className="footer__phone">
          <svg className="footer__phone-img" width="16" height="16">
            <use href={sprites + "#phone-two" }/>
          </svg>
          <p className="footer__number">8 800 111 22 33</p>
          <p className="footer__descr">Бесплатный для всех</p>
          <p className="footer__descr">городов России</p>
        </div>
        <ul className="footer__social-list">
          
          <li className="footer__social-item">
            <a href="http://facebook.com">
              <svg className="footer__icon" width="9" height="16">
                <use href={sprites + "#fb" }/>
              </svg>
            </a>
          </li>

          <li className="footer__social-item">
            <a href="http://instagramm.com">
              <svg className="footer__icon" width="16" height="16">
                <use href={sprites + "#inst" }/>
              </svg>
            </a>
          </li>

          <li className="footer__social-item">
            <a href="http://twitter.com">
              <svg className="footer__icon" width="16" height="13">
                <use href={sprites + "#tw" }/>
              </svg>
            </a>
          </li>

          <li className="footer__social-item">
            <a href="http://youtube.com">
              <svg className="footer__icon" width="16" height="13">
                <use href={sprites + "#youtube" }/>
              </svg>
            </a>
          </li>

        </ul>
      </div>
    </footer>
  );
}

export default Footer;
