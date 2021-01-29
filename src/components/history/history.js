import './history.scss';

const History = () => {
  return (
     <section className="history">
       <h2 className="history__title">История конвертаций</h2>

       <div className="history__wrap">
        <ul className="history__list">
          <li className="history__item">
            <div className="history__date">25.11.2020</div>
            <div className="history__result">
              1000 RU
              <svg className="history__arrow" width="40" height="13" viewBox="0 0 53 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34 17L50 9L34 1" stroke="#1F1E25" strokeWidth="2"/>
                <path d="M50 9C43.3333 9 19.6759 9 8.33333 9H0" stroke="#1F1E25" strokeWidth="2"/>
              </svg>
              13,1234 USD
            </div>
          </li>

          <li className="history__item">
            <div className="history__date">25.11.2020</div>
            <div className="history__result">
              1000 RU
              <svg className="history__arrow" width="40" height="13" viewBox="0 0 53 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34 17L50 9L34 1" stroke="#1F1E25" strokeWidth="2"/>
                <path d="M50 9C43.3333 9 19.6759 9 8.33333 9H0" stroke="#1F1E25" strokeWidth="2"/>
              </svg>
              13,1234 USD
            </div>
          </li>
          
          <li className="history__item">
            <div className="history__date">25.11.2020</div>
            <div className="history__result">
              1000 RU
              <svg className="history__arrow" width="40" height="13" viewBox="0 0 53 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34 17L50 9L34 1" stroke="#1F1E25" strokeWidth="2"/>
                <path d="M50 9C43.3333 9 19.6759 9 8.33333 9H0" stroke="#1F1E25" strokeWidth="2"/>
              </svg>
              13,1234 USD
            </div>
          </li>
        </ul>

        <ul className="history__list history__list--right">
          <li className="history__item">
            <div className="history__date">25.11.2020</div>
            <div className="history__result">
              1000 RU
              <svg className="history__arrow" width="40" height="13" viewBox="0 0 53 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34 17L50 9L34 1" stroke="#1F1E25" strokeWidth="2"/>
                <path d="M50 9C43.3333 9 19.6759 9 8.33333 9H0" stroke="#1F1E25" strokeWidth="2"/>
              </svg>
              13,1234 USD
            </div>
          </li>

          <li className="history__item">
            <div className="history__date">25.11.2020</div>
            <div className="history__result">
              1000 RU
              <svg className="history__arrow" width="40" height="13" viewBox="0 0 53 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34 17L50 9L34 1" stroke="#1F1E25" strokeWidth="2"/>
                <path d="M50 9C43.3333 9 19.6759 9 8.33333 9H0" stroke="#1F1E25" strokeWidth="2"/>
              </svg>
              13,1234 USD
            </div>
          </li>
          
          <li className="history__item">
            <div className="history__date">25.11.2020</div>
            <div className="history__result">
              1000 RU
              <svg className="history__arrow" width="40" height="13" viewBox="0 0 53 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34 17L50 9L34 1" stroke="#1F1E25" strokeWidth="2"/>
                <path d="M50 9C43.3333 9 19.6759 9 8.33333 9H0" stroke="#1F1E25" strokeWidth="2"/>
              </svg>
              13,1234 USD
            </div>
          </li>
        </ul>
       </div>

       <div className="history__buttom">
        <button className="history__btn" type="button">Очистить историю</button>
       </div>

     </section>
  );
}

export default History;
