import React, { Component } from 'react'
import axios from 'axios'
import './style.css'
import MessageBoard from './messageBoard'
import { Row, Col, Button, Carousel, Tabs, Affix} from 'antd'
import { FormOutlined } from '@ant-design/icons'
import Header from '../../common/header/index'
import JiebanList from './jieban'
import {  userMessageUrl, replyUrl } from '../../config/index'
const { TabPane } = Tabs

class Bbs extends Component  {
  constructor (props) {
    super(props)
    this.state = {
      replyMessage: [],
      jiebanlist: [],
      liuyanlist: []
    }
  }
  componentDidMount() {
    this.getReply()
  }
  getMessageBoard (replyData) {
    axios.get(userMessageUrl)
    .then(res => {
      const jiebanlist = []
      const liuyanlist = []
      res.data.forEach(item => {
        item.reply = []
        replyData.forEach(replymessage => {
          if(replymessage.fromid === item.id) {
            item.reply.push(replymessage)
          }
        })
        if (item.iscompanion) {
          jiebanlist.push(item)
        } else {
          liuyanlist.push(item)
        }
      })
      console.log(jiebanlist)
      this.setState({
        jiebanlist,
        liuyanlist
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
  getReply () {
    axios.get(replyUrl)
    .then(res => {
      console.log(res.data)
      this.setState({
        replyMessage: res.data
      })
      this.getMessageBoard(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  render () {
    return (
      <div>
        <Header activeNav="3" bbs={ true }/>
        <Affix  offsetTop={-50}>
        <Row className='bbs-wrapper'>
          <div className='bbs-top'>
            <Col  span={4}>
              <div className='desc'>
                穷游论坛
              </div>
            </Col>
            <Col  span={5}>
            <div className='desctitle'>
                <strong className="descshare">分享</strong>
                <i>.</i>
                <strong>结伴</strong>
                <i>.</i>
                <strong>找攻略</strong>
              </div>
            </Col>
            <Col span={4} offset={10}>
              <a href='#col-message-board'>
                <Button className='write-article'>
                  <FormOutlined />
                  发新帖
                </Button>
              </a>
            </Col>
          </div>
        </Row>
        </Affix>
        <Row>
          <Carousel className='bbs-carousel' autoplay>
            <div className='c1'>
              <img src={require('../../static/bbs1.jpg')} alt='图片未加载'></img>
            </div>
            <div className='c2'>
              <img src={require('../../static/bbs2.jpg')} alt='图片未加载'></img>
            </div>
            <div className='c3'>
              <img src={require('../../static/bbs3.jpg')} alt='图片未加载'></img>
            </div>
            <div className='c4'>
              <img src={require('../../static/bbs4.jpg')} alt='图片未加载'></img>
            </div>
          </Carousel>
        </Row>
        <Row>
          <Col span={16}  offset={4}>
            <Tabs className='bbs-tabs'  defaultActiveKey="2">
              <TabPane
                tab={
                  <span>
                    在线留言
                  </span>
                }
                key="1"
              >
                <JiebanList list={this.state.liuyanlist}/>
              </TabPane>
              <TabPane
                tab={
                  <span>
                    结伴出行
                  </span>
                }
                key="2"
              >
                <JiebanList isjieban={true} list={this.state.jiebanlist}/>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
        <Row>
          <MessageBoard/>
        </Row>
      </div>
    )
  }
}

export default Bbs
