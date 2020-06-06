import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import './style.css'
import { Layout, Menu, Avatar, Icon } from 'antd'
const { Header } = Layout

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
          <Menu.Item key="1">
            <Link to='/desti' style={{color: '#fff'}}>
            目的地
            </Link>
          </Menu.Item>
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
            { this.props.login ? 
              <Menu.Item  className="nav-person" key="7">
                <Link to='/personal' style={{color: '#fff'}}>
                  <div>
                    <Avatar style={{marginBottom: '3px',marginRight: '5px', width: '27px', height: '27px'}} size='small' src='/static/avatar-person2.jpg' />
                    <span style={{fontSize: '14px'}}>{this.props.username}</span>
                  </div>
                </Link>
            </Menu.Item> :
            <>
              <Menu.Item style={{marginLeft: '12px'}} className="nav-regist" key="6">
                <Link to='/regist' style={{color: '#fff'}}>
                  注册
                </Link>
              </Menu.Item>
              <Menu.Item className='nav-login' key="5">
                <Link to='/login' style={{color: '#fff'}}>
                  登录
                </Link>
              </Menu.Item>
            </>
            }
            </Menu>
      </Header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.get('login').isLogin,
    // login: true,
    username: 'admin'
    // username: state.get('login').username
  }
}
export default connect(mapStateToProps)(Heade)
