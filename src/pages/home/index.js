import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './style.css'
import { Layout, Menu, Breadcrumb, Carousel } from 'antd';
import Header from '../../common/header/index'
import HotTopic from './hotTopic'
const { Content, Footer } = Layout;
class Home extends Component  {
  render () {
    return (
      <Layout className="layout">
          <Header />
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
              <HotTopic />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
  }
}

export default Home;
