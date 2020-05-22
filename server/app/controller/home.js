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
    ctx.set('content-type', 'application/json')
  }
  async getmessage() {
    const { ctx } = this
    const data = await this.app.mysql.select('messageboard')
    ctx.body = data
    ctx.set('content-type', 'application/json')
  }
  async getreply() {
    const { ctx } = this
    const data = await this.app.mysql.select('messageboard')
    ctx.body = data
    ctx.set('content-type', 'application/json')
  }

  async postreply() {
    const { ctx } = this
    await this.app.mysql.insert('reply', ctx.request.body)
    console.log('插入成功')
    ctx.body = {
      data: 'ok'
    }
    ctx.set('content-type', 'application/json')
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
    ctx.set('content-type', 'application/json')
  }
  async hotelDetail() {
    const { ctx } = this
    const data = await this.app.mysql.select('hoteldetail')
    ctx.body = data
    ctx.set('content-type', 'application/json')
  }
  async hotelList() {
    const { ctx } = this
    const data = await this.app.mysql.select('hotellist')
    ctx.body = data
    ctx.set('content-type', 'application/json')
  }
}

module.exports = HomeController
