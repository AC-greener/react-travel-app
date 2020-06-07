'use strict';

const Controller = require('egg').Controller

class TopicController extends Controller {

  async TopicDetail() {
    const { ctx } = this
    const data = await this.app.mysql.select('topicdetail')
    ctx.body = data
  }

  async deleteTopicList() {
    const { ctx } = this
    const data = await this.app.mysql.delete('hottopiclist', {
      id: ctx.params.id
    })
    console.log('删除成功')
    ctx.body = data
  }
  async addTopicList() {
    const { ctx } = this
    const data = await this.app.mysql.insert('hottopiclist', ctx.request.body)
    console.log('添加成功')
    ctx.body = data
  }

  async TopicList() {
    const { ctx } = this
    const data = await this.app.mysql.select('hottopiclist')
    ctx.body = data
  }
}
module.exports = TopicController