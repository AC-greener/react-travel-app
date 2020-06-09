import React, { Component } from "react"
import "./index.css"
import { Row, Col, Table } from "antd"
import store from '../../store/index'
import {connect} from 'react-redux'
import axios from 'axios'
import Header from "../../common/header/index"

const columns = [
  {
    title: "日期",
    align: "center",
    dataIndex: "day",
    width: 170,
    className: "col-day",
    render: day => (
      <div className="day">
        { day }
      </div>
    )
  },
  {
    title: "城市",
    align: "center",
    dataIndex: "city",
    width: 180,
    className: "col-city",
    render: (citys) => (
      <div>
        {
          citys.map(city => {
            return (
              <div>{city}</div>
            )
          })
        }
      </div>
    )
  },
  {
    title: "景点",
    dataIndex: "attractions",
    width: 260,
    className: "col-attractions",
    render: (attractions) => (
      <div>
        {
          attractions.map(att => {
            return (
              <div>{att}</div>
            )
          })
        }
      </div>
    )
  },
  {
    title: "住宿",
    width: 200,
    align: "center",
    className: "col-hotel",
    dataIndex: "hotel",
  },
];


class RecLineDetail extends Component  {
  componentDidMount() {
    const action = dispatch => {
      return axios.get ('/table.json').then (res => {
        let index = parseInt(this.props.match.params.id) - 1
        let result = res.data.data[index].tabled
        dispatch ({type: 'get_recline_data', data: result})
      })
    }
    store.dispatch (action)
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
    const DetailBg = (
      <Col className="detail-bg" span={22} offset={1}>
        <img src={require(`../../static/reclinepage${index}.jpg`)} alt='图片未加载'></img>
        <div className="intro">
          { text }
        </div>
      </Col>
    )
    return (
      <div style={{paddingBottom: "150px"}}>
        <Header activeNav="4" bbs={ true }/>
        <Row >
            <Col className="detail-bg" span={22} offset={1}>
            { DetailBg }
            </Col>
        </Row>
        <h2 className="day-detail">行程总览</h2>
        <Row >
            <Col className="detail-bg" span={18} offset={3}>
            <Table
              className="table"
              columns={columns}
              dataSource={this.props.recLineTableData}
              bordered
              size={"default"}
              pagination={false}
            />
            </Col>
        </Row>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    recLineTableData: state.get("recLineTableReducer")["recLineTableData"],
  }
}

export default connect(mapStateToProps) (RecLineDetail);
