/*
 Navicat Premium Data Transfer

 Source Server         : 47.104.194.20
 Source Server Type    : MySQL
 Source Server Version : 50730
 Source Host           : 47.104.194.20:3306
 Source Schema         : react_travis

 Target Server Type    : MySQL
 Target Server Version : 50730
 File Encoding         : 65001

 Date: 23/05/2020 09:17:02
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for hoteldetail
-- ----------------------------
DROP TABLE IF EXISTS `hoteldetail`;
CREATE TABLE `hoteldetail`  (
  `hotelname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `location` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `hotelinfo` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `hotelrules` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of hoteldetail
-- ----------------------------
INSERT INTO `hoteldetail` VALUES ('北京和园国际青年客栈', '文慧园路志强北园一号', '北京和园国际青年客栈位于文慧园路志强北园一号，紧邻地铁2号线积水潭站，交通便利、环境优美。<br/> 北京和园国际青年客栈是一家四合院式建筑的青年旅舍，院落宽敞，四面房屋各处独立，彼此之间有游廊连接，通风采光。院内植被繁茂、鸟语花香。<br/>这里有舒适的客房、温馨的酒吧。旅舍客房简洁、舒适，每间客房都配有空调、暖气，带有通户外的窗户。<br/>餐厅供应中式和西式食品；酒吧提供浓香的咖啡、丰富的酒水，让每一个客人都能得到优质的服务，在这繁华的都市里分享到大自然赐予的一片美好天地。<br/>酒店电话：010-62277138', ' <strong>入离时间</strong>入住时间：14:00以后&nbsp;&nbsp;&nbsp;  离店时间：00:00-12:00。<br/><strong>餐食政策</strong>酒店不提供早餐。<br/><strong>宠物政策</strong>不可携带宠物。 <br/><strong>儿童政策</strong>不接受18岁以下客人单独入住。 不接受18岁以下客人在无监护人陪同的情况下入住。<br/>');

-- ----------------------------
-- Table structure for hotellist
-- ----------------------------
DROP TABLE IF EXISTS `hotellist`;
CREATE TABLE `hotellist`  (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `score` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `price` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `imgUrl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of hotellist
-- ----------------------------
INSERT INTO `hotellist` VALUES (1, '三亚亚龙湾木落客栈', '评分4.8 | 经济型', '128', '/static/hotel1.jpg');
INSERT INTO `hotellist` VALUES (2, '大理首驿精品酒店', '评分4.8 | 高档型', '175', '/static/hotel2.jpg');
INSERT INTO `hotellist` VALUES (3, '老故事客栈(大理古城店)', '评分4.7 | 经济型', '269', '/static/hotel3.jpg');
INSERT INTO `hotellist` VALUES (4, '阳朔月舞度假酒店', '评分4.8 | 舒适型', '228', '/static/hotel4.jpg');
INSERT INTO `hotellist` VALUES (5, '久栖·乌镇朴禅酒店', '评分4.8 | 高档型', '188', '/static/hotel5.png');
INSERT INTO `hotellist` VALUES (6, '西塘饮居·九舍人文酒店', '评分4.8 | 舒适型', '180', '/static/hotel6.jpg');
INSERT INTO `hotellist` VALUES (7, '凤凰桐舍·初见精品民宿', '评分4.7 | 经济型', '220', '/static/hotel7.jpg');
INSERT INTO `hotellist` VALUES (8, '涠洲岛如梦令海景客栈', '评分4.8 | 舒适型', '269', '/static/hotel8.jpg');

-- ----------------------------
-- Table structure for hottopiclist
-- ----------------------------
DROP TABLE IF EXISTS `hottopiclist`;
CREATE TABLE `hottopiclist`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imgUrl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `desc` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of hottopiclist
-- ----------------------------
INSERT INTO `hottopiclist` VALUES (1, '/static/hot-topic1.jpg', '浮光掠影の冬日法比荷');
INSERT INTO `hottopiclist` VALUES (2, '/static/hot-topic2.jpg', '【桑巴森林看世界】探索川西之秘');
INSERT INTO `hottopiclist` VALUES (3, '/static/hot-topic3.jpg', '不可思议之五彩印度');
INSERT INTO `hottopiclist` VALUES (4, '/static/hot-topic4.jpg', '泰国自驾小众路线 真正的“慢生活”');
INSERT INTO `hottopiclist` VALUES (5, '/static/hot-topic5.jpg', '【AMY的纪录片@长尾鲨与沙丁鱼】');
INSERT INTO `hottopiclist` VALUES (6, '/static/hot-topic6.jpg', '旅游攻略论坛：德国 及 捷克/斯洛伐克');
INSERT INTO `hottopiclist` VALUES (7, '/static/hot-topic7.jpg', '写一封情书关于重新来过');
INSERT INTO `hottopiclist` VALUES (8, '/static/hot-topic8.jpg', '神奇建筑在哪里 | 小长假来福建看土楼');

-- ----------------------------
-- Table structure for messageboard
-- ----------------------------
DROP TABLE IF EXISTS `messageboard`;
CREATE TABLE `messageboard`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '',
  `startlocation` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `iscompanion` int(255) NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `content` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `startday` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of messageboard
-- ----------------------------
INSERT INTO `messageboard` VALUES (1, '老李', '西安', NULL, '1', '1', NULL);
INSERT INTO `messageboard` VALUES (2, '老张', '北京', NULL, '15929774304@163.com', '冒个泡', NULL);
INSERT INTO `messageboard` VALUES (3, '老王', '上海', NULL, '15929774304@163.com', '测试一下', NULL);
INSERT INTO `messageboard` VALUES (4, '老赵', '陕西', NULL, '1', '1', NULL);
INSERT INTO `messageboard` VALUES (5, '老朱', '大理', 1, '1', '一起去大理', '2020-05-20 12:42:07');
INSERT INTO `messageboard` VALUES (6, '老she', '成都', 1, '1', '成都宽窄巷子走起来！', '2020-05-14 12:42:07');

-- ----------------------------
-- Table structure for orderhotel
-- ----------------------------
DROP TABLE IF EXISTS `orderhotel`;
CREATE TABLE `orderhotel`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '',
  `hotelname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `price` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `roomtype` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `starttime` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `endtime` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `people` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `createdtime` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orderhotel
-- ----------------------------
INSERT INTO `orderhotel` VALUES (1, NULL, NULL, '北京和园国际青年客栈', '128', '单人间', '2020/06/01', '2020/06/21', '2', NULL);
INSERT INTO `orderhotel` VALUES (2, NULL, NULL, '北京和园国际青年客栈', '218', '双人间', '2020/06/01', '2020/06/08', '2~3', NULL);
INSERT INTO `orderhotel` VALUES (3, 2, 'old zhang', '北京和园国际青年客栈', '128', '单人间', '2020/06/01', '2020/06/21', '2', NULL);
INSERT INTO `orderhotel` VALUES (4, 2, 'old zhang', '北京和园国际青年客栈', '128', '单人间', '2020/06/01', '2020/06/21', '2', '2020-05-22 10:58:11');
INSERT INTO `orderhotel` VALUES (5, 2, 'old zhang', '北京和园国际青年客栈', '128', '单人间', '2020/06/01', '2020/06/21', '2', '2020-05-22 11:00:47');

-- ----------------------------
-- Table structure for posts
-- ----------------------------
DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts`  (
  `title` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of posts
-- ----------------------------
INSERT INTO `posts` VALUES ('1Hello World', NULL);
INSERT INTO `posts` VALUES ('1Hello World', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtong', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtong', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtong', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtong', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtong', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtonga', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtonga', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtonga', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtonga', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtonga', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtonga', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtonga', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtonga', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtonga', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtong', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtong', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtong', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtong', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtong', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtong', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtong', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtong', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtong', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtong', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtong', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtong', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtong', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtong', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtong', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtong', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtong', NULL);
INSERT INTO `posts` VALUES ('zhuzhuz', NULL);
INSERT INTO `posts` VALUES ('zhuzhuz', NULL);
INSERT INTO `posts` VALUES ('zhuzhuz', NULL);
INSERT INTO `posts` VALUES ('zhuzhuz', NULL);
INSERT INTO `posts` VALUES (NULL, 'zhuzhuz');
INSERT INTO `posts` VALUES (NULL, 'zhuzhuz');
INSERT INTO `posts` VALUES (NULL, 'zhuzhuz');
INSERT INTO `posts` VALUES ('zhuzhuz', NULL);
INSERT INTO `posts` VALUES ('zhuzhuz', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtong', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtong', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtong', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtong', NULL);
INSERT INTO `posts` VALUES ('1Hello World tongtong', NULL);

-- ----------------------------
-- Table structure for reply
-- ----------------------------
DROP TABLE IF EXISTS `reply`;
CREATE TABLE `reply`  (
  `fromid` int(11) NULL DEFAULT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of reply
-- ----------------------------
INSERT INTO `reply` VALUES (5, 'woxizng');
INSERT INTO `reply` VALUES (6, '一起走');

-- ----------------------------
-- Table structure for table
-- ----------------------------
DROP TABLE IF EXISTS `table`;
CREATE TABLE `table`  (
  `data` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of table
-- ----------------------------
INSERT INTO `table` VALUES ('[{\"id\":1,\"tabled\":[{\"key\":\"1\",\"day\":[\"Day 1\"],\"city\":[\"上海\",\"Shanghai\",\"伦敦\",\"London\",\"牛津\",\"Oxford\"],\"attractions\":[\"1. 希思罗机场\",\"2. 圣詹姆斯公园\",\"3. 白金汉宫\",\"4. 威斯敏斯特修道院\",\"5. 英国议会大厦\",\"6. 伦敦圣保罗大教堂 \",\"7. 伦敦塔桥 \",\"8.  英国伦敦泰晤士河游船船票\",\"9. 伦敦眼\"],\"hotel\":\"圣詹姆士庭院-阿塔酒店-伦敦，St. James\' Court, A Taj Hotel, London\'\"},{\"key\":\"2\",\"day\":[\"Day 2\"],\"city\":[\"伦敦\",\"London\"],\"attractions\":[\"1. 特拉法加广场 \",\"2. 英国国家美术馆 \",\"3. 汉堡与龙虾（Soho）\",\"4. 大英博物馆 \",\"5. Amorino意式冰淇淋店 \",\"6. 考文特花园 \"],\"hotel\":\"圣詹姆士庭院-阿塔酒店-伦敦，St. James\' Court, A Taj Hotel, London\'\"},{\"key\":\"3\",\"day\":[\"Day 3\"],\"city\":[\"伦敦\",\"London\",\"剑桥\",\"Cambridge\"],\"attractions\":[\"1. 国王十字车站 \",\"2. 数学桥\",\"3. 剑桥大学\",\"4. 圣体钟\",\"5. 国王学院\",\"6. 三一学院 \",\"7. 圣约翰学院 \",\"8.  剑桥叹息桥\",\"9. 国王十字车站\",\"10. 陛下剧院\"],\"hotel\":\"圣詹姆士庭院-阿塔酒店-伦敦，St. James\' Court, A Taj Hotel, London\'\"},{\"key\":\"4\",\"day\":[\"Day 4\"],\"city\":[\"伦敦\",\"London\",\"爱丁堡\",\"Edinburgh\"],\"attractions\":[\"1. 国王十字车站\",\"2. 爱丁堡城堡\",\"3. 圣吉尔斯大教堂\",\"4. 斯哥特纪念塔\",\"5. 皇家英里大道\",\"6. 卡尔顿山 \"],\"hotel\":\"圣詹姆士庭院-阿塔酒店-伦敦，St. James\' Court, A Taj Hotel, London\'\"},{\"key\":\"5\",\"day\":[\"Day 5\"],\"city\":[\"牛津\",\"Oxford\",\"伦敦\",\"London\",\"威廉堡\",\"Fort William\"],\"attractions\":[\"1. 尼斯湖 \",\"2. The Great Glen\",\"3. 王子街\",\"4. 伊峡谷\"],\"hotel\":\"伦敦希尔顿逸林酒店 - 海德公园，DoubleTree by Hilton Hotel London - Hyde Park\"},{\"key\":\"6\",\"day\":[\"Day 6\"],\"city\":[\"苏格兰\",\"Scotland\",\"爱丁堡\",\"Edinburgh\",\"因弗尼斯\",\"Inverness\"],\"attractions\":[\"1. 苏格兰高地二日游\",\"2. 苏格兰凯恩戈姆国家公园 \",\"3. 厄克特城堡\",\"4. 因弗尼斯城堡 \"],\"hotel\":\"老威弗利酒店，Old Waverley Hotel\"}]},{\"id\":2,\"tabled\":[{\"key\":\"1\",\"day\":[\"Day 1\"],\"city\":[\"上海\",\"Shanghai\",\"奥克兰\",\"AuckLand\",\"新西兰马尔堡\",\"Marlborough\"],\"attractions\":[\"1. 凯库拉观鲸 \",\"2. Green Dolphin\",\"3. 凯库拉半岛步道\",\"4. 凯库拉毛皮海狮聚集区\",\"5. 海格利公园\"],\"hotel\":\"山谷客栈酒馆公寓，Valley Inn Tavern\"},{\"key\":\"2\",\"day\":[\"Day 2\"],\"city\":[\"基督城\",\"Christchurch\"],\"attractions\":[\"1. 基督城植物园  \",\"2. 坎特伯雷博物馆 \",\"3. 雅芳河游船登船点\",\"4. 硬纸板教堂 \",\"5. 桑莫纳 \"],\"hotel\":\"山谷客栈酒馆公寓，Valley Inn Tavern\"},{\"key\":\"3\",\"day\":[\"Day 3\"],\"city\":[\"格雷茅斯\",\"Greymouth\",\"普纳凯基\",\"Punakaiki\",\"霍基蒂卡\",\"Hokitika\"],\"attractions\":[\"1. 皮尔森湖  \",\"2. 亚瑟通道国家公园\",\"3. Steamers Carvery & Bar\",\"4. Motukiekie Beach Walk\",\"5. 普纳凯基千层饼岩石与喷水洞 \",\"6. 薄饼岩  \"],\"hotel\":\"希勒尼蒂一室公寓套房酒店，Serenity Studio Apartment，霍基蒂卡\"},{\"key\":\"4\",\"day\":[\"Day 4\"],\"city\":[\"福克斯冰川\",\"Fox Glacier\",\"瓦纳卡\",\"Wanaka\"],\"attractions\":[\"1. 马瑟森湖\",\"2. 直升机徒步 \",\"4. 瓦纳卡湖\",\"5. 哈威亚湖\"],\"hotel\":\"58昂克罗恩汽车旅馆，58 on Cron Motel，弗朗茨约瑟夫冰川\"},{\"key\":\"5\",\"day\":[\"Day 5\"],\"city\":[\"弗朗茨约瑟夫冰川\",\"Franz Josef\"],\"attractions\":[\"1. Hokitika Museum \",\"2. 马希纳普阿湖 \",\"3. 霍基蒂卡峡谷\",\"4. 冰川徒步\",\"5. 冰川直升机\"],\"hotel\":\"滕培瓦纳卡住宿加早餐旅馆，Tempest on Wanaka，瓦纳卡\"},{\"key\":\"6\",\"day\":[\"Day 6\"],\"city\":[\"皇后镇\",\"Queenstown\",\"蒂阿瑙\",\"Te anau\"],\"attractions\":[\"1. 皇后镇南湖地区\",\"2. 路特本步道  \",\"3. 镜湖 \"],\"hotel\":\"皇后镇小木屋酒店，Chalet Queenstown\"}]},{\"id\":3,\"tabled\":[{\"key\":\"1\",\"day\":[\"Day 1\"],\"city\":[\"巴黎\",\"Paris\"],\"attractions\":[\"1. 圣文森公墓\",\"2. 乐过时了墙\",\"3. 蒙马特博物馆和雷诺阿花园 \",\"4. 巴黎圣心大教堂\",\"5. 小丘广场\",\"6. 爱之墙 \",\"7. 圣让蒙马特教堂 \",\"8.  英国伦敦泰晤士河游船船票\",\"9. 伦敦眼\"],\"hotel\":\"巴黎伯特蒙马​​特宜必思快捷酒店，Ibis Budget Paris Porte de Montmartre\"},{\"key\":\"2\",\"day\":[\"Day 2\"],\"city\":[\"巴黎\",\"Paris\",\"凡尔赛\",\"Versailles\"],\"attractions\":[\"1. 巴黎战神广场  \",\"2. 埃菲尔铁塔 \",\"3. 巴黎凯旋门 \",\"4. 香榭丽舍大街 \",\"5. 奥赛博物馆  \",\"6. 塞纳河 \"],\"hotel\":\"巴黎伯特蒙马​​特宜必思快捷酒店，Ibis Budget Paris Porte de Montmartre\"},{\"key\":\"3\",\"day\":[\"Day 3\"],\"city\":[\"巴黎\",\"Paris\",\"阿维尼翁\",\"Avignon\"],\"attractions\":[\"1. 阿维尼翁城墙 \",\"2. 阿维尼翁集市\",\"3. 教皇宫\"],\"hotel\":\"巴黎格兰德哈弗尔酒店，Grand Hôtel du Havre Paris，巴黎\"},{\"key\":\"4\",\"day\":[\"Day 4\"],\"city\":[\"马赛\",\"Marseille\",\"阿维尼翁\",\"Avignon\"],\"attractions\":[\"1. 马赛游客中心\",\"2. 抹油广场 \",\"3. 马赛守护圣母教堂\",\"4. 马赛主教座堂 \",\"5. 圣尼古拉堡 \"],\"hotel\":\"亚维侬阿维尼翁阿多尼斯酒店，Adonis Hôtel Avignon Sud，阿维尼翁\"},{\"key\":\"5\",\"day\":[\"Day 5\"],\"city\":[\"尼斯\",\"Nice\",\"戛纳\",\"Cannes\"],\"attractions\":[\"1. 自由林荫道  \",\"2. 戛纳老港 \",\"3. 小十字大道 \",\"4. 城堡博物馆 \",\"5. 戛纳市政厅  \",\"6. 星光大道 \"],\"hotel\":\"弗兰德尔酒店，Hôtel des Flandres\"},{\"key\":\"6\",\"day\":[\"Day 6\"],\"city\":[\"格勒诺布尔\",\"Grenoble\",\"里昂\",\"Lyon\"],\"attractions\":[\"1. 百花广场 \",\"2. 里昂古罗马剧场 \",\"3. 富维耶山 \",\"4. 富维耶圣母堂\"],\"hotel\":\"普利维洛奇里昂旅馆，Privilodges Lyon\"}]},{\"id\":4,\"tabled\":[{\"key\":\"1\",\"day\":[\"Day 1\"],\"city\":[\"上海\",\"Shanghai\",\"巴黎\",\"Paris\",\"罗马\",\"Rome\"],\"attractions\":[\"1. 特莱维喷泉(许愿池) \",\"2. 西班牙广场 \",\"3. 破船喷泉\",\"4. 西班牙阶梯\"],\"hotel\":\"索基欧诺中心酒店，Soggiorno Downtown\"},{\"key\":\"2\",\"day\":[\"Day 2\"],\"city\":[\"罗马\",\"Rome\"],\"attractions\":[\"1. 罗马斗兽场  \",\"2. 古罗马广场  \",\"3. 君士坦丁凯旋门 \",\"4. 帕拉蒂尼山  \",\"5. 卡比托利欧广场  \",\"6. 卡比托利欧博物馆 \"],\"hotel\":\"索基欧诺中心酒店，Soggiorno Downtown\"},{\"key\":\"3\",\"day\":[\"Day 3\"],\"city\":[\"罗马\",\"Rome\",\"梵蒂冈\",\"Vatican\"],\"attractions\":[\"1. 梵蒂冈博物馆  \",\"2. 圣彼得大教堂\",\"3. 圣彼得广场\",\"4. 西斯廷礼拜堂 \",\"5. 拉斐尔房间\",\"6. 梵蒂冈方尖碑 \",\"7. 梵蒂冈花园 \",\"8.  乌尔班八世的墓碑\"],\"hotel\":\"索基欧诺中心酒店，Soggiorno Downtown\"},{\"key\":\"4\",\"day\":[\"Day 4\"],\"city\":[\"罗马\",\"Rome\"],\"attractions\":[\"1. 圣依纳爵堂 \",\"2. 神庙遗址圣母堂\",\"3. 万神殿 \",\"4. 圣王路易堂\",\"5. 纳沃纳广场\",\"6. 四河喷泉 \"],\"hotel\":\"圣詹姆士庭院-阿塔酒店-伦敦，St. James\' Court, A Taj Hotel, London\'\"},{\"key\":\"5\",\"day\":[\"Day 5\"],\"city\":[\"罗马\",\"Rome\",\"巴塞罗那\",\"Barcelona\"],\"attractions\":[\"1. 波格赛美术馆  \",\"2. 圣天使桥 \",\"3. 圣天使城堡\",\"4. 天使与殉教者圣母大殿 \"],\"hotel\":\"巴塞罗那TOC青年旅馆，Toc Hostel Barcelona\"},{\"key\":\"6\",\"day\":[\"Day 6\"],\"city\":[\"巴塞罗那\",\"Barcelona\"],\"attractions\":[\"1. 古埃尔公园 \",\"2. 巴塞罗那圣家堂\",\"3. 加泰罗尼亚广场 \"],\"hotel\":\"巴塞罗那TOC青年旅馆，Toc Hostel Barcelona\"},{\"key\":\"7\",\"city\":[\"巴塞罗那\",\"Barcelona\"],\"day\":[\"Day 7\"],\"attractions\":[\"1. 巴塞罗那圣家堂 \",\"2. 米拉之家 \",\"3. 巴特罗之家\",\"4. 阿马特耶之家 \",\"5. 格拉西亚区\"],\"hotel\":\"巴塞罗那TOC青年旅馆，Toc Hostel Barcelona\"},{\"key\":\"8\",\"day\":[\"Day 8\"],\"city\":[\"巴塞罗那\",\"Barcelona\"],\"attractions\":[\"1. 兰布拉大道 \",\"2. 哥特区 \",\"3. 巴塞罗那主教堂 \",\"4. 加泰罗尼亚音乐宫 \"],\"hotel\":\"巴塞罗那TOC青年旅馆，Toc Hostel Barcelona\"},{\"key\":\"9\",\"day\":[\"Day 9\"],\"city\":[\"法国\",\"Paris\",\"巴塞罗那\",\"Barcelona\"],\"attractions\":[\"1. 埃菲尔铁塔 \",\"2. 巴黎圣母院 \",\"3. 香榭丽舍大街\"],\"hotel\":\"巴塞罗那TOC青年旅馆，Toc Hostel Barcelona\"}]},{\"id\":5,\"tabled\":[{\"key\":\"1\",\"day\":[\"Day 1\"],\"city\":[\"北京\",\"beijing\",\"布拉格\",\"Prague\"],\"attractions\":[\"1. 布拉格老城广场 \",\"2. 布拉格天文钟\",\"3. 泰恩教堂\",\"4. 火药塔\",\"5. 犹太区\"],\"hotel\":\"布拉格马拉斯特拉纳宜必思酒店，Ibis Praha Mala Strana\"},{\"key\":\"2\",\"day\":[\"Day 2\"],\"city\":[\"布拉格\",\"Prague\"],\"attractions\":[\"1. 布拉格城堡 \",\"2. 黄金巷  \",\"3. 旧皇宫 \",\"4. 圣维特大教堂 \",\"5. 小城广场 \",\"6. 列侬墙 \",\"7. 卡夫卡博物馆\"],\"hotel\":\"布拉格马拉斯特拉纳宜必思酒店，Ibis Praha Mala Strana\"},{\"key\":\"3\",\"day\":[\"Day 3\"],\"city\":[\"布拉格\",\"Prague\",\"库特纳霍拉\",\"Kutna hora\"],\"attractions\":[\"1. 跳舞的房子  \",\"2. 高堡\",\"3. 布拉格人骨教堂 \",\"4. 圣芭芭拉大教堂\",\"5. 瓦茨拉夫广场\"],\"hotel\":\"布拉格马拉斯特拉纳宜必思酒店，Ibis Praha Mala Strana\"},{\"key\":\"4\",\"day\":[\"Day 4\"],\"city\":[\"布拉格\",\"Prague\",\"捷克克鲁姆洛夫\",\"Český Krumlov\"],\"attractions\":[\"1. 克鲁姆洛夫内城\"],\"hotel\":\"贝阿提卡别墅精品酒店，Boutique Hotel Villa Beatika\"},{\"key\":\"5\",\"day\":[\"Day 5\"],\"city\":[\"捷克克鲁姆洛夫\",\"Český Krumlov\"],\"attractions\":[\"1. 捷克克鲁姆洛夫城堡 \",\"2. 捷克克鲁姆洛夫城堡花园 \",\"3. 圣维塔教堂（克鲁姆洛夫）\",\"4. 克鲁姆洛夫市政厅\"],\"hotel\":\"贝阿提卡别墅精品酒店，Boutique Hotel Villa Beatika\"},{\"key\":\"6\",\"day\":[\"Day 6\"],\"city\":[\"捷克克鲁姆洛夫\",\"Český Krumlov\",\"萨尔茨堡\",\"Salzburg\"],\"attractions\":[\"1. 海尔布伦戏水宫 \",\"2. 萨尔茨堡城堡 \",\"3. 圣伯多禄修道院\",\"4. 洗马池 \",\"5. 米拉贝尔花园\"],\"hotel\":\"萨尔茨堡H+酒店，H+ Hotel Salzburg，萨尔茨堡\"},{\"key\":\"7\",\"day\":[\"Day 6\"],\"city\":[\"萨尔茨堡\",\"Salzburg\"],\"attractions\":[\"1. 莫扎特广场 \",\"2. 萨尔茨堡大教堂  \",\"3. 粮食胡同\",\"4. 莫扎特出生地 \",\"5. 萨尔茨堡老城区 \"],\"hotel\":\"萨尔茨堡H+酒店，H+ Hotel Salzburg，萨尔茨堡\"}]},{\"id\":6,\"tabled\":[{\"key\":\"1\",\"day\":[\"Day 1\"],\"city\":[\"长沙\",\"changsha\"],\"attractions\":[\"1. 贾谊故居\",\"2. 杜甫江阁\",\"3. 橘子洲头烟花表演\",\"4. 长沙坡子街(美食一条街)\",\"5. 岳麓山\",\"6. 太平街 \"],\"hotel\":\"长沙书院国际青年旅舍，Changsha Shuyuan International Youth Hostel\"},{\"key\":\"2\",\"day\":[\"Day 2\"],\"city\":[\"凤凰\",\"Fenghuang\"],\"attractions\":[\"1. 山江苗寨 \",\"2. 凤凰古城 \",\"3. 万名塔\",\"4. 凤凰虹桥\",\"5. 沱江吊脚楼 \",\"6.  凤凰古城文化广场 \"],\"hotel\":\"凤凰古城Hemu House\"},{\"key\":\"3\",\"day\":[\"Day 3\"],\"city\":[\"湘西\",\"xiangxi\"],\"attractions\":[\"1. 爱谷 \",\"2. 浦市古镇\",\"4. 朝阳宫\",\"5. 飞水谷\"],\"hotel\":\"凤凰古城Hemu House\"},{\"key\":\"4\",\"day\":[\"Day 4\"],\"city\":[\"凤凰\",\"Fenghuang\",\"湘西\",\"xiangxi\"],\"attractions\":[\"1. 千潭苗王洞\",\"2. 南华山\"],\"hotel\":\"凤凰古城Hemu House\"},{\"key\":\"5\",\"day\":[\"Day 5\"],\"city\":[\"湘西\",\"xiangxi\",\"张家界\",\"zhangjiajie\"],\"attractions\":[\"1. 凌霄台\"],\"hotel\":\"张家界如果客栈，Zhangjiajie Ruguo Inn\"},{\"key\":\"6\",\"day\":[\"Day 6\"],\"city\":[\"张家界\",\"Zhangjiajie\"],\"attractions\":[\"1. 天门洞\",\"2. 天门山寺\",\"3. 鬼谷栈道\",\"4. 玻璃栈道 \"],\"hotel\":\"张家界如果客栈，Zhangjiajie Ruguo Inn\"},{\"key\":\"7\",\"day\":[\"Day 6\"],\"city\":[\"张家界\",\"Zhangjiajie\"],\"attractions\":[\"1. 天子山\",\"2. 百龙天梯\",\"3. 金鞭溪\",\"4. 迷魂台 \"],\"hotel\":\"张家界如果客栈，Zhangjiajie Ruguo Inn\"}]}]');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `tel` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '',
  `isadmin` tinyint(4) NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (2, '老aaaa', '1', '1', 0);
INSERT INTO `user` VALUES (3, '老马', '123456', '15929774304', 0);
INSERT INTO `user` VALUES (4, '老马2', '123456', '15929774304', 0);
INSERT INTO `user` VALUES (5, 'admin', 'admin', '15929774304', 1);

SET FOREIGN_KEY_CHECKS = 1;
