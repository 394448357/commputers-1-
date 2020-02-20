-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-11-20 05:13:11
-- 服务器版本： 10.1.28-MariaDB
-- PHP Version: 5.6.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `xz`
--
CREATE DATABASE IF NOT EXISTS `pc` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `pc`;

-- --------------------------------------------------------

--
-- 表的结构 `xz_index_carousel`
--

DROP TABLE IF EXISTS `pc_index_j`;
CREATE TABLE `pc_index_j` (
  `lid` int(11) NOT NULL,
  `img` varchar(128) DEFAULT NULL,
  `img1` varchar(128) DEFAULT NULL,
  `img2` varchar(128) DEFAULT NULL,
  `img3` varchar(128) DEFAULT NULL,
  `img4` varchar(128) DEFAULT NULL,
  `img5` varchar(128) DEFAULT NULL,
  `title` varchar(64) DEFAULT NULL,
  `price` varchar(20) DEFAULT NULL,
  `details` varchar(128) DEFAULT NULL,
  `seq_recommended` tinyint(4) DEFAULT NULL,
  `href` varchar(128) DEFAULT NULL,
  `time` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 插入之前先把表清空（truncate） `xz_index_carousel`
--

TRUNCATE TABLE `pc_index_j`;
--
-- 转存表中的数据 `xz_index_carousel`
--

INSERT INTO `pc_index_j` (`lid`, `img`, `img1` ,`img2`, `img3`, `img4`, `img5`, `title`, `price` , `details`, `seq_recommended` ,`href`,`time`) VALUES
(1,'img/j1.webp','img/shopping1.webp','img/shopping1_2.webp','img/shopping1_3.webp','img/shopping1_4.webp','img/shopping1_5.webp','拯救者 Y7000 15.6英寸游戏本 黑色81FW0009CD',7599,'i5-8300H/Windows 10 家庭中文版/15.6英寸/8G/2T+128G SSD/GTX 1050Ti 4G独显/黑色',1,'shopping_1.html?lid=1','0.1s'),

(2,'img/j2.webp','img/shopping2.webp','img/shopping1_2.webp','img/shopping1_3.webp','img/shopping1_4.webp','img/shopping1_5.webp','14英寸四核独显轻薄商务便携笔记本电脑',5999,'金属游戏本，芯八代六核I7-8750H处理器，GTX1050/4G独显，8G内存，128G固态+1T机械，IPS高清屏',2,'shopping_1.html?lid=2','0.2s'),

(3,'img/j3.webp','img/shopping3.webp','img/shopping1_2.webp','img/shopping1_3.webp','img/shopping1_4.webp','img/shopping1_5.webp','15.6英寸游戏笔记本 黑色 81HC0007CD',5899,'i5-8300H/Windows 10 家庭中文版/15.6英寸/8G/2T+128G SSD/GTX 1050Ti 4G独显/黑色',3,'shopping_1.html?lid=3','0.3s'),

(4,'img/j4.webp','img/shopping4.webp','img/shopping1_2.webp','img/shopping1_3.webp','img/shopping1_4.webp','img/shopping1_5.webp','13.3英寸触控笔记本 天蝎灰 81CT0001CD',7599,'i5-8300H/Windows 10 家庭中文版/15.6英寸/8G/2T+128G SSD/GTX 1050Ti 4G独显/黑色',4,'shopping_1.html?lid=4','0.4s'),

(5,'img/j5.webp','img/shopping5.webp','img/shopping1_2.webp','img/shopping1_3.webp','img/shopping1_4.webp','img/shopping1_5.webp','ThinkPad T480 笔记本电脑',8999,'i5-8250U/Windows 10 家庭版/8GB/1TB+128GB SSD/独显',5,'shopping_1.html?lid=5','0.5s');
-- --------------------------------------------------------

DROP TABLE IF EXISTS `pc_index_t`;
CREATE TABLE `pc_index_t` (
  `tid` int(11) NOT NULL,
  `img` varchar(128) DEFAULT NULL,
  `img1` varchar(128) DEFAULT NULL,
  `img2` varchar(128) DEFAULT NULL,
  `img3` varchar(128) DEFAULT NULL,
  `img4` varchar(128) DEFAULT NULL,
  `title` varchar(64) DEFAULT NULL,
  `price` varchar(20) DEFAULT NULL,
  `details` varchar(128) DEFAULT NULL,
  `seq_recommended` tinyint(4) DEFAULT NULL,
  `href` varchar(128) DEFAULT NULL,
  `time` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 插入之前先把表清空（truncate） `xz_index_carousel`
--

TRUNCATE TABLE `pc_index_t`;
--
-- 转存表中的数据 `xz_index_carousel`
--

INSERT INTO `pc_index_t` (`tid`, `img`, `img1` ,`img2`, `img3`, `img4`, `title`, `price` , `details`, `seq_recommended` ,`href`,`time`) VALUES
(1,'img/t1.webp','img/t1.webp','img/t1_1.jpg','img/t1_2.jpg','img/t1_3.jpg','惠普（HP）暗影精灵23代 游戏台式电脑主机
',4999,'i5-8300H/全新戴尔灵越酷睿8代超窄边框一体机京东首发，IPS高清大屏，隐藏式摄像头，首发3重好礼',1,'shopping_2.html?tid=1','0.1s'),

(2,'img/t2.webp','img/t2.webp','img/t1_1.jpg','img/t1_2.jpg','img/t1_3.jpg','惠普（HP）暗影精灵3代 游戏台式电脑主机（i7-8700 16G高频 1T+256GSSD GTX1060 6G独显 三年上门）',4099,'全新戴尔灵越酷睿8代超窄边框一体机京东首发，IPS高清大屏，隐藏式摄像头，首发3重好礼',2,'shopping_2.html?tid=2','0.2s'),

(3,'img/t3.webp','img/t3.webp','img/t1_1.jpg','img/t1_2.jpg','img/t1_3.jpg','宏碁（Acer）商祺SQX4270 140N 商用办公台式电脑主机
',5899,'全新戴尔灵越酷睿8代超窄边框一体机京东首发，IPS高清大屏，隐藏式摄像头，首发3重好礼',3,'shopping_2.html?tid=3','0.3s'),

(4,'img/t4.webp','img/t4.webp','img/t1_1.jpg','img/t1_2.jpg','img/t1_3.jpg','联想（Lenovo）天逸510S 第八代英特尔酷睿i3 个人商务台式电脑主机',2999,'全新戴尔灵越酷睿8代超窄边框一体机京东首发，IPS高清大屏，隐藏式摄像头，首发3重好礼',4,'shopping_2.html?tid=4','0.4s'),

(5,'img/t5.webp','img/t5.webp','img/t1_1.jpg','img/t1_2.jpg','img/t1_3.jpg','戴尔(DELL)灵越3670台式电脑主机',3999,'全新戴尔灵越酷睿8代超窄边框一体机京东首发，IPS高清大屏，隐藏式摄像头，首发3重好礼',5,'shopping_2.html?tid=5','0.5s'),

(6,'img/t5.webp','img/t5.webp','img/t1_1.jpg','img/t1_2.jpg','img/t1_3.jpg','惠普（HP）暗影精灵3代 游戏台式电脑主机（i5-8400 16G高频 1T+128GSSD GTX1060 6G独显 三年上门）',6999,'GTX1060-6G”十”力尽显，固态机械双硬盘速容兼顾，绿刃LED锋芒毕露！',6,'shopping_2.html?tid=6','0.6s');



DROP TABLE IF EXISTS `pc_index_b`;
CREATE TABLE `pc_index_b` (
  `bid` int(11) NOT NULL,
  `img` varchar(128) DEFAULT NULL,
  `img1` varchar(128) DEFAULT NULL,
  `img2` varchar(128) DEFAULT NULL,
  `img3` varchar(128) DEFAULT NULL,
  `img4` varchar(128) DEFAULT NULL,
  `title` varchar(64) DEFAULT NULL,
  `price` varchar(20) DEFAULT NULL,
  `details` varchar(128) DEFAULT NULL,
  `seq_recommended` tinyint(4) DEFAULT NULL,
  `href` varchar(128) DEFAULT NULL,
  `time` varchar(10) DEFAULT NULL,
  `count` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 插入之前先把表清空（truncate） `xz_index_carousel`
--

TRUNCATE TABLE `pc_index_b`;
--
-- 转存表中的数据 `xz_index_carousel`
--

INSERT INTO `pc_index_b` (`bid`, `img`, `img1` ,`img2`, `img3`, `img4`,`title`, `price` , `details`, `seq_recommended` ,`href`,`time`,`count`) VALUES
(1,'img/j2.webp','img/shoppng2.webp','img/shopping1_3.webp','img/shopping1_3.webp','img/shopping1_4.webp','14英寸四核独显轻薄商务便携笔记本电脑',5999,'金属游戏本，芯八代六核I7-8750H处理器，GTX1050/4G独显，8G内存，128G固态+1T机械，IPS高清屏',1,'shopping_3.html?bid=1','0.1s','1'),

(2,'img/bjb2.webp','img/bjb2_2.jpg','img/shopping1_2.webp','img/shopping1_3.webp','img/shopping1_4.webp','15.6英寸游戏笔记本 黑色 80WW000TCD',5999,'金属游戏本，芯八代六核I7-8750H处理器，GTX1050/4G独显，8G内存，128G固态+1T机械，IPS高清屏',2,'shopping_3.html?bid=2','0.2s','1'),

(3,'img/bjb3.webp','img/bjb3_2.webp','img/shopping1_2.webp','img/shopping1_3.webp','img/shopping1_4.webp','E580 笔记本电脑 20KSA001CD',10899,'i5-8300H/Windows 10 家庭中文版/15.6英寸/8G/2T+128G SSD/GTX 1050Ti 4G独显/黑色',3,'shopping_3.html?bid=3','0.3s','1'),

(4,'img/j3.webp','img/shopping3.webp','img/shopping1_2.webp','img/shopping1_3.webp','img/shopping1_4.webp','15.6英寸游戏笔记本 黑色 81HC0007CD',5899,'i5-8300H/Windows 10 家庭中文版/15.6英寸/8G/2T+128G SSD/GTX 1050Ti 4G独显/黑色',4,'shopping_3.html?bid=4','0.4s','1'),

(5,'img/j4.webp','img/shopping4.webp','img/shopping1_2.webp','img/shopping1_3.webp','img/shopping1_4.webp','13.3英寸触控笔记本 天蝎灰 81CT0001CD',7599,'i5-8300H/Windows 10 家庭中文版/15.6英寸/8G/2T+128G SSD/GTX 1050Ti 4G独显/黑色',5,'shopping_3.html?bid=5','0.5s','1'),

(6,'img/bjb6.webp','img/bjb6_2.webp','img/shopping1_2.webp','img/shopping1_3.webp','img/shopping1_4.webp','X280 笔记本电脑 20KFA002CD',6599,'i5-8300H/Windows 10 家庭中文版/15.6英寸/8G/2T+128G SSD/GTX 1050Ti 4G独显/黑色',6,'shopping_3.html?bid=6','0.6s','1');



DROP TABLE IF EXISTS `pc_index_s`;
CREATE TABLE `pc_index_s` (
  `sid` int(11) NOT NULL,
  `img` varchar(128) DEFAULT NULL,
  `img1` varchar(128) DEFAULT NULL,
  `img2` varchar(128) DEFAULT NULL,
  `img3` varchar(128) DEFAULT NULL,
  `img4` varchar(128) DEFAULT NULL,
  `img5` varchar(128) DEFAULT NULL,
  `title` varchar(64) DEFAULT NULL,
  `price` varchar(20) DEFAULT NULL,
  `details` varchar(128) DEFAULT NULL,
  `seq_recommended` tinyint(4) DEFAULT NULL,
  `href` varchar(128) DEFAULT NULL,
  `time` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 插入之前先把表清空（truncate） `xz_index_carousel`
--

TRUNCATE TABLE `pc_index_s`;
--
-- 转存表中的数据 `xz_index_carousel`
--

INSERT INTO `pc_index_s` (`sid`, `img`, `img1` ,`img2`, `img3`, `img4`,`img5`,`title`, `price` , `details`, `seq_recommended` ,`href`,`time`) VALUES
(1,'img/sm1.webp','img/sm1_1.jpg','img/sm1_2.jpg','img/sm1_3.jpg','img/sm1_4.jpg','img/sm1_5.jpg','索尼（SONY）WH-1000XM3 高解析度无线蓝牙降噪耳机（触控面板 智能降噪 长久续航）黑色',2899,'新款黑科技，超强降噪，佩戴更舒适，快充更方便！',1,'shopping_4.html?sid=1','0.1s'),

(2,'img/sm2.webp','img/sm2_1.webp','img/sm2_2.jpg','img/sm2_3.jpg','img/sm2_3.webp','img/sm2_3.jpg','小米米家（MIJIA）智能摄像机 云台版 白色 1080P',199,'1080P高清／ 360度云台全景视角 ／ 微光全彩 ／ 双向语音 / AI 增强移动侦测 / H.265 编码 / 倒置安装 / 红外夜视',2,'shopping_4.html?sid=2','0.2s'),

(3,'img/sm3.webp','img/sm3_1.webp','img/sm3_2.jpg','img/sm3_3.jpg','img/sm3_3.webp','img/sm3_3.jpg','Pico G2小怪兽2 VR一体机 4K高清视频 体感游戏 VR眼镜 3D头盔',1899,'【爆款直降】小怪兽2VR一体机限时直降100元，到手价仅需1899元',3,'shopping_4.html?sid=3','0.3s'),

(4,'img/sm4.webp','img/sm4_1.webp','img/sm4_2.jpg','img/sm4_3.jpg','img/sm4_4.webp','img/sm4_3.jpg','联想大红点M120Pro有线鼠标 台式机鼠标 笔记本鼠标',99,'经典大红点系列，按键灵敏，精选耐磨防滑滚轮。',4,'shopping_4.html?sid=4','0.4s'),

(5,'img/sm5.webp','img/sm5_1.webp','img/sm5_1.webp','img/sm5_1.webp','img/sm5_1.webp','img/sm5_1.webp','M330 无线静音鼠标 舒适曲线 黑色 M275升级版',109,'舒适曲线 黑色 M275升级版',5,'shopping_4.html?sid=5','0.5s'),

(6,'img/sm6.webp','img/sm6_1.webp','img/sm6_2.jpg','img/sm6_3.jpg','img/sm6_3.jpg','img/sm6_3.jpg','全尺寸背光机械游戏键盘 机械键盘 红轴 吃鸡键盘 绝地求生',118,'无线光学鼠标，始于简约，磨砂手感，智能芯片',6,'shopping_4.html?sid=6','0.6s');

--
-- 表的结构 `xz_user`
--
DROP TABLE IF EXISTS `pc_user`;
CREATE TABLE `pc_user` (
  `uid` int(11) NOT NULL,
  `uname` varchar(32) DEFAULT NULL,
  `upwd` varchar(32) DEFAULT NULL,
  `email` varchar(64) DEFAULT NULL,
  `phone` varchar(16) DEFAULT NULL,
  `avatar` varchar(128) DEFAULT NULL,
  `user_name` varchar(32) DEFAULT NULL,
  `gender` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 插入之前先把表清空（truncate） `xz_user`
--

TRUNCATE TABLE `pc_user`;
--
-- 转存表中的数据 `xz_user`
--

INSERT INTO `pc_user` (`uid`, `uname`, `upwd`, `email`, `phone`, `avatar`, `user_name`, `gender`) VALUES
(1, 'dingding', '123456', 'ding@qq.com', '13501234567', 'img/avatar/default.png', '丁伟', 1),
(2, 'dangdang', '123456', 'dang@qq.com', '13501234568', 'img/avatar/default.png', '林当', 1),
(3, 'doudou', '123456', 'dou@qq.com', '13501234569', 'img/avatar/default.png', '窦志强', 1),
(4, 'yaya', '123456', 'ya@qq.com', '13501234560', 'img/avatar/default.png', '秦小雅', 0);

-- 购物车表
DROP TABLE IF EXISTS shop_cart;
CREATE TABLE shop_cart(
  `id`  INT PRIMARY KEY AUTO_INCREMENT,		
  `bid` int(11) NOT NULL,
  `title` varchar(64) DEFAULT NULL,
  `img` varchar(128) DEFAULT NULL,
  `count` INT,
  `price` decimal(10,2) DEFAULT NULL
);

--
ALTER TABLE `pc_index_j`
  ADD PRIMARY KEY (`lid`);
--
--
ALTER TABLE `pc_index_t`
  ADD PRIMARY KEY (`tid`);
--
--
ALTER TABLE `pc_index_b`
  ADD PRIMARY KEY (`bid`);
--
ALTER TABLE `pc_index_s`
  ADD PRIMARY KEY (`sid`);

--
ALTER TABLE `pc_user`
  ADD PRIMARY KEY (`uid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `xz_index_carousel`
--
ALTER TABLE `pc_index_j`
  MODIFY `lid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
--
-- 使用表AUTO_INCREMENT `xz_index_carousel`
--
ALTER TABLE `pc_index_t`
  MODIFY `tid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- 使用表AUTO_INCREMENT `xz_index_carousel`
--
ALTER TABLE `pc_index_b`
  MODIFY `bid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- 使用表AUTO_INCREMENT `xz_index_carousel`
--
ALTER TABLE `pc_index_s`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- 使用表AUTO_INCREMENT `xz_user`
--
ALTER TABLE `pc_user`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
