'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = async (app) => {
  const { router, controller } = app
  router.get('/', controller.index.index)
  router.get('/api/reply', controller.index.getreply)
  router.get('/api/message', controller.index.getmessage)
  router.get('/api/hotel/detail', controller.index.hotelDetail)
  router.get('/api/hotellist', controller.index.hotelList)
  router.get('/api/topic/list', controller.index.TopicList)
  router.get('/api/topic/detail', controller.index.TopicDetail)
  router.get('/api/spot/list', controller.index.spotList)
  router.get('/api/des/hotlist', controller.index.desHotlist)

  router.post('/api/message', controller.index.postmessage)
  router.post('/api/reply', controller.index.postreply)
  router.post('/api/order/hotel', controller.index.orderHotel)
  router.post('/api/order/des', controller.index.orderDes)
  router.post('/api/login', controller.index.login)
  router.post('/api/regist', controller.index.regist)

}
