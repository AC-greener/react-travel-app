import React from 'react'
import axios from 'axios'
import {Layout, Row, Col, Icon, Typography, PageHeader, Tabs, Tag, message} from 'antd'
import Header from '../../common/header/index'
import './style.css'

const { Content } = Layout
const { Paragraph } = Typography
const { TabPane } = Tabs
const PageContent = ({ children, extraContent }) => {
  return (
    <Row className="content" type="flex">
      <div className="main" style={{ flex: 1 }}>
        {children}
      </div>
      <div
        className="extra"
        style={{
          marginLeft: 80,
        }}
      >
        {extraContent}
      </div>
    </Row>
  );
}

class HotSpotDetail extends React.Component {
  constructor(props) {
    super(props)
  }
  getSpotDetail () {
    axios.get('/spotdetail.json')
      .then(res => {

      })
      .catch(err => {
        message.error(err)
      })
  }
  render () {
    let text = ''
    let index = 1
    switch (this.props.match.params.id) {
      case '1':
        text = '英国-伦敦-爱丁堡-温莎-巴斯（共6天）'
        index = 1
        break
      case '2':
        text = '新西兰自驾南岛深度游'
        index = 2
        break
      case '3':
        text = '法国（签证版）'
        index = 3
        break
      case '4':
        text = '巴黎罗马巴塞罗那'
        index = 4
        break
      case '5':
        text = '魔芋菌的奥捷行程'
        index = 5
        break
      case '6':
        text = '湖南之旅'
        index = 6
        break
      default:
        text = '英国-伦敦-爱丁堡-温莎-巴斯（共6天）'
        index = 1
        break
    }
    return (
      <Layout className='spot-detail'>
        <Header activeNav="1" bbs={true}/>
        <Content style={{marginTop: '50px', marginBottom: '60px'}} >
          <Row >
            <Col className='name'  span={12} offset={4}>
              <div>Top of the Rock Observation Deck</div>
              <div>洛克菲勒观景台</div>
            </Col>
            <Col style={{height:'188px',paddingTop: '58px'}}  span={4}>
              <div style={{cursor: 'pointer'}}>
                <Icon style={{ fontSize: '28px',  color: '#147850', margin: '5px' }} type="heart" />
                <Icon type="branches" style={{ fontSize: '28px',  color: '#147850',  margin: '8px'   }} />
              </div>
              <div>
                <span style={{margin: '5px'}}> 想去</span>
                <span> 分享</span>
              </div>
            </Col>
          </Row>
          <Row >
            <Col style={{padding: '65px'}}   span={12} offset={4}>
              <Row>
                <Col span={12}>
                  <img src='/static/spot-detail.jpg'></img>
                </Col>
                <Col span={12}>
                  <div style={{fontSize:'27px', color: '#147850'}}>9.1分</div>
                  <div style={{fontSize:'27px', margin: '15px 0 15px 0'}}>
                    <Icon className='green icon' type="star" />
                    <Icon className='green icon' type="star" />
                    <Icon className='green icon' type="star" />
                    <Icon className='green icon' type="star" />
                    <Icon type="star" />
                  </div>
                  <div style={{fontSize:'16px'}}>纽约全部景点观光中排第14名</div>
                </Col>
              </Row>
              <Row>
                <PageHeader
                  style={{
                    border: '1px solid rgb(235, 237, 240)',
                    borderRadius: '5px',
                    marginLeft: '-15px'
                  }}
                >
                <PageContent>
                  <div className="content">
                    <Paragraph>
                    峭石之巅观景台是仰望天空、俯看纽约的绝佳位置，纽约城市风光一览无余，甚至可以看到自由女神像的绰约风姿
                    </Paragraph>
                    <Paragraph>
                      <div> 
                        <strong>景点地址：</strong>30 Rockefeller Center,New York City
                        <br/>
                        <strong>到达方式：</strong>乘坐地铁B、D、F、M线 47 - 50 Sts - Rockefeller Ctr
                        <br/>
                        <strong>开放时间：</strong>8:00-00:30，电梯23:40 最后一次运行
                        <br/>
                        <strong>景点门票：</strong>成人36美元，儿童 (6–12）26美元，长者 (62岁以上）32美元，6岁以下免费<br/>
                        <strong>景点电话：</strong>212 698 2000<br/>
                       </div>
                    </Paragraph>
                    </div>
                  </PageContent>
                </PageHeader>
              </Row>
              <Row>
                <Tabs className='bbs-tabs'  defaultActiveKey="1">
                <TabPane
                  tab={
                    <span>
                      点评
                    </span>
                  }
                  key="1"
                >
                  <PageHeader
                    title='Frank'
                    style={{
                      borderBottom: ' 1px solid rgb(206, 211, 217)',
                    }}
                    subTitle="2019-12-24"
                    avatar={{ src: '/static/spot-avatar1.jpg' }}
                  >
                    <Content>
                      <div className="content">
                        <Paragraph>
                        纽约洛克菲勒观景台Rock Observation Deck
                        </Paragraph>
                        <Row className="contentLink" type="flex">
                          <a
                            style={{
                              marginRight: 16,
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <svg style={{ width: '18px', height: '18px', color: '#147850' }}  aria-hidden="true">
                                <use xlinkHref='#icon-zan'></use>
                            </svg>
                          </a>
                        </Row>
                      </div>
                    </Content>
                  </PageHeader>
                  <PageHeader
                    title='晴川阁'
                    style={{
                      borderBottom: ' 1px solid rgb(206, 211, 217)',
                    }}
                    subTitle="2019-10-11"
                    avatar={{ src: '/static/spot-avatar2.jpg' }}
                  >
                    <Content>
                      <div className="content">
                        <Paragraph>
                        洛克菲勒观景台，Top of the Rock observation deck，一般译为“峭石之巅”或“巨石之顶”观景台。在洛克菲勒中心，乘坐高速电梯上达70层，楼台观景。在这个平台可以俯瞰纽约市区，远眺自由女神。登顶观景的游客比帝国大厦的要少一些。
                        </Paragraph>
                        <Row className="contentLink" type="flex">
                          <a
                            style={{
                              marginRight: 16,
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <svg style={{ width: '18px', height: '18px', color: '#147850' }}  aria-hidden="true">
                                <use xlinkHref='#icon-zan'></use>
                            </svg>
                          </a>
                        </Row>
                      </div>
                    </Content>
                  </PageHeader>
                  <PageHeader
                    title='土拨鼠'
                    style={{
                      borderBottom: ' 1px solid rgb(206, 211, 217)',
                    }}
                    subTitle="2018-2-6"
                    avatar={{ src: '/static/spot-avatar3.jpg' }}
                  >
                    <Content>
                      <div className="content">
                        <Paragraph>
                        我们提前预约了，大概5点登顶，人还蛮多的，这个时间可以看到白天的景观，也是看到傍晚的彩霞，还有夜景，夜景真的是一级棒，整个曼哈顿尽收眼底。
                        </Paragraph>
                        <Row className="contentLink" type="flex">
                          <a
                            style={{
                              marginRight: 16,
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <svg style={{ width: '18px', height: '18px', color: '#147850' }}  aria-hidden="true">
                                <use xlinkHref='#icon-zan'></use>
                            </svg>
                          </a>
                        </Row>
                      </div>
                    </Content>
                  </PageHeader>
                  <PageHeader
                    title='不将就333'
                    style={{
                      borderBottom: ' 1px solid rgb(206, 211, 217)',
                    }}
                    subTitle="2016-8-24"
                    avatar={{ src: '/static/spot-avatar4.jpg' }}
                  >
                    <Content>
                      <div className="content">
                        <Paragraph>
                        一大早就赶到了，买票排队就去，乘高速电梯直达楼顶。先进入的是有玻璃围绕的观景台，看的不远。由于大家都是第一次，所以争先恐后地看、照。洛克菲勒的楼顶其实更值得去，因为可以拍到帝国大厦的夜景，周边吃饭shopping的店也很多
                        </Paragraph>
                        <Row className="contentLink" type="flex">
                          <a
                            style={{
                              marginRight: 16,
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <svg style={{ width: '18px', height: '18px', color: '#147850' }}  aria-hidden="true">
                                <use xlinkHref='#icon-zan'></use>
                            </svg>
                          </a>
                        </Row>
                      </div>
                    </Content>
                  </PageHeader>
                  <PageHeader
                    title='萤火虫'
                    style={{
                      borderBottom: ' 1px solid rgb(206, 211, 217)',
                    }}
                    subTitle="2019-7-8"
                    avatar={{ src: '/static/spot-avatar5.jpg' }}
                  >
                    <Content>
                      <div className="content">
                        <Paragraph>
                        可以观看整个纽约市的夜景了，不错呀，喜欢呀，夜景特别美，尽收眼底
                        </Paragraph>
                        <Row className="contentLink" type="flex">
                          <a
                            style={{
                              marginRight: 16,
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <svg style={{ width: '18px', height: '18px', color: '#147850' }}  aria-hidden="true">
                                <use xlinkHref='#icon-zan'></use>
                            </svg>
                          </a>
                        </Row>
                      </div>
                    </Content>
                  </PageHeader>
                  <PageHeader
                    title='cheeer'
                    style={{
                      borderBottom: ' 1px solid rgb(206, 211, 217)',
                    }}
                    subTitle="2019-9-13"
                    avatar={{ src: '/static/spot-avatar6.jpg' }}
                  >
                    <Content>
                      <div className="content">
                        <Paragraph>
                        前试图改过，但好像没有成功，top of the rock现在的票价成人是32刀。1月底去的，暴雪之后，视野很好，能同时看到中央公园和帝国大厦，还能看见远处的女神和布鲁克林大桥。四点多上去，待到六点多清场前，正好能看到昼夜交替，门票花得值。
                        </Paragraph>
                        <Row className="contentLink" type="flex">
                          <a
                            style={{
                              marginRight: 16,
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <svg style={{ width: '18px', height: '18px', color: '#147850' }}  aria-hidden="true">
                                <use xlinkHref='#icon-zan'></use>
                            </svg>
                          </a>
                        </Row>
                      </div>
                    </Content>
                  </PageHeader>
                </TabPane>
                <TabPane
                  tab={
                    <span>
                      问答
                    </span>
                  }
                  key="2"
                  style={{textAlign: 'center'}}
                >
                  没有任何问答数据
                </TabPane>
              </Tabs>
              </Row>           
            </Col>
          </Row>
        </Content>
      </Layout>
    )
  }
}

export default HotSpotDetail