import React, { Component, useState} from "react";
import { Link } from "react-router-dom"
import "./page1.css"
import { Row, Col, Table } from "antd";
import { FormOutlined } from "@ant-design/icons";
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

const data2 = {
  data: [
  {
    id: 1,
    meta: [
      {
        key: "1",
        day:["Day 1"],
        city: ["上海","Shanghai", "伦敦","London", "牛津", "Oxford"],
        attractions: ["1. 希思罗机场", "2. 圣詹姆斯公园", "3. 白金汉宫", "4. 威斯敏斯特修道院",
        "5. 英国议会大厦", "6. 伦敦圣保罗大教堂 ","7. 伦敦塔桥 ", "8.  英国伦敦泰晤士河游船船票","9. 伦敦眼"],
        hotel: "圣詹姆士庭院-阿塔酒店-伦敦，St. James' Court, A Taj Hotel, London'"
      },
      {
        key: "2",
        day:["Day 2"],
        city: ["伦敦","London"],
        attractions: ["1. 特拉法加广场 ", "2. 英国国家美术馆 ", "3. 汉堡与龙虾（Soho）", "4. 大英博物馆 ",
        "5. Amorino意式冰淇淋店 ", "6. 考文特花园 "],
        hotel: "圣詹姆士庭院-阿塔酒店-伦敦，St. James' Court, A Taj Hotel, London'"
      },
      {
        key: "3",
        day:["Day 3"],
        city: ["伦敦","London", "剑桥", "Cambridge"],
        attractions: ["1. 国王十字车站 ", "2. 数学桥", "3. 剑桥大学", "4. 圣体钟",
        "5. 国王学院", "6. 三一学院 ","7. 圣约翰学院 ", "8.  剑桥叹息桥","9. 国王十字车站","10. 陛下剧院"],
        hotel: "圣詹姆士庭院-阿塔酒店-伦敦，St. James' Court, A Taj Hotel, London'"
      },
      {
        key: "4",
        day:["Day 4"],
        city: ["伦敦","London", "爱丁堡", "Edinburgh"],
        attractions: ["1. 国王十字车站", "2. 爱丁堡城堡", "3. 圣吉尔斯大教堂", "4. 斯哥特纪念塔",
        "5. 皇家英里大道", "6. 卡尔顿山 "],
        hotel: "圣詹姆士庭院-阿塔酒店-伦敦，St. James' Court, A Taj Hotel, London'"
      },
      {
        key: "5",
        day:["Day 5"],
        city: ["牛津", "Oxford", "伦敦","London", "威廉堡", "Fort William"],
        attractions: ["1. 尼斯湖 ", "2. The Great Glen", "3. 王子街", "4. 伊峡谷"],
        hotel: "伦敦希尔顿逸林酒店 - 海德公园，DoubleTree by Hilton Hotel London - Hyde Park"
      },
      {
        key: "6",
        day:["Day 6"],
        city: ["苏格兰","Scotland", "爱丁堡", "Edinburgh", "因弗尼斯", "Inverness"],
        attractions: ["1. 苏格兰高地二日游", "2. 苏格兰凯恩戈姆国家公园 ", "3. 厄克特城堡", "4. 因弗尼斯城堡 "],
        hotel: "老威弗利酒店，Old Waverley Hotel"
      },
    ]
  },
]
};

class RecLineDetail extends Component  {
  componentDidMount() {
    const action = dispatch => {
      return axios.get ('/table.json').then (res => {
        let result = res.data.data[0].tabled

        dispatch ({type: 'get_recline_data', data: result});
      });
    };
    store.dispatch (action);
  }
  render () {
    return (
      <div style={{paddingBottom: "150px"}}>
        <Header activeNav="4" bbs={ true }/>
        <Row >
            <Col className="detail-bg" span={22} offset={1}>
              <img src={require("../../static/reclinepage1.jpg")}></img>
              <div className="intro">
                英国-伦敦-爱丁堡-温莎-巴斯（共6天）
              </div>
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
    recLineTableData: state.get("recLineTableReducer")["recLineTableData"]
  }
}

export default connect(mapStateToProps) (RecLineDetail);
