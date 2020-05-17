import React, { Component } from 'react';
import { Row, Col,Card, Button } from 'antd';
import './hotHotel.css'
const { Meta } = Card;
class HotHotel extends Component  {
  render () {
    return (
      <div className='hotel' style={{ padding: '20px 80px 20px 50px'}}>
        <h1 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '25px'}}>精选民宿</h1>
        <Row style={{ padding: '0 130px'}} justify="space-around" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={6}>
            <div className='card-wrapper'>
              <Card className='hotel-card' style={{width: 240}}
                hoverable
                cover={<img alt="example"  srcSet  src={require('../../static/hotel1.jpg')} />}
              >
                <Meta className='hot-hotel' title='三亚亚龙湾木落客栈'   description="评分4.8 | 经济型" />
                <div className='price'>
                  <div>
                    <span>
                    ￥120起
                    </span> 
                    <Button className='reserve-bt'>预定</Button>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className='card-wrapper'>
              <Card className='hotel-card' style={{width: 240}}
                hoverable
                cover={<img alt="example"  srcSet  src={require('../../static/hotel2.jpg')} />}
              >
                <Meta className='hot-hotel' title='大理首驿精品酒店'   description="评分4.8 | 高档型" />
                <div className='price'>
                  <div>
                    <span>
                    ￥175起
                    </span> 
                    <Button className='reserve-bt'>预定</Button>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className='card-wrapper'>
              <Card className='hotel-card' style={{width: 240}}
                hoverable
                cover={<img alt="example"  srcSet  src={require('../../static/hotel3.jpg')} />}
              >
                <Meta className='hot-hotel' title='老故事客栈(大理古城店)'   description="评分4.7 | 经济型" />
                <div className='price'>
                  <div>
                    <span>
                    ￥269起
                    </span> 
                    <Button className='reserve-bt'>预定</Button>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className='card-wrapper'>
              <Card className='hotel-card' style={{width: 240}}
                hoverable
                cover={<img alt="example"  srcSet  src={require('../../static/hotel4.jpg')} />}
              >
                <Meta className='hot-hotel' title='阳朔月舞度假酒店'   description="评分4.8 | 舒适型" />
                <div className='price'>
                  <div>
                    <span>
                    ￥228起
                    </span> 
                    <Button className='reserve-bt'>预定</Button>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
        </Row>
        <Row style={{ padding: '0 130px'}} justify="space-around" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={6}>
            <div className='card-wrapper'>
              <Card className='hotel-card' style={{width: 240}}
                hoverable
                cover={<img alt="example"  srcSet  src={require('../../static/hotel5.png')} />}
              >
                <Meta className='hot-hotel' title='久栖·乌镇朴禅酒店'   description="评分4.8 | 高档型" />
                <div className='price'>
                  <div>
                    <span>
                    ￥188起
                    </span> 
                    <Button className='reserve-bt'>预定</Button>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className='card-wrapper'>
              <Card className='hotel-card' style={{width: 240}}
                hoverable
                cover={<img alt="example"  srcSet  src={require('../../static/hotel6.jpg')} />}
              >
                <Meta className='hot-hotel' title='西塘饮居·九舍人文酒店'   description="评分4.8 | 舒适型" />
                <div className='price'>
                  <div>
                    <span>
                    ￥180起
                    </span> 
                    <Button className='reserve-bt'>预定</Button>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className='card-wrapper'>
              <Card className='hotel-card' style={{width: 240}}
                hoverable
                cover={<img alt="example"  srcSet  src={require('../../static/hotel7.jpg')} />}
              >
                <Meta className='hot-hotel' title='凤凰桐舍·初见精品民宿'   description="评分4.7 | 经济型" />
                <div className='price'>
                  <div>
                    <span>
                    ￥220起
                    </span> 
                    <Button className='reserve-bt'>预定</Button>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className='card-wrapper'>
              <Card className='hotel-card' style={{width: 240}}
                hoverable
                cover={<img alt="example"  srcSet  src={require('../../static/hotel8.jpg')} />}
              >
                <Meta className='hot-hotel' title='涠洲岛如梦令海景客栈'   description="评分4.8 | 舒适型" />
                <div className='price'>
                  <div>
                    <span>
                    ￥269起
                    </span> 
                    <Button className='reserve-bt'>预定</Button>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default HotHotel;
