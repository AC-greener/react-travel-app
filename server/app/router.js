'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = async (app) => {

  // const result = await app.mysql.insert('posts', { title: '1Hello World tongtong' });
  // console.log('app', result)
  const { router, controller } = app
  router.get('/', controller.home.index)
  router.post('/api/message', controller.home.postmessage)
  router.post('/api/reply', controller.home.postreply)
  router.get('/api/reply', controller.home.getreply)
  router.get('/api/message', controller.home.getmessage)
  router.get('/api/hotel/detail', controller.home.hotelDetail)
  router.get('/api/hotellist', controller.home.hotelList)
};
