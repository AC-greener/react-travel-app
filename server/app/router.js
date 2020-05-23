'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = async (app) => {
  const { router, controller } = app

  router.get('/', controller.index.index)
  router.post('/api/message', controller.index.postmessage)
  router.post('/api/reply', controller.index.postreply)
  router.get('/api/reply', controller.index.getreply)
  router.get('/api/message', controller.index.getmessage)
  router.get('/api/hotel/detail', controller.index.hotelDetail)
  router.get('/api/hotellist', controller.index.hotelList)
  router.post('/api/order/hotel', controller.index.orderHotel)
  router.post('/api/login', controller.index.login)
  router.post('/api/regist', controller.index.regist)
  router.get('/api/topic/list', controller.index.TopicList)
  router.get('/api/topic/detail', controller.index.TopicDetail)
}
