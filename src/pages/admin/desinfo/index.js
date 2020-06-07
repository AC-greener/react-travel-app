import React from 'react'
import { Layout, Menu, Icon,message,Button, Table,Switch  } from 'antd';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import { desListUrl } from '../../../config/index'
const { Header, Sider, Content, } = Layout;

class DesInfo extends React.Component {
  state = {
    collapsed: false,
    desList: []
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
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
        console.log(this.state)
      })
      .catch(err => {
        message.error(err)
      })
  }

  render() {
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
            <Button type="primary" onClick={(record) => {}}>删除</Button>
          </span>
        ),
      },
    ]
    return (
      <Layout className='dashboard'>
        <Sider  trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
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
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default DesInfo