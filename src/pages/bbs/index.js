import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './style.css'
import {  } from 'antd';
import Header from '../../common/header/index'
class Bbs extends Component  {
  render () {
    return (
      <div>
        <Header bbs={ true }/>
        穷游论坛
      </div>
    )
  }
}

export default Bbs;
