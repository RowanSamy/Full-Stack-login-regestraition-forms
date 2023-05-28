<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "registration";

$name=$_POST["name"];
$email=$_POST["email"];
$pass=$_POST["pass"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$query = "SELECT * from user where email='$email' ;" ;
$result = $conn->query($query) ;

if(mysqli_num_rows($result) > 0){
    echo "<script>alert('Email already exists');
    window.location.href='./registeration.html';  </script>";
}else{
    $sql = "INSERT INTO user (email , name, password )
    VALUES ( '$email','$name',MD5('$pass'))";   
    if ($conn->query($sql) === TRUE) {
        echo "<script>alert('Registration successfully');
        window.location.href='./login.html';  </script>";
    }
    else {
      echo "Error: " . $sql . "<br>" . $conn->error;
}}
$conn->close();
?>