<?php
	$name = $_POST['name'];
	$mail = $_POST['mail'];
    $subject = $_POST['subject'];
	$message = $_POST['message'];


	$conn = new mysqli('localhost','root','','feedback');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into feedback(name, mail, subject, message) values(?, ?, ?, ?)");
		$stmt->bind_param("ssss", $name, $mail, $subject, $message);
        //s means the string i-integer, d-double
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successful...";
		$stmt->close();
		$conn->close();
	}
?>