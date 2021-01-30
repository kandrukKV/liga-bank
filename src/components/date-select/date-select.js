import Flatpickr from 'react-flatpickr';
import "flatpickr/dist/themes/material_blue.css";
import './date-select.scss';
import calendar from '../../img/calendar.svg';

const DateSelect = ({minDate, currentDate}) => {
  return (
    <Flatpickr
        options={{ minDate }}
        value={currentDate}
        render={
          ({defaultValue, value, ...props}, ref) => {
            return (
              <div className="date-select">
                <label htmlFor="c_date" className="visually-hidden">Поле ввода куда</label>
                <input
                  {...props} defaultValue={defaultValue} ref={ref} 
                  className="date-select__input" 
                  type="text" 
                  id="c_date" 
                  name="input_from" 
                  value={value}
                />
                <img className="date-select__icon" src={calendar} width="41" height="44" alt="calendar-icon"/>
              </div>
            );
          }
        }
      />
  );
}

export default DateSelect;