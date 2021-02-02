import {getDateList} from '../utils';
import {CALCULATION_ACCURACY} from '../const';

export const ActionType = {
  SET_PERIOD: 'SET_PERIOD',
  CHANGE_I_HAVE_VALUE: 'CHANGE_I_HAVE_VALUE',
  CHANGE_I_WANT_VALUE: 'CHANGE_I_WANT_VALUE',
  CHANGE_HAVE_CURRENCY: 'CHANGE_HAVE_CURRENCY',
  CHANGE_WANT_CURRENCY: 'CHANGE_WANT_CURRENCY',
  SET_CURRENT_DATE: 'SET_CURRENT_DATE',
  SET_IS_CONVERTER_DISABLED: 'SET_IS_CONVERTER_DISABLED',
  ADD_RATES: 'ADD_RATES',
  SET_DATE_LIST: 'SET_DATE_LIST',
  SAVE_RESULT: 'SAVE_RESULT',
  CLEAR_HISTORY: 'CLEAR_HISTORY'
};

export const setPeriodAction = (period) => ({
  type: ActionType.SET_PERIOD,
  payload: period
});

export const changeIhaveValueAction = (value) => ({
  type: ActionType.CHANGE_I_HAVE_VALUE,
  payload: value
});

export const changeIwantValueAction = (value) => ({
  type: ActionType.CHANGE_I_WANT_VALUE,
  payload: value
});

export const changeHaveCurrencyAction = (value) => ({
  type: ActionType.CHANGE_HAVE_CURRENCY,
  payload: value
});

export const changeWantCurrencyAction = (value) => ({
  type: ActionType.CHANGE_WANT_CURRENCY,
  payload: value
});

export const setCurrentDateAction = (date) => ({
  type: ActionType.SET_CURRENT_DATE,
  payload: date
});

export const setIsConverterDisabledAction = (isDisabled) => ({
  type: ActionType.SET_IS_CONVERTER_DISABLED,
  payload: isDisabled
});

export const addRatesAction = (rates) => ({
  type: ActionType.ADD_RATES,
  payload: rates
});

export const setDateListAction = (dateList) => ({
  type: ActionType.SET_DATE_LIST,
  payload: dateList
});

export const saveResultAction = (result) => ({
  type: ActionType.SAVE_RESULT,
  payload: result
});

export const clearHistoryAction = () => ({
  type: ActionType.CLEAR_HISTORY
});

export const initApp = () => (dispatch, _getState, api) => {
  const state = _getState();

  dispatch(setIsConverterDisabledAction(true));

  api.getCurrencyList(state.period.start, state.period.end, state.haveCurrency)
    .then((rates) => {
      const dateList = getDateList(rates.rates);
      dispatch(setDateListAction(dateList));
      dispatch(setCurrentDateAction(dateList[0]));
      dispatch(addRatesAction(rates));
      dispatch(changeIwantValueAction((state.iHaveValue * rates.rates[dateList[0]][state.wantCurrency]).toFixed(CALCULATION_ACCURACY)));
      dispatch(setIsConverterDisabledAction(false));
    })
    .catch((err) => {
      console.log('Ошибка инициализации:' + err);
    })

}

export const getCarencyListAction = () => (dispatch, _getState, api) => {
  const state = _getState();

  const {rates} = state;

  const res = rates.find((item) => {
    return item.base === state.haveCurrency;
  }); 

  if (!res) {
    dispatch(setIsConverterDisabledAction(true));

    api.getCurrencyList(state.period.start, state.period.end, state.haveCurrency)
      .then((rates) => {
        const dateList = getDateList(rates.rates);
        dispatch(setDateListAction(dateList));
        dispatch(addRatesAction(rates));
        const rateIndex = rates.rates[state.dateList[0]][state.wantCurrency] ? rates.rates[state.dateList[0]][state.wantCurrency] : 1;
        dispatch(changeIwantValueAction((state.iHaveValue * rateIndex).toFixed(CALCULATION_ACCURACY)));
        dispatch(setIsConverterDisabledAction(false));
      })
      .catch((err) => {
        console.log('Ошибка получения данных' + err);
        dispatch(setIsConverterDisabledAction(false));
      })
  } else {
    
    const rateIndex = res.rates[state.currentDate][state.wantCurrency] ? res.rates[state.currentDate][state.wantCurrency] : 1;
    const dateList = getDateList(res.rates);

    dispatch(setDateListAction(dateList));
    dispatch(changeIwantValueAction((state.iHaveValue *  rateIndex.toFixed(CALCULATION_ACCURACY))));
  }
};
