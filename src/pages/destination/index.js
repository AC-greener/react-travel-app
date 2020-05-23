import React from 'react'
import axios from 'axios'
import {Layout} from 'antd'
import Header from '../../common/header/index'


class Destination extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <Layout>
        <Header activeNav="1" bbs={true}/>
      </Layout>
    )
  }
}

export default Destination