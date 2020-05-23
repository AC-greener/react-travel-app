import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { BrowserRouter, Route } from "react-router-dom"
import { Provider } from 'react-redux'
import Login from './pages/login/index'
import Regist from './pages/regist/index'
import Home from './pages/home/index'
import Bbs from './pages/bbs/index'
import RecommendLineDetail from './pages/reclinedetail/index'
import RecommendLine from './pages/recmmendline/index'
import Hotel from './pages/hotel/index'
import HotelDetail from './pages/hoteldetail/index'
import HotTopicDetail from './pages/hottopic/index'
import Destination from './pages/destination/index'

import store from './store/index'
const App: React.FC = () => {
  return (
    <Provider store={store}>  
      <BrowserRouter>
        <div className="App">
          <Route path='/' exact component={ Home } />
          <Route path='/bbs' exact component={ Bbs }></Route>
          <Route path='/hotel' exact component={ Hotel }></Route>
          <Route path='/desti' exact component={ Destination }></Route>
          <Route path='/hotel/detail/:id' exact component={ HotelDetail }></Route>
          <Route path='/topic/detail/:id' exact component={ HotTopicDetail }></Route>
          <Route path='/recline' exact component={ RecommendLine }></Route>
          <Route path='/recline/detail/:id' exact component={ RecommendLineDetail }></Route>
          <Route path='/login' exact component={ Login }></Route>
          <Route path='/regist' exact component={ Regist }></Route>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
