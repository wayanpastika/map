-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 04, 2018 at 02:41 PM
-- Server version: 10.1.22-MariaDB
-- PHP Version: 7.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reactapi`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_pakaian`
--

CREATE TABLE `tb_pakaian` (
  `id` int(11) NOT NULL,
  `jenis` enum('baju','celana','sepatu','topi','jaket','tas') NOT NULL,
  `nama` varchar(50) NOT NULL,
  `merek` varchar(40) NOT NULL,
  `harga` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_pakaian`
--

INSERT INTO `tb_pakaian` (`id`, `jenis`, `nama`, `merek`, `harga`) VALUES
(1, 'baju', 'Casual Rip Curl', 'Rip Curl', 250000),
(2, 'celana', 'Casual Levis', 'Levis', 300000),
(5, 'sepatu', 'Matchback Air 3000', 'Matcback', 180000),
(6, 'topi', 'QS Risk All', 'Quicksilver', 450000),
(7, 'jaket', 'Bomber R21', 'Myhem', 350000),
(8, 'tas', 'Hube 3000 Air ', 'Hube', 700000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_pakaian`
--
ALTER TABLE `tb_pakaian`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_pakaian`
--
ALTER TABLE `tb_pakaian`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
