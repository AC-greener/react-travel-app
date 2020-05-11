import React, { Component } from 'react';
import './style.css'
import { Layout, Menu, Row, Col } from 'antd';
class Footer extends Component {
  render () {
    return (
      <div >
        <Row  className='footer-top'>
          <Col span={3}>
            <ul>
              <li>穷游简介</li>
              <li>关于我们</li>
              <li>业务合作</li>
            </ul>
          </Col>
          <Col span={3}>
            <ul>
              <li>加入穷游</li>
              <li>招聘职位</li>
            </ul>
          </Col>
          <Col span={3}>
            <ul>
              <li>网站条款</li>
              <li>社区指南</li>
              <li>版权声明</li>
              <li>免责声明</li>
            </ul>
          </Col>
          <Col span={3}>
            <ul>
              <li>帮助中心</li>
              <li>联系我们</li>
              <li>使用帮助</li>
              <li>新手上路</li>
              <li>意见反馈</li>
            </ul>
          </Col>
        </Row>
        <Row className='footer-bottom'>
          created by zhutongtong.
        </Row>
      </div>
    )
  }
}
export default Footer