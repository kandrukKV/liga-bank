import {ActionType} from './action';
import {extend, saveResult, getStartDate, getEndDate} from '../utils';


const end = getEndDate();
const start = getStartDate(end);

const initialState = {
  period: {start, end},
  isConverterDisabled: false,
  iHaveValue: 1000,
  iWantValue: '',
  haveCurrency: 'RUB',
  wantCurrency: 'USD',
  currentDate: '',
  dateList: [],
  rates: [],
  history: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_PERIOD:
      return extend(state, {
        period: action.period
      });
    case ActionType.CHANGE_I_HAVE_VALUE:
      return extend(state, {
        iHaveValue: action.payload
      });
    case ActionType.CHANGE_I_WANT_VALUE:
      return extend(state, {
        iWantValue: action.payload
      });
    case ActionType.CHANGE_HAVE_CURRENCY:
      return extend(state, {
        haveCurrency: action.payload
      });
    case ActionType.CHANGE_WANT_CURRENCY:
      return extend(state, {
        wantCurrency: action.payload
      });
    case ActionType.SET_CURRENT_DATE:
      return extend(state, {
        currentDate: action.payload
      });
    case ActionType.SET_IS_CONVERTER_DISABLED:
      return extend(state, {
        isConverterDisabled: action.payload
      });
    case ActionType.ADD_RATES:
      const newRates = state.rates.slice();
      newRates.push(action.payload);
      return extend(state, {
        rates: newRates
      });
    case ActionType.SET_DATE_LIST:
      return extend(state, {
        dateList: action.payload
      });
    case ActionType.SAVE_RESULT:
      return extend(state, {
        history: saveResult(state.history, action.payload)
      });
    case ActionType.CLEAR_HISTORY:
      return extend(state, {
        history: []
      });
      
    default:
      return state;
  }
}