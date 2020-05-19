import React, { Component} from 'react';
import './style.css'
import fromBorder from '../../static/formBorder.png'
import {  Col, Switch, Button, Form, Input, DatePicker} from 'antd';

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
  },
}
const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
}



class MessageBoard extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      isCompanion: false
    }

  }
  onChange(value) {
    console.log(value)
    this.setState({
      isCompanion: value
    })
  }
  handleUserNameChange(value)  {
    console.log(value)
  }
  render () {
    return (
          <Col className="message-board"  span={16} offset={4}>
           <h2>
            在线留言
           </h2>
           <div className='form-wrapper a' style={{backgroundImage: `url(${fromBorder})`}}>
            <Form className='bbs-form' {...layout} name="bbs-form"  validatemessages={validateMessages}>
              <Form.Item
                name="username"
                label="您的大名*"
                rules={[{ required: true, message: '请输入您的姓名!' }]}
              >
                <Input onChange={(a) => {this.handleUserNameChange(a)}} style={{width: '280px'}}/>
              </Form.Item>
              <Form.Item
                name="email"
                label="邮箱"
                rules={[{ required: true, type: 'email', message: '请输入您的邮箱!' }]}
              >
                <Input style={{width: '280px'}}/>
              </Form.Item>
              <Form.Item
                label="结伴出游">
                <Switch  onChange={(value) => {this.onChange(value)}} />
              </Form.Item>
              {
                this.state.isCompanion ?
                <>
                  <Form.Item
                    name='location'
                    label="出发地点"
                    rules={[{ required: true, message: '请输入出发地点!' }]}
                  >
                    <Input style={{width: '280px'}}/>
                  </Form.Item>
                  <Form.Item
                    label="出发日期"
                    name='startday'
                    rules={[{ required: true, message: '请选择出发日期!' }]}
                  >
                    <DatePicker style={{width: '280px'}} onChange={this.onChange} />
                  </Form.Item>
                </> : null
              }
              <Form.Item 
                name='messagecontent' 
                label="留言内容"
                rules={[{ required: true, message: '请输入留言内容!' }]}
              >
                <Input.TextArea rows={6}  style={{width: '280px'}}/>
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button className='submit' type="primary" htmlType="submit">
                 提交留言
                </Button>
              </Form.Item>
            </Form>
           </div>
          </Col>
    )
  }
}

export default MessageBoard
