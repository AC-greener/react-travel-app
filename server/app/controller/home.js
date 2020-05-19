'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const client1 = await this.app.mysql.select('table')
    const { ctx } = this;
    ctx.body = JSON.stringify(client1);
    ctx.set('content-type', 'application/json');
  }
}

module.exports = HomeController;
