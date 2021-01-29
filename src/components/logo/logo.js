import './logo.scss';
import logo from '../../img/logo.svg';

const Logo = () => {
  return (
    <div className="logo">
      <div className="logo__img">
        <img src={logo} alt="логотип Лига Банк" width="28" height="25"/>
      </div>
      <div className="logo__name">ЛИГА Банк</div>
    </div>
  );
}

export default Logo;
