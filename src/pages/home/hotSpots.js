import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Row, Col,Card, message } from 'antd'
import './hotSpots.css'
import axios from 'axios'
import { spotListUrl } from '../../config/index'
const { Meta } = Card

class HotSpot extends Component  {
  constructor (props) {
    super(props)
    this.state = {
      spotlist: []
    }
  }
  componentDidMount () {
    this.getSpotList()
  }
  getSpotList() {
    axios.get(spotListUrl)
      .then(res=> {
        this.setState({
          spotlist: res.data
        })
      })
      .catch(err => {
        message.error(err)
      })
  }
  render () {
    return (
      <div style={{ padding: '20px 80px 20px 50px'}}>
        <h1 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '25px'}}>热门景点</h1>
        <Row style={{ padding: '0 130px'}} justify="space-around" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {
            this.state.spotlist.map((item, index) => {
              return (
                <Col className="gutter-row" span={6} key={index}>
                  <div className='card-wrapper'>
                    <Link to={'/spot/detail/'+ item.id}>
                      <Card className='spot-card' style={{width: 240, height: '270px'}}
                        hoverable
                        cover={<img alt="example" style={{height: '270px'}}   src={item.imgUrl} />}
                      >
                        <Meta className='hot-spot'  description={item.spotname} />
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

export default HotSpot;
