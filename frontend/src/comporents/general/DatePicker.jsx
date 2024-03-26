import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateRangePicker = ({ title, setStartDate, setEndDate }) => {
  const [startDate, setStartDateLocal] = useState(null);
  const [endDate, setEndDateLocal] = useState(null);
  
  return (
    <div className='inputs  '>
      <p className='inputs-title'>{title}</p>
      <div className='datePicker'>
        <DatePicker
          className='inputs-input'
          selected={startDate}
          onChange={(date) => {
            setStartDateLocal(date);
            setStartDate(date);
          }}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="Giriş Tarihi"
          
        />

        <DatePicker
          className='inputs-input'
          selected={endDate}
          onChange={(date) => {
            setEndDateLocal(date);
            setEndDate(date);
          }}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="Çıkış Tarihi"
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
