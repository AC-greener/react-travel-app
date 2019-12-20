import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import axios from 'axios'
import { DatePicker } from 'antd';
const App: React.FC = () => {
  return (
    <div className="App">
      <DatePicker />
    </div>
  );
}

export default App;
