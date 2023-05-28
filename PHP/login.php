<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "registration";

//$name=$_POST["name"];
$email=$_POST["email"];
$pass=$_POST["pass"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$start=$conn->prepare("SELECT * FROM user WHERE email=?");
$start->bind_param("s",$email);
$start->execute();     //returned row
$start_result = $start->get_result();
if($start_result->num_rows > 0){
    $row=$start_result->fetch_assoc();   //get line kamel te2asem el satr
    if($row['password'] === MD5($pass)){
        echo "welcome ",$row["name"];
    } 
    else{
        echo "<script>alert('Password does not match');
        window.location.href='./login.html';  </script>";
    }
}
else{
    echo "<script>alert('Entered email not found');
    window.location.href='./login.html';  </script>";
}
$conn->close();
?>