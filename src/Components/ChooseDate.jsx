import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function ChooseDate({children}) {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
        <label className="textSmallLabel">{children}: </label>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    </div>
  );
}

export default ChooseDate;
