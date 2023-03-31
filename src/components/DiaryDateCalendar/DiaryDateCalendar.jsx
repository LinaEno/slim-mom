import React, { useState, forwardRef } from 'react';
import { DatePickerWrapper, Icon } from './DiaryDateCalendar.styled';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import CalendarIcon from '../../images/calendar.svg';
import { useDispatch } from 'react-redux';
import { setDate } from 'redux/diary/slice';
import moment from 'moment/moment';

export const DiaryDateCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dispatch = useDispatch();

  const handleChange = date => {
    const formattedDate = moment(date).format('yyyy-MM-DD');
    setSelectedDate(date);
    dispatch(setDate(formattedDate));
  };

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <DatePickerWrapper onClick={onClick} ref={ref}>
      {value}
      <Icon src={CalendarIcon} alt="calendar icon" />
    </DatePickerWrapper>
  ));
  return (
    <DatePicker
      selected={selectedDate}
      onChange={date => handleChange(date)}
      dateFormat="dd.MM.yyyy"
      customInput={<ExampleCustomInput />}
      maxDate={new Date()}
    />
  );
};
