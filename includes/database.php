<!--
Author: Jesper Elovsson, jeel2301
Datateknik
Webbprogrammering DT058G -->
<?php
    //The class that handles everyhing database related.
    class DBHandler{        
        private $database;                
        
        //Connects to database during construction and checks so the connection did not fail.
        function __construct(){
            //$this->database = new mysqli('localhost', 'admin', 'potatis', 'bontemp');      //For the local database.            
            $this->database = new mysqli('studentmysql.miun.se', 'jeel2301', 'xqaegmme', 'jeel2301');
            if($this->database->connect_errno){
                die('Database failed to connect: ' . $this->database->connect_errno);            
            }                        
           
        }
        
        //Takes all products from the database and prints them to the website.
        public function readData($type){           
            $sql = "SELECT * FROM products, category WHERE CategoryID = ID AND catName ='". $type."'";
            if(!$result = $this->database->query($sql)){
	        die('Could not process the request!');
            }                       
            while($row = $result->fetch_assoc()){
                echo 
                "<article class=productBox><div class=productHeader>
                <h3>" . $row["proName"] . "</h3> <h5>". $row["Price"]."</h5></div>
                <p>". $row["Description"] ."</p>
                </article>";
            }                               
        }
        
        //Checks if the username and password are present in the database
        public function logIn($username,$password){
            $sql = $this->database->prepare("SELECT * FROM users WHERE username = ? AND passw = ? ");
            $sql->bind_param("ss", $username,$password);
            $sql->execute();
            $result = $sql->get_result();            
            if(mysqli_num_rows($result)){                
                return true;
            }
            return false;          
        } 
        
        //Adds a product to the database
        public function addProduct($productName, $description, $price, $category){
            $sql = $this->database->prepare("INSERT INTO products (proName, Description, Price, CategoryID)
            VALUES (?, ?, ?, ?)");
            $sql->bind_param("ssii", $productName, $description, $price, $category);         
            $sql->execute();
        }

        //Deletes a product from the database
        public function deleteProduct($index){            
            $sql = "DELETE FROM products WHERE ProductID=" . $index;
            $this->database->query($sql);                        
        }

        //Lists all the product from the database, and gives the option to delete them (Admin only)
        public function adminListProducts(){
            $sql = "SELECT * FROM products";
            if(!$result = $this->database->query($sql)){
	        die('Could not process the request!');
            }                       
            while($row = $result->fetch_assoc()){
                echo "<li>" . $row["proName"] .
                "<form class='deletebutton'action='admin.php' method='POST'
                onsubmit= \"return confirm('Do you really want to delete this product?')\">
                 <input type='submit' value='Delete Product'>
                <input type='hidden' name='idNumber' value=" . $row["ProductID"] ." >
                </form></li>";                
            }             

        }

        //Disconnects from database
        public function disconnect(){
            $this->database->close();
        }
             
    }   
    
?>