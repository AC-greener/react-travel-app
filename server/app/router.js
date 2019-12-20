'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = async (app) => {
  const result = await app.mysql.insert('posts', { title: '1Hello World tongtonga' });
  const { router, controller } = app;
  router.get('/', controller.home.index);
};
