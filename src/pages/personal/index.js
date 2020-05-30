import React from 'react'
import {Layout, Col, Row, Avatar, Tabs, message, Table, Button} from 'antd'
import Header from '../../common/header/index'
import {connect} from 'react-redux'
import './style.css'

import axios from 'axios'
const {Content} = Layout
const { TabPane } = Tabs

const desColumns = [
  {
    title: '景点名称',
    dataIndex: 'destation',
    key: 'destation',
    align: 'center'
  },
  {
    title: '出发时间',
    dataIndex: 'starttime',
    key: 'starttime',
    align: 'center'
  },
  {
    title: '价格',
    dataIndex: 'price',
    key: 'price',
    align: 'center'
  },

]
const hotelColumns = [
  {
    title: '酒店信息',
    dataIndex: 'hotelname',
    key: 'hotelname',
    align: 'center'
  },
  {
    title: '价格',
    dataIndex: 'price',
    key: 'price',
    align: 'center'
  },
  {
    title: '入住时间',
    dataIndex: 'starttime',
    key: 'starttime',
    align: 'center',
  },
  {
    title: '离开时间',
    dataIndex: 'endtime',
    key: 'endtime',
    align: 'center',
  },
  {
    title: '房间类型',
    dataIndex: 'roomtype',
    key: 'roomtype',
    align: 'center',
  },
]


class Personal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messageData: [],
      desData: [],
      hotelData: [],
    }
  }
  componentDidMount() {
    this.getUserMessage()
    this.getUserHotel()
    this.getUserDes()
  }

  getUserMessage() {
    axios.get('http://127.0.0.1:7001/api/message/' + this.props.userid)
      .then(res => {
        res.data.forEach((item,index) => {
          res.data[index].createdtime = new Date(item.createdtime).toLocaleDateString()
        })
        this.setState({
          messageData: res.data
        })
      })
      .catch(err => {
        message.error(err)
      })
  }

  getUserHotel() {
    axios.get('http://127.0.0.1:7001/api/order/hotel/' + this.props.userid)
      .then(res => {
        this.setState({
          hotelData: res.data
        })
      })
      .catch(err => {
        message.error(err)
      })
  }

  getUserDes() {
    axios.get('http://127.0.0.1:7001/api/order/des/' + this.props.userid)
      .then(res => {
        console.log(res.data)
        this.setState({
          desData: res.data
        })
      })
      .catch(err => {
        message.error(err)
      })
  }
  deleteUserMessage(record) {
    console.log(record)
    axios.delete('http://127.0.0.1:7001/api/message/' + record.id)
      .then(res=> {
        message.success('删除成功！')
        this.getUserMessage()
      })
      .catch(err => {
        message.error(err)
      })
  }
  render() {
    const messageColumns = [
      {
        title: '留言时间',
        dataIndex: 'createdtime',
        key: 'createdtime',
        align: 'center'
      },
      {
        title: '留言内容',
        dataIndex: 'content',
        key: 'content',
        align: 'center'
      },
      {
        title: '操作',
        key: 'action',
        align: 'center',
        render: (text, record) => (
          <span>
            <Button onClick={() => {this.deleteUserMessage(record)}}>删除</Button>
          </span>
        ),
      },
    ]
    
    return (
      <Layout className='personal'>
        <Header activeNav='7' bbs={true}/>
        <Content style={{marginTop: '50px'}}>
          <Row className='flex'>
            <Col style={{textAlign: 'center'}} span={16} >
              <img className='bg-img' src='/static/personal-bg.png'></img>
            </Col>
          </Row>
          <Row className='flex'>
            <Col style={{}}  span={16} >
              <Row>
                <Col  span={4}>
                  <Avatar className='ava'  src='/static/avatar-person2.jpg' />
                </Col>
                <Col style={{marginTop: '25px'}}  span={4}>
                   <span className='username'>pigpigpigzhu</span> 
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className='flex'>
            <Col style={{margin: '0 auto'}}  span={16} >
              <Tabs  defaultActiveKey="1">
                <TabPane tab="我的留言" key="1">
                  <Table columns={messageColumns} dataSource={this.state.messageData} />
                </TabPane>
                <TabPane tab="我的酒店" key="2">
                <Table columns={hotelColumns} dataSource={this.state.hotelData} />
                </TabPane>
                <TabPane tab="我的旅途" key="3">
                <Table columns={desColumns} dataSource={this.state.desData} />
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </Content>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userid: state.get('login').id
  }
}
export default connect(mapStateToProps)(Personal)