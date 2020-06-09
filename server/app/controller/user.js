'use strict';

const Controller = require('egg').Controller

class UserController extends Controller {
  async user() {
    const { ctx } = this
    const data = await this.app.mysql.select('user')
    ctx.body = { data }
  }
}
module.exports = UserController