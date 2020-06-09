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
    ctx.body = data
  }
  async deleteDesHotlist() {
    const { ctx } = this
    const data = await this.app.mysql.delete('hotdeslist', {
      id: ctx.params.id
    })

    ctx.body = data
  }
}
module.exports = DestinationController