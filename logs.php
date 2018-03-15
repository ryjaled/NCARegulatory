<?php
include_once("database.php");

	class logs extends database
	{

		/**
		* Creates a new constructor of the class
		*/
		function logs(){

		}

		/**
		* adds new user to the database
		* @param [all attributes needed to create a user]
		* @return boolean showing success or failure
		*/
		function addEventLog($eventtitle,$userid,$action,$region){

			$strQuery="insert into eventlogs set
							event_title='$eventtitle',
							user_id='$userid',
              action='$action',
							region='$region' ";

							// echo $strQuery;
			return $this->query($strQuery);
		}

    /**
		* adds new user to the database
		* @param [all attributes needed to create a user]
		* @return boolean showing success or failure
		*/
		function getEventLogs(){
			$strQuery="select * from eventlogs";
      	return $this->query($strQuery);
		}


		// /**
		// * get user id
		// * @param user's name
		// * @return user's Id
		// */
		// function getID($eventid){
		// 	$strQuery="Select ID from eventlogs where event_id = '$eventid'";
		// 	return $this->query($strQuery);
		// }
    //
    //





    /**
		* adds new user to the database
		* @param [all attributes needed to create a user]
		* @return boolean showing success or failure
		*/
		function addUserLog($actor,$actedon,$action){

			$strQuery="insert into userlogs set
							acted_id='$actor',
							acted_on_id='$actedon',
              action='$action' ";
							// echo $strQuery;
			return $this->query($strQuery);
		}

    /**
		* adds new user to the database
		* @param [all attributes needed to create a user]
		* @return boolean showing success or failure
		*/
		function getUserLogs(){
			$strQuery="select * from userlogs";
      	return $this->query($strQuery);
		}



		 /**
		* adds new user to the database
		* @param [all attributes needed to create a user]
		* @return boolean showing success or failure
		*/
		function addEventVerifyLog($eventtitle,$userid,$action,$region){
			
			$strQuery="insert into eventlogs set
							event_title='$eventtitle',
							user_id='$userid',
							action='$action',
							region='$region' ";

							// echo $strQuery;
			return $this->query($strQuery);
		}


						 /**
		* adds new user to the database
		* @param [all attributes needed to create a user]
		* @return boolean showing success or failure
		*/
		function addEventApproveLog($eventtitle,$userid,$action,$region){
			
			$strQuery="insert into eventlogs set
							event_title='$eventtitle',
							user_id='$userid',
							action='$action',
							region='$region' ";

							// echo $strQuery;
			return $this->query($strQuery);
		}

									 /**
		* adds new user to the database
		* @param [all attributes needed to create a user]
		* @return boolean showing success or failure
		*/
		function addReportLog($eventtitle,$userid,$action,$region){
			
			$strQuery="insert into eventlogs set
							event_title='$eventtitle',
							user_id='$userid',
							action='$action',
							region='$region' ";

							// echo $strQuery;
			return $this->query($strQuery);
		}



	}
?>
