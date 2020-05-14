import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { BrowserRouter, Route, Link } from "react-router-dom"
import { Provider } from 'react-redux'
import Login from './pages/login/index'
import Regist from './pages/regist/index'
import Home from './pages/home/index'
import Bbs from './pages/bbs/index'
import RecommendLine from './pages/recmmendline/index'
import Header from './common/header/index'
import store from './store/index'
const App: React.FC = () => {
  return (
    <Provider store={store}>  
      <BrowserRouter>
        <div className="App">
          {/* <Header /> */}
          <Route path='/' exact component={ Home } />
          <Route path='/bbs' exact component={ Bbs }></Route>
          <Route path='/recline' exact component={ RecommendLine }></Route>
          <Route path='/login' exact component={ Login }></Route>
          <Route path='/regist' exact component={ Regist }></Route>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
