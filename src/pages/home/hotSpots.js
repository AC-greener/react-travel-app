import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Row, Col,Card } from 'antd';
import './hotSpots.css'
const { Meta } = Card;
const style = { background: '#0092ff', padding: '8px 0', border: '1px solid red', };
class HotTopic extends Component  {
  render () {
    return (
      <div style={{ padding: '20px 80px 20px 50px'}}>
        <h1 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '25px'}}>热门景点</h1>
        <Row style={{ padding: '0 130px'}} justify="space-around" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={6}>
            <div className='card-wrapper'>
              <Card className='spot-card' style={{width: 240, height: '270px'}}
                hoverable
                cover={<img alt="example" style={{height: '270px'}} srcSet  src={require('../../static/spot0.png')} />}
              >
                <Meta className='hot-spot'  description="洛克菲勒观景台" />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className='hot-spot card-wrapper'>
              <Card className='spot-card'  style={{width: 240, height: '270px'}}
                hoverable
                cover={<img alt="example" style={{height: '270px'}} srcSet  src={require('../../static/spot1.png')} />}
              >
                <Meta className='hot-spot'  description="碎片大厦" />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className='card-wrapper'>
              <Card className='spot-card' style={{width: 240, height: '270px'}}
                hoverable
                cover={<img alt="example" style={{height: '270px'}} srcSet  src={require('../../static/spot2.png')} />}
              >
                <Meta className='hot-spot'  description="太平山" />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className='card-wrapper'>
              <Card  className='spot-card' style={{width: 240, height: '270px'}}
                hoverable
                cover={<img alt="example" style={{height: '270px'}} srcSet  src={require('../../static/spot3.png')} />}
              >
                <Meta className='hot-spot'  description="象山" />
              </Card>
            </div>
          </Col>
        </Row>
        <Row style={{ padding: '0 130px'}} justify="space-around" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={6}>
            <div className='card-wrapper'>
              <Card className='spot-card' style={{width: 240, height: '270px'}}
                hoverable
                cover={<img alt="example" style={{height: '270px'}} srcSet  src={require('../../static/spot4.png')} />}
              >
                <Meta className='hot-spot'  description="蒙帕纳斯大楼" />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className='card-wrapper'>
              <Card className='spot-card'  style={{width: 240, height: '270px'}}
                hoverable
                cover={<img alt="example" style={{height: '270px'}} srcSet  src={require('../../static/spot5.png')} />}
              >
                <Meta className='hot-spot'  description="马六甲" />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className='card-wrapper'>
              <Card className='spot-card' style={{width: 240, height: '270px'}}
                hoverable
                cover={<img alt="example" style={{height: '270px'}} srcSet  src={require('../../static/spot6.png')} />}
              >
                <Meta className='hot-spot'  description="马丘比丘" />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className='card-wrapper'>
              <Card className='spot-card' style={{width: 240, height: '270px'}}
                hoverable
                cover={<img alt="example" style={{height: '270px'}} srcSet  src={require('../../static/spot7.png')} />}
              >
                <Meta className='hot-spot'  description="不夜城香港" />
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default HotTopic;
