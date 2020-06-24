import React from 'react'
import {Layout, Row, Col, Button, Menu, Affix,  DatePicker, message} from 'antd'
import {connect} from 'react-redux'
import axios from 'axios'
import './style.css'
import Header from '../../common/header/index'
import { userDesOrderUrl } from '../../config/index'
const {Content} = Layout

class DesDetail extends React.Component {
 
  constructor(props) {
    super(props)
    this.name= '走近欧洲九寨沟 克罗地亚 十六湖国家公园一日游 可选斯普利特/特罗吉尔出发（电子票免打印）'
    this.price = '998'
    this.desc = '风景如画</br>石灰岩矿床'
    this.bgImg = '/static/des-detail1.jpg'
    switch(this.props.match.params.id) {
      case "1":
        this.bgImg='/static/des-detail1.jpg'
        this.name= '走近欧洲九寨沟 克罗地亚 十六湖国家公园一日游 可选斯普利特/特罗吉尔出发（电子票免打印）'
        this.price = '998'
        this.desc = '风景如画</br>石灰岩矿床'
        break
      case "2":
        this.bgImg='/static/des-detail2.jpg'
        this.name= '（ 酒店，南京）南京星空宿泡泡屋度假酒店 1晚 '
        this.price = '569'
        this.desc = '新潮酒店:360度透明房子，星空美景</br>奇妙体验:睡在浪漫的水晶球里，享受大自然包围的赶脚</br>南京网红打卡地，不一样的入住体验'
        break
      case "3":
        this.bgImg='/static/des-detail3.jpg'
        this.name= '（五星，丽江）5折预售+两店通用+全年可用|丽江/奔子栏丽世酒店4晚'
        this.price = '1980'
        this.desc = '超值套餐：5折预售，两店通用，可拆分，可升级至套房（视房态），免费停车位</>包含早餐：酒店早餐，种类丰富，满足您的个性需求</br>假期享用：20年&21年，周末，五一，端午节，元旦期间均通用'
        break
      case "4":
        this.bgImg='/static/des-detail4.jpg'
        this.name= '（五星，丽江）【超值五折】丽江悦榕庄1/2晚 早+接/送机+下午茶+田园行'
        this.price = '1188'
        this.desc = '超值购买：酒店均价2000元/晚，能看到玉龙雪山的悦榕庄集团酒店哦</br>人生体验：含超多酒店体验，纳西少数民族服饰体验，有机蔬菜园摘菜'
        break
      case "5":
        this.bgImg='/static/des-detail5.jpg'
        this.name= '（奢华，北京）北京颐和安缦酒店2-3晚'
        this.price = '7999'
        this.desc = '百年皇家四合院，朱墙黛瓦，青砖红门、客房修缮成与颐和园建筑浑然一体</br>住客贵宾专享无与伦比的通道，在颐和园、故宫、长城、天坛四大古迹中穿行'
        break
      case "6":
        this.bgImg='/static/des-detail6.jpg'
        this.name= '(豪华，杭州）千岛湖绿城度假酒店'
        this.price = '478'
        this.desc = '❤3号楼湖景亲子套房，2张1.8米大床</br>❤风轻拂轻纱幕帘，搅动您怡然自得的清闲假期'
        break
      case "7":
        this.bgImg='/static/des-this.detail7.jpg'
        this.name= '（奢华，杭州）浙江杭州西溪悦榕庄酒店1-2晚度假套餐'
        this.price = '2888'
        this.desc = '酒店坐落于西溪湿地，周边绿色植被丰富，空气清新舒适，是净化心灵的好去处；</br>酒店提供精巧的家私、炫目的丝锦刺绣织品，将东方的古典和现代的简约完美融合；'
        break
      case "8":
        this.bgImg='/static/des-detail8.jpg'
        this.name= '走近欧洲九寨沟 克罗地亚 十六湖国家公园一日游 可选斯普利特/特罗吉尔出发（电子票免打印）'
        this.price = '4699'
        this.desc = '限时限量抢购，平日均价4000元每晚，超级值得买哦</br>沿嘉陵江岸陡峻山体顺势而建，无限次体验露天园林温泉</br>重庆后花园，双人下午茶（9月30日之前入住），接送机各一次，需提前预约'
        break
      case "9":
        this.bgImg='/static/des-detail9.jpg'
        this.name= '走近欧洲九寨沟 克罗地亚 十六湖国家公园一日游 可选斯普利特/特罗吉尔出发（电子票免打印）'
        this.price = '998'
        this.desc = '限时限量抢购，平日均价4000元每晚，超级值得买哦</br>沿嘉陵江岸陡峻山体顺势而建，无限次体验露天园林温泉</br>重庆后花园，双人下午茶（9月30日之前入住），接送机各一次，需提前预约'
        break
      case "10":
        this.bgImg='/static/des-detail10.this.jpg'
        this.name= '【古典文艺】欧洲法意瑞7日游 五渔村/勃朗峰/罗马/威尼斯 （巴黎往返）'
        this.price = '3627'
        this.desc = '风景如画</br>石灰岩矿床'
        break
      case "11":
        this.bgImg='/static/des-detail11.jpg'
        this.name= '【意大利+瑞士 甄选长线H】德国/意大利/瑞士11天10晚法兰克福上下'
        this.price = '2980'
        this.desc = '★ 当地华人导游：欧洲地导随团，深入了解欧洲文化体验当地生活！</br>★ 免费签证材料：免费提供签证材料包括（行程单，酒店预订单）！</br>重庆后花园，双人下午茶（9月30日之前入住），接送机各一次，需提前预约'
        break
      case "12":
        this.bgImg='/static/des-detail12.jpg'
        this.name= '【东欧+瑞士 甄选长线C】德国/奥地利/捷克/斯洛伐克/匈牙利/瑞士9天8晚 法兰克福/慕尼黑出发'
        this.price = '3188'
        this.desc = '★ 当地华人导游：欧洲地导随团，深入了解欧洲文化体验当地生活！</br>★ 免费签证材料：免费提供签证材料包括（行程单，酒店预订单）！</br>重庆后花园，双人下午茶（9月30日之前入住），接送机各一次，需提前预约'
        break
      case "13":
        this.bgImg='/static/des-detail13.jpg'
        this.name= '【奔向欧洲的天涯海角】伊比利亚半岛 法国+西班牙+葡萄牙9天8晚经典行'
        this.price = '4699'
        this.desc = '★ 当地华人导游：欧洲地导随团，深入了解欧洲文化体验当地生活！</br>★ 免费签证材料：免费提供签证材料包括（行程单，酒店预订单）！</br>重庆后花园，双人下午茶（9月30日之前入住），接送机各一次，需提前预约'
        break
      default:
        this.bgImg='/static/des-detail1.jpg'
        this.name= '走近欧洲九寨沟 克罗地亚 十六湖国家公园一日游 可选斯普利特/特罗吉尔出发（电子票免打印）'
        this.price = '998'
        this.desc = '风景如画</br>石灰岩矿床'
        break
    }
    this.state = {
      starttime: '',
      price: this.price,
      destation: this.name
    }
    console.log(this.state)
  }
  onChange(date, dateString) {
    console.log(date, dateString);
    this.setState({
      starttime: dateString
    })
  }
  handleClick() {
    const data = {
      starttime: this.state.starttime,
      price: this.state.price,
      destation: this.state.destation,
      username: this.props.username,
      userid: this.props.userid
    }
    console.log(data)

    if(sessionStorage.getItem('islogin')) {
      axios.post(userDesOrderUrl, data)
      .then(res=> {
        message.success('预定成功！')
      })
      .catch(err=> {
        message.error(err)
      })
    } else {
      message.error('请先登录！')
    }

  }
  render() {
    return (
      <Layout className='des-detail'>
        <Header activeNav="1" bbs={ true }/>
        <Content style={{marginTop: '50px'}}>
          <Row style={{padding: '30px'}} gutter={36}>
            <Col  span={8} offset={2}>
              <img style={{width: '500px', height: '358px'}} src={this.bgImg}></img>
            </Col>
            <Col style={{padding: '20px'}}  span={9}>
              <Row className='name'>{this.name}</Row>
              <Row className='price'>
                <span  >
                  {this.price}
                </span> 元起
              </Row>
              <Row className='descri'  dangerouslySetInnerHTML={{ __html: this.desc }}>
              </Row>
              <Row>
                <h4 className='start-time'>
                  出行日期
                </h4>
                <div>
                  <DatePicker  placeholder="请选择出行时间" onChange={(date, dateString) => this.onChange(date, dateString)} />
                  <Button onClick={()=>this.handleClick()} style={{marginLeft: '60px'}} type="primary">立即预定</Button>
                </div>
              </Row>
              <Row className='order'>
              </Row>
            </Col>
          </Row>
          <Row className='intro'>
            <Col style={{padding: '100px'}}  span={12} offset={2}>
             <Affix offsetTop={0}>
              <Menu style={{width: '680px'}} className=' menu'  mode="horizontal">
                <Menu.Item key="product">
                  <a href="#product">
                    产品详情
                  </a>
                </Menu.Item>
                <Menu.Item key="order" >
                  <a href="#order">
                  预订须知
                  </a>
                </Menu.Item>
                <Menu.Item key="tip">
                  <a href="#tip">
                    温馨提示
                  </a>
                </Menu.Item>
              </Menu>
              </Affix>
              <Row>
                <h1 className="title" id='product'>产品详情</h1>
                <div>
                  <img style={{width: '680px'}} src='/static/des-detail-bg1.jpg'></img>
                </div>
              </Row>
              <Row>
                <h1 className="title" id='order'>预订须知</h1>
                <div>
                  <img style={{width: '680px'}} src='/static/des-detail-bg2.jpg'></img>
                </div>
              </Row>
              <Row>
                <h1 className="title" id='tip'>温馨提示</h1>
                <div>
                  <div>
                    <p>
                      1、出行安全提示：
                    </p>
                    <p>
                      ① 出海、游泳、漂流、潜水、滑雪溜冰、跳伞、丛林飞跃等活动项目，均存有较高风险。参与前请根据自身健康、身体状况及有关部门的提示谨慎选择游玩项目，在游玩中请务必听从专业人士指导、切勿冒险进行高风险项目，以免发生不测。
                      <br/>
                      ② 请您应确保自身条件适合外出旅游度假。如您为孕妇、老人、小孩或者有心脏病、高血压、呼吸系统疾病等，请在征得医院专业医生同意后预订旅游产品。如您在预订前未告知真实情况而造成人身伤害或损失，您将自行承担相应责任。
                      <br/>
                      ③ 请自愿购买旅游人身意外保险。穷游网郑重提醒您应安排好自己的活动项目，谨慎参加赛车、骑马、攀岩、滑翔、探险、漂流、出海、潜水（浮潜／深潜）、游泳、滑雪、滑冰、滑板、跳伞、热气球、蹦极、冲浪等高风险活动，如需参加上述活动，穷游网建议您投保包含高风险项目的意外险种。
                    </p>
                  </div>
                  <div>
                    <p>2、文明出游提示：</p>
                    <p>出游过程中，请严格遵守中华人民共和国法律、目的地有关国家和地区法律法规，请遵守当地的饮食习惯、习俗禁忌、宗教礼仪等，避免因触犯法律或当地民俗而损害自身利益。</p>
                  </div>
                  <div>
                    <p>3、盗抢风险提示：</p>
                    <p>出行过程中，为了您的人身、财产安全，请妥善保管贵重物品，并尽量避免单独出行，在公开场合切勿暴露贵重物品及大量现金，以免发生盗抢事故。</p>
                  </div>
                  <div>
                    <p>4、交通风险提示：</p>
                    <p>为了您的人身安全，请谨慎选择自驾游产品或私营交通工具，并请根据个人身体状况选择出行时间和出行方式，避免出现疲劳驾驶或违反当地交通规则而损害自身利益。</p>
                  </div>
                </div>
              </Row>
            </Col>
          </Row>
        </Content>
      </Layout>
    )
  }
}

const  mapStateToProps = (state) => {
  return {
    username: state.get('login').username,
    userid: state.get('login').id
  }
}
export default connect(mapStateToProps)(DesDetail)