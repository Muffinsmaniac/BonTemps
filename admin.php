<?php
    session_start();
    if(!isset($_SESSION['loggedin'])){header("location: login.php");}
    include("includes/header.php");

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        if(!empty($_POST["productName"]) && !empty($_POST["description"]) && !empty($_POST["price"])){                      
            $guestbook->addProduct($_POST["productName"],$_POST["description"], $_POST["price"]);
        }               
    }     
?>
<div>
    <form>
    </form>
</div>