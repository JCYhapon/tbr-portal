<?php 

include_once("db_connection.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);
    
    $name = trim($request->name);
    $password = mysqli_real_escape_string($mysqli, trim($request->password));
    $email = mysqli_real_escape_string($mysqli, trim($request->email));

    $sql = "INSERT INTO users(name,password,email) VALUES ('$name','$password','$email')";

    if($mysqli->query($sql)) {
        $data = array('message'=>'success');
        echo json_encode($data);
    }
    else{
        $data = array('message'=>'failed');
        echo json_encode($data);
    }
}

?> 