import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col,Card, message } from 'antd'
import './hotTopic.css'
import { topicListUrl } from '../../config/index'
import axios from 'axios'


const { Meta } = Card
class HotTopic extends Component  {
  constructor(props) {
    super(props)
    this.state = {
      hotTopicList: []
    }
  }

  componentDidMount() {
    this.getTopicList()
  }

  getTopicList() {
    axios.get(topicListUrl)
      .then(res => {
        this.setState({
          hotTopicList: res.data
        })
      })
      .catch(err => {
        message.error(err)
      })
  }
  render () {
    return (
      <div className='hot-topic' style={{ padding: '20px 80px 80px 50px'}}>
        <h1 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '25px'}}>热门游记与话题</h1>
        <Row justify="space-around" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {
            this.state.hotTopicList.map((item, index) => {
              return (
                <Col className="gutter-row" span={6} key={index}>
                  <div className='card-wrapper'>
                    <Link to={'/topic/detail/' + item.id}>
                      <Card
                        hoverable
                        style={{ width: 340 }}
                        cover={<img alt="example" src={item.imgUrl} />}
                      >
                        <Meta  description={item.desc} />
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

export default HotTopic;
