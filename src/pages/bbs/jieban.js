import React from 'react'
import { PageHeader,  Col, Tag, Typography, Row, Form, Input, Button } from 'antd'
import axios from 'axios'
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
    console.log(props)
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
        values.fromid = id
        console.log('Received values of form: ', values)
        this.postMeaageBoard(values)
      }
    })
  }
  postMeaageBoard(values) {
    axios.post('http://127.0.0.1:7002/api/reply', values)
      .then(res => {
        console.log('回复成功')
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
              // subTitle="This is a subtitle"
              tags={<Tag color="blue">Running</Tag>}
              avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
            >
              <Content>
                <div className="content">
                  <Paragraph>
                    {item.content}
                  </Paragraph>
                  <Row gutter={16} style={{marginBottom: '15px'}}>
                    <Col span={8} gutter={2}>
                      出发时间 &nbsp;
                      <svg style={{width: '16px', hright: '16px'}} className="icon" aria-hidden="true">
                          <use xlinkHref="#icon-shijian"></use>
                      </svg>&nbsp;: &nbsp;
                      {item.startday.slice(0, 10)}</Col>
                    <Col span={8}>
                      地点 &nbsp;
                      <svg style={{width: '16px', hright: '16px'}} className="icon" aria-hidden="true">
                          <use xlinkHref="#icon-weizhi"></use>
                      </svg>&nbsp;: &nbsp;
                      { item.startlocation }
                    </Col>
                  </Row>
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
                  <Row>
                  <Form style={{ paddingTop: '20px'}}
                    onSubmit={(e) => {this.handleSubmit(e, item.id)}}
                    name="basic"  >
                    <Form.Item 
                      // name='content'
                    >
                      { getFieldDecorator('content', {
                        rules: [{ required: true, message: ' ' }],
                        })(
                          <Input.TextArea rows={3}  style={{width: '440px'}}/>
                      )}
                    </Form.Item>
                    <Form.Item style={{marginTop: '-21px'}}>
                      <Button className='submit' type="primary" htmlType="submit">
                        发布
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
JiebanList = Form.create({})(JiebanList)
export default JiebanList

 