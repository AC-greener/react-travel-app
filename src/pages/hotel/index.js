import React from 'react'
import './style.css'
import Header from '../../common/header/index'
import { Layout, Row, Col, Carousel, Button, Card } from 'antd'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { hotelListUrl } from '../../config/index'
const { Meta } = Card;
class Hotel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hotellist1: [],
    }
  }
  componentDidMount () {
    this.getHotelList()
  }
  getHotelList() {
    axios.get(hotelListUrl)
    .then(res => {
      this.setState({
        hotellist1: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
  render() {
    return (
      <Layout className='h'>
        <Header activeNav="2" bbs = {true}/>
        <Carousel >
          <div >
            <img style={{width: '100vw'}} src={require('../../static/hotel-bg.jpeg')} alt='图片未加载'></img>
          </div>
        </Carousel>
        {/* 精选民宿开始 */}
        <Row  >
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
        </div>
        </Row>
        {/* 精选民宿结束 */}
      </Layout>
    )
  }
}

export default Hotel