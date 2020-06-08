'use strict';

const Controller = require('egg').Controller

class HotelController extends Controller {
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

  async deleteHotelList() {
    const { ctx } = this
    const data = await this.app.mysql.delete('hotellist', {
      id: ctx.params.id
    })
    console.log('删除成功')
    ctx.body = data
  }

  async addHotelList() {
    const { ctx } = this
    const data = await this.app.mysql.insert('hotellist', ctx.request.body)
    console.log('添加成功11')
    ctx.body = data
  }
  async getUserHotel() {
    const { ctx } = this
    if(ctx.params.userid) {
      const data = await this.app.mysql.select('orderhotel', {
        // userid: ctx.params.userid,
      })
      console.log('111')
      ctx.body = data
    } else {
      const data = await this.app.mysql.select('orderhotel')
      console.log('111')
      ctx.body = data
    }
  }
}
module.exports = HotelController