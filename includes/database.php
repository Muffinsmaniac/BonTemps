<?php
    class DBHandler{        
        private $database;                
        
        //Connects to database during construction and checks so the connection did not fail.
        function __construct(){
            $this->database = new mysqli('localhost', 'admin', 'potatis', 'bontemp');      //For the local database.            
            //$this->database = new mysqli('studentmysql.miun.se', 'jeel2301', 'xqaegmme', 'jeel2301');
            if($this->database->connect_errno){
                die('Database failed to connect: ' . $this->database->connect_errno);            
            }                        
           
        }
        
        //Takes all entries from the database and prints them to the website.
        public function readData($type){           
            $sql = "SELECT * FROM products WHERE CategoryID = $type";
            if(!$result = $this->database->query($sql)){
	        die('Could not process the request!');
            }                       
            while($row = $result->fetch_assoc()){
                echo 
                "<article class=productBox><div class=productHeader>
                <h3>" . $row["Name"] . "</h3> <p>". $row["Price"]."</p></div>
                <p>". $row["Description"] ."</p>
                </article>";
            }                               
        }
        
        public function logIn($username,$password){
            $sql = "SELECT * FROM users WHERE username = '$username' AND passw = '$password'";
            if(!$result = $this->database->query($sql)){
                die('Could not process the request!');
            }
            if(mysqli_num_rows($result)){                
                return true;
            }
            else{
                return false;
            }            
        } 
        
        public function addProduct($productName, $description, $price, $category){
            $sql = $this->database->prepare("INSERT INTO products (Name, Description, Price, CategoryID)
            VALUES (?, ?, ?, ?)");
            $sql->bind_param("ssii", $productName, $description, $price, $category);         
            $sql->execute();
        }
             
    }   
    
?>