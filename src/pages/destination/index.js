import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {Layout, Row, Col, Input, message, Card}  from 'antd'
import Header from '../../common/header/index'
import './style.css'
import { desListUrl } from '../../config/index'
const { Meta } = Card
const {Content} = Layout
const {Search} = Input


class Destination extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hotDes: [],
      europeDes: []
    }
  }

  componentDidMount() {
    this.getHotDesList()
  }

  getHotDesList() {
    axios.get(desListUrl)
      .then(res => {
        const hotDes = []
        const europeDes = []
        res.data.forEach((item) => {
          if(item.type === "hot") {
            hotDes.push(item)
          } else if(item.type === "europe") {
            europeDes.push(item)
          }
        })
        this.setState({
          hotDes: hotDes,
          europeDes: europeDes
        })
        console.log(this.state)
      })
      .catch(err => {
        message.error(err)
      })
  }

  render () {
    return (
      <Layout className='desti-layout'>
        <Header activeNav="1" bbs={true}/>
        <Content style={{marginTop: '50px'}}>
          <Row style={{position: 'relative'}} >
            <Col span={24}>
              <img style={{width: '100vw', height: '600px'}} src='/static/destination-bg.jpg'></img>
            </Col>
            <Col offset={6} span={12} className='search-wrapper'>
              <div className='title-box'>你好, 世界！</div>
              <div>
              <Search
                className='input-search'
                placeholder="搜索国家、城市、目的地"
                onSearch={value => console.log(value)}
                style={{  }}
              />
              </div>
            </Col>
          </Row>
          <h1 style={{ fontSize: '32px', textAlign: 'center', margin: '25px'}}>热门目的地</h1>
          <Row  style={{ padding: '0 160px'}} justify="space-around" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {
              this.state.hotDes.map((item, index) => {
                return (
                  <Col className="gutter-row" span={6} key={index}>
                    <div className='card-wrapper'>
                      <Link to={'/desti/detail/' + item.id}>
                        <Card
                          hoverable
                          style={{ width: 300 }}
                          cover={<img alt="example" src={item.imgUrl} />}
                        >
                          <Meta  description={item.desc} />
                          <div className='price'>
                            <em>
                              {item.price}
                            </em>
                            元起
                          </div>
                        </Card>
                      </Link>
                    </div>
                  </Col>
                )
              })
            }
          </Row>
          <h1 style={{ fontSize: '32px', textAlign: 'center', margin: '25px'}}>欧洲</h1>
          <Row  style={{ padding: '0 160px'}} justify="space-around" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {
              this.state.europeDes.map((item, index) => {
                return (
                  <Col className="gutter-row" span={6} key={index}>
                    <div className='card-wrapper'>
                      <Link to={'/desti/detail/' + item.id}>
                        <Card
                          hoverable
                          style={{ width: 300 }}
                          cover={<img alt="example" src={item.imgUrl} />}
                        >
                          <Meta  description={item.desc} />
                          <div className='price'>
                            <em>
                              {item.price}
                            </em>
                            元起
                          </div>
                        </Card>
                      </Link>
                    </div>
                  </Col>
                )
              })
            }
          </Row>
        </Content>
      </Layout>
    )
  }
}

export default Destination