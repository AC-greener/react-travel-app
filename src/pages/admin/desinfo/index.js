import React from 'react'
import { Layout, Menu, Icon,message,Button, Table, Form, Input,  Select  } from 'antd';
import {Link} from 'react-router-dom'
import axios from 'axios'
import { desListUrl } from '../../../config/index'
const { Header, Sider, Content, } = Layout
const { Option } = Select;
const { TextArea } = Input;
const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
}
class DesInfo extends React.Component {
  state = {
    collapsed: false,
    desList: []
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
    axios.get(desListUrl)
      .then(res => {
        console.log(res)
        this.setState({
          desList: res.data
        })
      })
      .catch(err => {
        message.error(err)
      })
  }
  deleteHotDesList(id) {
    axios.delete(desListUrl+id)
      .then(res => {
        console.log(res)
        message.success('删除成功！')
      })
      .catch(err => {
        message.error(err)
      })
  }
  addHotDesList(data) {
    axios.post(desListUrl, data)
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
        title: '景点介绍',
        dataIndex: 'desc',
        key: 'desc',
        align: 'center'
      },
      {
        title: '类型',
        dataIndex: 'type',
        key: 'type',
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
            <Button type="primary" onClick={() => {this.deleteHotDesList(record.id)}}>删除</Button>
          </span>
        ),
      },
    ]
    return (
      <Layout className='dashboard'>
        <Sider  trigger={null} collapsible collapsed={this.state.collapsed}>
        <div className='logo'><Icon type="dashboard" style={{fontSize: '36px', color: 'rgb(147, 153, 176)'}} /></div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['3']}>
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
            <Table columns={desColumns} dataSource={this.state.desList} />
            <h2 style={{ marginLeft: '250px'}} >添加景点信息</h2>
            <Form {...layout} style={{width: '500px'}} onSubmit={this.handleSubmit} className="login-form">
              <Form.Item label='景点类型'>
                {getFieldDecorator('type', {
                  rules: [{ required: true, message: ' ' }],
                  initialValue: 'hot'
                })(
                  <Select >
                    <Option value="hot">hot</Option>
                    <Option value="europe">europe</Option>
                  </Select>
                )}
              </Form.Item>
              <Form.Item label='景点价格'>
                {getFieldDecorator('price', {
                  rules: [{ required: true, message: ' ' }],
                })(
                  <Input
                    placeholder="188"
                  />,
                )}
              </Form.Item>
              <Form.Item label='景点图片URL'>
                {getFieldDecorator('imgUrl', {
                  rules: [{ required: true, message: ' ' }],
                  initialValue: '/static/des-img1.jpg'
                })(
                  <Select  >
                    <Option value="/static/des-img1.jpg">/static/des-img1.jpg</Option>
                    <Option value="/static/des-img2.jpg">/static/des-img2.jpg</Option>
                    <Option value="/static/des-img3.jpg">/static/des-img3.jpg</Option>
                    <Option value="/static/des-img4.jpg">/static/des-img4.jpg</Option>
                  </Select>
                )}
              </Form.Item>
              <Form.Item label='景点介绍'>
                {getFieldDecorator('desc', {
                  rules: [{ required: true, message: ' ' }],
                })(
                  <TextArea placeholder='（ 酒店，南京）南京星空宿泡泡屋度假酒店 1晚  ' rows={4} />
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
DesInfo = Form.create({})(DesInfo)
export default DesInfo