import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Row, Col,Card } from 'antd';
import './hotTopic.css'
const { Meta } = Card;
const style = { background: '#0092ff', padding: '8px 0', border: '1px solid red', };
class HotTopic extends Component  {
  render () {
    return (
      <div style={{ padding: '20px 80px 80px 50px'}}>
        <h1 style={{    textAlign: 'center', marginBottom: '25px'}}>热门游记与话题</h1>
        <Row justify="space-around" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={6}>
            <div className='card-wrapper'>
              <Card
                hoverable
                style={{ width: 340, height: '270px' }}
                cover={<img alt="example" src={require('../../static/hot-topic1.jpg')} />}
              >
                <Meta  description="浮光掠影の冬日法比荷" />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className='card-wrapper'>
              <Card
                hoverable
                style={{ width: 340, height: '270px' }}
                cover={<img alt="example" src={require('../../static/hot-topic2.jpg')} />}
              >
                <Meta  description="【桑巴森林看世界】探索川西之秘）" />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className='card-wrapper'>
              <Card
                hoverable
                style={{ width: 340, height: '270px' }}
                cover={<img alt="example" src={require('../../static/hot-topic3.jpg')} />}
              >
                <Meta title="不可思议之五彩印度" />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className='card-wrapper'>
              <Card
                hoverable
                style={{ width: 340, height: '270px' }}
                cover={<img alt="example"src={require('../../static/hot-topic4.jpg')} />}
              >
                <Meta description="泰国自驾小众路线 真正的“慢生活”" />
              </Card>
            </div>
          </Col>
        </Row>
        <Row justify="space-around" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={6}>
            <div className='card-wrapper'>
              <Card
                hoverable
                style={{ width: 340, height: '270px' }}
                cover={<img alt="example" src={require('../../static/hot-topic5.jpg')} />}
              >
                <Meta  description="【AMY的纪录片@长尾鲨与沙丁鱼】" />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className='card-wrapper'>
              <Card
                hoverable
                style={{ width: 340, height: '270px' }}
                cover={<img alt="example" src={require('../../static/hot-topic6.jpg')} />}
              >
                <Meta  description="旅游攻略论坛：德国 及 捷克/斯洛伐克" />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className='card-wrapper'>
              <Card
                hoverable
                style={{ width: 340, height:'270px' }}
                cover={<img alt="example" src={require('../../static/hot-topic7.jpg')} />}
              >
                <Meta description="写一封情书关于重新来过" />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className='card-wrapper'>
              <Card
                hoverable
                style={{ width: 340, height:'270px' }}
                cover={<img alt="example"src={require('../../static/hot-topic8.jpg')} />}
              >
                <Meta description="神奇建筑在哪里 | 小长假来福建看土楼 " />
              </Card>
            </div>
          </Col>
         
        </Row>
      </div>
    )
  }
}

export default HotTopic;
