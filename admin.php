<?php
    session_start();
    if(!isset($_SESSION['loggedin'])){header("location: login.php");}
    include("includes/header.php");
    include("includes/database.php");

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $database = new DBHandler();
        if(!empty($_POST["productName"]) && !empty($_POST["description"]) && !empty($_POST["price"])){                      
            $database->addProduct($_POST["productName"],$_POST["description"], $_POST["price"], $_POST["category"]);
        }               
    }     
?>
<div>
    <form name="addForm" action= "admin.php" method="post">    
        <input type="radio" name="category" value=1 required>
        <label for="bread">Bread</label><br>
        <input type="radio" name="category" value=3>
        <label for="pastry">Pastry</label><br>
        <input type="text" name="productName" placeholder="Name for product" required>
        <label for="productName">Product name</label><br>        
        <input type="text" name="price" placeholder="Price" required>
        <label for="price">Product price</label><br>
        <label for="description">Description</label><br>      
        <textarea rows=7 cols=40 name="description" required> </textarea>        
        <input type="submit" value="Add product">
    </form>
</div>

<form action="includes/logout.php" method="post">
    <input type="submit" value="Logout">
</form>


</body>
</html>