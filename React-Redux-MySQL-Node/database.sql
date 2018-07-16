CREATE TABLE `message` (
  `message_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `message_content` longtext,
  `sender` varchar(50),
  `message_sent_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`message_id`)
);