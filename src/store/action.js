import {getTodaysDate, getDateList} from '../utils';

export const ActionType = {
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

export const getCarencyListAction = () => (dispatch, _getState, api) => {
  const state = _getState();

  const {rates} = state;

  const res = rates.find((item) => {
    return item.date === state.currentDate && item.base === state.haveCurrency;
  }); 

  if (!res) {
    dispatch(setIsConverterDisabledAction(true));

    let date = state.currentDate;
    let res = null;
    if (!date) {
      res = api.getCurrencyList(getTodaysDate(), state.haveCurrency)
        .then((rates) => {
          dispatch(setCurrentDateAction(rates.date));
          dispatch(setDateListAction(getDateList(rates.date)));
          dispatch(addRatesAction(rates));
          dispatch(changeIwantValueAction(state.iHaveValue * (rates.rates[state.wantCurrency] ? rates.rates[state.wantCurrency] : 1)));
          dispatch(setIsConverterDisabledAction(false));
        })
        .catch((err) => console.log('Error: ' + err));
      
    } else {
      res = api.getCurrencyList(date, state.haveCurrency)
        .then((rates) => {
          dispatch(addRatesAction(rates));
          dispatch(changeIwantValueAction(state.iHaveValue * (rates.rates[state.wantCurrency] ? rates.rates[state.wantCurrency] : 1)));
          dispatch(setIsConverterDisabledAction(false));
        })
    }
    res.catch((err) => {
      console.log('Error: ' + err);
      dispatch(setIsConverterDisabledAction(false));
    });

  } else {
    dispatch(changeIwantValueAction(state.iHaveValue * res.rates[state.wantCurrency]));
  }

};