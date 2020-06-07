import React from 'react'
import { Layout, Menu, Icon,message,Button, Table,Switch  } from 'antd';
import { userMessageUrl } from '../../../config/index'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

const { Header, Sider, Content, } = Layout;

class DesOrderAdmin extends React.Component {
  state = {
    collapsed: false,
    messageData: [],
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount() {
    this.getUserMessage()
  }
  getUserMessage() {
    axios.get(userMessageUrl)
      .then(res => {
        console.log(res)
        res.data.forEach((item,index) => {
          res.data[index].createdtime = new Date(item.createdtime).toLocaleDateString()
        })
        this.setState({
          messageData: res.data
        })
      })
      .catch(err => {
        message.error(err)
      })
  }

  deleteUserMessage(record) {
    console.log(record)
    axios.delete(userMessageUrl+ record.id)
      .then(res=> {
        message.success('删除成功！')
        this.getUserMessage()
      })
      .catch(err => {
        message.error(err)
      })
  }
  render() {
    const messageColumns = [
      {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
        align: 'center'
      },
      {
        title: '留言时间',
        dataIndex: 'createdtime',
        key: 'createdtime',
        align: 'center'
      },
      {
        title: '留言内容',
        dataIndex: 'content',
        key: 'content',
        align: 'center'
      },
      {
        title: '操作',
        key: 'action',
        align: 'center',
        render: (text, record) => (
          <span>
            <Button onClick={() => {this.deleteUserMessage(record)}}>删除</Button>
          </span>
        ),
      },
    ]
    

    return (
      <Layout className='dashboard'>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
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
            <Table columns={messageColumns} dataSource={this.state.messageData} />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default DesOrderAdmin