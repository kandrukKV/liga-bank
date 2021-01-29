import './converter.scss';
import sprites from '../../img/converter-sprites.svg';

const Converter = () => {
  return (
    <section className="converter">
      <form className="converter__form">
        <div className="converter__row">
          <fieldset className="converter__block">
            <legend className="converter__lable">У меня есть</legend>
            <div className="converter__wrap">
              <label htmlFor="i_from" className="visually-hidden">Поле ввода откуда</label>
              <input className="converter__input" type="text" id="i_from" name="input_from" value="1000"/>
              <div className="converter__curency">
                <select className="converter__currency-list">
                  <option className="converter__currency-item" name="ru">RU</option>
                  <option className="converter__currency-item" name="eur">EUR</option>
                  <option className="converter__currency-item" name="usd">USD</option>
                </select>
                <svg className="converter__arrow-down" width="18" height="11">
                  <use href={sprites + "#arrow-down"}/>
                </svg>
              </div>
            </div>
          </fieldset>

          <div className="converter__arrows">
            <svg width="53" height="18">
              <use href={sprites + "#arrow-left"}/> 
            </svg>
            <svg width="53" height="18">
              <use href={sprites + "#arrow-right"}/> 
            </svg>
          </div>

          <fieldset className="converter__block">
            <legend className="converter__lable">Хочу преобрести</legend>
            <div className="converter__wrap">
              <label htmlFor="i_to" className="visually-hidden">Поле ввода куда</label>
              <input className="converter__input" type="text" id="i_to" name="input_from" value="13,1234"/>
              <div className="converter__curency">
                <select className="converter__currency-list">
                  <option className="converter__currency-item" name="ru">RU</option>
                  <option className="converter__currency-item" name="eur">EUR</option>
                  <option className="converter__currency-item" name="usd">USD</option>
                </select>
                <svg className="converter__arrow-down" width="18" height="11">
                  <use href={sprites + "#arrow-down"}/>
                </svg>
              </div>
            </div>
          </fieldset>
        </div>

        <div className="converter__row">
          <div className="converter__date">
            <label htmlFor="c_date" className="visually-hidden">Поле ввода куда</label>
            <input className="converter__input converter__input--date" type="text" id="c_date" name="input_from" value="13,1234"/>
            <svg className="converter__calendar" width="41" height="44">
              <use href={sprites + "#calendar"}/> 
            </svg>
          </div>
          <button className="converter__btn" type="button">Сохранить результат</button>
        </div>
        
      </form>
    </section>
  );
}

export default Converter;
