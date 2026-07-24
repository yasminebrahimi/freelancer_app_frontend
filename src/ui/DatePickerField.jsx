import React from "react";
import DatePicker from "react-multi-date-picker";

function DatePickerField({ label, date, setDate }) {
  return (
    <div>
      <span className="mb-2 block text-secondary-700">{lable}</span>

      <DatePicker
        containerClassName="w-full"
        inputClass="textField__input"
        calendarPosition="botton-center"
        value={date}
        onChange={(date) => setDate(date)}
        format="DD/MM/YYYY"
        //calendar={}
        //locale={}
      />
    </div>
  );
}

export default DatePickerField;
