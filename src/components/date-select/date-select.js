import './date-select.scss';
import calendar from '../../img/calendar.svg';

const DateSelect = ({currentDate, possibleDates, isDisabled, onChangeValue}) => {
  return (
    <div className="date-select">
      <select
        className="date-select__list"
        value={currentDate}
        disabled={isDisabled}
        onChange={(evt) => onChangeValue(evt.target.value)}
      >
        {
          possibleDates.map((item, idx) => <option key={`opt-${idx}`} value={item}>{item}</option>)
        }
      </select>
      <img className="date-select__icon" src={calendar} width="41" height="44" alt="calendar-icon"/>
    </div>
  );
}

export default DateSelect;
