import {CURRENCIES, MAX_HISTORY_LENGTH} from './const';

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const addZero = (num) => num <= 9 ? `0` + num : num;

export const getDateList = (rates) => {
  return Object.keys(rates).sort((a, b) => a > b);
};

export const getEndDate = () => {
  const date = new Date();
  return `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
};

export const getStartDate = (endDate) => {
  const sevenDayMilliseconds = 24*60*60*1000*7;
  const date = new Date(endDate);
  date.setTime(date.getTime() - sevenDayMilliseconds);
  return `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
};

export const getAllCombinationsOfArray = (array) => {
  const results = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      results.push(`${array[i]}${array[j]}`);
      results.push(`${array[j]}${array[i]}`);
    }
  }
  return results;
};

export const getAllCurrencyPairsExeptBase = (base) => {
  return CURRENCIES.filter((item) => item !== base).join(',')
};

export const saveResult = (array, element) => {
  const result = array.slice();
  result.push(element);
  if (result.length > MAX_HISTORY_LENGTH) {
     result.shift();
  };
  return result;
};
