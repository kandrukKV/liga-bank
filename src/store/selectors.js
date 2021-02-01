export const getIhaveValue = (state) => state.iHaveValue;

export const getIWantValue = (state) => state.iWantValue;

export const getHaveCurrencyValue = (state) => {
  return state.haveCurrency;
};

export const getWantCurrencyValue = (state) => state.wantCurrency;

export const getCurrentDate = (state) => state.currentDate;

export const getRateIndex = (state) => {
  if (state.haveCurrency === state.wantCurrency) {
    return 1;
  }

  const element = state.rates.find(item => item.date === state.currentDate && item.base === state.haveCurrency);

  if (element) {
    return element.rates[state.wantCurrency]
  }

  return 1;
};

export const getIsConverterDisabled = (state) => state.isConverterDisabled;

export const getDateList = (state) => state.dateList;

export const getHistory = (state) => state.history;
