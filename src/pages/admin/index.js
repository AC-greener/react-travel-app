import React from 'react'
import { Layout, Menu, Icon,message, Table,Switch  } from 'antd';
import {userInfoUrl} from '../../config/index'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './style.css'

const { Header, Sider, Content, } = Layout;

class Dashboard extends React.Component {
  state = {
    collapsed: false,
    userinfo: [],
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount() {
    this.getUserInfo()
  }
  getUserInfo() {
    axios.get(userInfoUrl)
      .then(res => {
        console.log(res.data.data)
        res.data.data.forEach((item,index) => {
          if(item.isadmin) {
            res.data.data[index].isadmin = '是'
          } else {
            res.data.data[index].isadmin = '否'
          }
        })
        this.setState({
          userinfo: res.data.data
        })
      })
      .catch(err => {
        message.error(err)
      })
  }
  onChange() {

  }
  render() {
    const userColumns = [
      {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
        align: 'center'
      },
      {
        title: '手机号',
        dataIndex: 'tel',
        key: 'tel',
        align: 'center'
      },
      {
        title: '是否为管理员',
        dataIndex: 'isadmin',
        key: 'isadmin',
        align: 'center'
      },
      {
        title: '设置为管理员',
        key: 'set',
        align: 'center',
        render: (text, record) => (
          <span>
            <Switch defaultChecked={record.isadmin === '是' ? true : false} onChange={() => {}} />
         </span>
        ),
      },
    ]
    return (
      <Layout className='dashboard'>
        <Sider  trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
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
            <Table columns={userColumns} dataSource={this.state.userinfo} />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard