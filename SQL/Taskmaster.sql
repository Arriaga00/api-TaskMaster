-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: taskmaster
-- ------------------------------------------------------
-- Server version	8.4.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id_folder` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (3,'gastos','2024-05-22 03:58:25','2024-05-21 22:58:25',2),(9,'proyecto integrador 4','2024-05-26 02:35:51','2024-05-26 02:35:51',3),(14,'grannd touring 2024','2024-06-06 22:33:54','2024-06-06 22:33:54',10),(15,'ingresos','2024-06-08 02:54:51','2024-06-08 02:54:51',2),(16,'testing de aplciacion','2024-06-08 03:56:29','2024-06-08 03:56:29',11),(17,'ideas ','2024-06-08 04:12:48','2024-06-08 04:12:48',11),(18,'arreglos faltantes','2024-06-09 00:36:43','2024-06-09 00:36:43',13);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `folders`
--

DROP TABLE IF EXISTS `folders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `folders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id_user` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `folders`
--

LOCK TABLES `folders` WRITE;
/*!40000 ALTER TABLE `folders` DISABLE KEYS */;
INSERT INTO `folders` VALUES (2,'presupuesto','2024-05-24 16:17:45','2024-06-08 03:42:14',2),(3,'Enyoi','2024-05-25 23:50:34','2024-05-25 23:50:34',1),(10,'juegos','2024-05-26 02:34:22','2024-06-08 03:53:30',1),(11,'Principal','2024-06-06 23:11:56','2024-06-06 23:11:56',1),(13,'Principal','2024-06-09 00:36:05','2024-06-09 00:36:05',7);
/*!40000 ALTER TABLE `folders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task`
--

DROP TABLE IF EXISTS `task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `task` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_user` int NOT NULL,
  `title` varchar(45) NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `status` enum('pending','done','cancelled') NOT NULL,
  `priority` enum('low','medium','high','urgent') DEFAULT NULL,
  `tag` varchar(45) DEFAULT NULL,
  `due_date` date DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id_categories` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task`
--

LOCK TABLES `task` WRITE;
/*!40000 ALTER TABLE `task` DISABLE KEYS */;
INSERT INTO `task` VALUES (5,1,'eliminar los folders','en el span X eliminar el folders y que elimine tambien las task relacionadas  la categortia','done','urgent',NULL,'2024-06-08','2024-06-04 00:04:59','2024-06-08 03:59:28',9),(6,1,'Validar el formulario createTask','Muchos errores a la hora de enviar el formulario para crear la tarea\n- ya fucniona correctamente ','cancelled','urgent',NULL,'2024-06-05','2024-06-06 00:41:51','2024-06-07 19:05:08',9),(7,1,'Validar la creacion de las categorias','cuando se envia la categoria se crea pero no se muestra en el front \n\n-----------------------------\nya se pudo arreglar el fetch para que no se reinicie la pagina pero aun falta el ','done','high',NULL,'2024-06-08','2024-06-06 01:07:00','2024-06-07 18:15:23',9),(8,1,'Validar la creacion del folder','se crea pero no se renderiza en el front\n\n-----------------\nEl folder se crea correctamente solo falta que el input se reinicie cuando se hace el oBlur','done','high',NULL,'2024-06-05','2024-06-06 01:09:50','2024-06-07 18:47:05',9),(9,1,'Cambiando el create task a modal','aun no funciona correctamente el icono dle modal','done','medium',NULL,'2024-06-05','2024-06-06 03:30:39','2024-06-07 18:33:17',9),(10,1,'Crear recuperacion de contraseña','-Crear el codigo en el back end con resend y crear su ruta\n - en el front end crear una ruta con react-router-dom para actualizar la contraseña del usuario','pending','urgent',NULL,'2024-06-08','2024-06-07 19:24:26','2024-06-08 04:03:05',9),(11,2,'Gastos fijos','-servicios\n-arriendo\n-mercado\n-gasolina\n-salidas los fines de semana\n-hijo','done','medium',NULL,'2024-06-07','2024-06-08 02:51:14','2024-06-08 02:56:57',3),(12,1,'icono de editar usuario ','Se debe hacer un botón funcional para editar el nombre y contraseña del usuario, por medio de una modal o directamente en el popover ','pending','high',NULL,'2024-06-08','2024-06-08 03:59:17','2024-06-08 04:03:10',16),(13,1,'Cambios menores de la aplicacion','- que no se refresque la pagina cuando se guarda una tarea \n- organizar los filtros del estado para cuando este en focus cambie el estilo\n- verificar el login cuando hay un error\n','pending','medium',NULL,'2024-06-07','2024-06-08 04:10:17','2024-06-08 04:10:17',16),(14,7,'Tarjeta user','Organizar la caja, se desborda el email','pending','medium',NULL,'2024-06-08','2024-06-09 00:38:04','2024-06-09 00:38:04',18);
/*!40000 ALTER TABLE `task` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `names` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  `confirm_password` varchar(45) NOT NULL,
  `blocked` tinyint DEFAULT NULL,
  `failed_login` int DEFAULT NULL,
  `last_failed_login` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Juan Antonio González','juan@gmail.com','$2a$10$C2wvfLLCTGWYLJSPUVhDzu7LvaNcKBRvAqj9nvLyvK2KPShAKRPHm','123456',0,2,'2024-06-02 03:56:09','2024-05-21 23:07:38','2024-06-02 03:56:09'),(2,'carlos urrego alzate','carlos@gmail.com','$2a$10$/K4LCMFnPJaSY1JLaE/j1O4dmHJxSbFarxWoa5f5V0lR2gM3urtyO','carlos12',0,2,'2024-05-27 02:07:49','2024-05-22 17:34:29','2024-06-08 22:44:27'),(7,'Andres Arriaga','andresfelipearriaga@gmail.com','$2a$10$NUhTYC.E3fU.UkQkWdOv2ONzGx2MCpihcuLQoN1svgJH3/hxblNfi','Felipe123',0,0,'2024-06-08 22:49:24','2024-06-08 23:12:47','2024-06-09 00:35:12');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-20 12:30:59
