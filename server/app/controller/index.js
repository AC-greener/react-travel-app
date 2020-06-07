'use strict';

const Controller = require('egg').Controller

class IndexController extends Controller {
  async index() {
    const { ctx } = this
    ctx.body = 'hello world'
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

  async orderDes() {
    const { ctx } = this
    console.log(ctx.request.body)
    ctx.request.body.createdtime = new Date()
    await this.app.mysql.insert('orderdes', ctx.request.body)
    console.log('插入成功')
    ctx.body = {
      data: 'ok'
    }
  }
 
  async getUserDes() {
    const { ctx } = this
    console.log(ctx.params.userid)
    if(ctx.params.userid) {
      const data = await this.app.mysql.select('orderdes', {
        // userid: ctx.params.userid,
      })
      ctx.body = data
    } else {
      const data = await this.app.mysql.select('orderdes')
      ctx.body = data
    }
  }
}

module.exports = IndexController
