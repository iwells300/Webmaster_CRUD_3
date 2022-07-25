-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: concesionaria
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `contacto`
--

DROP TABLE IF EXISTS `contacto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contacto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `mensaje` text NOT NULL,
  `fecha` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contacto`
--

LOCK TABLES `contacto` WRITE;
/*!40000 ALTER TABLE `contacto` DISABLE KEYS */;
INSERT INTO `contacto` VALUES (12,'Mario','mario@gmail.com','Hola\r\nQuisiera información sobre un plan para comprar un Ford Focus.\r\n\r\nGracias\r\n\r\nMario\r\n\r\n','julio 24º 2022, 10:30 pm'),(13,'Florencia','florencia@hotmail.com','Hola\r\nPodrian ponerse en contacto conmigo? Quisiera vender un Ford fiesta modelo 96.\r\n\r\nSaludos\r\n\r\nFlorencia','julio 24º 2022, 10:33 pm'),(14,'Ivan','ivan@gmail.com','Esto es un mensaje de prueba \r\ndel formulario de contacto','julio 24º 2022, 10:48 pm');
/*!40000 ALTER TABLE `contacto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleados`
--

DROP TABLE IF EXISTS `empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empleados` (
  `id_emp` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `trabajo` varchar(50) NOT NULL,
  `edad` int NOT NULL,
  `salario` int NOT NULL,
  `mail` varchar(50) NOT NULL,
  PRIMARY KEY (`id_emp`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleados`
--

LOCK TABLES `empleados` WRITE;
/*!40000 ALTER TABLE `empleados` DISABLE KEYS */;
INSERT INTO `empleados` VALUES (1,'Juan','Hagan','Mecanico',32,120000,'juan_hagan@bignet.com'),(2,'Gonzalo','Pillai','Jefe Mecanico',32,110000,'g_pillai@bignet.com'),(3,'Ana','Dharma','Mecanico',27,90000,'ana@bignet.com'),(4,'Maria','Anchor','Administrativo',26,85000,'mary@bignet.com'),(5,'Alfred','Fernandez','Mecanico',31,75000,'af@bignet.com'),(6,'Juan','Agüero','Mecanico',36,85000,'juan@bignet.com'),(7,'Eduardo','Sacan','Administrativo',25,85000,'eddi@bignet.com'),(8,'Alejandro','Nanda','Mecanico',32,70000,'alenanda@bignet.com'),(9,'Hernan','Rosso','Mecanico',33,90000,'hernan@bignet.com'),(10,'Pablo','Simon','Administrativo',43,85000,'ps@bignet.com'),(11,'Arturo','Hernandez','Mecanico',32,75000,'arturo@bignet.com'),(12,'Jimena','Cazado','Jefe Mecanico',32,110000,'jimena@bignet.com'),(13,'Roberto','Luis','Mecanico',35,100000,'roberto@bignet.com'),(14,'Daniel','Gutierrez','Mecanico',34,900000,'daniel@bignet.com'),(15,'Miguel','Harper','Ejecutivo de ventas',36,120000,'miguel@bignet.com'),(16,'Monica','Sanchez','Ejecutivo de ventas',30,90000,'monica@bignet.com'),(17,'Alicia','Simlai','Ejecutivo de ventas',27,70000,'alicia@bignet.com'),(18,'Jose','Iriarte','Ejecutivo de ventas',27,72000,'jose@bignet.com'),(19,'Sabrina','Allende','Gerente de Sucursal',32,200000,'sabrina@bignet.com'),(21,'Mariano','Dharma','Presidente',28,300000,'mariano@bignet.com');
/*!40000 ALTER TABLE `empleados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `novedades`
--

DROP TABLE IF EXISTS `novedades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` varchar(250) NOT NULL,
  `cuerpo` text NOT NULL,
  `boton` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `novedades`
--

LOCK TABLES `novedades` WRITE;
/*!40000 ALTER TABLE `novedades` DISABLE KEYS */;
INSERT INTO `novedades` VALUES (27,'3 y 6 cuotas sin interes','Nuevo!','Desde Agosto llévate tu 0k en cuotas a sola firma, en 3 y 6 cuotas sin interés.',1),(43,'Nueva Ford Ranger','Pedí la tuya','Llega a nuestros concesionarios la nueva Pick up del país.\r\nMotor nuevo 4.6 e inyección multipunto.\r\nSistema onboard.\r\nDigitación neumática en las cuatro ruedas.\r\nY mucho mas...\r\nVeni a conocerla, tenemos promociones para las primeras unidades.',1),(44,'Nueva sucursal Cordoba','Abre en Agosto','En Agosto abrimos una nueva sucursal de concesionarias Silver s.a. en la ciudad de Córdoba.\r\nCerca de 800 m2 de showroom, servicio de usados y playa exclusiva para Test Drive.\r\nNo te la pierdas.\r\nDesde Septiembre en Av. Figueroa Alcorta 246.\r\nTe esperamos!',0);
/*!40000 ALTER TABLE `novedades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'ivan','e10adc3949ba59abbe56e057f20f883e'),(2,'flavia','81dc9bdb52d04dc20036dbd8313ed055');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'concesionaria'
--

--
-- Dumping routines for database 'concesionaria'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-24 23:40:01
