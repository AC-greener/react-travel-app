'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = async (app) => {
  const { router, controller } = app
  router.get('/', controller.index.index)
  //留言的回复内容
  router.get('/api/reply', controller.index.getreply)
  //全部留言
  router.get('/api/message', controller.index.getmessage)
  router.get('/api/hotel/detail', controller.index.hotelDetail)
  //酒店列表
  router.get('/api/hotellist', controller.index.hotelList)
  //游记列表
  router.get('/api/topic/list', controller.index.TopicList)
  //获取热门游记详细信息
  router.get('/api/topic/detail', controller.index.TopicDetail)
  //获取热门景点信息
  router.get('/api/spot/list', controller.index.spotList)
  //获取目的地信息
  router.get('/api/des/hotlist', controller.index.desHotlist)

  //获取某个用户的留言内容
  router.get('/api/message/:userid', controller.index.getUserMessage)
  //删除用户某条留言
  router.delete('/api/message/:messageid', controller.index.deleteUserMessage)
  //获取某个用户的景点信息
  router.get('/api/order/des/:userid', controller.index.getUserDes)
  //获取某个用户的酒店信息
  router.get('/api/order/hotel/:userid', controller.index.getUserHotel)

  //留言
  router.post('/api/message', controller.index.postmessage)
  //回复留言
  router.post('/api/reply', controller.index.postreply)
  //预订酒店
  router.post('/api/order/hotel', controller.index.orderHotel)
  //预订景点
  router.post('/api/order/des', controller.index.orderDes)
  //登录
  router.post('/api/login', controller.index.login)
  //注册
  router.post('/api/regist', controller.index.regist)

}
