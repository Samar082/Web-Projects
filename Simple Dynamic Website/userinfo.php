<?php
$con = mysqli_connect('localhost', 'root');

if($con){
    echo"Connection Successful";
}
else{
    echo"No successful";
}

mysqli_select_db($con, 'clickmoments');

$name = $_POST['name'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$comments = $_POST['comments'];

$query = "insert into userinfo ( name, mobile, email, comments) values ('$name', '$email', '$mobile', '$comments')";

mysqli_query($con, $query);

header('location:index.php');
?>