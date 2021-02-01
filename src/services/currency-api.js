import {CURRENCIES} from '../const';

const BASE_URL = 'https://api.exchangeratesapi.io';

class CurrencyAPI {
  async getCurrencyList(date, baseSymbol) {

    const currencyPairs = CURRENCIES.filter((item) => item !== baseSymbol).join(',');

    const url = `${BASE_URL}/${date}?base=${baseSymbol}&symbols=${currencyPairs}`;
   
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error('Ошибка сервера ', res.status);
    }

    return await res.json();
  }
}

export default CurrencyAPI;
