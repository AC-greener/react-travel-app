import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './style.css'
import { Layout, Menu } from 'antd';
const { Header } = Layout;

class Heade extends Component  {
  render () {
    return (
      <Header className='header-nav'>
            <div className="logo">
              <Link to="/">
              <div style={{position: "absolute", top: '-45px', left: '0px'}}>
                  <svg class="icon" style={{width: '10em', height: '10em', color: 'white'}} aria-hidden="true">
                      <use xlinkHref="#icon-qiongyou-copy"></use>
                  </svg>
                </div>
            </Link>
            </div>
            <Menu className="menu" style={{marginLeft: '67px'}} theme="light" mode="horizontal" defaultSelectedKeys={[]}>
              <Menu.Item key="1">目的地</Menu.Item>
              <Menu.Item key="2">酒店/民宿</Menu.Item>
              <Menu.Item key="3">旅行论坛</Menu.Item>
              {/* <Menu.Item key="4">旅行论坛</Menu.Item> */}
              <Menu.Item key="5">登录</Menu.Item>
              <Menu.Item key="6">注册</Menu.Item>
            </Menu>
          </Header>
    )
  }
}

export default Heade;
