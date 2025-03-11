<?php 
    include("database.php");
    $products = new DBHandler();    
    $products->readData($_GET['type']);    
?>