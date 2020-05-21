import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './style.css'
import { Layout, Menu } from 'antd';
const { Header } = Layout;

class Heade extends Component  {
  render () {
    let headerClass = 'header-nav'
    if (this.props.bbs) {
      headerClass += ' bbs'
    }
    return (
      <Header className={headerClass}>
            <div className="logo">
              <Link to="/">
              <div style={{position: "absolute", top: '-45px', left: '0px'}}>
                  <svg className="icon" style={{width: '10em', height: '10em', color: 'white'}} aria-hidden="true">
                      <use xlinkHref="#icon-qiongyou-copy"></use>
                  </svg>
                </div>
            </Link>
            </div>
            <Menu className="menu" style={{marginLeft: '67px'}} theme="light" mode="horizontal" defaultSelectedKeys={[this.props.activeNav]}>
              <Menu.Item key="1">目的地</Menu.Item>
              <Menu.Item key="2">
              <Link to='/hotel' style={{color: '#fff'}}>
                酒店/民宿
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to='/bbs' style={{color: '#fff'}}>
                旅行论坛
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to='/recline' style={{color: '#fff'}}>
                线路推荐
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to='/login' style={{color: '#fff'}}>
                登录
                </Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to='/regist' style={{color: '#fff'}}>
                注册
                </Link>
              </Menu.Item>
            </Menu>
          </Header>
    )
  }
}

export default Heade;
