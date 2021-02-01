import {CURRENCIES} from '../const';

const BASE_URL = 'https://api.exchangeratesapi.io/history';

class CurrencyAPI {
  async getCurrencyList(startDate, enddDate, baseSymbol) {

    const currencyPairs = CURRENCIES.filter((item) => item !== baseSymbol).join(',');

    const url = `${BASE_URL}?start_at=${startDate}&end_at=${enddDate}&symbols=${currencyPairs}&base=${baseSymbol}`;

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error('Ошибка сервера ', res.status);
    }

    return await res.json();
  }
}

export default CurrencyAPI;
