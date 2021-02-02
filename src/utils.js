import {MAX_HISTORY_LENGTH, NUMBER_OF_DAYS_AGO} from './const';

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
  const dayMillisecondsAgo = 24*60*60*1000*NUMBER_OF_DAYS_AGO;
  const date = new Date(endDate);
  date.setTime(date.getTime() - dayMillisecondsAgo);
  return `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
};

export const saveResult = (array, element) => {
  const result = array.slice();
  result.push(extend(element, {
    currentDate: convertDateToClient(element.currentDate)
  }));
  if (result.length > MAX_HISTORY_LENGTH) {
     result.shift();
  };
  return result;
};

export const convertDateToClient = (date) => {
  const res = date.split('-');
  return `${res[2]}-${res[1]}-${res[0]}`;
};
