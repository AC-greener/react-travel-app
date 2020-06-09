import React from 'react'
import './style.css'
import Header from '../../common/header/index'
import { Layout, Row, Col,Typography, PageHeader,  Table, Button, DatePicker, message,} from 'antd'
import axios from 'axios'
import moment from 'moment' 
import { connect } from 'react-redux'
import { userHotelOrderUrl, userHotelDetailUrl } from '../../config/index'
const {  Content } = Layout 
const { Paragraph } = Typography
const { RangePicker } = DatePicker 
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
  ) 
}

const dateFormat = 'YYYY/MM/DD' 
class HotelDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hotelDetail: {},
      startTime1: '2020/06/01',
      endTime1: '2020/06/11',
      startTime2: '2020/07/01',
      endTime2: '2020/07/08'
    }
    this.orderHotel = this.orderHotel.bind(this)
  }
  componentDidMount () {
    this.getHotelDetail()
  }
  handleTimePicker(data) {
    this.setState({
      startTime:new Date(data[0]._d).toLocaleString(),
      endTime:new Date(data[1]._d).toLocaleString()
    })
  }
  orderHotel(data, text) {
    const hotelInfo = {}
    hotelInfo.hotelname = this.state.hotelDetail.hotelname
    hotelInfo.people = data.people+''
    hotelInfo.price = data.price+''
    hotelInfo.roomtype = data.roomtype
    hotelInfo.starttime = data.time[0]
    hotelInfo.endtime = data.time[1]
    hotelInfo.username = this.props.username
    hotelInfo.userid = this.props.userid
    console.log(hotelInfo)
    axios.post(userHotelOrderUrl, hotelInfo)
      .then(res => {
        message.success('预约成功')
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
  getHotelDetail() {
    axios.get(userHotelDetailUrl)
      .then(res => {
        this.setState({
          hotelDetail: res.data[0]
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    const columns = [
      {
        title: '房型',
        align: 'center',
        dataIndex: 'roomtype',
        key: 'roomtype',
        // render: text => <a>大床房</a>,
      },
      {
        title: '今日房价',
        align: 'center',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: '房屋信息',
        dataIndex: 'roominfo',
        key: 'roominfo',
        render: roominfo => (
          <div>
            {
              roominfo.map((item, index) => {
                return (
                  <div key={index}>{item}</div>
                )
              })
            }
          </div>
        )
      },
      {
        title: '入住人数',
        align: 'center',
        key: 'people',
        dataIndex: 'people',
        render: people => (
          <span>
              {people}
          </span>
        ),
      },
      {
        title: '入住时间',
        key: 'time',
        align: 'center',
        dataIndex: 'time',
        render: (time) => (
          <span>
               <RangePicker
                defaultValue={[moment(time[0], dateFormat), moment(time[1], dateFormat)]}
                format={dateFormat}
               onChange={(d) => this.handleTimePicker(d)}/>
          </span>
        ),
      },
      {
        title: '操作',
        align: 'center',
        key: 'opera',
        render: (text, row) => (
          <div>
            <Button type="primary" onClick={() => this.orderHotel(row, text)}>立即预约</Button>
          </div>
        ),
      },
    ] 
    
    const data = [
      {
        key: '1',
        roomtype: '单人间',
        price: 128,
        roominfo: ['免费WIFI', '18平米','淋浴', '1张单人床'],
        time: ['2020/06/01','2020/06/21'],
        people: 2,
      },
      {
        key: '2',
        roomtype: '双人间',
        price: 218,
        time: ['2020/06/01','2020/06/08'],
        roominfo: ['免费WIFI', '26平米', '淋浴', '1张双人床, 1张单人床'],
        people: '2~3',
      }
    ]
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
            title={this.state.hotelDetail.hotelname}
          >
            <PageContent>
              <div className="content">
                <Row gutter={16} style={{marginBottom: '15px'}}>
                  <Col span={8}>
                      位置
                    <svg style={{width: '16px', hright: '16px'}} className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-weizhi"></use>
                    </svg>&nbsp; : &nbsp;
                    {this.state.hotelDetail.location}
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
              <div dangerouslySetInnerHTML={{ __html: this.state.hotelDetail.hotelinfo }}>
              </div>
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
            title="筛选心仪房型和报价"
          >
          <PageContent>
            <div className="content">
              <Table columns={columns} dataSource={data} />
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
                <div dangerouslySetInnerHTML={{ __html: this.state.hotelDetail.hotelrules }}>
                </div>
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
const mapStateToProps = (state) => {
  return {
    username: state.get('login').username,
    userid: state.get('login').id
  }
}
export default connect(mapStateToProps)(HotelDetail)