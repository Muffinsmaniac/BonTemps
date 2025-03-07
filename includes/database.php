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
        public function readData(){           
            $sql = "SELECT * FROM products";
            if(!$result = $this->database->query($sql)){
	        die('Could not process the request!');
            }                       
            while($row = $result->fetch_assoc()){
                echo 
                "<article><div>
                <h3>" . $row["Name"] . "</h3> </div>
                <p>". $row["Description"] ."</p>
                </article>";
            }                               
        }       
        
             
    }   
    
?>