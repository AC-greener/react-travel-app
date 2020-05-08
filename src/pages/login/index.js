import React, { Component } from 'react';
import { Link } from "react-router-dom"
import 'antd/dist/antd.css';
import './style.css'
import { actionCreators } from './store/index';
import { connect } from 'react-redux';
// import {
//   Hello,
// } from './style'
import {
  WeiboOutlined,
  WechatOutlined,
  QqOutlined,
  UserOutlined,
  LockOutlined
} from '@ant-design/icons';
import { Layout, Row, Col,  Input, Button } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
class Login extends Component {
  render() {
    return (
      <div className="wrapper">
          <Link to="/">
            <div style={{position: "absolute", top: '-23px'}}>
                <svg class="icon" style={{width: '13em', height: '13em'}} aria-hidden="true">
                    <use xlinkHref="#icon-qiongyou"></use>
                </svg>
              </div>
          </Link>
          <div className="card">
            <div className="sign-wrapper">
              <span className="signin-btn active">登录</span>
              <span className='point'>.</span>
              <Link to="/regist">
                <span className="regist-btn" style={{color: '#969696'}}>注册</span>
              </Link>
            </div>
            <Input className="input username" size="large" prefix={<UserOutlined />} placeholder="用户名" />
            <Input style={{width: '300px'}} size="large" prefix={<LockOutlined />} placeholder="密码" />
            <Button className="button login" type="primary" block>
              登录
            </Button>
            <div className="shejiao login">
              社交账号登录
            </div>
            <div>
              <WeiboOutlined style={{fontSize: '30px', color: 'rgb(224, 84, 68)', margin: '10px 25px'}} />  
              <WechatOutlined style={{ fontSize: '30px', color: 'rgb(0, 187, 41)', margin: '10px 25px'}} />
              <QqOutlined style={{fontSize: '30px', color: 'rgb(73, 138, 213)', margin: '10px 25px'}} />
            </div>
          </div>
      </div>
    );
  }
}

const mapStateProps = (state) => {
  console.log(state.get("login").focused)
  return {
      focused: state.get("login")["focused"],
  }
}


// 分发事件
const mapDispatchToProps = (dispatch) => {
  return {
      handleInputBlur() {
          dispatch(actionCreators.searchBlur());
      }
  }
}

export default connect(mapStateProps, mapDispatchToProps)(Login);
