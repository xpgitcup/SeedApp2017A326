/*
Navicat MySQL Data Transfer

Source Server         : sample
Source Server Version : 50620
Source Host           : localhost:3306
Source Database       : seedappdba

Target Server Type    : MYSQL
Target Server Version : 50620
File Encoding         : 65001

Date: 2017-01-01 16:04:22
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `system_title`
-- ----------------------------
DROP TABLE IF EXISTS `system_title`;
CREATE TABLE `system_title` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `version` bigint(20) NOT NULL,
  `application_logo` varchar(255) NOT NULL,
  `application_title` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of system_title
-- ----------------------------
INSERT INTO `system_title` VALUES ('1', '0', 'sylogo.gif', '种子程序');
