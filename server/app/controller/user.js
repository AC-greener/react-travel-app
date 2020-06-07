'use strict';

const Controller = require('egg').Controller

class UserController extends Controller {
  async user() {
    const { ctx } = this
    const data = await this.app.mysql.select('user')
    console.log('查询用户信息成功')
    ctx.body = { data }
  }
}
module.exports = UserController