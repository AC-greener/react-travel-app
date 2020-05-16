import React, { Component, useState} from 'react';
import { Link } from "react-router-dom"
import './page1.css'
import { Row, Col, Table } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import Header from '../../common/header/index'

const columns = [
  {
    title: '日期',
    dataIndex: 'day',
    width: 170,
    className: 'col-day',
    render: day => (
      <div className='day'>
        {day}
      </div>
    )
  },
  {
    title: '城市',
    dataIndex: 'city',
    width: 180,
    className: 'col-city',
    render: (citys) => (
      <div>
        {
          citys.map(city => {
            return (
              <div>{city}</div>
            )
          })
        }
      </div>
    )
  },
  {
    title: '景点',
    dataIndex: 'attractions',
    width: 350,
    className: 'col-attractions',
    render: (attractions) => (
      <div>
        {
          attractions.map(att => {
            return (
              <div>{att}</div>
            )
          })
        }
      </div>
    )
  },
  {
    title: '住宿',
    width: 200,
    className: 'col-hotel',
    dataIndex: 'hotel',
  },
];

const data = [
  {
    key: '1',
    day:['Day 1'],
    city: ['上海','Shanghai', '伦敦','London', '牛津', 'Oxford'],
    attractions: ['1. 希思罗机场', '2. 圣詹姆斯公园', '3. 白金汉宫', '4. 威斯敏斯特修道院',
    '5. 英国议会大厦', '6. 伦敦圣保罗大教堂 ','7. 伦敦塔桥 ', '8.  英国伦敦泰晤士河游船船票','9. 伦敦眼'],
    hotel: "圣詹姆士庭院-阿塔酒店-伦敦，St. James' Court, A Taj Hotel, London'"
  },
  {
    key: '2',
    day:['Day 2'],
    city: ['￥300,000.00'],
    attractions: ['London No. 1 Lake Park'],
    hotel: '伦敦'
  },
  {
    key: '3',
    day:['Day 3'],
    city: ['￥300,000.00'],
    attractions: ['Sidney No. 1 Lake Park'],
    hotel: '伦敦'
  },
];

class Bbs extends Component  {
  render () {
    return (
      <div style={{paddingBottom: '150px'}}>
        <Header activeNav="4" bbs={ true }/>
        <Row >
            <Col className='detail-bg' style={{border: '1px solid red'}} span={22} offset={1}>
              <img src={require('../../static/reclinepage1.jpg')}></img>
              <div className='intro'>
                英国-伦敦-爱丁堡-温莎-巴斯（共10天）
              </div>
            </Col>
        </Row>
        <h2 className='day-detail'>行程总览</h2>
        <Row >
            <Col className='detail-bg' style={{border: '1px solid red'}} span={18} offset={3}>
            <Table
              className='table'
              columns={columns}
              dataSource={data}
              bordered
              size={'default'}
              pagination={false}
            />
            </Col>
        </Row>
      </div>
    )
  }
}

export default Bbs;
