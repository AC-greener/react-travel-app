import React, { Component, useState} from 'react';
import './style.css'
import MessageBoard from './messageBoard'
import { Row, Col, Menu, Dropdown, Button, Carousel,Tabs} from 'antd';
import { FormOutlined } from '@ant-design/icons';
import Header from '../../common/header/index'

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="">
        写游记
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/">
        找同伴
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="">
        去提问
      </a>
    </Menu.Item>
  </Menu>
)
const { TabPane } = Tabs

class Bbs extends Component  {

  render () {
    return (
      <div>
        <Header activeNav="3" bbs={ true }/>
        {/* <Affix  offsetTop={-50}> */}
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
              <Dropdown overlay={menu} placement="bottomCenter">
                <Button className='write-article'>
                  <FormOutlined />
                  发新帖
                </Button>
              </Dropdown>
            </Col>
          </div>
        </Row>
        {/* </Affix> */}
        <Row>
          <Carousel className='bbs-carousel' autoplay>
            <div className='c1'>
              <img src={require('../../static/bbs1.jpg')}></img>
            </div>
            <div className='c2'>
              <img src={require('../../static/bbs2.jpg')}></img>
            </div>
            <div className='c3'>
              <img src={require('../../static/bbs3.jpg')}></img>
            </div>
            <div className='c4'>
              <img src={require('../../static/bbs4.jpg')}></img>
            </div>
          </Carousel>
        </Row>
        <Row>
          <Col span={16} style={{border: '1px solid red'}} offset={4}>
            <Tabs className='bbs-tabs' style={{border: '1px solid black'}} defaultActiveKey="2">
              <TabPane
                tab={
                  <span>
                    在线留言
                  </span>
                }
                key="1"
              >
                Tab 1
              </TabPane>
              <TabPane
                tab={
                  <span>
                    结伴出行
                  </span>
                }
                key="2"
              >
                Tab 2
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
