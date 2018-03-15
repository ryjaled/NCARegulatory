-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 28, 2018 at 10:54 AM
-- Server version: 5.5.42
-- PHP Version: 5.6.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `ncaoutreach`
--

-- --------------------------------------------------------

--
-- Table structure for table `audiences`
--

CREATE TABLE `audiences` (
  `aud_id` int(11) NOT NULL,
  `aud_name` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `audiences`
--

INSERT INTO `audiences` (`aud_id`, `aud_name`) VALUES
(1, 'Artisans'),
(2, 'Communities'),
(3, 'Corporate'),
(4, 'Religious Bodies'),
(5, 'Schools'),
(6, 'Villages'),
(7, 'Others');

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `city_id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `state_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`city_id`, `name`, `state_id`) VALUES
(20367, 'Agogo', 1),
(20368, 'Bekwai', 1),
(20369, 'Konongo', 1),
(20370, 'Kumasi', 1),
(20371, 'Mampong', 1),
(20372, 'Mankranso', 1),
(20373, 'Obuasi', 1),
(20374, 'Ofinso', 1),
(20375, 'Tafo', 1),
(20376, 'Bechem', 2),
(20377, 'Berekum', 2),
(20378, 'Duayaw Nkwanta', 2),
(20379, 'Kintampo', 2),
(20380, 'Sunyani', 2),
(20381, 'Techiman', 2),
(20382, 'Wenchi', 2),
(20383, 'Apam', 3),
(20384, 'Cape Coast', 3),
(20385, 'Dunkwa', 3),
(20386, 'Elmina', 3),
(20387, 'Foso', 3),
(20388, 'Komenda', 3),
(20389, 'Mauri', 3),
(20390, 'Mumford', 3),
(20391, 'Nyakrom', 3),
(20392, 'Okitsiu', 3),
(20393, 'Saltpond', 3),
(20394, 'Swedru', 3),
(20395, 'Winneba', 3),
(20396, 'Aburi', 4),
(20397, 'Ada', 4),
(20398, 'Akim Swedru', 4),
(20399, 'Akropong', 4),
(20400, 'Asamankese', 4),
(20401, 'Begoro', 4),
(20402, 'Kade', 4),
(20403, 'Kibi', 4),
(20404, 'Koforidua', 4),
(20405, 'Mpraeso', 4),
(20406, 'Nkawkaw', 4),
(20407, 'Nsawam', 4),
(20408, 'Oda', 4),
(20409, 'Somanya', 4),
(20410, 'Suhum', 4),
(20411, 'Kpandae', 6),
(20412, 'Salaga', 6),
(20413, 'Savelugu', 6),
(20414, 'Tamale', 6),
(20415, 'Yendi', 6),
(20416, 'Aflao', 9),
(20417, 'Anloga', 9),
(20418, 'Ho', 9),
(20419, 'Hohoe', 9),
(20420, 'Keta', 9),
(20421, 'Kete-Krachi', 9),
(20422, 'Kpandu', 9),
(20423, 'Aboso', 10),
(20424, 'Anomabu', 10),
(20425, 'Axim', 10),
(20426, 'Bibiani', 10),
(20427, 'Prestea', 10),
(20428, 'Sekondi', 10),
(20429, 'Shama', 10),
(20430, 'Takoradi', 10),
(20431, 'Tarkwa', 10);

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `comment_id` int(10) NOT NULL,
  `event_id` int(11) NOT NULL,
  `comment` varchar(300) NOT NULL,
  `action` enum('approve','deny','verify') NOT NULL,
  `comment_type` enum('event','report') NOT NULL,
  `commenter_id` int(11) NOT NULL,
  `action_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`comment_id`, `event_id`, `comment`, `action`, `comment_type`, `commenter_id`, `action_date`) VALUES
(1, 53, 'doneasdkjfnasdjfansdf ljadsnf ja askdjfn klasasdadasdasdasd asdaksjnd kjan dskja nd', 'verify', 'event', 4, '2018-02-22 10:55:35'),
(2, 53, 'donneeee', 'approve', 'event', 3, '2018-02-22 08:14:20'),
(3, 53, 'doneee', 'approve', 'report', 4, '2018-02-22 08:14:53'),
(4, 54, 'nope', 'deny', 'event', 4, '2018-02-22 08:18:16'),
(5, 54, 'yes', 'verify', 'event', 4, '2018-02-22 08:18:38'),
(6, 54, 'nopee', 'deny', 'event', 3, '2018-02-22 08:18:50'),
(7, 54, 'yess', 'verify', 'event', 4, '2018-02-22 08:20:50'),
(8, 54, 'yessss', 'approve', 'event', 3, '2018-02-22 08:21:00'),
(9, 54, 'nopeee', 'deny', 'report', 4, '2018-02-22 08:21:31'),
(10, 55, 'verify this event', 'verify', 'event', 4, '2018-02-22 11:08:04'),
(11, 55, 'no', 'deny', 'event', 3, '2018-02-22 11:09:11'),
(12, 55, 'ni', 'verify', 'event', 4, '2018-02-22 11:10:32'),
(13, 55, 'ni', 'approve', 'event', 3, '2018-02-22 11:10:39'),
(14, 55, 'ok', 'approve', 'report', 4, '2018-02-22 11:12:08'),
(15, 56, 'as', 'verify', 'event', 4, '2018-02-22 11:15:23'),
(16, 56, 'a', 'approve', 'event', 3, '2018-02-22 11:15:43'),
(17, 59, 'We are now verifed!', 'verify', 'event', 18, '2018-02-27 14:29:32'),
(18, 58, 'this is the second verify', 'verify', 'event', 17, '2018-02-27 14:29:53'),
(19, 57, 'this is rejection', 'deny', 'event', 4, '2018-02-27 14:30:03'),
(20, 57, 'third verify', 'verify', 'event', 4, '2018-02-27 14:31:10'),
(21, 57, 'first approve', 'approve', 'event', 3, '2018-02-27 14:31:58'),
(22, 58, 'second approve', 'approve', 'event', 3, '2018-02-27 14:32:13'),
(23, 59, 'third reject', 'deny', 'event', 3, '2018-02-27 14:32:24'),
(24, 57, 'this report has been approved 1', 'approve', 'report', 4, '2018-02-27 14:38:39'),
(25, 58, 'reject this report', 'deny', 'report', 17, '2018-02-27 14:38:49'),
(26, 60, 'first verify', 'verify', 'event', 18, '2018-02-27 16:36:36'),
(27, 61, 'second verify', 'verify', 'event', 17, '2018-02-27 16:36:50'),
(28, 62, 'denying the third', 'deny', 'event', 4, '2018-02-27 16:37:02'),
(29, 62, 'verify the third', 'verify', 'event', 4, '2018-02-27 16:37:57'),
(30, 60, 'approve first', 'approve', 'event', 3, '2018-02-27 16:38:16'),
(31, 61, 'approve second', 'approve', 'event', 3, '2018-02-27 16:38:33'),
(32, 62, 'denying again', 'deny', 'event', 3, '2018-02-27 16:38:41'),
(33, 61, 'approving the report', 'approve', 'report', 17, '2018-02-27 16:43:02'),
(34, 60, 'denying report', 'deny', 'report', 18, '2018-02-27 16:43:16');

-- --------------------------------------------------------

--
-- Table structure for table `eventlogs`
--

CREATE TABLE `eventlogs` (
  `eventlog_id` int(11) NOT NULL,
  `event_title` varchar(30) NOT NULL,
  `user_id` int(11) NOT NULL,
  `action` varchar(30) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `region` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `eventlogs`
--

INSERT INTO `eventlogs` (`eventlog_id`, `event_title`, `user_id`, `action`, `date`, `region`) VALUES
(21, 'test1', 5, 'added a Future event', '2018-02-08 09:21:24', 2),
(22, 'testtt', 5, 'added a Future event', '2018-02-08 12:58:23', 2),
(23, 'testtt', 5, 'edited a Future event', '2018-02-08 13:01:59', 2),
(24, 'OH EBONY', 5, 'added a Future event', '2018-02-09 11:54:27', 2),
(25, 'sd', 5, 'added a Future event', '2018-02-09 11:55:48', 2),
(26, 'sd', 5, 'added a Future event', '2018-02-09 12:14:25', 3),
(27, 'ds', 5, 'added a Future event', '2018-02-09 12:19:39', 2),
(28, 'test1', 5, 'edited a Future event', '2018-02-12 09:27:09', 2),
(48, 'test1', 5, 'has verified an event: ', '2018-02-12 16:36:08', 2),
(49, 'test1', 5, 'has approved an event: ', '2018-02-12 16:36:18', 2),
(52, 'sd', 5, 'has approved a report: ', '2018-02-12 16:41:15', 2),
(53, 'testtt', 5, 'Added a new report for ', '2018-02-13 09:28:31', 2),
(54, 'test1', 5, 'edited a Future event', '2018-02-13 09:29:14', 4),
(55, 'sdsd', 5, 'added a new report for: ', '2018-02-13 10:44:23', 3),
(56, 'sd', 5, 'added a new report for: ', '2018-02-13 12:06:51', 2),
(57, 'sd', 5, 'has approved a report: ', '2018-02-13 12:07:35', 2),
(58, 'Event at mendskrom', 5, 'added a future event', '2018-02-14 09:26:26', 2),
(59, 'Event at mendskrom', 5, 'has verified an event: ', '2018-02-14 09:46:04', 2),
(60, 'Event at mendskrom', 5, 'has approved an event: ', '2018-02-14 09:46:57', 2),
(61, 'Event at mendskrom', 5, 'edited a future event', '2018-02-14 09:47:57', 2),
(62, 'Event at mendskrom', 5, 'has verified an event: ', '2018-02-14 09:48:23', 2),
(63, 'Event at mendskrom', 5, 'has approved an event: ', '2018-02-14 09:52:42', 2),
(64, 'Event at mendskrom', 5, 'added a new report for: ', '2018-02-14 09:53:20', 2),
(65, 'Event at mendskrom', 5, 'has approved a report: ', '2018-02-14 09:55:51', 2),
(66, 'dd', 5, 'added a future event', '2018-02-14 15:11:01', 2),
(67, 'sdddddd', 5, 'added a future event', '2018-02-14 15:17:00', 3),
(68, 'sddsdaasasas', 5, 'added a future event', '2018-02-14 15:19:02', 2),
(69, 'heyy', 5, 'added a future event', '2018-02-14 15:19:39', 4),
(70, 'sdsadqw', 5, 'added a future event', '2018-02-14 15:21:43', 5),
(71, '32', 5, 'added a future event', '2018-02-14 15:22:46', 2),
(72, '1ow', 5, 'added a future event', '2018-02-14 15:23:41', 7),
(73, 'wdsd', 5, 'added a future event', '2018-02-14 15:26:09', 2),
(74, 'wdsd', 5, 'has verified an event: ', '2018-02-14 15:35:06', 2),
(75, 'wdsd', 5, 'has approved an event: ', '2018-02-14 15:37:14', 2),
(76, '1ow', 5, 'edited a future event', '2018-02-14 15:37:39', 2),
(77, '1ow', 5, 'has verified an event: ', '2018-02-14 15:40:40', 2),
(78, '1ow', 5, 'has approved an event: ', '2018-02-14 15:40:53', 2),
(79, '1ow', 5, 'added a new report for: ', '2018-02-14 15:42:50', 2),
(80, 'sde33', 5, 'added a future event', '2018-02-16 10:03:03', 3),
(81, 'sde33', 5, 'edited a future event', '2018-02-16 10:03:31', 2),
(82, 'zxx', 5, 'added a future event', '2018-02-16 10:07:54', 2),
(83, 'zxx', 5, 'has verified an event: ', '2018-02-16 10:08:14', 2),
(84, 'zxx', 5, 'has approved an event: ', '2018-02-16 10:09:56', 2),
(85, 'sde33', 5, 'has verified an event: ', '2018-02-16 15:21:08', 2),
(86, 'sde33', 5, 'has approved an event: ', '2018-02-16 17:22:39', 2),
(87, 'testtt', 5, 'added a new report for: ', '2018-02-19 12:52:58', 2),
(88, 'testtt', 5, 'added a new report for: ', '2018-02-19 12:54:23', 2),
(89, 'testtt', 5, 'added a new report for: ', '2018-02-19 13:01:20', 2),
(90, 'testtt', 5, 'added a new report for: ', '2018-02-19 13:08:50', 2),
(91, 'sde33', 5, 'added a new report for: ', '2018-02-19 13:09:37', 2),
(92, 'sde33', 5, 'added a new report for: ', '2018-02-19 13:14:03', 2),
(93, 'sde33', 5, 'added a new report for: ', '2018-02-19 13:15:24', 2),
(94, 'sde33', 5, 'added a new report for: ', '2018-02-19 13:15:54', 2),
(95, 'wdsd', 5, 'added a new report for: ', '2018-02-19 13:16:55', 2),
(96, 'sde33', 5, 'added a new report for: ', '2018-02-19 13:48:07', 2),
(97, 'sde33', 5, 'added a new report for: ', '2018-02-19 14:01:26', 2),
(98, 'sde33', 5, 'added a new report for: ', '2018-02-19 14:08:16', 2),
(99, 'sde33', 5, 'added a new report for: ', '2018-02-19 14:10:18', 2),
(100, 'sde33', 5, 'added a new report for: ', '2018-02-19 14:10:57', 2),
(101, 'wdsd', 5, 'added a new report for: ', '2018-02-19 14:13:40', 2),
(102, 'wdsd', 5, 'added a new report for: ', '2018-02-19 14:14:34', 2),
(103, 'wdsd', 5, 'added a new report for: ', '2018-02-19 14:15:32', 2),
(104, 'wdsd', 5, 'added a new report for: ', '2018-02-19 15:54:49', 2),
(105, 'wdsd', 5, 'added a new report for: ', '2018-02-19 15:58:55', 2),
(106, 'wdsd', 5, 'has approved a report: ', '2018-02-19 16:32:47', 2),
(107, 'test43', 5, 'added a future event', '2018-02-20 06:04:16', 2),
(108, 'test43', 5, 'has verified an event: ', '2018-02-20 07:01:54', 2),
(109, 'test43', 5, 'has approved an event: ', '2018-02-20 07:05:05', 2),
(110, 'asd', 5, 'added a future event', '2018-02-20 08:07:58', 4),
(111, '1ow', 5, 'added a new report for: ', '2018-02-20 08:11:06', 2),
(112, 'asd', 5, 'has approved an event: ', '2018-02-20 10:02:57', 4),
(113, 'dsds', 5, 'added a future event', '2018-02-20 11:18:48', 2),
(114, 'dsds', 5, 'has verified an event: ', '2018-02-20 11:19:07', 2),
(115, 'dsds', 5, 'has approved an event: ', '2018-02-20 11:19:25', 2),
(116, 'dsds', 5, 'added a new report for: ', '2018-02-20 11:19:50', 2),
(117, 'TOTaf', 5, 'added a future event', '2018-02-20 12:06:10', 2),
(118, 'TOTaf', 5, 'has verified an event: ', '2018-02-20 12:06:54', 2),
(119, 'TOTaf', 5, 'has approved an event: ', '2018-02-20 12:07:39', 2),
(120, 'TOTaf', 5, 'added a new report for: ', '2018-02-20 12:09:00', 2),
(121, 'TOTaf', 5, 'added a new report for: ', '2018-02-20 12:09:39', 2),
(122, 'TOTaf', 5, 'has approved a report: ', '2018-02-20 12:27:13', 2),
(123, '1ow', 5, 'has approved a report: ', '2018-02-20 12:29:33', 2),
(124, 'wrgs', 5, 'added a future event', '2018-02-20 16:33:04', 2),
(125, 'wrgs', 5, 'edited a future event', '2018-02-20 16:33:18', 2),
(126, 'wrgs', 5, 'edited a future event', '2018-02-21 06:22:43', 2),
(127, 'wrgs', 5, 'has verified an event: ', '2018-02-21 06:22:50', 2),
(128, 'wrgs', 5, 'edited a future event', '2018-02-21 07:59:51', 2),
(129, 'testtt', 5, 'added a new report for: ', '2018-02-21 08:11:23', 2),
(130, 'testtt', 5, 'added a new report for: ', '2018-02-21 09:05:33', 2),
(131, 'wrgs', 5, 'edited a future event', '2018-02-21 09:27:21', 2),
(132, 'wrgs', 5, 'has verified an event: ', '2018-02-21 09:27:33', 2),
(133, 'sd', 5, 'added a new report for: ', '2018-02-21 09:28:36', 2),
(134, 'asd', 5, 'added a new report for: ', '2018-02-21 09:31:05', 4),
(135, 'sdf', 5, 'added a future event', '2018-02-21 09:54:17', 3),
(136, 'sd', 5, 'added a future event', '2018-02-21 09:54:33', 2),
(137, 'sdf', 5, 'has verified an event: ', '2018-02-21 09:55:07', 2),
(138, 'sdf', 5, 'has approved an event: ', '2018-02-21 09:58:10', 2),
(139, 'sd', 5, 'edited a future event', '2018-02-21 09:58:27', 2),
(140, 'sd', 5, 'has verified an event: ', '2018-02-21 09:58:41', 2),
(141, 'sdf', 5, 'added a new report for: ', '2018-02-21 09:59:15', 2),
(142, 'sd', 5, 'edited a future event', '2018-02-21 10:20:14', 2),
(143, 'sdf', 5, 'added a new report for: ', '2018-02-21 10:21:41', 2),
(144, 'sdf', 5, 'has approved a report: ', '2018-02-21 10:21:52', 2),
(145, 'sd', 5, 'has verified an event: ', '2018-02-21 11:29:32', 2),
(146, 'sd', 5, 'has approved an event: ', '2018-02-21 11:29:40', 2),
(147, 'sd', 5, 'added a new report for: ', '2018-02-21 11:30:47', 2),
(148, 'sd', 5, 'added a future event', '2018-02-21 11:36:09', 2),
(149, 'sd', 5, 'edited a future event', '2018-02-21 11:37:08', 2),
(150, 'sd', 5, 'has verified an event: ', '2018-02-21 11:37:19', 2),
(151, 'sd', 5, 'added a new report for: ', '2018-02-21 13:48:19', 2),
(152, 'sd', 5, 'added a new report for: ', '2018-02-21 14:18:26', 2),
(153, 'sd', 5, 'added a new report for: ', '2018-02-21 15:15:22', 2),
(154, 'sd', 5, 'added a new report for: ', '2018-02-21 15:17:10', 2),
(155, '23', 5, 'added a future event', '2018-02-22 07:39:49', 2),
(156, '23', 5, 'has verified an event: ', '2018-02-22 07:42:21', 2),
(157, '23', 5, 'has approved an event: ', '2018-02-22 07:43:22', 2),
(158, '23', 5, 'added a new report for: ', '2018-02-22 07:44:05', 2),
(159, '3', 5, 'added a future event', '2018-02-22 08:05:45', 2),
(160, '3', 5, 'has verified an event: ', '2018-02-22 08:14:09', 2),
(161, '3', 5, 'has approved an event: ', '2018-02-22 08:14:20', 2),
(162, '3', 5, 'added a new report for: ', '2018-02-22 08:14:40', 2),
(163, '3', 5, 'has approved a report: ', '2018-02-22 08:14:53', 2),
(164, 'adf', 5, 'added a future event', '2018-02-22 08:17:34', 2),
(165, 'adf', 5, 'edited a future event', '2018-02-22 08:18:24', 2),
(166, 'adf', 5, 'has verified an event: ', '2018-02-22 08:18:38', 2),
(167, 'adf', 5, 'edited a future event', '2018-02-22 08:20:32', 2),
(168, 'adf', 5, 'has verified an event: ', '2018-02-22 08:20:50', 2),
(169, 'adf', 5, 'has approved an event: ', '2018-02-22 08:21:00', 2),
(170, 'adf', 5, 'added a new report for: ', '2018-02-22 08:21:18', 2),
(171, 'Some title', 5, 'added a future event', '2018-02-22 11:06:40', 2),
(172, 'Some title', 5, 'has verified an event: ', '2018-02-22 11:08:04', 2),
(173, 'Some title', 5, 'edited a future event', '2018-02-22 11:10:25', 2),
(174, 'Some title', 5, 'has verified an event: ', '2018-02-22 11:10:32', 2),
(175, 'Some title', 5, 'has approved an event: ', '2018-02-22 11:10:39', 2),
(176, 'Some title', 5, 'added a new report for: ', '2018-02-22 11:11:17', 2),
(177, 'Some title', 5, 'has approved a report: ', '2018-02-22 11:12:08', 2),
(178, 'sd', 5, 'edited a future event', '2018-02-22 11:13:35', 2),
(179, 'def', 5, 'added a future event', '2018-02-22 11:14:29', 5),
(180, 'def', 5, 'edited a future event', '2018-02-22 11:14:43', 2),
(181, 'def', 5, 'has verified an event: ', '2018-02-22 11:15:23', 2),
(182, 'def', 5, 'has approved an event: ', '2018-02-22 11:15:43', 2),
(183, 'Brian event', 5, 'added a future event', '2018-02-27 14:24:03', 5),
(184, 'Ryan Event', 5, 'added a future event', '2018-02-27 14:24:47', 2),
(185, 'Osman Event', 5, 'added a future event', '2018-02-27 14:25:32', 1),
(186, 'Osman Event', 5, 'has verified an event: ', '2018-02-27 14:29:32', 1),
(187, 'Ryan Event', 5, 'has verified an event: ', '2018-02-27 14:29:53', 2),
(188, 'New Brian event', 5, 'edited a future event', '2018-02-27 14:30:29', 5),
(189, 'New Brian event', 5, 'has verified an event: ', '2018-02-27 14:31:10', 5),
(190, 'New Brian event', 5, 'has approved an event: ', '2018-02-27 14:31:58', 5),
(191, 'Ryan Event', 5, 'has approved an event: ', '2018-02-27 14:32:13', 2),
(192, 'Osman Event', 5, 'edited a future event', '2018-02-27 14:34:31', 1),
(193, 'New Brian event', 5, 'added a new report for: ', '2018-02-27 14:35:42', 5),
(194, 'Ryan Event', 5, 'added a new report for: ', '2018-02-27 14:36:19', 2),
(195, 'New Brian event', 5, 'has approved a report: ', '2018-02-27 14:38:39', 5),
(196, 'First event', 5, 'added a future event', '2018-02-27 16:31:38', 1),
(197, 'Second event', 5, 'added a future event', '2018-02-27 16:33:05', 2),
(198, 'Third event', 5, 'added a future event', '2018-02-27 16:33:28', 5),
(199, 'First event', 5, 'edited a future event', '2018-02-27 16:35:43', 1),
(200, 'First event', 5, 'has verified an event: ', '2018-02-27 16:36:36', 1),
(201, 'Second event', 5, 'has verified an event: ', '2018-02-27 16:36:50', 2),
(202, 'Third event', 5, 'edited a future event', '2018-02-27 16:37:44', 5),
(203, 'Third event', 5, 'has verified an event: ', '2018-02-27 16:37:57', 5),
(204, 'First event', 5, 'has approved an event: ', '2018-02-27 16:38:16', 1),
(205, 'Second event', 5, 'has approved an event: ', '2018-02-27 16:38:33', 2),
(206, 'First event', 5, 'added a new report for: ', '2018-02-27 16:39:39', 1),
(207, 'Second event', 5, 'added a new report for: ', '2018-02-27 16:42:34', 2),
(208, 'Second event', 5, 'has approved a report: ', '2018-02-27 16:43:02', 2);

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `event_id` int(11) NOT NULL,
  `eventtitle` varchar(1000) NOT NULL,
  `eventtopic` varchar(30) NOT NULL,
  `date_to_be_organized` timestamp NULL DEFAULT '0000-00-00 00:00:00',
  `region` varchar(300) NOT NULL,
  `town` varchar(300) NOT NULL,
  `logistics` varchar(2000) NOT NULL,
  `mode_of_outreach` varchar(300) NOT NULL,
  `audience_category` varchar(300) NOT NULL,
  `expected_audience_attendance` varchar(300) NOT NULL,
  `is_verified` int(10) NOT NULL DEFAULT '0',
  `is_approved` int(10) NOT NULL DEFAULT '0',
  `nonapproval_comments` varchar(150) NOT NULL,
  `verification_comments` varchar(2000) NOT NULL,
  `approved_comments` varchar(100) NOT NULL,
  `creator` int(10) NOT NULL,
  `verified_timestamp` varchar(30) NOT NULL,
  `approved_timestamp` varchar(30) NOT NULL,
  `is_reported` int(11) NOT NULL DEFAULT '0',
  `misc_reasons` varchar(150) NOT NULL,
  `deny_status` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`event_id`, `eventtitle`, `eventtopic`, `date_to_be_organized`, `region`, `town`, `logistics`, `mode_of_outreach`, `audience_category`, `expected_audience_attendance`, `is_verified`, `is_approved`, `nonapproval_comments`, `verification_comments`, `approved_comments`, `creator`, `verified_timestamp`, `approved_timestamp`, `is_reported`, `misc_reasons`, `deny_status`) VALUES
(49, 'sdf', 'sd', '2018-02-21 00:00:00', '2', 'sd', 'Pen(s),', 'Durbar,', 'Schools', '23', 1, 1, '', 'sd', 'sd', 5, '2018-02-21 10:55:07', '2018-02-21 10:58:10', 1, '', 0),
(50, 'sd', 'sd', '2018-02-17 00:00:00', '2', 'sd', 'Notepad(s),', 'Road Show,', 'Religious Bodies', '3', 1, 1, 'sd', 'sd', 'd', 5, '2018-02-21 12:29:32', '2018-02-21 12:29:40', 1, '', 1),
(51, 'sd', 'fdf', '2018-02-07 00:00:00', '2', 'ad', 'Bus(es),Sound System(s),', 'PowerPoint Presentation,One-on-one,Durbar,', 'Corporate', '33', 0, 0, 'sd', '', '', 5, '', '', 0, '', 0),
(52, '23', 'dfdsf', '2018-02-23 00:00:00', '2', 'adf', 'Mug(s),', 'Durbar,', 'Communities', '23', 1, 1, '', 'sds', '', 5, '2018-02-22 08:42:21', '2018-02-22 08:43:22', 0, '', 0),
(53, '3', 'sd', '2018-02-24 00:00:00', '2', 'ds', 'Sound System(s),', 'Road Show,', 'Corporate', '12', 1, 1, '', 'done', 'donneeee', 5, '2018-02-22 09:14:09', '2018-02-22 09:14:20', 1, '', 0),
(54, 'adf', 'adf', '2018-02-25 00:00:00', '2', 'ad', 'T-shirt(s),', 'Durbar,', 'Communities', '23', 1, 1, 'nopee', 'yess', 'yessss', 5, '2018-02-22 09:20:50', '2018-02-22 09:21:00', 0, '', 0),
(55, 'Some title', 'topics', '2018-02-23 00:00:00', '2', 'a town', 'Bus(es),Sound System(s),', 'PowerPoint Presentation,One-on-one,', 'Artisans', '33', 1, 1, 'no', 'ni', 'ni', 5, '2018-02-22 12:10:32', '2018-02-22 12:10:39', 1, '', 0),
(56, 'def', 'asas', '2018-02-25 00:00:00', '2', 'as', 'Bus(es),Sound System(s),Mug(s),', 'PowerPoint Presentation,One-on-one,Durbar,', 'Communities', '43', 1, 1, '', 'as', 'a', 20, '2018-02-22 12:15:23', '2018-02-22 12:15:43', 0, 'something', 0),
(57, 'New Brian event', 'Topics to be discussed', '2018-02-27 00:00:00', '5', 'Town', 'Bus(es),Sound System(s),', 'PowerPoint Presentation,One-on-one,', 'Religious Bodies', '1', 1, 1, 'this is rejection', 'third verify', 'first approve', 5, '2018-02-27 15:31:10', '2018-02-27 15:31:58', 1, '', 0),
(58, 'Ryan Event', 'topics', '2018-02-27 00:00:00', '2', 'Town2', 'T-shirt(s),Notepad(s),', 'Road Show,Durbar,', 'Communities', '2', 1, 1, '', 'this is the second verify', 'second approve', 5, '2018-02-27 15:29:53', '2018-02-27 15:32:13', 1, '', 1),
(59, 'Osman Event', 'topic3', '2018-02-27 00:00:00', '1', 'Town3', 'Bus(es),Sound System(s),Tape Measure(s),Towel(s),T-shirt(s),', 'PowerPoint Presentation,One-on-one,Small group meeting,', 'Corporate', '3', 0, 0, 'third reject', '', '', 5, '', '', 0, '', 0),
(60, 'First event', 'topics', '2018-02-27 00:00:00', '1', 'ashanti', 'Bus(es),Sound System(s),Pen(s),Towel(s),Mug(s),', 'PowerPoint Presentation,One-on-one,Durbar,Small group meeting,', 'Artisans', '12', 1, 1, '', 'first verify', 'approve first', 5, '2018-02-27 17:36:36', '2018-02-27 17:38:16', 1, '', 1),
(61, 'Second event', 'topic', '2018-02-27 00:00:00', '2', 'brong town', 'Bus(es),Sound System(s),', 'Road Show,Durbar,Small group meeting,', 'Corporate', '32', 1, 1, '', 'second verify', 'approve second', 5, '2018-02-27 17:36:50', '2018-02-27 17:38:33', 1, '', 0),
(62, 'Third event', 'topic', '2018-02-27 00:00:00', '5', 'Greater town', 'Bus(es),Sound System(s),Flyer(s),Pen(s),', 'PowerPoint Presentation,One-on-one,Durbar,', 'Schools', '23', 1, 2, 'denying again', '', '', 5, '', '', 0, '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `region`
--

CREATE TABLE `region` (
  `region_id` int(10) NOT NULL,
  `regionname` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `region`
--

INSERT INTO `region` (`region_id`, `regionname`) VALUES
(1, 'Ashanti'),
(2, 'Brong Ahafo'),
(3, 'Central'),
(4, 'Eastern'),
(5, 'Greater Accra'),
(6, 'Northern'),
(7, 'Upper East'),
(8, 'Upper West'),
(9, 'Volta'),
(10, 'Western');

-- --------------------------------------------------------

--
-- Table structure for table `reportmembers`
--

CREATE TABLE `reportmembers` (
  `report_members_id` int(10) NOT NULL,
  `event_id` int(10) NOT NULL,
  `role` varchar(20) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `reportmembers`
--

INSERT INTO `reportmembers` (`report_members_id`, `event_id`, `role`, `name`) VALUES
(71, 49, '', 'sd'),
(72, 49, '', 's'),
(73, 50, '', 'df'),
(74, 50, '', 'sd'),
(75, 50, '', 'sd'),
(76, 50, '', 'sd'),
(77, 50, '', 'sd'),
(78, 52, '', 'df'),
(79, 53, '', 'sd'),
(80, 54, '', 'sd'),
(81, 55, '', 'hg'),
(82, 55, '', 'kj'),
(83, 57, '', 'Brian Martey'),
(84, 57, '', ' Ryan Moujaled'),
(85, 58, '', 'Ryan Moujaled'),
(86, 58, '', ' Brian Martey'),
(87, 60, '', 'Ryan'),
(88, 60, '', ' Brian'),
(89, 61, '', 'Ryan'),
(90, 61, '', ' Brian');

-- --------------------------------------------------------

--
-- Table structure for table `reports`
--

CREATE TABLE `reports` (
  `report_id` int(11) NOT NULL,
  `event_id` int(10) NOT NULL,
  `team_challenges` varchar(1000) NOT NULL,
  `complaints_raised` varchar(1000) NOT NULL,
  `is_approved` int(10) NOT NULL,
  `verification_comments` varchar(2000) NOT NULL,
  `nonapproval_comments` varchar(150) NOT NULL,
  `event_summary` varchar(2000) NOT NULL,
  `picture_paths` mediumtext NOT NULL,
  `folder_paths` varchar(250) NOT NULL,
  `team_members` varchar(300) NOT NULL,
  `date_reported` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `verified_timestamp` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `reports`
--

INSERT INTO `reports` (`report_id`, `event_id`, `team_challenges`, `complaints_raised`, `is_approved`, `verification_comments`, `nonapproval_comments`, `event_summary`, `picture_paths`, `folder_paths`, `team_members`, `date_reported`, `verified_timestamp`) VALUES
(159, 49, 'sd', 'sd', 1, 'fg', '', 'sd', '[\"9uRzYv4.jpg\"]', '5_49', 's', '2018-02-21 10:21:41', '2018-02-21 11:21:52'),
(164, 50, 'sd', 'sd', 2, '', 'hi', 'sd', '[\"3.jpg\"]', '5_50', 'sd', '2018-02-21 15:17:10', '0000-00-00 00:00:00'),
(166, 53, 'df', 'ds', 1, 'doneee', '', 'df', '[\"1920x1080-px-global-warming-minimalism-1227340-wallhere.com.jpg\"]', '5_53', 'sd', '2018-02-22 08:14:40', '2018-02-22 09:14:53'),
(168, 55, 'dfsfsdf', 'sdfsdf', 1, 'ok', '', 'nn', '[\"skyback.psd\",\"titleimageback.jpg\"]', '5_55', 'hg,kj', '2018-02-22 11:12:08', '2018-02-22 12:12:08'),
(169, 57, 'some challenges1', 'some complaints1', 1, 'this report has been approved 1', '', 'some observations1', '[\"NCA.png\",\"NCA1.png\"]', '5_57', 'Brian Martey, Ryan Moujaled', '2018-02-27 14:38:39', '2018-02-27 15:38:39'),
(170, 58, 'some challenge 2', 'some complaints 2', 2, '', 'reject this report', 'some observation2', '[\"dbtreesPhotoxpress_9939515.jpg\",\"sky_stars_background_points_85061_3840x1200.jpg\"]', '5_58', 'Ryan Moujaled, Brian Martey', '2018-02-27 14:38:49', '0000-00-00 00:00:00'),
(171, 60, 'some challenges', 'some complaits', 2, '', 'denying report', 'some observations', '[\"NCA.png\",\"NCA1.png\"]', '5_60', 'Ryan, Brian', '2018-02-27 16:43:16', '0000-00-00 00:00:00'),
(172, 61, 'some challenges 2', 'some complaints 2', 1, 'approving the report', '', 'some observations 2', '[\"dbtreesPhotoxpress_9939515.jpg\",\"sky_background_with_sun1-.jpg\"]', '5_61', 'Ryan, Brian', '2018-02-27 16:43:02', '2018-02-27 17:43:02');

-- --------------------------------------------------------

--
-- Table structure for table `userlogs`
--

CREATE TABLE `userlogs` (
  `userlog_id` int(11) NOT NULL,
  `acted_id` int(11) NOT NULL,
  `acted_on_id` int(11) NOT NULL,
  `action` varchar(30) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `userlogs`
--

INSERT INTO `userlogs` (`userlog_id`, `acted_id`, `acted_on_id`, `action`, `date`) VALUES
(15, 3, 19, 'added', '2018-02-12 10:46:07'),
(16, 3, 20, 'added', '2018-02-13 13:42:44'),
(17, 3, 20, 'deactivated the user:', '2018-02-13 13:42:47'),
(18, 3, 20, 'activated the user:', '2018-02-13 13:43:12'),
(19, 3, 20, 'deactivated the user:', '2018-02-13 13:45:25'),
(20, 3, 20, 'activated the user:', '2018-02-13 13:46:11');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userid` int(100) NOT NULL,
  `firstname` varchar(300) NOT NULL,
  `lastname` varchar(300) NOT NULL,
  `email` varchar(300) NOT NULL,
  `password` varchar(300) NOT NULL,
  `region` int(10) NOT NULL,
  `level` varchar(300) NOT NULL,
  `status` enum('active','inactive') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userid`, `firstname`, `lastname`, `email`, `password`, `region`, `level`, `status`) VALUES
(1, 'Admin5', 'Account5', 'admin5@nca.org.gh', '26a91342190d515231d7238b0c5438e1', 2, '5', 'active'),
(2, 'Admin4', 'Account4', 'admin4@nca.org.gh', 'fc1ebc848e31e0a68e868432225e3c82', 1, '4', 'active'),
(3, 'Admin3', 'Account3', 'admin3@nca.org.gh', '32cacb2f994f6b42183a1300d9a3e8d6', 3, '3', 'active'),
(4, 'Admin2', 'Account2', 'admin2@nca.org.gh', 'c84258e9c39059a89ab77d846ddab909', 5, '2', 'active'),
(5, 'Admin1', 'Account1', 'brian.martey@nca.org.gh', 'e00cf25ad42683b3df678c61f42c6bda', 7, '1', 'active'),
(16, 'Brian ', 'Martey', 'bm@nca.org.gh', 'e00cf25ad42683b3df678c61f42c6bda', 2, '1', 'active'),
(17, 'Brian1', 'MArtey', 'bnmm@nca.org.gh', 'e00cf25ad42683b3df678c61f42c6bda', 2, '2', 'active'),
(18, 'BB', 'Guy', 'bnmm1@nca.org.gh', 'e00cf25ad42683b3df678c61f42c6bda', 1, '2', 'active'),
(19, 'daf', 'df', 'bnmm@nca.org.gh', 'c84258e9c39059a89ab77d846ddab909', 4, '2', 'active'),
(20, 'ryan', 'moujaled', 'ryan@nca.org.gh', '10c7ccc7a4f0aff03c915c485565b9da', 2, '1', 'active');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `audiences`
--
ALTER TABLE `audiences`
  ADD PRIMARY KEY (`aud_id`);

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`city_id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comment_id`);

--
-- Indexes for table `eventlogs`
--
ALTER TABLE `eventlogs`
  ADD PRIMARY KEY (`eventlog_id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`event_id`);

--
-- Indexes for table `region`
--
ALTER TABLE `region`
  ADD PRIMARY KEY (`region_id`);

--
-- Indexes for table `reportmembers`
--
ALTER TABLE `reportmembers`
  ADD PRIMARY KEY (`report_members_id`);

--
-- Indexes for table `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`report_id`);

--
-- Indexes for table `userlogs`
--
ALTER TABLE `userlogs`
  ADD PRIMARY KEY (`userlog_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `audiences`
--
ALTER TABLE `audiences`
  MODIFY `aud_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `city_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20432;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `comment_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `eventlogs`
--
ALTER TABLE `eventlogs`
  MODIFY `eventlog_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=209;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `event_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `region`
--
ALTER TABLE `region`
  MODIFY `region_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `reportmembers`
--
ALTER TABLE `reportmembers`
  MODIFY `report_members_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- AUTO_INCREMENT for table `reports`
--
ALTER TABLE `reports`
  MODIFY `report_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=173;

--
-- AUTO_INCREMENT for table `userlogs`
--
ALTER TABLE `userlogs`
  MODIFY `userlog_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userid` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
