import React from 'react';
import { DatePicker, TimePicker, Calendar } from 'antd';
import format from 'moment';
import './App.css';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const App: React.FC = () => {
  function onChange(date: any, dateString: any) {
    console.log(date, dateString);
  }
  function onPanelChange(value: any, mode: any) {
    console.log(value, mode);
  }
  return (
    <div className="App">
      <div>
        <DatePicker onChange={onChange} />
        <br />
        <MonthPicker onChange={onChange} placeholder="Select month" />
        <br />
        <RangePicker onChange={onChange} />
        <br />
        <WeekPicker onChange={onChange} placeholder="Select week" />
      </div>
      <Calendar onPanelChange={onPanelChange} />
      <div>
        <TimePicker defaultValue={format('12:08:23', 'HH:mm:ss')} size="large" />
        <TimePicker defaultValue={format('12:08:23', 'HH:mm:ss')} />
        <TimePicker defaultValue={format('12:08:23', 'HH:mm:ss')} size="small"/>
      </div>
    </div>
  );
}

export default App;
