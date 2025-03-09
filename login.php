<?php
session_start();
include("includes/header.php");
include("includes/database.php");


if($_SERVER["REQUEST_METHOD"] == "POST" ){ //Only goes here if sent here by a POST method.
    $username = $_POST["username"];
    $password = $_POST["password"];
    $db = new DBHandler();
    if($db->logIn($username,$password)){       
        $_SESSION['loggedin'] = true;        
        header("location: admin.php");
    }
    else{
        header("location: login.php");}}
?>

<div id="loginDiv"  >
    <h3>Log in</h3>
    <form action="login.php" method="POST">
    <div class = inputContainer>
        <i class="material-icons">person</i>        
        <input type="text" name="username" placeholder= "Your name">
    </div>
    <div class = inputContainer>
        <i class="material-icons">key</i>  
        <input type="password" name="password" placeholder="Password"><br>
    </div>
      <input type="submit">
    </form>
</div>


<?php include("Includes/footer.php"); ?>
