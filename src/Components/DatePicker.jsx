import React, { useState } from 'react';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
const DatePicker = () => {
    const [value, onChange] = useState([new Date(), new Date()]);

  return (
    <div>
      <DateRangePicker onChange={onChange} value={value} />
    </div>)
};

export default DatePicker;