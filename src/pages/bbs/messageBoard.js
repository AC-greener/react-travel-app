import React from 'react'
import './style.css'
import fromBorder from '../../static/formBorder.png'
import {  Col, Switch, Button, Form, Input, DatePicker, message} from 'antd'
import axios from 'axios'
import {  userMessageUrl } from '../../config/index'
import { connect } from 'react-redux'

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
      isCompanion: false
    }
  }
  onChange(checked) {
    this.setState({
      isCompanion: checked
    })
  }
  postMeaageBoard(values) {
    axios.post(userMessageUrl, values)
    .then(res => {
      message.success('提交成功！')
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.username = this.props.username
        values.userid = this.props.userid
        console.log('Received values of form: ', values)
        // console.log(values.startday.toString())
        // values.startday = values.startday.toString()
        this.postMeaageBoard( values)
      }
    })
  }
  handleFormFail() {

  }
  render () {
    const { getFieldDecorator } = this.props.form
    return (
          <Col className="message-board"  span={16} offset={4} id='col-message-board'>
           <h2>
            在线留言
           </h2>
           <div className='form-wrapper' style={{backgroundImage: `url(${fromBorder})`}}>
            <Form className='bbs-form' 
              onSubmit={this.handleSubmit}
              {...layout} name="basic"  >
              <Form.Item
                name="email"
                label="邮箱"
              >
                {getFieldDecorator('email', {
                  rules: [{ required: true, message: ' ' }],
                  })(
                  <Input  style={{width: '280px'}}/>,
                )}
              </Form.Item>
              <Form.Item
                name='iscompanion'
                label="结伴出游">
                  {getFieldDecorator('iscompanion', {
                    })(
                      <Switch defaultChecked={false} onChange={(checked) => {this.onChange(checked)}} />
                  )}
              </Form.Item>
              {
                this.state.isCompanion ?
                <>
                  <Form.Item
                    name='location'
                    label="出发地点"
                  >
                    {getFieldDecorator('startlocation', {
                      rules: [{ required: true, message: ' ' }],
                      })(
                      <Input  style={{width: '280px'}}/>,
                    )}
                  </Form.Item>
                  <Form.Item
                    label="出发日期"
                    name='startday'
                  >
                   {getFieldDecorator('startday', {
                      rules: [{ required: true, message: ' ' }],
                      })(
                        <DatePicker style={{width: '280px'}}  />
                    )}
                  </Form.Item>
                </> : null
              }
              <Form.Item 
                name='content'
                label="留言内容"
                rules={[{ required: true, message: ' ' }]}
              >
                {getFieldDecorator('content', {
                  rules: [{ required: true, message: ' ' }],
                  })(
                    <Input.TextArea rows={6}  style={{width: '280px'}}/>
                )}
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
const  mapStateToProps = (state) => {
  return {
    username: state.get('login').username,
    userid: state.get('login').id,
  }
}
MessageBoard= Form.create({})(MessageBoard)
export default connect(mapStateToProps)(MessageBoard)
