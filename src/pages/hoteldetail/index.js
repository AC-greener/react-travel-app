import React from 'react'
import './style.css'
import Header from '../../common/header/index'
import { Layout, Row, Col, Carousel, Button, Card } from 'antd'

const { Meta } = Card;
class HotelDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  
  render() {
    return (
      <Layout className='h'>
        <Header activeNav="2" bbs = {true}/>
        <Row style={{ margin: '50px 0 0 0'}} gutter={12}>
          <Col  className='center'  span={10} offset={2}>
            <div style={{ textAlign: 'center'}}>
              <img src={require('../../static/hotel-detail-1.jpg')}></img>
            </div>
          </Col>
          <Col  style={{marginLeft: '-16px'}}  span={5}>
            <Row className='center'>
              <div  >
                <img src={require('../../static/hotel-detail-2.jpg')}></img>
              </div>
            </Row>
            <Row className='center'>
            <div>
                <img src={require('../../static/hotel-detail-3.jpg')}></img>
              </div>
            </Row>
          </Col>
          <Col   span={5}>
            <Row className='center'>
              <div>
                <img src={require('../../static/hotel-detail-4.jpg')}></img>
              </div>
            </Row>
            <Row className='center'>
            <div >
                <img src={require('../../static/hotel-detail-5.jpg')}></img>
              </div>
            </Row>
          </Col>
        </Row>
        </Layout>
      )
  }
}
export default HotelDetail