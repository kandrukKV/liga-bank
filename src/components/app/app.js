import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {AppRoute} from '../../const';

import './app.scss';
import Header from '../header/header';
import Main from '../main/main';
import Converter from '../converter/converter';
import History from '../history/history';
import Footer from '../footer/footer';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header/>
          <Switch>
            <Route exact path={AppRoute.CONVERTER}>
              <Main mainTitle='Конвертер валют'>
                <Converter/>
                <History/>
              </Main>
            </Route>

            <Route path={AppRoute.SERVICE}>
              <Main mainTitle='Услуги'/>
            </Route>

            <Route path={AppRoute.CREDIT}>
              <Main mainTitle='Расчитать кредит'/>
            </Route>

            <Route path={AppRoute.CONTACTS}>
              <Main mainTitle='Контакты'/>
            </Route>

            <Route path={AppRoute.QUESTION}>
              <Main mainTitle='Задать вопрос'/>
            </Route>

            <Route path={AppRoute.LOGIN}>
              <Main mainTitle='Вход в Интернет банк'/>
            </Route>

          </Switch>
        
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
