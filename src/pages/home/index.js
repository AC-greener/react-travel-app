import React, { Component } from 'react';
import './style.css'
import { Layout, Carousel } from 'antd';
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
              <img src='/static/c1.jpg' alt='图片出错了'></img>
            </div>
            <div>
              <img src='/static/c2.jpg' alt='图片出错了'></img>
            </div>
            <div>
              <img src='/static/c3.jpg' alt='图片出错了'></img>
            </div>
            <div>
              <img src='/static/c4.jpg' alt='图片出错了'></img>
            </div>
          </Carousel>
          <Content style={{ marginTop: '20px', padding: '0 50px'}}>
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
