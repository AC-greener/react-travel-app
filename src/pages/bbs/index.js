import React, { Component, useState} from 'react';
import { Link } from "react-router-dom"
import './style.css'
import { Row, Col, Layout, Affix, Menu, Dropdown, Button, Carousel } from 'antd';
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

class Bbs extends Component  {
  render () {
    return (
      <div>
        <Header bbs={ true }/>
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
                <strong class="descshare">分享</strong>
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
        </Affix>
        <Row>
          <Carousel className='bbs-carousel' autoplay>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
        </Row>
      </div>
    )
  }
}

export default Bbs;
