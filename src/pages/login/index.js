import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom"
import 'antd/dist/antd.css';
import './style.css'
import { connect } from 'react-redux';
import axios from 'axios'
import { loginUrl } from '../../config/index'
import {
  WeiboOutlined,
  WechatOutlined,
  QqOutlined,
} from '@ant-design/icons'
import {  Input, Button, Form, Icon, message} from 'antd'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.login(values)
      }
    })
  }
  login(data) {
    axios.post(loginUrl, data)
    .then(res => {
      if(res.data.data === 0) {
        message.error('该用户不存在!')
      } else {
        console.log(res.data.data)
        this.props.login(res.data.data)
        message.success('登录成功,即将跳转到首页!', 1.5)
        setTimeout(() => {
          this.setState({redirect: true})
        }, 1500)
      }
    })
    .catch(err => {
      message.error(err)
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    if(this.state.redirect) 
      return <Redirect to='/'/> 
    else 
      return (
      <div className="wrapper">
          <Link to="/">
            <div style={{position: "absolute", top: '-23px'}}>
                <svg className="icon" style={{width: '13em', height: '13em'}} aria-hidden="true">
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
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: ' ' }],
                })(
                  <Input
                  style={{width: '300px'}}
                    prefix={<Icon type="user"  />}
                    placeholder="用户名"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: ' ' }],
                })(
                  <Input
                  style={{width: '300px'}}
                    prefix={<Icon type="lock"  />}
                    type="password"
                    placeholder="密码"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="button login">
                  登录
                </Button>
              </Form.Item>
            </Form>
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
  return {
  }
}


// 分发事件
const mapDispatchToProps = (dispatch) => {
  return {
      login(data) {
        dispatch({type: 'login', payload: data})
      }
  }
}
Login = Form.create({})(Login)
export default connect(mapStateProps, mapDispatchToProps)(Login)
