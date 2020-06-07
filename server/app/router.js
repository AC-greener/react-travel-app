'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = async (app) => {
  const { router, controller } = app
  router.get('/', controller.index.index)

  //留言的回复内容
  router.get('/api/reply', controller.message.getreply)
  //全部留言
  router.get('/api/message', controller.message.getmessage)
  //获取某个用户的留言内容
  router.get('/api/message/:userid', controller.message.getUserMessage)
  //删除用户某条留言
  router.delete('/api/message/:messageid', controller.message.deleteUserMessage)
  //留言
  router.post('/api/message', controller.message.postmessage)
  //回复留言
  router.post('/api/reply', controller.message.postreply)

  //酒店详情信息
  router.get('/api/hotel/detail', controller.hotel.hotelDetail)
  //酒店列表
  router.get('/api/hotellist', controller.hotel.hotelList)
  //添加酒店
  router.post('/api/hotellist', controller.hotel.addHotelList)
  //删除某个酒店
  router.delete('/api/hotellist/:hotelid', controller.hotel.deleteHotelList)
  //预订酒店
  router.post('/api/order/hotel', controller.hotel.orderHotel)
  //获取某个用户的酒店信息
  router.get('/api/order/hotel/:userid', controller.hotel.getUserHotel)
  //获取全部用户的酒店信息
  router.get('/api/order/hotel', controller.hotel.getUserHotel)


  //游记列表
  router.get('/api/topic/list', controller.topic.TopicList)
  //添加游记
  router.post('/api/topic/list', controller.topic.addTopicList)
  //删除游记
  router.delete('/api/topic/list/:id', controller.topic.deleteTopicList)
  //获取热门游记详细信息
  router.get('/api/topic/detail', controller.topic.TopicDetail)


  //获取热门景点信息
  router.get('/api/spot/list', controller.destination.spotList)
  //获取目的地信息
  router.get('/api/des/hotlist', controller.destination.desHotlist)
  //删除目的地信息
  router.delete('/api/des/hotlist/:id', controller.destination.deleteDesHotlist)
  //添加目的地信息
  router.post('/api/des/hotlist', controller.destination.addDesHotlist)

  //获取某个用户的景点信息
  router.get('/api/order/des/:userid', controller.index.getUserDes)
    //获取全部用户的景点信息
  router.get('/api/order/des', controller.index.getUserDes)

  //获取全部用户信息
  router.get('/api/user', controller.user.user)
  //预订景点
  router.post('/api/order/des', controller.index.orderDes)
  //登录
  router.post('/api/login', controller.index.login)
  //注册
  router.post('/api/regist', controller.index.regist)
}
