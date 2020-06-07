import React, { Component } from 'react';
import { Row, Col,Card, Button } from 'antd';
import {Link} from 'react-router-dom'
import { hotelListUrl } from '../../config/index'
import './hotHotel.css'
import axios from 'axios'
const { Meta } = Card

class HotHotel extends Component  {
  constructor(props) {
    super(props)
    this.state = {
      hotellist1: [],
      hotellist2: [],
    }
  }
  componentDidMount () {
    this.getHotelList()
  }
  getHotelList() {
    axios.get(hotelListUrl)
    .then(res => {
      const hotellist1 = []
      const hotellist2 = []
      res.data.forEach((item, index) => {
        if(index < 4) {
          hotellist1.push(item)
        } else {
          hotellist2.push(item)
        }
      })
      this.setState({
        hotellist1,
        hotellist2
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
  render () {
    return (
      <div className='hotel' style={{ padding: '20px 80px 20px 50px'}}>
        <h1 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '25px'}}>精选民宿</h1>
        <Row style={{ padding: '0 130px'}} justify="space-around" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {
              this.state.hotellist1.map((item, index) => {
                return ( <Col className="gutter-row" span={6} key={index}>
                  <div className='card-wrapper'>
                    <Link to={'/hotel/detail/' + item.id}>
                    <Card className='hotel-card' style={{width: 240}}
                      hoverable
                      cover={<img alt="example"    src={item.imgUrl} />}
                    >
                      <Meta className='hot-hotel' title={item.name}   description={item.score} />
                      <div className='price'>
                        <div>
                          <span>
                            ￥{item.price}起
                          </span> 
                          <Button className='reserve-bt'>预定</Button>
                        </div>
                      </div>
                    </Card>
                    </Link>
                  </div>
                </Col>
                )
              })
            }
        </Row>
        <Row style={{ padding: '0 130px'}} justify="space-around" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {
              this.state.hotellist2.map((item, index) => {
                return ( <Col className="gutter-row" span={6} key={index}>
                  <div className='card-wrapper'>
                    <Link to={'/hotel/detail/' + item.id}>
                    <Card className='hotel-card' style={{width: 240}}
                      hoverable
                      cover={<img alt="example"    src={item.imgUrl} />}
                    >
                      <Meta className='hot-hotel' title={item.name}   description={item.score} />
                      <div className='price'>
                        <div>
                          <span>
                            ￥{item.price}起
                          </span> 
                          <Button className='reserve-bt'>预定</Button>
                        </div>
                      </div>
                    </Card>
                    </Link>
                  </div>
                </Col>
                )
              })
            }
        </Row>
      </div>
    )
  }
}

export default HotHotel;
