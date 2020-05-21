import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Row, Col, Card, Layout, Carousel } from 'antd';
import Header from '../../common/header/index'
import './index.css'
const { Meta } = Card;
class RecommendLine extends Component  {
  render () {
    return (
        <Layout className="layout">
          <Header activeNav="4" bbs={ true }/>
          <Carousel  autoplay>
            <div style={{ width: '100%'}}>
              <img src={require('../../static/bg-recolinejpg.jpg')} alt='图片未加载'></img>
            </div>
          </Carousel>
          <div className='' style={{ padding: '20px 80px 20px 50px'}}>
            <h1 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '25px'}}>热门线路</h1>
            <Row style={{ padding: '0 250px'}} justify="space-around" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={8}>
                <div className='card-wrapper'>
                  <Link to={'/recline/detail/1'}>
                    <Card className='rec-line-card' style={{width: 310, height: '370px'}}
                      hoverable
                      cover={<img alt="example"  srcSet  src={require('../../static/recoline1.jpg')} />}
                    >
                      <div className='card-day'>6<span>天</span></div>
                      <Meta className='rec-line' title='英国-伦敦-爱丁堡'   description="上海·伦敦·牛津·剑桥·爱丁堡·苏格兰高地·苏格兰·因弗尼斯·尼斯湖·威廉堡·巴斯·巨石阵" />
                    </Card>
                  </Link>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div className='card-wrapper'>
                <Link to='/recline/detail/2'>
                  <Card className='rec-line-card' style={{width: 310, height: '370px'}}
                    hoverable
                    cover={<img alt="example"  srcSet  src={require('../../static/recoline2.jpg')} />}
                  >
                    <div className='card-day'>7<span>天</span></div>
                    <Meta className='rec-line' title='新西兰自驾南岛深度游'   description="上海·奥克兰·新西兰马尔堡·凯库拉·基督城·格雷茅斯·卡罗阿" />
                  </Card>
                  </Link>
                </div>
              </Col>

              <Col className="gutter-row" span={8}>
                <div className='card-wrapper'>
                  <Link to='/recline/detail/3'>
                    <Card className='rec-line-card' style={{width: 310, height: '370px'}}
                      hoverable
                      cover={<img alt="example"  srcSet  src={require('../../static/recoline3.jpg')} />}
                    >
                      <div className='card-day'>7<span>天</span></div>
                      <Meta className='rec-line' title='法国' description="广州·巴黎·凡尔赛·阿维尼翁·马赛·尼斯·戛纳·里昂·格勒诺布尔·日内瓦" />
                    </Card>
                  </Link>
                </div>
              </Col>
            </Row>
            <Row style={{ padding: '0 250px'}} justify="space-around" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={8}>
                <div className='card-wrapper'>
                <Link to='/recline/detail/4'>
                  <Card className='rec-line-card' style={{width: 310, height: '370px'}}
                    hoverable
                    cover={<img alt="example"  srcSet  src={require('../../static/recoline4.jpg')} />}
                  >
                    <div className='card-day'>9<span>天</span></div>
                    <Meta className='rec-line' title='巴黎罗马巴塞罗那'   description="香港·上海·巴黎·罗马·梵蒂冈·巴塞罗那" />
                  </Card>
                  </Link>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div className='card-wrapper'>
                <Link to='/recline/detail/5'>
                  <Card className='rec-line-card' style={{width: 310, height: '370px'}}
                    hoverable
                    cover={<img alt="example"  srcSet  src={require('../../static/recoline5.jpg')} />}
                  >
                    <div className='card-day'>7<span>天</span></div>
                    <Meta className='rec-line' title='魔芋菌的奥捷行程'   description="北京·布拉格·库特纳霍拉·捷克克鲁姆洛夫·萨尔茨堡·哈尔施塔特·维也纳" />
                  </Card>
                  </Link>
                </div>
              </Col>

              <Col className="gutter-row" span={8}>
                <div className='card-wrapper'>
                <Link to='/recline/detail/6'>
                  <Card className='rec-line-card' style={{width: 310, height: '370px'}}
                    hoverable
                    cover={<img alt="example"  srcSet  src={require('../../static/recoline6.jpg')} />}
                  >
                    <div className='card-day'>7<span>天</span></div>
                    <Meta className='rec-line' title='湖南之旅' description="成都·长沙·凤凰·湘西·张家界市·张家界风景区" />
                  </Card>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </Layout>
    )
  }
}

export default RecommendLine
