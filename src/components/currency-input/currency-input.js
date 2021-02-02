import PropTypes from 'prop-types';
import './currency-input.scss';

const CurrencyInput = ({iValue, onChangeValue, isDisabled}) => {
  return (
    <label>
      <span className="visually-hidden">Поле ввода</span>
      <input
        className="converter__input"
        type="number"
        value={iValue}
        onChange={(evt) => {
          onChangeValue(evt.target.value)
        }}
        disabled={isDisabled}
      />
    </label>
  );
};

CurrencyInput.propTypes = {
  iValue: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onChangeValue: PropTypes.func.isRequired
}

export default CurrencyInput;
