<?php
include_once("database.php");

	class users extends database
	{

		/**
		* Creates a new constructor of the class
		*/
		function users(){

		}

		/**
		 * logs the user in, given accurate credentials
		* @param: user's login credentials
		* @return: boolean based on success or failure
		*/
		function login($email,$password){
			$strQuery = "Select * from users where email = '$email' and password = MD5('$password') and status='active'";

			$data = $this->query($strQuery);
			$result=$this->fetch();
			if($result=="")
			{
			$result=false;
			}

			return $result;
		}

		/**
		* adds new user to the database
		* @param [all attributes needed to create a user]
		* @return boolean showing success or failure
		*/
		function addNewUser($firstname,$lastname,$email,$password,$region,$level){
			$strQuery="insert into users set
							firstname='$firstname',
							lastname='$lastname',
							email='$email',
							password=MD5('$password'),
							region='$region',
							level='$level' ";
			return $this->query($strQuery);
		}

		function deleteUser($userid){
			$strQuery="update users set status='inactive' where userid='$userid' ";
			return $this->query($strQuery);
		}

		function reactivateUser($userid){
			$strQuery="update users set status='active' where userid='$userid' ";
			return $this->query($strQuery);
		}

		function getUser($id){
			$strQuery="select * from users where userid='$id'";
			return $this->query($strQuery);
		}

		/**
		* get user id
		* @param user's name
		* @return user's Id
		*/
		function getID($userName){
			$strQuery="Select userid from users where firstname = '$userName'";
			return $this->query($strQuery);
		}

		function getUsersByRegion($region){
			$strQuery="SELECT userid,firstname,lastname from users where region = '$region' AND level < '2'";
      	return $this->query($strQuery);
		}

		function updatepassword($id, $password){
			$strQuery="update users set password=MD5('$password') where userid='$id'";
			return $this->query($strQuery);
		}


	}
?>
