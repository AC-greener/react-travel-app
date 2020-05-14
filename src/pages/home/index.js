import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './style.css'
import { Layout, Menu, Breadcrumb, Carousel } from 'antd';
import Header from '../../common/header/index'
import Footer from '../../common/footer/index'
import HotTopic from './hotTopic'
import HotSpots from './hotSpots'
import HotHotel from './hotHotel'
const { Content } = Layout;
class Home extends Component  {
  render () {
    return (
      <Layout className="layout">
          <Header bbs={ true } />
          <Carousel  autoplay>
            <div>
              <img src={require('../../static/c1.jpg')}></img>
            </div>
            <div>
              <img src={require('../../static/c2.jpg')}></img>
            </div>
            <div>
              <img src={require('../../static/c3.jpg')}></img>
            </div>
            <div>
              <img src={require('../../static/c4.jpg')}></img>
            </div>
          </Carousel>
          <Content style={{ marginTop: '20px', padding: '0 50px', border: '1px solid red' }}>
            <div className="site-layout-content">
              <HotSpots />
              <HotTopic />
              <HotHotel/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}> Created by tongtong 2020</Footer>
        </Layout>
    )
  }
}

export default Home;
