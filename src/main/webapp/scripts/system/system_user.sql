/*
Navicat MySQL Data Transfer

Source Server         : root
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : seedapp2017dba

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2017-01-30 17:53:32
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `system_user`
-- ----------------------------
DROP TABLE IF EXISTS `system_user`;
CREATE TABLE `system_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `version` bigint(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role_attribute` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_204b9ercidw1baj3s3m9lnr33` (`user_name`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of system_user
-- ----------------------------
INSERT INTO `system_user` VALUES ('1', '0', '350db081a661525235354dd3e19b8c05', '底层管理 系统维护 公共服务', 'root');
INSERT INTO `system_user` VALUES ('2', '0', '350db081a661525235354dd3e19b8c05', '底层管理 系统维护 公共服务', '李晓平');
INSERT INTO `system_user` VALUES ('3', '0', 'f4aa0dd960521e045ae2f20621fb4ee9', '底层管理 系统维护 公共服务', '吴海浩');
INSERT INTO `system_user` VALUES ('4', '0', '94a1de81f588eee57ed9e325beb76bc7', '底层管理 系统维护 公共服务', '康琦');
INSERT INTO `system_user` VALUES ('5', '0', '94a1de81f588eee57ed9e325beb76bc7', '底层管理 系统维护 公共服务', '石国赟');
INSERT INTO `system_user` VALUES ('6', '0', 'ee26fc66b1369c7625333bedafbfcaf6', '底层管理 系统维护 公共服务', '宫敬');
INSERT INTO `system_user` VALUES ('7', '0', 'c4ca4238a0b923820dcc509a6f75849b', '公共服务', '张0李1');
INSERT INTO `system_user` VALUES ('8', '0', 'c4ca4238a0b923820dcc509a6f75849b', '公共服务', '张1李2');
INSERT INTO `system_user` VALUES ('9', '0', 'c4ca4238a0b923820dcc509a6f75849b', '公共服务', '张2李3');
INSERT INTO `system_user` VALUES ('10', '0', 'c4ca4238a0b923820dcc509a6f75849b', '公共服务', '张3李4');
INSERT INTO `system_user` VALUES ('11', '0', 'c4ca4238a0b923820dcc509a6f75849b', '公共服务', '张4李5');
INSERT INTO `system_user` VALUES ('12', '0', 'c4ca4238a0b923820dcc509a6f75849b', '公共服务', '张5李6');
INSERT INTO `system_user` VALUES ('13', '0', 'c4ca4238a0b923820dcc509a6f75849b', '公共服务', '张6李7');
INSERT INTO `system_user` VALUES ('14', '0', 'c4ca4238a0b923820dcc509a6f75849b', '公共服务', '张7李8');
INSERT INTO `system_user` VALUES ('15', '0', 'c4ca4238a0b923820dcc509a6f75849b', '公共服务', '张8李9');
INSERT INTO `system_user` VALUES ('16', '0', 'c4ca4238a0b923820dcc509a6f75849b', '公共服务', '张9李10');
INSERT INTO `system_user` VALUES ('17', '0', 'c4ca4238a0b923820dcc509a6f75849b', '公共服务', '张10李11');
INSERT INTO `system_user` VALUES ('18', '0', 'c4ca4238a0b923820dcc509a6f75849b', '公共服务', '张11李12');
INSERT INTO `system_user` VALUES ('19', '0', 'c4ca4238a0b923820dcc509a6f75849b', '公共服务', '张12李13');
INSERT INTO `system_user` VALUES ('20', '0', 'c4ca4238a0b923820dcc509a6f75849b', '公共服务', '张13李14');
INSERT INTO `system_user` VALUES ('21', '0', 'c4ca4238a0b923820dcc509a6f75849b', '公共服务', '张14李15');
INSERT INTO `system_user` VALUES ('22', '0', 'c4ca4238a0b923820dcc509a6f75849b', '公共服务', '张15李16');
INSERT INTO `system_user` VALUES ('23', '0', 'c4ca4238a0b923820dcc509a6f75849b', '公共服务', '张16李17');
INSERT INTO `system_user` VALUES ('24', '0', 'c4ca4238a0b923820dcc509a6f75849b', '公共服务', '张17李18');
INSERT INTO `system_user` VALUES ('25', '0', 'c4ca4238a0b923820dcc509a6f75849b', '公共服务', '张18李19');
INSERT INTO `system_user` VALUES ('26', '0', 'c4ca4238a0b923820dcc509a6f75849b', '公共服务', '张19李20');
