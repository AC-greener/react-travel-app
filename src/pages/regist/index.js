import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './style.css'
import { Link } from "react-router-dom"
// import { actionCreators } from './store/index';
import { connect } from 'react-redux';
// import {
//   Hello,
// } from './style'
import {
  WeiboOutlined,
  WechatOutlined,
  QqOutlined
} from '@ant-design/icons';
import { Layout, Row, Col,  Input, Button } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
class Regist extends Component {
  render() {
    return (
      <div className="wrapper">
          <div style={{position: "absolute", top: '-23px'}}>
            <svg class="icon" style={{width: '13em', height: '13em'}} aria-hidden="true">
                <use xlinkHref="#icon-qiongyou"></use>
            </svg>
          </div>
          <div className="card">
            <div className="sign-wrapper">
              <Link to="/login">
                <span className="signin-btn" style={{color: '#969696'}}>登录</span>
              </Link>
              <span className='point'>.</span>
              <span className="regist-btn active">注册</span>
            </div>
            <Input className="input username" size="large" placeholder="用户名" />
            <Input style={{width: '300px', marginBottom: '10px'}} size="large" placeholder="手机号" />
            <Input style={{width: '300px'}} size="large" placeholder="密码" />
            <Button className="button regist" type="primary" block>
              注册
            </Button>
            <div className="shejiao regist">
              社交账号注册
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
          // dispatch(actionCreators.searchBlur());
      }
  }
}

export default connect(mapStateProps, mapDispatchToProps)(Regist);
