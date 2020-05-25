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
    let spotname = ''
    let engname = ''
    let score = 0
    let rank = ''
    let intro = ''
    let imgUrl = ''
    switch (this.props.match.params.id) {
      case '1':
        spotname = '洛克菲勒观景台'
        engname = 'Top of the Rock Observation Deck'
        score = 9.1
        rank = '纽约全部景点观光中排第14名'
        intro = '峭石之巅观景台是仰望天空、俯看纽约的绝佳位置，纽约城市风光一览无余，甚至可以看到自由女神像的绰约风姿'
        imgUrl = '/static/spot-detail1.jpg'
        break
      case '2':
        spotname = '碎片大厦'
        engname = 'The Shard'
        score = 8.6
        rank = '伦敦全部景点观光中排第27名'
        intro = '2012年7月5日伦敦碎片大厦正式开幕，成为欧洲最高建筑。这座由意大利建筑师皮亚诺设计的大厦历时12年的建设，共88层，高达310米，成为了伦敦的新地标。'
        imgUrl = '/static/spot-detail2.jpg'
        break
      case '3':
        spotname = '太平山'
        engname = 'Victoria Peak'
        score = 8.9
        rank = '香港全部景点观光中排第1名'
        intro = '香港岛最高山峰，也是俯瞰香港夜景的必到处。太平山顶广场采用装饰艺术(Art Deco)建筑风格。可于商场内品尝各国佳肴及购买本地创作的特色精品，更可前往顶层的绿茵平台，饱览维多利亚港全貌和薄扶林水塘的自然美景。乘坐山顶缆车观看倾斜的香港，也是另一种独特的观光方法。山顶有凌霄阁摩天台、香港杜莎夫人蜡像馆等。'
        imgUrl = '/static/spot-detail3.jpg'
        break
      case '4':
        spotname = '象山'
        engname = 'Xiang Shan'
        score = 9.1
        rank = '台北全部景点观光中排第17名'
        intro = '象山位于台北市信义区，属于台北盆地东南丘陵的一部分，因山形似象而得名；与附近的虎、豹、狮山并称四兽山，同为南港山系的延伸。海拔标高183公尺，山不高，但前无屏障，台北盆地一览无遗，不仅是登高眺望的好据点，也是拍摄101高楼的绝佳地点。'
        imgUrl = '/static/spot-detail4.jpg'
        break
      case '5':
        spotname = '蒙帕纳斯大楼'
        engname = 'Montparnasse Tower'
        score = 8.4
        rank = '巴黎全部景点观光中排第37名'
        intro = '蒙帕纳斯大楼(又称蒙巴纳斯高楼)建于1972年，共59层，高209米，是巴黎市区除埃菲尔铁塔外最高的建筑，也是市区唯一的一座摩天大楼。在大楼的第56层，可以在最佳位置尽情享受全景巴黎和各种建筑物！大楼的完美设计使得巴黎全景近在眼前。这里是巴黎最高和最中心点，面朝埃菲尔铁塔，是抓住巴黎最美风景的完美位置。'
        imgUrl = '/static/spot-detail5.jpg'
        break
      case '6':
        spotname = '马六甲'
        engname = 'Melaka'
        score = 9.1
        rank = '纽约全部景点观光中排第18名'
        intro = '马六甲是马六甲州的首府，位于马六甲海峡北岸，与印尼的苏门答腊隔海相望。马六甲也是马来西亚历史最悠久的城市，始建于1403年，曾是马六甲王国的都城。'
        imgUrl = '/static/spot-detail6.jpg'
        break
      case '7':
        spotname = '马丘比丘'
        engname = 'Machu Picchu'
        score = 9.2
        rank = '全部景点观光中排第4名'
        intro = '由于独特的位置、地理特点和发现时间较晚，马丘比丘成了印加帝国最为人所熟悉的标志。在1983年，马丘比丘被联合国教科文组织定为世界遗产，是世界上为数不多的文化与自然双重遗产之一。'
        imgUrl = '/static/spot-detail7.jpg'
        break
      case '8':
        spotname = '不夜城香港'
        engname = 'Xiang Gang'
        score = 9.1
        rank = '香港全部景点观光中排第3名'
        intro = '记得张爱玲把香港描绘成悲伤却又纸醉金迷的城市，虽然我对于她的文字并不太感冒，但是对于这样的大都市，夜色笼罩下的她一定会呈现出同白天完全不同的美感。'
        imgUrl = '/static/spot-detail8.jpg'
        break
      default:
        spotname = '洛克菲勒观景台'
        engname = 'Top of the Rock Observation Deck'
        score = 8.2
        rank = '全部景点观光中排第14名'
        intro = '峭石之巅观景台是仰望天空、俯看纽约的绝佳位置，纽约城市风光一览无余，甚至可以看到自由女神像的绰约风姿'
        imgUrl = '/static/spot-detail1.jpg'
        break
    }
    return (
      <Layout className='spot-detail'>
        <Header activeNav="1" bbs={true}/>
        <Content style={{marginTop: '50px', marginBottom: '60px'}} >
          <Row >
            <Col className='name'  span={12} offset={4}>
              <div>{engname}</div>
              <div>{spotname}</div>
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
                  <img src={imgUrl}></img>
                </Col>
                <Col span={12}>
                  <div style={{fontSize:'27px', color: '#147850'}}>{score}分</div>
                  <div style={{fontSize:'27px', margin: '15px 0 15px 0'}}>
                    <Icon className='green icon' type="star" />
                    <Icon className='green icon' type="star" />
                    <Icon className='green icon' type="star" />
                    <Icon className='green icon' type="star" />
                    <Icon type="star" />
                  </div>
                  <div style={{fontSize:'16px'}}>{rank}</div>
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
                    {intro}
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