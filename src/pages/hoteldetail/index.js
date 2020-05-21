import React from 'react'
import './style.css'
import Header from '../../common/header/index'
import { Layout, Row, Col,Typography, PageHeader } from 'antd'
import axios from 'axios'

const {  Content } = Layout;
const { Paragraph } = Typography
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
class HotelDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hotelDetail: {}
    }
  }
  componentDidMount () {
    this.getHotelDetail()
  }
  getHotelDetail() {
    axios.get('/hoteldetail.json')
      .then(res => {
        console.log(res.data)
        this.setState({
          hotelDetail: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    return (
      <Layout style={{ background: 'rgb(255, 255, 255)'}} className='h'>
        <Header activeNav="2" bbs = {true}/>
        <Row style={{ margin: '50px 0 0 0', background: 'rgb(255, 255, 255)'}} gutter={12}>
          <Col  className='center'  span={10} offset={2}>
            <div style={{ textAlign: 'center'}}>
              <img src={require('../../static/hotel-detail-1.jpg')} alt='example'></img>
            </div>
          </Col>
          <Col  style={{marginLeft: '-16px'}}  span={5}>
            <Row className='center'>
              <div  >
                <img src={require('../../static/hotel-detail-2.jpg')} alt='example'></img>
              </div>
            </Row>
            <Row className='center'>
            <div>
                <img src={require('../../static/hotel-detail-3.jpg')} alt='example'></img>
              </div>
            </Row>
          </Col>
          <Col   span={5}>
            <Row className='center'>
              <div>
                <img src={require('../../static/hotel-detail-4.jpg')} alt='example'></img>
              </div>
            </Row>
            <Row className='center'>
            <div >
                <img src={require('../../static/hotel-detail-5.jpg')} alt='example'></img>
              </div>
            </Row>
          </Col>
        </Row>
        <Content style={{marginBottom: '100px', background: 'rgb(255, 255, 255)'}}  >
          <Col span={20} offset={2} style={{padding: '20px'}}>
          <PageHeader
            style={{
              border: '1px solid rgb(235, 237, 240)',
              margin: '15px'
            }}
            title="北京和园国际青年客栈"
          >
            <PageContent>
              <div className="content">
                <Row gutter={16} style={{marginBottom: '15px'}}>
                  <Col span={8}>
                      位置
                    <svg style={{width: '16px', hright: '16px'}} className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-weizhi"></use>
                    </svg>&nbsp;: &nbsp;
                    文慧园路志强北园一号
                  </Col>
                </Row>
              </div>
            </PageContent>
          </PageHeader>
          <PageHeader
            style={{
              border: '1px solid rgb(235, 237, 240)',
              borderRadius: '5px',
              margin: '15px'
            }}
            title="酒店信息"
          >
          <PageContent>
            <div className="content">
              <Paragraph>
                北京和园国际青年客栈位于文慧园路志强北园一号，紧邻地铁2号线积水潭站，交通便利、环境优美。
                <br/>
                北京和园国际青年客栈是一家四合院式建筑的青年旅舍，院落宽敞，四面房屋各处独立，彼此之间有游廊连接，通风采光。院内植被繁茂、鸟语花香。
                <br/>
                这里有舒适的客房、温馨的酒吧。旅舍客房简洁、舒适，每间客房都配有空调、暖气，带有通户外的窗户。
                <br/>
                餐厅供应中式和西式食品；酒吧提供浓香的咖啡、丰富的酒水，让每一个客人都能得到优质的服务，在这繁华的都市里分享到大自然赐予的一片美好天地。
                <br/>
                酒店电话：010-62277138
              </Paragraph>
              </div>
            </PageContent>
          </PageHeader>
          <PageHeader
            style={{
              border: '1px solid rgb(235, 237, 240)',
              borderRadius: '5px',
              margin: '15px'
            }}
            title="入住须知"
          >
          <PageContent>
            <div className="content">
              <Paragraph>
                <strong>入离时间</strong>入住时间：14:00以后&nbsp;&nbsp;&nbsp;  离店时间：00:00-12:00。<br/>
                <strong>餐食政策</strong>酒店不提供早餐。<br/>
                <strong>宠物政策</strong>不可携带宠物。 <br/>
                <strong>儿童政策</strong>不接受18岁以下客人单独入住。 不接受18岁以下客人在无监护人陪同的情况下入住。<br/>
              </Paragraph>
              </div>
            </PageContent>
          </PageHeader>
          </Col>
        </Content>
        </Layout>
      )
  }
}
export default HotelDetail