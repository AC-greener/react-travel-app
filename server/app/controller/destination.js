'use strict';

const Controller = require('egg').Controller

class DestinationController extends Controller {
  async spotList() {
    const { ctx } = this
    const data = await this.app.mysql.select('spotlist')
    ctx.body = data
  }
  async desHotlist() {
    const { ctx } = this
    const data = await this.app.mysql.select('hotdeslist')
    ctx.body = data
  }
  async addDesHotlist() {
    const { ctx } = this
    const data = await this.app.mysql.insert('hotdeslist', ctx.request.body)
    console.log('添加成功')
    ctx.body = data
  }
  async deleteDesHotlist() {
    const { ctx } = this
    console.log(ctx.params.id)
    const data = await this.app.mysql.delete('hotdeslist', {
      id: ctx.params.id
    })
    console.log('删除成功')

    ctx.body = 'ok'
  }
}
module.exports = DestinationController