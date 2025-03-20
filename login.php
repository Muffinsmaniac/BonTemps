<!-- Log in page in order to reach the admin part of the site -->
<?php
session_start();
include("includes/header.php");
include("includes/database.php");


if($_SERVER["REQUEST_METHOD"] == "POST" ){ //Only goes here if sent here by a POST method.
    if(!empty($_POST["username"]) && (!empty($_POST["password"]))){
    $username = $_POST["username"];
    $password = $_POST["password"];
    $db = new DBHandler();
    if($db->logIn($username,$password)){       
        $_SESSION['loggedin'] = true;        
        header("location: admin.php");
    }
    else{
        header("location: login.php");}}
    }    
?>

<div id="loginDiv"  >
    <h3>Log in</h3>
    <form action="login.php" method="POST">
    <div class = inputContainer>
        <label for="username">Username</label><br>
        <em class="material-icons">person</em>                  
        <input type="text" name="username" id="username" placeholder= "Your name">                     
    </div>
    <div class = inputContainer>
        <label for="password">Password</label><br>
        <em class="material-icons">key</em>               
        <input type="password" name="password" id="password" placeholder="Password">
        
    </div>
      <input type="submit" value="Login">
    </form>
</div>



