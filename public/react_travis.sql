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

 Date: 24/06/2020 12:40:17
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for hotdeslist
-- ----------------------------
DROP TABLE IF EXISTS `hotdeslist`;
CREATE TABLE `hotdeslist`  (
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `imgUrl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `desc` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `price` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 22 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of hotdeslist
-- ----------------------------
INSERT INTO `hotdeslist` VALUES ('hot', '/static/des-img1.jpg', '（五星，上海松江区）佘山世茂洲际酒店(世茂深坑酒店) InterContinental ', '1988', 1);
INSERT INTO `hotdeslist` VALUES ('hot', '/static/des-img2.jpg', '（ 酒店，南京）南京星空宿泡泡屋度假酒店 1晚 （ 双早+部分民宿公区免费体验）', '569', 2);
INSERT INTO `hotdeslist` VALUES ('hot', '/static/des-img3.jpg', '（五星，丽江）5折预售+两店通用+全年可用|丽江/奔子栏丽世酒店4晚 任选房型+早+下午茶+可拆分', '1980', 3);
INSERT INTO `hotdeslist` VALUES ('hot', '/static/des-img4.jpg', '（五星，丽江）【超值五折】丽江悦榕庄1/2晚 早+接/送机+下午茶+田园行', '1188', 4);
INSERT INTO `hotdeslist` VALUES ('hot', '/static/des-img5.jpg', '（奢华，北京）北京颐和安缦酒店2-3晚+含双早/茶道品饮+剪纸+风筝制作+颐和园专属通道', '7999', 5);
INSERT INTO `hotdeslist` VALUES ('hot', '/static/des-img6.jpg', '(豪华，杭州）千岛湖绿城度假酒店（3号楼湖景亲子套房1晚+3份自助早餐+骑行1小时骑行券）', '478', 6);
INSERT INTO `hotdeslist` VALUES ('hot', '/static/des-img7.jpg', '（奢华，杭州）浙江杭州西溪悦榕庄酒店1-2晚度假套餐+西湖行+自助餐', '2888', 7);
INSERT INTO `hotdeslist` VALUES ('hot', '/static/des-img8.jpg', '（五星，重庆）【五折抢】重庆柏联酒店二晚住宿抵用券 (含早餐券+接/送机+双人下午茶+温泉）', '2499', 8);
INSERT INTO `hotdeslist` VALUES ('europe', '/static/europe-des-img1.jpg', '走近欧洲九寨沟 克罗地亚 十六湖国家公园一日游 可选斯普利特/特罗吉尔出发（电子票免打印）', '988', 9);
INSERT INTO `hotdeslist` VALUES ('europe', '/static/europe-des-img2.jpg', '【古典文艺】欧洲法意瑞7日游 五渔村/勃朗峰/罗马/威尼斯 （巴黎往返）', '3569', 10);
INSERT INTO `hotdeslist` VALUES ('europe', '/static/europe-des-img3.jpg', '【意大利+瑞士 甄选长线H】德国/意大利/瑞士11天10晚法兰克福上下（施华洛世奇水晶世界）', '2980', 11);
INSERT INTO `hotdeslist` VALUES ('europe', '/static/europe-des-img4.jpg', '【东欧+瑞士 甄选长线C】德国/奥地利/捷克/斯洛伐克/匈牙利/瑞士9天8晚 音乐之都维也纳', '3188', 12);
INSERT INTO `hotdeslist` VALUES ('europe', '/static/europe-des-img5.jpg', '【五周连爆！】瑞士因特拉肯到少女峰欧洲之巅（景观列车+星级酒店+中文导游）', '6999', 13);
INSERT INTO `hotdeslist` VALUES ('europe', '/static/europe-des-img6.jpg', '享行 欧洲当地跟团游,东南西北欧多国家多日游 随时参团 巴士游 中文导游', '6478', 14);
INSERT INTO `hotdeslist` VALUES ('europe', '/static/europe-des-img7.jpg', '（英国伦敦 碎片大厦免打印门票（登摘星塔/成为星星上的人/欧洲之巅/可选香槟套餐/扫码入园）', '3888', 15);
INSERT INTO `hotdeslist` VALUES ('europe', '/static/europe-des-img8.jpg', '（【瑞士南法风情 慕尼黑上下】德国/瑞士/法国/意大利/摩纳哥 6天5晚 （浪漫蔚蓝海岸）', '6490', 16);
INSERT INTO `hotdeslist` VALUES ('europe', '/static/europe-des-img9.jpg', '免签说走就走 塞尔维亚+波黑+黑山7日游（贝尔格莱德往返+探寻前南斯拉夫遗落的秘密尔）', '5499', 17);
INSERT INTO `hotdeslist` VALUES ('europe', '/static/europe-des-img10.jpg', '自动确认全年开放 冰岛北部胡萨维克观鲸（免费提供北纬66度防寒服+全欧洲观鲸的好地方+赠送茶点)', '2399', 18);
INSERT INTO `hotdeslist` VALUES ('europe', '/static/europe-des-img11.jpg', '西巴尔干-追寻南斯拉夫昔日风情 克罗地亚+波黑+黑山+塞尔维亚7日游（世界遗产莫斯塔尔）', '3588', 19);
INSERT INTO `hotdeslist` VALUES ('europe', '/static/europe-des-img12.jpg', '【欧洲三国】深度意大利+法国+瑞士8日游 五渔村/勃朗峰/罗马（巴黎往返）', '7266', 20);

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
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

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
INSERT INTO `hottopiclist` VALUES (1, '/static/hot-topic1.jpg', '北国的夏日狂欢——东北四大祭');
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
  `userid` int(11) NULL DEFAULT NULL,
  `createdtime` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of messageboard
-- ----------------------------
INSERT INTO `messageboard` VALUES (4, '老赵', '陕西', NULL, '1', '1', NULL, 3, NULL);
INSERT INTO `messageboard` VALUES (5, '老朱', '大理', 1, '1', '一起去大理', '2020-05-20 12:42:07', 2, NULL);
INSERT INTO `messageboard` VALUES (6, '老she', '成都', 1, '1', '成都宽窄巷子走起来！', '2020-05-14 12:42:07', 1, NULL);
INSERT INTO `messageboard` VALUES (7, 'admin', '西安', 1, '1053673440@qq.com', '西安自驾游，感兴趣的给我留言', '2020-06-04 14:47:59', 5, '2020-06-08 14:48:22');
INSERT INTO `messageboard` VALUES (8, 'admin', '青海', 1, '1053673440@qq.com', '有去青海的小伙伴吗，一起', '2020-06-04 14:47:59', 5, '2020-06-08 14:49:07');
INSERT INTO `messageboard` VALUES (9, 'admin', '拉萨', 1, '1053673440@qq.com', '川藏线自驾游，三缺一', '2020-06-26 14:47:59', 5, '2020-06-08 14:50:19');
INSERT INTO `messageboard` VALUES (10, 'admin', NULL, NULL, '1053673440@qq.com', '20200609 测试', NULL, 5, '2020-06-09 10:09:25');
INSERT INTO `messageboard` VALUES (11, 'admin', '渭南', 1, '1053673440@qq.com', '20200609 测试', '2020-06-12 10:09:39', 5, '2020-06-09 10:09:42');

-- ----------------------------
-- Table structure for orderdes
-- ----------------------------
DROP TABLE IF EXISTS `orderdes`;
CREATE TABLE `orderdes`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NULL DEFAULT NULL,
  `createdtime` timestamp(6) NULL DEFAULT NULL,
  `starttime` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '',
  `price` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '',
  `destation` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orderdes
-- ----------------------------
INSERT INTO `orderdes` VALUES (1, 0, '2020-05-27 13:25:55.938000', '2020-05-08', '569', '（ 酒店，南京）南京星空宿泡泡屋度假酒店 1晚 ', '');
INSERT INTO `orderdes` VALUES (2, 5, '2020-05-27 13:27:04.195000', '2020-05-19', '998', '走近欧洲九寨沟 克罗地亚 十六湖国家公园一日游 可选斯普利特/特罗吉尔出发（电子票免打印）', 'admin');
INSERT INTO `orderdes` VALUES (3, 5, '2020-05-27 13:27:42.915000', '2020-05-19', '998', '走近欧洲九寨沟 克罗地亚 十六湖国家公园一日游 可选斯普利特/特罗吉尔出发（电子票免打印）', 'admin');
INSERT INTO `orderdes` VALUES (4, 5, '2020-06-09 10:07:52.958000', '2020-06-04', '998', '走近欧洲九寨沟 克罗地亚 十六湖国家公园一日游 可选斯普利特/特罗吉尔出发（电子票免打印）', 'admin');
INSERT INTO `orderdes` VALUES (5, 5, '2020-06-09 10:08:16.378000', '2020-06-27', '2980', '【意大利+瑞士 甄选长线H】德国/意大利/瑞士11天10晚法兰克福上下', 'admin');

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
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orderhotel
-- ----------------------------
INSERT INTO `orderhotel` VALUES (3, 2, 'old zhang', '北京和园国际青年客栈', '128', '单人间', '2020/06/01', '2020/06/21', '2', NULL);
INSERT INTO `orderhotel` VALUES (4, 2, 'old zhang', '北京和园国际青年客栈', '128', '单人间', '2020/06/01', '2020/06/21', '2', '2020-05-22 10:58:11');
INSERT INTO `orderhotel` VALUES (5, 2, 'old zhang', '北京和园国际青年客栈', '128', '单人间', '2020/06/01', '2020/06/21', '2', '2020-05-22 11:00:47');
INSERT INTO `orderhotel` VALUES (6, 2, 'old zhang', '北京和园国际青年客栈', '128', '单人间', '2020/06/01', '2020/06/21', '2', '2020-05-25 10:38:53');
INSERT INTO `orderhotel` VALUES (7, 2, 'old zhang', '北京和园国际青年客栈', '128', '单人间', '2020/06/01', '2020/06/21', '2', '2020-06-09 09:54:29');
INSERT INTO `orderhotel` VALUES (12, 5, 'admin', '北京和园国际青年客栈', '128', '单人间', '2020/06/01', '2020/06/21', '2', '2020-06-09 10:04:50');
INSERT INTO `orderhotel` VALUES (13, 5, 'admin', '北京和园国际青年客栈', '218', '双人间', '2020/06/01', '2020/06/08', '2~3', '2020-06-09 10:04:57');

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
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `userid` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of reply
-- ----------------------------
INSERT INTO `reply` VALUES (5, 'woxizng', 1, '一笑而过', NULL);
INSERT INTO `reply` VALUES (6, '一起走', 2, '渣渣辉', NULL);
INSERT INTO `reply` VALUES (5, '具体景点都有什么呢？', 3, 'admin', 5);

-- ----------------------------
-- Table structure for spotlist
-- ----------------------------
DROP TABLE IF EXISTS `spotlist`;
CREATE TABLE `spotlist`  (
  `spotname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `imgUrl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of spotlist
-- ----------------------------
INSERT INTO `spotlist` VALUES ('洛克菲勒观景台', '/static/spot0.png', 1);
INSERT INTO `spotlist` VALUES ('碎片大厦', '/static/spot1.png', 2);
INSERT INTO `spotlist` VALUES ('太平山', '/static/spot2.png', 3);
INSERT INTO `spotlist` VALUES ('象山', '/static/spot3.png', 4);
INSERT INTO `spotlist` VALUES ('蒙帕纳斯大楼', '/static/spot4.png', 5);
INSERT INTO `spotlist` VALUES ('马六甲', '/static/spot5.png', 6);
INSERT INTO `spotlist` VALUES ('马丘比丘', '/static/spot6.png', 7);
INSERT INTO `spotlist` VALUES ('不夜城香港', '/static/spot7.png', 8);

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
-- Table structure for topicdetail
-- ----------------------------
DROP TABLE IF EXISTS `topicdetail`;
CREATE TABLE `topicdetail`  (
  `topicname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `bgUrl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `ago` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of topicdetail
-- ----------------------------
INSERT INTO `topicdetail` VALUES ('北国的夏日狂欢——东北四大祭', '克克克里斯U', '/static/topic-bg1.jpg', '<Paragraph>夏日大约算是日本人民最欢腾的季节。无惧热浪，各个地方大大小小的祭典就好像散开了花儿一般点燃了狂欢的热焰。好似为了多留一留北国步履匆匆的夏日一般，除了每年夏天点亮夜空的花火大会，以狂野奔放出名的东北地区还有众多热情如火叫人回味无穷的夏日祭典。</Paragraph><h3>哪里是东北</h3><Paragraph>所谓东北地区，即字面意义上的位于日本本州岛东北部分的区域，又被称为奥羽地区。行政范围上包括青森、岩手、宫城、秋田、山形和福岛六县，占总日本面积的约30%。</Paragraph><Paragraph>“东北”这个名词第一次出现在日本的正式文献里大约要追溯到江户时代的幕府末期了，1868年下赐给秋田藩主佐竹义尧的内敕是“东北”第一次以地名形式出现在官方史料中的记载，但其实此时的东北具体指的是东北三道——东海道、东山路和北陆道，和现在我们认知的东北地区依然不是同一个概念。直到废藩置县之后，分离出北海道，在仙台设立了国派机构，东北才真正作为一个美称用来指代奥羽地区，之后在明治后期逐渐被民众熟知，于是奥羽地区就正式成了东北地区，而原先的“奥羽”到现在反而倒成了雅称。</Paragraph><h3>东北四大祭</h3><Paragraph>狂野奔放的东北地区总是有着众多热情如火让人念念不忘的夏日祭典。仙台的七夕祭、青森的睡魔祭、秋田的竿灯祭以及山形的花笠祭因参与人数众多，举办城市都位于东北地区，且都集中在夏季，因而常被合在一起并称为东北夏日的四大祭。</Paragraph><h3>浪漫的仲夏风物诗：仙台七夕祭</h3><div><img src=\'/static/topic-detail1.jpg\'></img></div><Paragraph>七夕的典故本源自中国的牛郎织女传说，据传在奈良时代七夕的“乞巧”从中国远渡重洋传到了日本，彼时还只是女子们向织女祈愿希望能心灵手巧，而七夕祭大约是在仙台藩藩组伊达政宗的大力推广之下才真正开始以祭典的身份在民间流行。</Paragraph><Paragraph>以“杜都”知名广为人知的仙台市东北地区的第一大城市，每年8月6日起都要举办连续3天的七夕祭，距今已有400多年的历史。闹市中心挂满彩色装饰，商店街就好像成了一条五彩的七夕隧道，随处都可见华丽的竹叶装饰。七夕的特别装饰和久寿玉是最应景的装扮，写满了心愿的“短册”在竹枝上翻飞，和纸制成的风幡迎风抖擞，保佑阖家平安的纸鹤在众多祈愿小饰品间上下舞蹈，配合着长达5米的节日装饰，壮观又别致，也难怪每年都会吸引超过200万游客共襄盛典。</Paragraph><h3>夏夜里最狂野的百鬼夜行：青森睡魔祭</h3><div><img src=\'/static/topic-detail2.jpg\'></img></div><Paragraph>华丽的山车灯笼，热情高歌的民众，响彻云天的欢呼——青森睡魔祭无疑是夏日东北最惹眼的节日，没有之一。相传在8世纪时，由中国传入的七夕乞巧节和津轻当地的传统民俗活动合二为一，以驱赶夏日酷热带来的困乏为名，成了最初睡魔祭的起源。作为整个东北地区短暂夏日中最华彩的一章，睡魔祭严格上来说分成青森、弘前和五所川原三处举办，并且看似雷同实则各具特点。其中最出彩、区别最大的就是睡魔祭中的绝对主角：睡魔灯笼。</Paragraph><Paragraph>堪称睡魔祭灵魂的睡魔灯笼是专业灯笼匠人一整年的心血，以竹条和铁丝制成骨架，再糊上特殊处理的纸张，画上人物图样，最终呈现出巨型人样灯笼。睡魔祭的灯笼形象多选择中国话本故事、歌舞伎人物或是历史传奇人物，以艳丽的色彩和极具张力的动作描绘他们的英勇传说。睡魔祭时，山车载着点亮了的灯笼在街道上巡回往复，再加上穿着传统，舞姿热情的民众，回荡在夜空中的歌声号子，狂野和传统的碰撞将节日气氛推向高潮。</Paragraph><Paragraph>在三个睡魔祭主会场上，青森市的睡魔灯笼形象最为传统，多是历史传说中的英雄人物；弘前市则多扇形造型的灯笼，图样除了历史上的武将之外，还常会有美人相伴，故而颜色也更为艳丽；五所川原的灯笼不同于前两者，以“立”为主题，每一尊都如苏相伴高大直立，最高的立灯笼可达23米，相当壮观。</Paragraph>', '5天前');
INSERT INTO `topicdetail` VALUES ('【桑巴森林看世界】探索川西之秘', '猴纸', '/static/topic-bg2.jpg', '<Paragraph>夏日大约算是日本人民最欢腾的季节。无惧热浪，各个地方大大小小的祭典就好像散开了花儿一般点燃了狂欢的热焰。好似为了多留一留北国步履匆匆的夏日一般，除了每年夏天点亮夜空的花火大会，以狂野奔放出名的东北地区还有众多热情如火叫人回味无穷的夏日祭典。</Paragraph><h3>哪里是东北</h3><Paragraph>所谓东北地区，即字面意义上的位于日本本州岛东北部分的区域，又被称为奥羽地区。行政范围上包括青森、岩手、宫城、秋田、山形和福岛六县，占总日本面积的约30%。</Paragraph><Paragraph>“东北”这个名词第一次出现在日本的正式文献里大约要追溯到江户时代的幕府末期了，1868年下赐给秋田藩主佐竹义尧的内敕是“东北”第一次以地名形式出现在官方史料中的记载，但其实此时的东北具体指的是东北三道——东海道、东山路和北陆道，和现在我们认知的东北地区依然不是同一个概念。直到废藩置县之后，分离出北海道，在仙台设立了国派机构，东北才真正作为一个美称用来指代奥羽地区，之后在明治后期逐渐被民众熟知，于是奥羽地区就正式成了东北地区，而原先的“奥羽”到现在反而倒成了雅称。</Paragraph><h3>东北四大祭</h3><Paragraph>狂野奔放的东北地区总是有着众多热情如火让人念念不忘的夏日祭典。仙台的七夕祭、青森的睡魔祭、秋田的竿灯祭以及山形的花笠祭因参与人数众多，举办城市都位于东北地区，且都集中在夏季，因而常被合在一起并称为东北夏日的四大祭。</Paragraph><h3>浪漫的仲夏风物诗：仙台七夕祭</h3><div><img src=\'/static/topic-detail1.jpg\'></img></div><Paragraph>七夕的典故本源自中国的牛郎织女传说，据传在奈良时代七夕的“乞巧”从中国远渡重洋传到了日本，彼时还只是女子们向织女祈愿希望能心灵手巧，而七夕祭大约是在仙台藩藩组伊达政宗的大力推广之下才真正开始以祭典的身份在民间流行。</Paragraph><Paragraph>以“杜都”知名广为人知的仙台市东北地区的第一大城市，每年8月6日起都要举办连续3天的七夕祭，距今已有400多年的历史。闹市中心挂满彩色装饰，商店街就好像成了一条五彩的七夕隧道，随处都可见华丽的竹叶装饰。七夕的特别装饰和久寿玉是最应景的装扮，写满了心愿的“短册”在竹枝上翻飞，和纸制成的风幡迎风抖擞，保佑阖家平安的纸鹤在众多祈愿小饰品间上下舞蹈，配合着长达5米的节日装饰，壮观又别致，也难怪每年都会吸引超过200万游客共襄盛典。</Paragraph><h3>夏夜里最狂野的百鬼夜行：青森睡魔祭</h3><div><img src=\'/static/topic-detail2.jpg\'></img></div><Paragraph>华丽的山车灯笼，热情高歌的民众，响彻云天的欢呼——青森睡魔祭无疑是夏日东北最惹眼的节日，没有之一。相传在8世纪时，由中国传入的七夕乞巧节和津轻当地的传统民俗活动合二为一，以驱赶夏日酷热带来的困乏为名，成了最初睡魔祭的起源。作为整个东北地区短暂夏日中最华彩的一章，睡魔祭严格上来说分成青森、弘前和五所川原三处举办，并且看似雷同实则各具特点。其中最出彩、区别最大的就是睡魔祭中的绝对主角：睡魔灯笼。</Paragraph><Paragraph>堪称睡魔祭灵魂的睡魔灯笼是专业灯笼匠人一整年的心血，以竹条和铁丝制成骨架，再糊上特殊处理的纸张，画上人物图样，最终呈现出巨型人样灯笼。睡魔祭的灯笼形象多选择中国话本故事、歌舞伎人物或是历史传奇人物，以艳丽的色彩和极具张力的动作描绘他们的英勇传说。睡魔祭时，山车载着点亮了的灯笼在街道上巡回往复，再加上穿着传统，舞姿热情的民众，回荡在夜空中的歌声号子，狂野和传统的碰撞将节日气氛推向高潮。</Paragraph><Paragraph>在三个睡魔祭主会场上，青森市的睡魔灯笼形象最为传统，多是历史传说中的英雄人物；弘前市则多扇形造型的灯笼，图样除了历史上的武将之外，还常会有美人相伴，故而颜色也更为艳丽；五所川原的灯笼不同于前两者，以“立”为主题，每一尊都如苏相伴高大直立，最高的立灯笼可达23米，相当壮观。</Paragraph>', '3天前');
INSERT INTO `topicdetail` VALUES ('不可思议之五彩印度', '邹雯艾', '/static/topic-bg3.jpg', '<Paragraph>夏日大约算是日本人民最欢腾的季节。无惧热浪，各个地方大大小小的祭典就好像散开了花儿一般点燃了狂欢的热焰。好似为了多留一留北国步履匆匆的夏日一般，除了每年夏天点亮夜空的花火大会，以狂野奔放出名的东北地区还有众多热情如火叫人回味无穷的夏日祭典。</Paragraph><h3>哪里是东北</h3><Paragraph>所谓东北地区，即字面意义上的位于日本本州岛东北部分的区域，又被称为奥羽地区。行政范围上包括青森、岩手、宫城、秋田、山形和福岛六县，占总日本面积的约30%。</Paragraph><Paragraph>“东北”这个名词第一次出现在日本的正式文献里大约要追溯到江户时代的幕府末期了，1868年下赐给秋田藩主佐竹义尧的内敕是“东北”第一次以地名形式出现在官方史料中的记载，但其实此时的东北具体指的是东北三道——东海道、东山路和北陆道，和现在我们认知的东北地区依然不是同一个概念。直到废藩置县之后，分离出北海道，在仙台设立了国派机构，东北才真正作为一个美称用来指代奥羽地区，之后在明治后期逐渐被民众熟知，于是奥羽地区就正式成了东北地区，而原先的“奥羽”到现在反而倒成了雅称。</Paragraph><h3>东北四大祭</h3><Paragraph>狂野奔放的东北地区总是有着众多热情如火让人念念不忘的夏日祭典。仙台的七夕祭、青森的睡魔祭、秋田的竿灯祭以及山形的花笠祭因参与人数众多，举办城市都位于东北地区，且都集中在夏季，因而常被合在一起并称为东北夏日的四大祭。</Paragraph><h3>浪漫的仲夏风物诗：仙台七夕祭</h3><div><img src=\'/static/topic-detail1.jpg\'></img></div><Paragraph>七夕的典故本源自中国的牛郎织女传说，据传在奈良时代七夕的“乞巧”从中国远渡重洋传到了日本，彼时还只是女子们向织女祈愿希望能心灵手巧，而七夕祭大约是在仙台藩藩组伊达政宗的大力推广之下才真正开始以祭典的身份在民间流行。</Paragraph><Paragraph>以“杜都”知名广为人知的仙台市东北地区的第一大城市，每年8月6日起都要举办连续3天的七夕祭，距今已有400多年的历史。闹市中心挂满彩色装饰，商店街就好像成了一条五彩的七夕隧道，随处都可见华丽的竹叶装饰。七夕的特别装饰和久寿玉是最应景的装扮，写满了心愿的“短册”在竹枝上翻飞，和纸制成的风幡迎风抖擞，保佑阖家平安的纸鹤在众多祈愿小饰品间上下舞蹈，配合着长达5米的节日装饰，壮观又别致，也难怪每年都会吸引超过200万游客共襄盛典。</Paragraph><h3>夏夜里最狂野的百鬼夜行：青森睡魔祭</h3><div><img src=\'/static/topic-detail2.jpg\'></img></div><Paragraph>华丽的山车灯笼，热情高歌的民众，响彻云天的欢呼——青森睡魔祭无疑是夏日东北最惹眼的节日，没有之一。相传在8世纪时，由中国传入的七夕乞巧节和津轻当地的传统民俗活动合二为一，以驱赶夏日酷热带来的困乏为名，成了最初睡魔祭的起源。作为整个东北地区短暂夏日中最华彩的一章，睡魔祭严格上来说分成青森、弘前和五所川原三处举办，并且看似雷同实则各具特点。其中最出彩、区别最大的就是睡魔祭中的绝对主角：睡魔灯笼。</Paragraph><Paragraph>堪称睡魔祭灵魂的睡魔灯笼是专业灯笼匠人一整年的心血，以竹条和铁丝制成骨架，再糊上特殊处理的纸张，画上人物图样，最终呈现出巨型人样灯笼。睡魔祭的灯笼形象多选择中国话本故事、歌舞伎人物或是历史传奇人物，以艳丽的色彩和极具张力的动作描绘他们的英勇传说。睡魔祭时，山车载着点亮了的灯笼在街道上巡回往复，再加上穿着传统，舞姿热情的民众，回荡在夜空中的歌声号子，狂野和传统的碰撞将节日气氛推向高潮。</Paragraph><Paragraph>在三个睡魔祭主会场上，青森市的睡魔灯笼形象最为传统，多是历史传说中的英雄人物；弘前市则多扇形造型的灯笼，图样除了历史上的武将之外，还常会有美人相伴，故而颜色也更为艳丽；五所川原的灯笼不同于前两者，以“立”为主题，每一尊都如苏相伴高大直立，最高的立灯笼可达23米，相当壮观。</Paragraph>', '11天前');
INSERT INTO `topicdetail` VALUES ('泰国自驾小众路线 真正的“慢生活”', '顾剑', '/static/topic-bg4.jpg', '<Paragraph>夏日大约算是日本人民最欢腾的季节。无惧热浪，各个地方大大小小的祭典就好像散开了花儿一般点燃了狂欢的热焰。好似为了多留一留北国步履匆匆的夏日一般，除了每年夏天点亮夜空的花火大会，以狂野奔放出名的东北地区还有众多热情如火叫人回味无穷的夏日祭典。</Paragraph><h3>哪里是东北</h3><Paragraph>所谓东北地区，即字面意义上的位于日本本州岛东北部分的区域，又被称为奥羽地区。行政范围上包括青森、岩手、宫城、秋田、山形和福岛六县，占总日本面积的约30%。</Paragraph><Paragraph>“东北”这个名词第一次出现在日本的正式文献里大约要追溯到江户时代的幕府末期了，1868年下赐给秋田藩主佐竹义尧的内敕是“东北”第一次以地名形式出现在官方史料中的记载，但其实此时的东北具体指的是东北三道——东海道、东山路和北陆道，和现在我们认知的东北地区依然不是同一个概念。直到废藩置县之后，分离出北海道，在仙台设立了国派机构，东北才真正作为一个美称用来指代奥羽地区，之后在明治后期逐渐被民众熟知，于是奥羽地区就正式成了东北地区，而原先的“奥羽”到现在反而倒成了雅称。</Paragraph><h3>东北四大祭</h3><Paragraph>狂野奔放的东北地区总是有着众多热情如火让人念念不忘的夏日祭典。仙台的七夕祭、青森的睡魔祭、秋田的竿灯祭以及山形的花笠祭因参与人数众多，举办城市都位于东北地区，且都集中在夏季，因而常被合在一起并称为东北夏日的四大祭。</Paragraph><h3>浪漫的仲夏风物诗：仙台七夕祭</h3><div><img src=\'/static/topic-detail1.jpg\'></img></div><Paragraph>七夕的典故本源自中国的牛郎织女传说，据传在奈良时代七夕的“乞巧”从中国远渡重洋传到了日本，彼时还只是女子们向织女祈愿希望能心灵手巧，而七夕祭大约是在仙台藩藩组伊达政宗的大力推广之下才真正开始以祭典的身份在民间流行。</Paragraph><Paragraph>以“杜都”知名广为人知的仙台市东北地区的第一大城市，每年8月6日起都要举办连续3天的七夕祭，距今已有400多年的历史。闹市中心挂满彩色装饰，商店街就好像成了一条五彩的七夕隧道，随处都可见华丽的竹叶装饰。七夕的特别装饰和久寿玉是最应景的装扮，写满了心愿的“短册”在竹枝上翻飞，和纸制成的风幡迎风抖擞，保佑阖家平安的纸鹤在众多祈愿小饰品间上下舞蹈，配合着长达5米的节日装饰，壮观又别致，也难怪每年都会吸引超过200万游客共襄盛典。</Paragraph><h3>夏夜里最狂野的百鬼夜行：青森睡魔祭</h3><div><img src=\'/static/topic-detail2.jpg\'></img></div><Paragraph>华丽的山车灯笼，热情高歌的民众，响彻云天的欢呼——青森睡魔祭无疑是夏日东北最惹眼的节日，没有之一。相传在8世纪时，由中国传入的七夕乞巧节和津轻当地的传统民俗活动合二为一，以驱赶夏日酷热带来的困乏为名，成了最初睡魔祭的起源。作为整个东北地区短暂夏日中最华彩的一章，睡魔祭严格上来说分成青森、弘前和五所川原三处举办，并且看似雷同实则各具特点。其中最出彩、区别最大的就是睡魔祭中的绝对主角：睡魔灯笼。</Paragraph><Paragraph>堪称睡魔祭灵魂的睡魔灯笼是专业灯笼匠人一整年的心血，以竹条和铁丝制成骨架，再糊上特殊处理的纸张，画上人物图样，最终呈现出巨型人样灯笼。睡魔祭的灯笼形象多选择中国话本故事、歌舞伎人物或是历史传奇人物，以艳丽的色彩和极具张力的动作描绘他们的英勇传说。睡魔祭时，山车载着点亮了的灯笼在街道上巡回往复，再加上穿着传统，舞姿热情的民众，回荡在夜空中的歌声号子，狂野和传统的碰撞将节日气氛推向高潮。</Paragraph><Paragraph>在三个睡魔祭主会场上，青森市的睡魔灯笼形象最为传统，多是历史传说中的英雄人物；弘前市则多扇形造型的灯笼，图样除了历史上的武将之外，还常会有美人相伴，故而颜色也更为艳丽；五所川原的灯笼不同于前两者，以“立”为主题，每一尊都如苏相伴高大直立，最高的立灯笼可达23米，相当壮观。</Paragraph>', '8天前');
INSERT INTO `topicdetail` VALUES ('【AMY的纪录片@长尾鲨与沙丁鱼】', '淘气小企鹅', '/static/topic-bg5.jpg', '<Paragraph>夏日大约算是日本人民最欢腾的季节。无惧热浪，各个地方大大小小的祭典就好像散开了花儿一般点燃了狂欢的热焰。好似为了多留一留北国步履匆匆的夏日一般，除了每年夏天点亮夜空的花火大会，以狂野奔放出名的东北地区还有众多热情如火叫人回味无穷的夏日祭典。</Paragraph><h3>哪里是东北</h3><Paragraph>所谓东北地区，即字面意义上的位于日本本州岛东北部分的区域，又被称为奥羽地区。行政范围上包括青森、岩手、宫城、秋田、山形和福岛六县，占总日本面积的约30%。</Paragraph><Paragraph>“东北”这个名词第一次出现在日本的正式文献里大约要追溯到江户时代的幕府末期了，1868年下赐给秋田藩主佐竹义尧的内敕是“东北”第一次以地名形式出现在官方史料中的记载，但其实此时的东北具体指的是东北三道——东海道、东山路和北陆道，和现在我们认知的东北地区依然不是同一个概念。直到废藩置县之后，分离出北海道，在仙台设立了国派机构，东北才真正作为一个美称用来指代奥羽地区，之后在明治后期逐渐被民众熟知，于是奥羽地区就正式成了东北地区，而原先的“奥羽”到现在反而倒成了雅称。</Paragraph><h3>东北四大祭</h3><Paragraph>狂野奔放的东北地区总是有着众多热情如火让人念念不忘的夏日祭典。仙台的七夕祭、青森的睡魔祭、秋田的竿灯祭以及山形的花笠祭因参与人数众多，举办城市都位于东北地区，且都集中在夏季，因而常被合在一起并称为东北夏日的四大祭。</Paragraph><h3>浪漫的仲夏风物诗：仙台七夕祭</h3><div><img src=\'/static/topic-detail1.jpg\'></img></div><Paragraph>七夕的典故本源自中国的牛郎织女传说，据传在奈良时代七夕的“乞巧”从中国远渡重洋传到了日本，彼时还只是女子们向织女祈愿希望能心灵手巧，而七夕祭大约是在仙台藩藩组伊达政宗的大力推广之下才真正开始以祭典的身份在民间流行。</Paragraph><Paragraph>以“杜都”知名广为人知的仙台市东北地区的第一大城市，每年8月6日起都要举办连续3天的七夕祭，距今已有400多年的历史。闹市中心挂满彩色装饰，商店街就好像成了一条五彩的七夕隧道，随处都可见华丽的竹叶装饰。七夕的特别装饰和久寿玉是最应景的装扮，写满了心愿的“短册”在竹枝上翻飞，和纸制成的风幡迎风抖擞，保佑阖家平安的纸鹤在众多祈愿小饰品间上下舞蹈，配合着长达5米的节日装饰，壮观又别致，也难怪每年都会吸引超过200万游客共襄盛典。</Paragraph><h3>夏夜里最狂野的百鬼夜行：青森睡魔祭</h3><div><img src=\'/static/topic-detail2.jpg\'></img></div><Paragraph>华丽的山车灯笼，热情高歌的民众，响彻云天的欢呼——青森睡魔祭无疑是夏日东北最惹眼的节日，没有之一。相传在8世纪时，由中国传入的七夕乞巧节和津轻当地的传统民俗活动合二为一，以驱赶夏日酷热带来的困乏为名，成了最初睡魔祭的起源。作为整个东北地区短暂夏日中最华彩的一章，睡魔祭严格上来说分成青森、弘前和五所川原三处举办，并且看似雷同实则各具特点。其中最出彩、区别最大的就是睡魔祭中的绝对主角：睡魔灯笼。</Paragraph><Paragraph>堪称睡魔祭灵魂的睡魔灯笼是专业灯笼匠人一整年的心血，以竹条和铁丝制成骨架，再糊上特殊处理的纸张，画上人物图样，最终呈现出巨型人样灯笼。睡魔祭的灯笼形象多选择中国话本故事、歌舞伎人物或是历史传奇人物，以艳丽的色彩和极具张力的动作描绘他们的英勇传说。睡魔祭时，山车载着点亮了的灯笼在街道上巡回往复，再加上穿着传统，舞姿热情的民众，回荡在夜空中的歌声号子，狂野和传统的碰撞将节日气氛推向高潮。</Paragraph><Paragraph>在三个睡魔祭主会场上，青森市的睡魔灯笼形象最为传统，多是历史传说中的英雄人物；弘前市则多扇形造型的灯笼，图样除了历史上的武将之外，还常会有美人相伴，故而颜色也更为艳丽；五所川原的灯笼不同于前两者，以“立”为主题，每一尊都如苏相伴高大直立，最高的立灯笼可达23米，相当壮观。</Paragraph>', '1天前');
INSERT INTO `topicdetail` VALUES ('旅游攻略论坛：德国 及 捷克/斯洛伐克', '若之兰夕', '/static/topic-bg6.jpg', '<Paragraph>夏日大约算是日本人民最欢腾的季节。无惧热浪，各个地方大大小小的祭典就好像散开了花儿一般点燃了狂欢的热焰。好似为了多留一留北国步履匆匆的夏日一般，除了每年夏天点亮夜空的花火大会，以狂野奔放出名的东北地区还有众多热情如火叫人回味无穷的夏日祭典。</Paragraph><h3>哪里是东北</h3><Paragraph>所谓东北地区，即字面意义上的位于日本本州岛东北部分的区域，又被称为奥羽地区。行政范围上包括青森、岩手、宫城、秋田、山形和福岛六县，占总日本面积的约30%。</Paragraph><Paragraph>“东北”这个名词第一次出现在日本的正式文献里大约要追溯到江户时代的幕府末期了，1868年下赐给秋田藩主佐竹义尧的内敕是“东北”第一次以地名形式出现在官方史料中的记载，但其实此时的东北具体指的是东北三道——东海道、东山路和北陆道，和现在我们认知的东北地区依然不是同一个概念。直到废藩置县之后，分离出北海道，在仙台设立了国派机构，东北才真正作为一个美称用来指代奥羽地区，之后在明治后期逐渐被民众熟知，于是奥羽地区就正式成了东北地区，而原先的“奥羽”到现在反而倒成了雅称。</Paragraph><h3>东北四大祭</h3><Paragraph>狂野奔放的东北地区总是有着众多热情如火让人念念不忘的夏日祭典。仙台的七夕祭、青森的睡魔祭、秋田的竿灯祭以及山形的花笠祭因参与人数众多，举办城市都位于东北地区，且都集中在夏季，因而常被合在一起并称为东北夏日的四大祭。</Paragraph><h3>浪漫的仲夏风物诗：仙台七夕祭</h3><div><img src=\'/static/topic-detail1.jpg\'></img></div><Paragraph>七夕的典故本源自中国的牛郎织女传说，据传在奈良时代七夕的“乞巧”从中国远渡重洋传到了日本，彼时还只是女子们向织女祈愿希望能心灵手巧，而七夕祭大约是在仙台藩藩组伊达政宗的大力推广之下才真正开始以祭典的身份在民间流行。</Paragraph><Paragraph>以“杜都”知名广为人知的仙台市东北地区的第一大城市，每年8月6日起都要举办连续3天的七夕祭，距今已有400多年的历史。闹市中心挂满彩色装饰，商店街就好像成了一条五彩的七夕隧道，随处都可见华丽的竹叶装饰。七夕的特别装饰和久寿玉是最应景的装扮，写满了心愿的“短册”在竹枝上翻飞，和纸制成的风幡迎风抖擞，保佑阖家平安的纸鹤在众多祈愿小饰品间上下舞蹈，配合着长达5米的节日装饰，壮观又别致，也难怪每年都会吸引超过200万游客共襄盛典。</Paragraph><h3>夏夜里最狂野的百鬼夜行：青森睡魔祭</h3><div><img src=\'/static/topic-detail2.jpg\'></img></div><Paragraph>华丽的山车灯笼，热情高歌的民众，响彻云天的欢呼——青森睡魔祭无疑是夏日东北最惹眼的节日，没有之一。相传在8世纪时，由中国传入的七夕乞巧节和津轻当地的传统民俗活动合二为一，以驱赶夏日酷热带来的困乏为名，成了最初睡魔祭的起源。作为整个东北地区短暂夏日中最华彩的一章，睡魔祭严格上来说分成青森、弘前和五所川原三处举办，并且看似雷同实则各具特点。其中最出彩、区别最大的就是睡魔祭中的绝对主角：睡魔灯笼。</Paragraph><Paragraph>堪称睡魔祭灵魂的睡魔灯笼是专业灯笼匠人一整年的心血，以竹条和铁丝制成骨架，再糊上特殊处理的纸张，画上人物图样，最终呈现出巨型人样灯笼。睡魔祭的灯笼形象多选择中国话本故事、歌舞伎人物或是历史传奇人物，以艳丽的色彩和极具张力的动作描绘他们的英勇传说。睡魔祭时，山车载着点亮了的灯笼在街道上巡回往复，再加上穿着传统，舞姿热情的民众，回荡在夜空中的歌声号子，狂野和传统的碰撞将节日气氛推向高潮。</Paragraph><Paragraph>在三个睡魔祭主会场上，青森市的睡魔灯笼形象最为传统，多是历史传说中的英雄人物；弘前市则多扇形造型的灯笼，图样除了历史上的武将之外，还常会有美人相伴，故而颜色也更为艳丽；五所川原的灯笼不同于前两者，以“立”为主题，每一尊都如苏相伴高大直立，最高的立灯笼可达23米，相当壮观。</Paragraph>', '3天前');
INSERT INTO `topicdetail` VALUES ('写一封情书关于重新来过', '暖桃子', '/static/topic-bg7.jpg', '<Paragraph>夏日大约算是日本人民最欢腾的季节。无惧热浪，各个地方大大小小的祭典就好像散开了花儿一般点燃了狂欢的热焰。好似为了多留一留北国步履匆匆的夏日一般，除了每年夏天点亮夜空的花火大会，以狂野奔放出名的东北地区还有众多热情如火叫人回味无穷的夏日祭典。</Paragraph><h3>哪里是东北</h3><Paragraph>所谓东北地区，即字面意义上的位于日本本州岛东北部分的区域，又被称为奥羽地区。行政范围上包括青森、岩手、宫城、秋田、山形和福岛六县，占总日本面积的约30%。</Paragraph><Paragraph>“东北”这个名词第一次出现在日本的正式文献里大约要追溯到江户时代的幕府末期了，1868年下赐给秋田藩主佐竹义尧的内敕是“东北”第一次以地名形式出现在官方史料中的记载，但其实此时的东北具体指的是东北三道——东海道、东山路和北陆道，和现在我们认知的东北地区依然不是同一个概念。直到废藩置县之后，分离出北海道，在仙台设立了国派机构，东北才真正作为一个美称用来指代奥羽地区，之后在明治后期逐渐被民众熟知，于是奥羽地区就正式成了东北地区，而原先的“奥羽”到现在反而倒成了雅称。</Paragraph><h3>东北四大祭</h3><Paragraph>狂野奔放的东北地区总是有着众多热情如火让人念念不忘的夏日祭典。仙台的七夕祭、青森的睡魔祭、秋田的竿灯祭以及山形的花笠祭因参与人数众多，举办城市都位于东北地区，且都集中在夏季，因而常被合在一起并称为东北夏日的四大祭。</Paragraph><h3>浪漫的仲夏风物诗：仙台七夕祭</h3><div><img src=\'/static/topic-detail1.jpg\'></img></div><Paragraph>七夕的典故本源自中国的牛郎织女传说，据传在奈良时代七夕的“乞巧”从中国远渡重洋传到了日本，彼时还只是女子们向织女祈愿希望能心灵手巧，而七夕祭大约是在仙台藩藩组伊达政宗的大力推广之下才真正开始以祭典的身份在民间流行。</Paragraph><Paragraph>以“杜都”知名广为人知的仙台市东北地区的第一大城市，每年8月6日起都要举办连续3天的七夕祭，距今已有400多年的历史。闹市中心挂满彩色装饰，商店街就好像成了一条五彩的七夕隧道，随处都可见华丽的竹叶装饰。七夕的特别装饰和久寿玉是最应景的装扮，写满了心愿的“短册”在竹枝上翻飞，和纸制成的风幡迎风抖擞，保佑阖家平安的纸鹤在众多祈愿小饰品间上下舞蹈，配合着长达5米的节日装饰，壮观又别致，也难怪每年都会吸引超过200万游客共襄盛典。</Paragraph><h3>夏夜里最狂野的百鬼夜行：青森睡魔祭</h3><div><img src=\'/static/topic-detail2.jpg\'></img></div><Paragraph>华丽的山车灯笼，热情高歌的民众，响彻云天的欢呼——青森睡魔祭无疑是夏日东北最惹眼的节日，没有之一。相传在8世纪时，由中国传入的七夕乞巧节和津轻当地的传统民俗活动合二为一，以驱赶夏日酷热带来的困乏为名，成了最初睡魔祭的起源。作为整个东北地区短暂夏日中最华彩的一章，睡魔祭严格上来说分成青森、弘前和五所川原三处举办，并且看似雷同实则各具特点。其中最出彩、区别最大的就是睡魔祭中的绝对主角：睡魔灯笼。</Paragraph><Paragraph>堪称睡魔祭灵魂的睡魔灯笼是专业灯笼匠人一整年的心血，以竹条和铁丝制成骨架，再糊上特殊处理的纸张，画上人物图样，最终呈现出巨型人样灯笼。睡魔祭的灯笼形象多选择中国话本故事、歌舞伎人物或是历史传奇人物，以艳丽的色彩和极具张力的动作描绘他们的英勇传说。睡魔祭时，山车载着点亮了的灯笼在街道上巡回往复，再加上穿着传统，舞姿热情的民众，回荡在夜空中的歌声号子，狂野和传统的碰撞将节日气氛推向高潮。</Paragraph><Paragraph>在三个睡魔祭主会场上，青森市的睡魔灯笼形象最为传统，多是历史传说中的英雄人物；弘前市则多扇形造型的灯笼，图样除了历史上的武将之外，还常会有美人相伴，故而颜色也更为艳丽；五所川原的灯笼不同于前两者，以“立”为主题，每一尊都如苏相伴高大直立，最高的立灯笼可达23米，相当壮观。</Paragraph>', '5天前');
INSERT INTO `topicdetail` VALUES ('神奇建筑在哪里 | 小长假来福建看土楼', '追风的V小姐', '/static/topic-bg8.jpg', '<Paragraph>夏日大约算是日本人民最欢腾的季节。无惧热浪，各个地方大大小小的祭典就好像散开了花儿一般点燃了狂欢的热焰。好似为了多留一留北国步履匆匆的夏日一般，除了每年夏天点亮夜空的花火大会，以狂野奔放出名的东北地区还有众多热情如火叫人回味无穷的夏日祭典。</Paragraph><h3>哪里是东北</h3><Paragraph>所谓东北地区，即字面意义上的位于日本本州岛东北部分的区域，又被称为奥羽地区。行政范围上包括青森、岩手、宫城、秋田、山形和福岛六县，占总日本面积的约30%。</Paragraph><Paragraph>“东北”这个名词第一次出现在日本的正式文献里大约要追溯到江户时代的幕府末期了，1868年下赐给秋田藩主佐竹义尧的内敕是“东北”第一次以地名形式出现在官方史料中的记载，但其实此时的东北具体指的是东北三道——东海道、东山路和北陆道，和现在我们认知的东北地区依然不是同一个概念。直到废藩置县之后，分离出北海道，在仙台设立了国派机构，东北才真正作为一个美称用来指代奥羽地区，之后在明治后期逐渐被民众熟知，于是奥羽地区就正式成了东北地区，而原先的“奥羽”到现在反而倒成了雅称。</Paragraph><h3>东北四大祭</h3><Paragraph>狂野奔放的东北地区总是有着众多热情如火让人念念不忘的夏日祭典。仙台的七夕祭、青森的睡魔祭、秋田的竿灯祭以及山形的花笠祭因参与人数众多，举办城市都位于东北地区，且都集中在夏季，因而常被合在一起并称为东北夏日的四大祭。</Paragraph><h3>浪漫的仲夏风物诗：仙台七夕祭</h3><div><img src=\'/static/topic-detail1.jpg\'></img></div><Paragraph>七夕的典故本源自中国的牛郎织女传说，据传在奈良时代七夕的“乞巧”从中国远渡重洋传到了日本，彼时还只是女子们向织女祈愿希望能心灵手巧，而七夕祭大约是在仙台藩藩组伊达政宗的大力推广之下才真正开始以祭典的身份在民间流行。</Paragraph><Paragraph>以“杜都”知名广为人知的仙台市东北地区的第一大城市，每年8月6日起都要举办连续3天的七夕祭，距今已有400多年的历史。闹市中心挂满彩色装饰，商店街就好像成了一条五彩的七夕隧道，随处都可见华丽的竹叶装饰。七夕的特别装饰和久寿玉是最应景的装扮，写满了心愿的“短册”在竹枝上翻飞，和纸制成的风幡迎风抖擞，保佑阖家平安的纸鹤在众多祈愿小饰品间上下舞蹈，配合着长达5米的节日装饰，壮观又别致，也难怪每年都会吸引超过200万游客共襄盛典。</Paragraph><h3>夏夜里最狂野的百鬼夜行：青森睡魔祭</h3><div><img src=\'/static/topic-detail2.jpg\'></img></div><Paragraph>华丽的山车灯笼，热情高歌的民众，响彻云天的欢呼——青森睡魔祭无疑是夏日东北最惹眼的节日，没有之一。相传在8世纪时，由中国传入的七夕乞巧节和津轻当地的传统民俗活动合二为一，以驱赶夏日酷热带来的困乏为名，成了最初睡魔祭的起源。作为整个东北地区短暂夏日中最华彩的一章，睡魔祭严格上来说分成青森、弘前和五所川原三处举办，并且看似雷同实则各具特点。其中最出彩、区别最大的就是睡魔祭中的绝对主角：睡魔灯笼。</Paragraph><Paragraph>堪称睡魔祭灵魂的睡魔灯笼是专业灯笼匠人一整年的心血，以竹条和铁丝制成骨架，再糊上特殊处理的纸张，画上人物图样，最终呈现出巨型人样灯笼。睡魔祭的灯笼形象多选择中国话本故事、歌舞伎人物或是历史传奇人物，以艳丽的色彩和极具张力的动作描绘他们的英勇传说。睡魔祭时，山车载着点亮了的灯笼在街道上巡回往复，再加上穿着传统，舞姿热情的民众，回荡在夜空中的歌声号子，狂野和传统的碰撞将节日气氛推向高潮。</Paragraph><Paragraph>在三个睡魔祭主会场上，青森市的睡魔灯笼形象最为传统，多是历史传说中的英雄人物；弘前市则多扇形造型的灯笼，图样除了历史上的武将之外，还常会有美人相伴，故而颜色也更为艳丽；五所川原的灯笼不同于前两者，以“立”为主题，每一尊都如苏相伴高大直立，最高的立灯笼可达23米，相当壮观。</Paragraph>', '1天前');

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
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (2, '老aaaa', '1', '1', 0);
INSERT INTO `user` VALUES (3, '老马', '123456', '15929774304', 0);
INSERT INTO `user` VALUES (4, '老马2', '123456', '15929774304', 0);
INSERT INTO `user` VALUES (5, 'admin', 'admin', '15929774304', 1);
INSERT INTO `user` VALUES (6, '山姆', '123456', '15929774304', 0);

SET FOREIGN_KEY_CHECKS = 1;
