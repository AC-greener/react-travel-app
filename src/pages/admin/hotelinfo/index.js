import React from 'react'
import { Layout, Menu, Icon,message,Button, Table, Form, Input,  Select  } from 'antd';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import { hotelListUrl } from '../../../config/index'
const { Header, Sider, Content, } = Layout
const { Option } = Select
const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
}
class HotelInfo extends React.Component {
  state = {
    collapsed: false,
    hotelList: []
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        this.addHotDesList(values)
      }
    })
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  componentDidMount() {
    this.getHotDesList()
  }

  getHotDesList() {
    axios.get(hotelListUrl)
      .then(res => {
        console.log(res)
        this.setState({
          hotelList: res.data
        })
      })
      .catch(err => {
        message.error(err)
      })
  }
  deleteHOtelList(id) {
    axios.delete(hotelListUrl+id)
      .then(res => {
        console.log(res)
        message.success('删除成功！')
      })
      .catch(err => {
        message.error(err)
      })
  }
  addHotDesList(data) {
    axios.post(hotelListUrl, data)
      .then(res => {
        console.log(res)
        message.success('添加成功！')
        this.getHotDesList()
      })
      .catch(err => {
        message.error(err)
      })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const desColumns = [
      {
        title: '酒店名称',
        dataIndex: 'name',
        key: 'name',
        align: 'center'
      },
      {
        title: '评分',
        dataIndex: 'score',
        key: 'score',
        align: 'center'
      },
      {
        title: '价格',
        dataIndex: 'price',
        key: 'price',
        align: 'center'
      },
      {
        title: '操作',
        key: 'action',
        align: 'center',
        render: (text, record) => (
          <span>
            <Button type="primary" onClick={() => {this.deleteHOtelList(record.id)}}>删除</Button>
          </span>
        ),
      },
    ]
    return (
      <Layout className='dashboard'>
        <Sider  trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1">
              <Link to='/admin'>  
                <Icon type="user" />
                <span>用户信息</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to='/admin/message'>  
                <Icon type="video-camera" />
                <span>留言列表</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to='/admin/des'>  
                <Icon type="control" />
                <span>景点信息管理</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
             <Link to='/admin/hotel'>  
              <Icon type="reconciliation" />
                <span>酒店信息管理</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to='/admin/hotelorder'>              
                <Icon type="database" />
                <span>酒店订单</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to='/admin/desorder'>  
                <Icon type="bar-chart" />
                <span>行程订单</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            <Table columns={desColumns} dataSource={this.state.hotelList} />
            <h2 style={{ marginLeft: '250px'}} >添加景点信息</h2>
            <Form {...layout} style={{width: '500px'}} onSubmit={this.handleSubmit} className="login-form">
              <Form.Item label='酒店名称'>
                {getFieldDecorator('name', {
                  rules: [{ required: true, message: ' ' }],
                })(
                  <Input
                    placeholder="box酒店"
                  />
                )}
              </Form.Item>
              <Form.Item label='酒店价格'>
                {getFieldDecorator('price', {
                  rules: [{ required: true, message: ' ' }],
                })(
                  <Input
                    placeholder="188"
                  />,
                )}
              </Form.Item>
              <Form.Item label='酒店评分'>
                {getFieldDecorator('score', {
                  rules: [{ required: true, message: ' ' }],
                })(
                  <Input
                    placeholder="评分4.5 | 经济型"
                  />,
                )}
              </Form.Item>
              <Form.Item label='酒店图片URL'>
                {getFieldDecorator('imgUrl', {
                  rules: [{ required: true, message: ' ' }],
                  initialValue: '/static/hotel1.jpg'
                })(
                  <Select  >
                    <Option value="/static/hotel1.jpg">/static/hotel1.jpg</Option>
                    <Option value="/static/hotel2.jpg">/static/hotel2.jpg</Option>
                    <Option value="/static/hotel3.jpg">/static/hotel3.jpg</Option>
                    <Option value="/static/hotel4.jpg">/static/hotel4.jpg</Option>
                  </Select>
                )}
              </Form.Item>
              <Form.Item >
                <Button style={{ marginLeft: '169px'}} type="primary" htmlType="submit" className="login-form-button">
                  添加
                </Button>
              </Form.Item>
            </Form>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
HotelInfo = Form.create({})(HotelInfo)
export default HotelInfo