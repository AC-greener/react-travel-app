import React from 'react'
import { PageHeader,  Col, Tag, Typography, Row, Form, Input, Button, Avatar,message } from 'antd'
import axios from 'axios'
import './style.css'
import { replyUrl } from '../../config/index'
import {connect} from 'react-redux'
const { Paragraph } = Typography

const Content = ({ children, extraContent }) => {
  return (
    <Row className="content" type="flex">
      <div className="main" style={{ flex: 1 }}>
        {children}
      </div>
      <div
        className="extra"
        style={{
          marginLeft: 80,
        }}
      >
        {extraContent}
      </div>
    </Row>
  );
};
 class JiebanList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showComment: false
    }
  }
  showComment() {
    this.setState({
      showComment: !this.state.showComment
    })
    console.log(this.state.showComment)
  }
  handleSubmit = (e, id) => {
    console.log(e, id)
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(id)
        values.fromid = id
        values.username = this.props.username
        values.userid = this.props.userid
        console.log('Received values of form: ', values)
        this.postMeaageBoard(values)
      }
    })
  }
  postMeaageBoard(values) {
    axios.post(replyUrl, values)
      .then(res => {
        message.success('留言成功!')
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        {
          this.props.list.map((item, index) => {
            return (
            <PageHeader
              key={index}
              title={item.username}
              style={{
                border: '1px solid rgb(235, 237, 240)',
              }}
              tags={<Tag color="blue">Running</Tag>}
              avatar={{ src: '/static/avatar-person3.jpg' }}
            >
              <Content>
                <div className="content">
                  <Paragraph>
                    {item.content}
                  </Paragraph>
                  {
                  this.props.isjieban ?
                    <Row gutter={16} style={{marginBottom: '15px'}}>
                      <Col span={8} gutter={2}>
                        出发时间 &nbsp;
                        <svg style={{width: '16px', hright: '16px'}} className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-shijian"></use>
                        </svg>&nbsp;: &nbsp;
                        {new Date(item.startday).toLocaleDateString()}</Col>
                      <Col span={8}>
                        地点 &nbsp;
                        <svg style={{width: '16px', hright: '16px'}} className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-weizhi"></use>
                        </svg>&nbsp;: &nbsp;
                        { item.startlocation }
                      </Col>
                    </Row>
                  : <></>
                }
                  <Row className="contentLink" type="flex">
                    <a
                      onClick={() => {this.showComment()}}
                      style={{
                        marginRight: 16,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                        <svg style={{width: '18px', height: '18px'}} className="icon" aria-hidden="true">
                            <use xlinkHref='#icon-pinglun'></use>
                        </svg>
                    </a>
                    <a
                      style={{
                        marginRight: 16,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <svg style={{ width: '18px', height: '18px' }} className="icon" aria-hidden="true">
                          <use xlinkHref='#icon-zan'></use>
                      </svg>
                    </a>
                  </Row>
                  {/* {
                    this.state.showComment ? 1 : 2
                  } */}
                  {
                    item.reply.map((message, index2) => {
                      return (
                        <Row key={index2} className='reply-wrapper'>
                          <div className='username'>
                          <Avatar style={{marginBottom: '6px'}} src="/static/avatar-person.jpg" />&nbsp;&nbsp;
                            { message.username }
                          </div>
                          <div>
                            <span>回复 {item.username} : </span>
                            <span>{message.content}</span>
                          </div>
                        </Row>
                      )
                    })
                  }
                  <Row>
                  <Form style={{ paddingTop: '20px'}}
                    onSubmit={(e) => {this.handleSubmit(e, item.id)}}
                    name="basic"  >
                    <Form.Item>
                      { getFieldDecorator('content', {
                        rules: [{ required: true, message: ' ' }],
                        })(
                          <Input.TextArea rows={3}  style={{width: '440px'}}/>
                      )}
                    </Form.Item>
                    <Form.Item style={{marginTop: '-21px'}}>
                      <Button className='submit' type="primary" htmlType="submit">
                        回复
                      </Button>
                    </Form.Item>
                  </Form>
                  </Row>
                </div>
              </Content>
            </PageHeader>
            )
          })
        }
      </div>
   
    )
  }
}
const mapStateToProps = (state) => {
  return {
    username: state.get('login').username,
    userid: state.get('login').id
  }
}
JiebanList = Form.create({})(JiebanList)
export default connect(mapStateToProps)(JiebanList)

 