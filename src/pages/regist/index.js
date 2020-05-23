import React, { Component } from 'react'
import 'antd/dist/antd.css'
import './style.css'
import axios from 'axios'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import {
  WeiboOutlined,
  WechatOutlined,
  QqOutlined,
  PhoneOutlined
} from '@ant-design/icons'
import { Input, Button, message, Form, Icon } from 'antd'
class Regist extends Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.login(values)
      }
    });
  };
  login(data) {
    axios.post('http://127.0.0.1:7001/api/regist', data)
      .then(res => {
        console.log(res.data)
        if(res.data.data === 0) {
          message.error('该用户已注册!')
        } else {
          message.success('注册成功!')
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    const { getFieldDecorator } = this.props.form
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
              <Link to="/login">
                <span className="signin-btn" style={{color: '#969696'}}>登录</span>
              </Link>
              <span className='point'>.</span>
              <span className="regist-btn active">注册</span>
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
                {getFieldDecorator('tel', {
                  rules: [{ required: true, message: ' ' }],
                })(
                  <Input
                    style={{width: '300px', color: 'rgba(0,0,0,.25)' }}
                    prefix={<PhoneOutlined />}
                    type="tel"
                    placeholder="手机号"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="button regist">
                  注册
                </Button>
              </Form.Item>
            </Form>
            {/* <Input className="input username" size="large" prefix={<UserOutlined />} placeholder="用户名" />
            <Input style={{width: '300px', marginBottom: '10px'}} size="large" prefix={<PhoneOutlined />} placeholder="手机号" />
            <Input style={{width: '300px'}} size="large"  prefix={<LockOutlined />} placeholder="密码" />
            <Button className="button regist" type="primary" block>
              注册
            </Button> */}
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
  return {
  }
}


// 分发事件
const mapDispatchToProps = (dispatch) => {
  return {
      handleInputBlur() {
          // dispatch(actionCreators.searchBlur())
      }
  }
}
Regist = Form.create({})(Regist)
export default connect(mapStateProps, mapDispatchToProps)(Regist)
