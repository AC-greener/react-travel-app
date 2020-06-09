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
import HotSpotDetail from './pages/hotspotdetail/index'
import Personal from './pages/personal/index'
import DesDetail from './pages/desdetail/index'
import DashBoard from './pages/admin/index'
import HotelOrderAdmin from './pages/admin/hotelorder'
import DesOrderAdmin from './pages/admin/desorder'
import MessageAdmin from './pages/admin/message'
import DesAdmin from './pages/admin/desinfo'
import HotelAdmin from './pages/admin/hotelinfo'
import AdminLogin from './pages/admin/login/index'

import store from './store/index'
const App = () => {
  return (
    <Provider store={store}>  
      <BrowserRouter>
        <div className="App">
          <Route path='/' exact component={ Home } />
          <Route path='/bbs' exact component={ Bbs }></Route>
          <Route path='/hotel' exact component={ Hotel }></Route>
          <Route path='/desti' exact component={ Destination }></Route>
          <Route path='/desti/detail/:id' exact component={ DesDetail }></Route>
          <Route path='/personal' exact component={ Personal }></Route>
          <Route path='/hotel/detail/:id' exact component={ HotelDetail }></Route>
          <Route path='/topic/detail/:id' exact component={ HotTopicDetail }></Route>
          <Route path='/spot/detail/:id' exact component={ HotSpotDetail }></Route>
          <Route path='/recline' exact component={ RecommendLine }></Route>
          <Route path='/recline/detail/:id' exact component={ RecommendLineDetail }></Route>
          <Route path='/login' exact component={ Login }></Route>
          <Route path='/regist' exact component={ Regist }></Route>
          <Route path='/admin' exact component={ DashBoard }></Route>
          <Route path='/admin/hotelorder' exact component={ HotelOrderAdmin }></Route>
          <Route path='/admin/desorder' exact component={ DesOrderAdmin }></Route>
          <Route path='/admin/message' exact component={ MessageAdmin }></Route>
          <Route path='/admin/des' exact component={ DesAdmin }></Route>
          <Route path='/admin/hotel' exact component={ HotelAdmin }></Route>
          <Route path='/admin/login' exact component={ AdminLogin }></Route>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
