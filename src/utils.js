import {CURRENCIES, MAX_HISTORY_LENGTH} from './const';

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const addZero = (num) => num <= 9 ? `0` + num : num;

export const getDateList = (currentDate) => {
  
  const result = [];
  const dayMilliseconds = 24*60*60*1000;
  const date = new Date(currentDate);

  result.push(`${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`)

  for (let i = 1; i < 7; i++) {
    date.setTime(date.getTime() - dayMilliseconds);
    result.push(`${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`)
  }

  return result;
};

export const getTodaysDate = () => {
  const date = new Date();
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
