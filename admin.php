<?php
    session_start();
    if(!isset($_SESSION['loggedin'])){header("location: login.php");}
    include("includes/header.php");
    include("includes/database.php");

    $database = new DBHandler();
    if($_SERVER["REQUEST_METHOD"] == "POST"){        
        if(!empty($_POST["productName"]) && !empty($_POST["description"]) && !empty($_POST["price"])){                      
            $database->addProduct($_POST["productName"],$_POST["description"], $_POST["price"], $_POST["category"]);
        }
        elseif(!empty($_POST["idNumber"])){
            $database->deleteProduct($_POST["idNumber"]);
        }               
    }        
?>
<div class = infoDiv>
<div class = leftContent>
    <form id="adminForm" action= "admin.php" method="post">    
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

<div class = rightContent>
    <h3>Productlist</h3>
    <ul id=productList>
        <?php $database->adminListProducts() ?>
    </ul>
</div>
</div>

<form action="includes/logout.php" method="post">
    <input type="submit" value="Logout">
</form>

</body>
</html>