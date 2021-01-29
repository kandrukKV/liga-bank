import './nav.scss';
import {NavLink} from 'react-router-dom';

const Nav = ({menuList}) => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {
          menuList.map((item) => {
            return (
              <li key={item.id} className="nav__item">
                <NavLink className="nav__link" activeClassName="nav__link--active" exact to={item.path}>{item.name}</NavLink>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

export default Nav;
