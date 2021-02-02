export const CURRENCIES = ['RUB', 'USD', 'EUR', 'GBP', 'CNY'];

export const MAX_HISTORY_LENGTH = 10;

export const  NUMBER_OF_DAYS_AGO = 7;

export const CALCULATION_ACCURACY = 4;

export const AppRoute = {
  SERVICE: '/service',
  CREDIT: '/credit',
  CONVERTER: '/',
  CONTACTS: '/contacts',
  QUESTION: '/question',
  LOGIN: '/login'
}

export const MENU_LIST = [
  {name: 'Услуги', path: AppRoute.SERVICE, id:1},
  {name: 'Расчитать кредит', path: AppRoute.CREDIT, id:2},
  {name: 'Конвертер валют', path: AppRoute.CONVERTER, id:3},
  {name: 'Контакты', path: AppRoute.CONTACTS, id:4},
  {name: 'Задать вопрос', path: AppRoute.QUESTION, id:5}
];

