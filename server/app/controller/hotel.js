'use strict';

const Controller = require('egg').Controller

class HotelController extends Controller {
  async orderHotel() {
    const { ctx } = this
    console.log(ctx.request.body)
    ctx.request.body.createdtime = new Date()
    await this.app.mysql.insert('orderhotel', ctx.request.body)
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
    ctx.body = data
  }

  async addHotelList() {
    const { ctx } = this
    const data = await this.app.mysql.insert('hotellist', ctx.request.body)
    ctx.body = data
  }
  async getUserHotel() {
    const { ctx } = this
    if(ctx.params.userid) {
      const data = await this.app.mysql.select('orderhotel', {
        where: {userid: ctx.params.userid}
      })
      ctx.body = data
    } else {
      const data = await this.app.mysql.select('orderhotel')
      ctx.body = data
    }
  }
}
module.exports = HotelController