<?php
/** written and edited by Brian Martey 
*/
header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
require_once("PHPMailer-master/class.phpmailer.php");
require 'PHPMailer-master/PHPMailerAutoload.php';
	
class emails{
	function emails(){
	}

	function denyemail($title,$date,$email){
		//Email portion of the code
		$account="nca.outreach.gh@gmail.com";
		$password="NCAUser2018";
		$from="nca.outreach.gh@gmail.com";
		$from_name="Outreach Platform";
		$subject="Outreach Report Denial";
		$message="The Outreach Report Recieved for <b>".$title."</b> dated for <b>".$date."</b> was Rejected.<br> Please view in the Application</a>.<br> Thank you. ";

		$mail = new PHPMailer;
		$mail->IsSMTP();
		$mail->CharSet = 'UTF-8';
	    $mail->Host = "smtp.gmail.com";
		$mail->SMTPAuth= true;
		$mail->Port = 465; //587;
		$mail->Username= $account;
		$mail->Password= $password;
		$mail->SMTPSecure = 'ssl';// 'tls';
		$mail->From = $from;
	    $mail->FromName= $from_name;
		$mail->addAddress($email);	  
		$mail->isHTML(true);                                 
		$mail->Subject = $subject;
		$mail->Body    = $message;

		if(!$mail->send()) {
		    echo 'Message could not be sent.';
		    echo 'Mailer Error: ' . $mail->ErrorInfo;
		} else {
		    echo 'Message has been sent. ';
		}
	}

}
?>