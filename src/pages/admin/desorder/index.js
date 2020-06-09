import React from 'react'
import { Layout, Menu, Icon,message, Table } from 'antd';
import { userDesOrderUrl } from '../../../config/index'
import { Link } from 'react-router-dom'
import axios from 'axios'

const { Header, Sider, Content, } = Layout;

class DesOrderAdmin extends React.Component {
  state = {
    collapsed: false,
    hotelData: [],
    desData: [],
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount() {
    this.getUserDes()
  }
  getUserDes() {
    axios.get(userDesOrderUrl)
      .then(res => {
        console.log(res.data)
        this.setState({
          desData: res.data
        })
      })
      .catch(err => {
        message.error(err)
      })
  }
  onChange() {

  }
  render() {
    const desColumns = [
      {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
        align: 'center'
      },
      {
        title: '景点名称',
        dataIndex: 'destation',
        key: 'destation',
        align: 'center'
      },
      {
        title: '出发时间',
        dataIndex: 'starttime',
        key: 'starttime',
        align: 'center'
      },
      {
        title: '价格',
        dataIndex: 'price',
        key: 'price',
        align: 'center'
      }
    ]

    return (
      <Layout className='dashboard'>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
        <div className='logo'><Icon type="dashboard" style={{fontSize: '36px', color: 'rgb(147, 153, 176)'}} /></div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['6']}>
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
            <Table columns={desColumns} dataSource={this.state.desData} />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default DesOrderAdmin