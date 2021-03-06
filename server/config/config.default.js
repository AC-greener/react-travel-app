/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1576820570345_7976';

  // add your middleware config here
  config.middleware = [];
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '47.104.194.20',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '123456',
      // 数据库名
      database: 'react_travis',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  config.security = { domainWhiteList: ['http://localhost:3000'],
    csrf: {
      enable: false,
    },
  }
  config.cors = { allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH' }
  const userConfig = {
  };
  return {
    ...config,
    ...userConfig,
  };
};

