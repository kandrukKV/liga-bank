import './converter.scss';
import {PureComponent} from 'react';
import {connect} from "react-redux";
import CurrencySelect from '../currency-select/currency-select';
import CurrencyInput from '../currency-input/currency-input';
import {CURRENCIES} from '../../const';
import CurrencyAPI from '../../services/currency-api';
import Preloader from '../preloader/preloader';
import DateSelect from '../date-select/date-select';
import sprites from '../../img/converter-sprites.svg';

import {
  getIhaveValue,
  getIWantValue,
  getHaveCurrencyValue,
  getWantCurrencyValue,
  getCurrentDate,
  getRateIndex,
  getIsConverterDisabled,
  getDateList
} from '../../store/selectors';

import {
  changeIhaveValueAction,
  changeIwantValueAction,
  changeHaveCurrencyAction,
  changeWantCurrencyAction,
  setCurrentDateAction,
  getCarencyListAction,
  saveResultAction
} from '../../store/action';


class Converter extends PureComponent {

  constructor(props) {
    super(props);
    this.currencyApi = new CurrencyAPI();
    this.changeBaseCurencyValue = this.changeBaseCurencyValue.bind(this);
    this.changeSecondCurrencyValue = this.changeSecondCurrencyValue.bind(this);
    this.changeSecondCurrencyName = this.changeSecondCurrencyName.bind(this);
    this.changeCurrentDate = this.changeCurrentDate.bind(this);
    this.changeBaseCurrencyName = this.changeBaseCurrencyName.bind(this);
  };

  changeBaseCurencyValue(value) {
    this.props.onChangeIhaveValue(value);
    this.props.onChangeIwantValue(value * this.props.rateIndex);
  }

  changeSecondCurrencyValue(value) {
    this.props.onChangeIwantValue(value);
    this.props.onChangeIhaveValue(value / this.props.rateIndex);
  }

  changeSecondCurrencyName(value) {
    new Promise((resolve) => {
      this.props.changeSecondCurrencyName(value);
      resolve();
    })
      .then(() => {
        this.props.onChangeIwantValue(this.props.iHaveValue * this.props.rateIndex);
      }) 
  }

  changeBaseCurrencyName(value) {
    new Promise((resolve) => {
      this.props.onChangeHaveCurrencyValue(value);
      resolve();
    })
      .then(() => {
        this.props.getCurrencyList();
      })
  }

  changeCurrentDate(value) {
    new Promise((resolve) => {
      this.props.onSetCurrentDate(value);
      resolve();
    })
      .then(() => {
        this.props.onChangeIwantValue(this.props.iHaveValue * this.props.rateIndex);
      })
  }

  render() {
    const {
      iHaveValue,
      iWantValue,
      haveCarrency,
      wantCarrency,
      currentDate,
      isDisabledForm,
      dateList,
      saveResult
    } = this.props;

    return (
      <section className="converter">
        <form className="converter__form">
          <div className="converter__row">
            <fieldset className="converter__block">
              <legend className="converter__lable">У меня есть</legend>
              <div className="converter__wrap">
  
                <CurrencyInput
                  iValue={iHaveValue}
                  onChangeValue={this.changeBaseCurencyValue}
                  isDisabled={isDisabledForm}
                />
  
                <CurrencySelect
                  currencies={CURRENCIES}
                  currentValue={haveCarrency}
                  onChangeValue={this.changeBaseCurrencyName}
                  isDisabled={isDisabledForm}
                />
  
              </div>
            </fieldset>

            {
              isDisabledForm 
              ? <Preloader/> 
              : (
                <div className="converter__arrows">
                  <svg width="53" height="18">
                    <use href={sprites + "#arrow-left"}/> 
                  </svg>
                  <svg width="53" height="18">
                    <use href={sprites + "#arrow-right"}/> 
                  </svg>
                </div>
              )
            }
  
            <fieldset className="converter__block">
              <legend className="converter__lable">Хочу преобрести</legend>
              <div className="converter__wrap">

                <CurrencyInput
                  iValue={iWantValue}
                  onChangeValue={this.changeSecondCurrencyValue}
                  isDisabled={isDisabledForm}
                />

                <CurrencySelect
                  currencies={CURRENCIES}
                  currentValue={wantCarrency}
                  onChangeValue={this.changeSecondCurrencyName}
                  isDisabled={isDisabledForm}
                />

              </div>
            </fieldset>
          </div>
  
          <div className="converter__row">

            <DateSelect
              currentDate={currentDate}
              isDisabled={isDisabledForm}
              possibleDates={dateList}
              onChangeValue={this.changeCurrentDate}
            />
        
            <button
              className="converter__btn"
              type="button"
              disabled={isDisabledForm}
              onClick={() => saveResult(
                {
                  currentDate,
                  iHaveValue,
                  haveCarrency,
                  iWantValue,
                  wantCarrency
                }
              )}
            >
              Сохранить результат</button>
        
          </div>
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  iHaveValue: getIhaveValue(state),
  iWantValue: getIWantValue(state),
  haveCarrency: getHaveCurrencyValue(state),
  wantCarrency: getWantCurrencyValue(state),
  currentDate: getCurrentDate(state),
  rateIndex: getRateIndex(state),
  isDisabledForm: getIsConverterDisabled(state),
  dateList: getDateList(state)
});

const mapDispachToProps = (dispatch) => ({
  onChangeIhaveValue(iHaveValue) {
    dispatch(changeIhaveValueAction(iHaveValue));
  },
  onChangeIwantValue(iWantValue) {
    dispatch(changeIwantValueAction(iWantValue));
  },
  onChangeHaveCurrencyValue(haveCurrencyValue) {
    dispatch(changeHaveCurrencyAction(haveCurrencyValue));
  },
  changeSecondCurrencyName(wantCurrencyValue) {
    dispatch(changeWantCurrencyAction(wantCurrencyValue));
  },  
  onSetCurrentDate(date) {
    dispatch(setCurrentDateAction(date));
  },
  getCurrencyList() {
    dispatch(getCarencyListAction());
  },
  saveResult(result) {
    dispatch(saveResultAction(result));
  } 

});


export default connect(mapStateToProps, mapDispachToProps)(Converter);
