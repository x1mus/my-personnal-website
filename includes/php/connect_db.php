<?php
    try {
        $bdd = new PDO('mysql:host=localhost;dbname=maximilien_laenen_be_db;charset=utf8', 'root', '');
    } catch(Exception $e) {
        die('Erreur : '.$e->getMessage());
    }
?>