import PropTypes from 'prop-types';
import './currency-select.scss';

const CurrencySelect = ({currencies, currentValue, isDisabled, onChangeValue}) => {

  return(
    <div className="currency-select">
      <select
        value={currentValue}
        className="currency-select__list"
        disabled={isDisabled}
        onChange={(evt) => {
          onChangeValue(evt.target.value)
        }}
      >
        {
          currencies.map((item, idx) => {
              return <option key={'carr-' + idx} className="currency-select__item" name="ru">{item}</option>
            }
          )
        }
      </select>
      <svg className="currency-select__icon" width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L9 9L17 1" stroke="#1F1E25" strokeWidth="2"/>
      </svg>
    </div>
  );
}

CurrencySelect.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentValue: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default CurrencySelect;
