'use strict';

const Controller = require('egg').Controller

class MessageController extends Controller {
  async postmessage() {
    const { ctx } = this
    ctx.request.body.startday = new Date(ctx.request.body.startday)
    ctx.request.body.createdtime = new Date()
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
  async getreply() {
    const { ctx } = this
    const data = await this.app.mysql.select('messageboard')
    ctx.body = data
  }
  async postreply() {
    const { ctx } = this
    await this.app.mysql.insert('reply', ctx.request.body)
    ctx.body = {
      data: 'ok'
    }
  }
  async getUserMessage() {
    const { ctx } = this
    console.log(ctx.params.userid)
    const data = await this.app.mysql.select('messageboard', {
      // username: ctx.request.body.username,
    })
    ctx.body = data
  }
  async deleteUserMessage() {
    const { ctx } = this
    console.log(ctx.params.messageid)
    const data = await this.app.mysql.delete('messageboard', {
      id: ctx.params.messageid,
    })
    console.log('删除成功')
    ctx.body = data
  }

}
module.exports = MessageController