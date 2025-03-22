<!--
Author: Jesper Elovsson, jeel2301
Datateknik
Webbprogrammering DT058G

Unsets and destroys a session when the admin logs out. -->
<?php
session_start();
session_unset();
session_destroy();
header("location: ../login.php");
?>