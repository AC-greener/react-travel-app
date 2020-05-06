import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import axios from 'axios'
import { DatePicker } from 'antd';
import Header from './common/header'
const App: React.FC = () => {
  return (
    <div className="App">
      hello world
      <Header />
      <DatePicker />
    </div>
  );
}

export default App;
