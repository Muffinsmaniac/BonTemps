<!--
Author: Jesper Elovsson, jeel2301
Datateknik
Webbprogrammering DT058G

Creates a handle to the database and retrives products. -->
<?php 
    include("database.php");
    $products = new DBHandler();    
    $products->readData($_GET['type']);
    $products->disconnect();    
?>