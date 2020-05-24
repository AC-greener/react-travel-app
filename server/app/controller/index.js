'use strict';

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    const data = await this.app.mysql.select('table')
    const { ctx } = this
    ctx.body = JSON.stringify(data)
    ctx.set('content-type', 'application/json')
  }
  async postmessage() {
    const { ctx } = this
    ctx.request.body.startday = new Date(ctx.request.body.startday)
    await this.app.mysql.insert('messageboard', ctx.request.body)
    console.log('插入成功')
    ctx.body = {
      data: 'ok'
    }
  }
  async getmessage() {
    const { ctx } = this
    const data = await this.app.mysql.select('messageboard')
    ctx.body = data
  }
  async spotList() {
    const { ctx } = this
    const data = await this.app.mysql.select('spotlist')
    ctx.body = data
  }
  async getreply() {
    const { ctx } = this
    const data = await this.app.mysql.select('messageboard')
    ctx.body = data
  }

  async login() {
    const { ctx } = this
    const data = await this.app.mysql.get('user', {
      username: ctx.request.body.username,
      password: ctx.request.body.password
    })
    if(data) {
      console.log('登录成功')
      ctx.body = { data }
    } else {
      ctx.body = { data: 0 }
    }

  }
  async regist() {
    const { ctx } = this
    const data = await this.app.mysql.get('user', { 
      username: ctx.request.body.username
    })
    if(!data) {
      //没有这条数据
      await this.app.mysql.insert('user', ctx.request.body)
      ctx.body = { data: 1 }
    } else {
      ctx.body = { data: 0 } // 0 代表该用户已注册
    }
  }
  async postreply() {
    const { ctx } = this
    await this.app.mysql.insert('reply', ctx.request.body)
    ctx.body = {
      data: 'ok'
    }
  }
  async orderHotel() {
    const { ctx } = this
    console.log(ctx.request.body)
    ctx.request.body.createdtime = new Date()
    await this.app.mysql.insert('orderhotel', ctx.request.body)
    console.log('插入成功')
    ctx.body = {
      data: 'ok'
    }
  }
  async hotelDetail() {
    const { ctx } = this
    const data = await this.app.mysql.select('hoteldetail')
    ctx.body = data
  }
  async hotelList() {
    const { ctx } = this
    const data = await this.app.mysql.select('hotellist')
    ctx.body = data
  }
  async TopicDetail() {
    const { ctx } = this
    const data = await this.app.mysql.select('hottopicdetail')
    ctx.body = data
  }
  async TopicList() {
    const { ctx } = this
    const data = await this.app.mysql.select('hottopiclist')
    ctx.body = data
  }
}

module.exports = HomeController
