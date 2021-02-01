import './history.scss';
import {connect} from 'react-redux';
import {getHistory} from '../../store/selectors';
import {clearHistoryAction} from '../../store/action';

const History = ({historyList, clearHistory}) => {
  
  return (
     <section className="history">
       <h2 className="history__title">История конвертаций</h2>

       {historyList.length === 0
        ? null
        : <>
          <div className="history__wrap">
            <ul className="history__list">
              {
                historyList.slice(0, 5).map((item, idx) => {
                  return(
                    <li key={'l-' + idx} className="history__item">
                      <div className="history__date">{item.currentDate}</div>
                      <div className="history__result">
                        {`${item.iHaveValue} ${item.haveCarrency}`}
                        <svg className="history__arrow" width="40" height="13" viewBox="0 0 53 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M34 17L50 9L34 1" stroke="#1F1E25" strokeWidth="2"/>
                          <path d="M50 9C43.3333 9 19.6759 9 8.33333 9H0" stroke="#1F1E25" strokeWidth="2"/>
                        </svg>
                        {`${item.iWantValue} ${item.wantCarrency}`}
                      </div>
                    </li>
                  )
                })
              }
            </ul>

            <ul className="history__list history__list--right">
                {
                  historyList.slice(5).map((item, idx) => {
                    return(
                      <li key={'r-' + idx} className="history__item">
                        <div className="history__date">{item.currentDate}</div>
                        <div className="history__result">
                          {`${item.iHaveValue} ${item.haveCarrency}`}
                          <svg className="history__arrow" width="40" height="13" viewBox="0 0 53 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M34 17L50 9L34 1" stroke="#1F1E25" strokeWidth="2"/>
                            <path d="M50 9C43.3333 9 19.6759 9 8.33333 9H0" stroke="#1F1E25" strokeWidth="2"/>
                          </svg>
                          {`${item.iWantValue} ${item.wantCarrency}`}
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
          </div>
          <button
            className="history__btn"
            type="button"
            onClick={clearHistory}
          >Очистить историю
          </button>
        </>
      }
     </section>
  );
}

const mapStateToProps = (state) => ({
  historyList: getHistory(state)
});

const mapDispachToProps = (dispatch) => ({
  clearHistory() {
    dispatch(clearHistoryAction());
  }
})

export default connect(mapStateToProps, mapDispachToProps)(History);
