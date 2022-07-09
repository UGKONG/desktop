-- --------------------------------------------------------
-- 호스트:                          localhost
-- 서버 버전:                        10.4.24-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  12.0.0.6468
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- 테이블 desktop.tn_item 구조 내보내기
CREATE TABLE IF NOT EXISTS `tn_item` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `CURRENT_ID` int(11) DEFAULT NULL COMMENT '부모ID',
  `TYPE` int(11) DEFAULT NULL COMMENT '1: 폴더 / 2: 모달 / 3: 링크 / 4: 파일',
  `NAME` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '이름',
  `SIZE` int(11) DEFAULT NULL COMMENT '사이즈',
  `EXT` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '확장자',
  `URL` varchar(2000) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '링크',
  `MODIFY_DATE` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '수정일',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 테이블 데이터 desktop.tn_item:~8 rows (대략적) 내보내기
REPLACE INTO `tn_item` (`ID`, `CURRENT_ID`, `TYPE`, `NAME`, `SIZE`, `EXT`, `URL`, `MODIFY_DATE`) VALUES
	(1, 0, 1, '프로젝트', NULL, NULL, NULL, '2022-07-09 17:21:58'),
	(2, 0, 2, '테스트 모달', NULL, NULL, NULL, '2022-07-09 17:12:57'),
	(3, 0, 3, '테스트 링크', NULL, NULL, 'https://naver.com', '2022-07-09 15:19:11'),
	(4, 1, 3, '폴더 내부 링크', NULL, NULL, 'https://google.com', '2022-07-09 15:20:02'),
	(5, 1, 1, '내부 폴더', NULL, NULL, NULL, '2022-07-09 15:20:02'),
	(6, 1, 2, '내부 모달', NULL, NULL, NULL, '2022-07-09 17:35:02'),
	(8, 5, 3, '네이버', NULL, NULL, 'https://naver.com', '2022-07-09 17:44:50'),
	(9, 5, 4, '노션 설치 파일', NULL, NULL, 'https://www.notion.so/desktop/windows/download', '2022-07-09 17:52:21');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
