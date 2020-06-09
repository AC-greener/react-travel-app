import React from 'react'
import './style.css'
import Header from '../../common/header/index'
import { Layout, Carousel, Row, Col, PageHeader, Affix, Icon, message } from 'antd'
import axios from 'axios'
import { topicDetailUrl } from '../../config/index'
const { Content } = Layout
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

class HotTopicDetail extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      like: false,
      id: 1,
      topicDetail: {}
    }
  }
  componentDidMount() {
    this.setState({
      id: this.props.match.params.id
    })
    this.getTopDetail()
  }
  getTopDetail(){
    axios.get(topicDetailUrl)
      .then(res => {
        const data = res.data[this.state.id]
        console.log(data)
        this.setState({
          topicDetail:{
            content: data.content,
            ago: data.ago,
            username: data.username,
            topicname: data.topicname,
            bgUrl: data.bgUrl,
          }
        })
      })
      .catch(err => {
        message.error(err)
      })
  }
  giveLike () {
    this.setState({
      like: !this.state.like
    })
  }
  render() {
    return (
      <Layout className='hot-topic'>
        <Header bbs={true} />
        <Carousel >
          <div style={{position: 'relative'}}>
            <img style={{width: '100vw'}} src={this.state.topicDetail.bgUrl} alt='图片未加载'></img>
          </div>
        </Carousel>
        <Content style={{marginBottom: '200px'}}>
          <h1 className='topic-name'>{this.state.topicDetail.topicname}</h1>
          <Row>
            <Col span={2} offset={4}>
              <Affix offsetTop={100} style={{marginTop: '120px'}}>
                <div className='icon-wrapper' onClick={() => this.giveLike()}>
                  <Icon className={this.state.like? 'like' : ''} type="like" />
                </div>
                <div className='icon-wrapper'>
                  <Icon type="branches" />
                </div>
              </Affix>
            </Col>
            <Col span={14} >
            <PageHeader
              style={{
                border: '1px solid rgb(235, 237, 240)',
                margin: '15px'
              }}
              title={this.state.topicDetail.username}
              subTitle={this.state.topicDetail.ago}
              avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
            >
            <PageContent>
              <div className="content" dangerouslySetInnerHTML={{ __html: this.state.topicDetail.content }}>
                {/* <Paragraph>
                  夏日大约算是日本人民最欢腾的季节。无惧热浪，各个地方大大小小的祭典就好像散开了花儿一般点燃了狂欢的热焰。好似为了多留一留北国步履匆匆的夏日一般，除了每年夏天点亮夜空的花火大会，以狂野奔放出名的东北地区还有众多热情如火叫人回味无穷的夏日祭典。
                </Paragraph>
                <h3>
                哪里是东北
                </h3>
                <Paragraph>
                  所谓东北地区，即字面意义上的位于日本本州岛东北部分的区域，又被称为奥羽地区。行政范围上包括青森、岩手、宫城、秋田、山形和福岛六县，占总日本面积的约30%。
                </Paragraph>
                <Paragraph>
                  “东北”这个名词第一次出现在日本的正式文献里大约要追溯到江户时代的幕府末期了，1868年下赐给秋田藩主佐竹义尧的内敕是“东北”第一次以地名形式出现在官方史料中的记载，但其实此时的东北具体指的是东北三道——东海道、东山路和北陆道，和现在我们认知的东北地区依然不是同一个概念。直到废藩置县之后，分离出北海道，在仙台设立了国派机构，东北才真正作为一个美称用来指代奥羽地区，之后在明治后期逐渐被民众熟知，于是奥羽地区就正式成了东北地区，而原先的“奥羽”到现在反而倒成了雅称。
                </Paragraph>
                <h3>
                东北四大祭
                </h3>
                <Paragraph>
                狂野奔放的东北地区总是有着众多热情如火让人念念不忘的夏日祭典。仙台的七夕祭、青森的睡魔祭、秋田的竿灯祭以及山形的花笠祭因参与人数众多，举办城市都位于东北地区，且都集中在夏季，因而常被合在一起并称为东北夏日的四大祭。
                </Paragraph>
                <h3>
                浪漫的仲夏风物诗：仙台七夕祭
                </h3>
                <div>
                  <img src='/static/topic-detail1.jpg'></img>
                </div>
                <Paragraph>
                七夕的典故本源自中国的牛郎织女传说，据传在奈良时代七夕的“乞巧”从中国远渡重洋传到了日本，彼时还只是女子们向织女祈愿希望能心灵手巧，而七夕祭大约是在仙台藩藩组伊达政宗的大力推广之下才真正开始以祭典的身份在民间流行。
                </Paragraph>
                <Paragraph>
                以“杜都”知名广为人知的仙台市东北地区的第一大城市，每年8月6日起都要举办连续3天的七夕祭，距今已有400多年的历史。闹市中心挂满彩色装饰，商店街就好像成了一条五彩的七夕隧道，随处都可见华丽的竹叶装饰。七夕的特别装饰和久寿玉是最应景的装扮，写满了心愿的“短册”在竹枝上翻飞，和纸制成的风幡迎风抖擞，保佑阖家平安的纸鹤在众多祈愿小饰品间上下舞蹈，配合着长达5米的节日装饰，壮观又别致，也难怪每年都会吸引超过200万游客共襄盛典。
                </Paragraph>
                <h3>夏夜里最狂野的百鬼夜行：青森睡魔祭</h3>
                <div>
                  <img src='/static/topic-detail2.jpg'></img>
                </div>
                <Paragraph>
                华丽的山车灯笼，热情高歌的民众，响彻云天的欢呼——青森睡魔祭无疑是夏日东北最惹眼的节日，没有之一。相传在8世纪时，由中国传入的七夕乞巧节和津轻当地的传统民俗活动合二为一，以驱赶夏日酷热带来的困乏为名，成了最初睡魔祭的起源。作为整个东北地区短暂夏日中最华彩的一章，睡魔祭严格上来说分成青森、弘前和五所川原三处举办，并且看似雷同实则各具特点。其中最出彩、区别最大的就是睡魔祭中的绝对主角：睡魔灯笼。
                </Paragraph>
                <Paragraph>
                堪称睡魔祭灵魂的睡魔灯笼是专业灯笼匠人一整年的心血，以竹条和铁丝制成骨架，再糊上特殊处理的纸张，画上人物图样，最终呈现出巨型人样灯笼。睡魔祭的灯笼形象多选择中国话本故事、歌舞伎人物或是历史传奇人物，以艳丽的色彩和极具张力的动作描绘他们的英勇传说。睡魔祭时，山车载着点亮了的灯笼在街道上巡回往复，再加上穿着传统，舞姿热情的民众，回荡在夜空中的歌声号子，狂野和传统的碰撞将节日气氛推向高潮。
                </Paragraph>
                <Paragraph>
                在三个睡魔祭主会场上，青森市的睡魔灯笼形象最为传统，多是历史传说中的英雄人物；弘前市则多扇形造型的灯笼，图样除了历史上的武将之外，还常会有美人相伴，故而颜色也更为艳丽；五所川原的灯笼不同于前两者，以“立”为主题，每一尊都如苏相伴高大直立，最高的立灯笼可达23米，相当壮观。
                </Paragraph> */}
              </div>
            </PageContent>
          </PageHeader>
            </Col>
          </Row>
        </Content>
      </Layout>
    )
  }
}

export default HotTopicDetail