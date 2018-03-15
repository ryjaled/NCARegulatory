<?php
	include_once("database.php");

	class events extends database
	{

		/**
		* Creates a new constructor of the class
		*/
		function events(){
		}

		function addComments($event_id,$comment,$action,$comment_type,$commenter_id){
			$strQuery="insert into comments set event_id='$event_id',comment='$comment',action='$action',comment_type='$comment_type',commenter_id='$commenter_id' ";
			return $this->query($strQuery);
		}

		function addTeamMembers($event_id,$name){
			$strQuery="insert into reportmembers set
							event_id='$event_id',
							name='$name' ";

			return $this->query($strQuery);
		}	

		function addNewReportEventUpdate($event_id,$value){

			$strQuery="update events set is_reported='$value',deny_status='0' where event_id='$event_id' ";
			return $this->query($strQuery);
		}

		function addNewEvent($eventtitle,$topic,$date,$audience,$expected_audience_attendance,$region,$town,$logistics,$mode_of_outreach,$reporter){

			$strQuery="insert into events set
							eventtitle='$eventtitle',
							eventtopic='$topic',
							date_to_be_organized='$date',
							audience_category='$audience',
							expected_audience_attendance='$expected_audience_attendance',
							region='$region',
							town='$town',
							logistics='$logistics',
							mode_of_outreach='$mode_of_outreach',
							creator='$reporter' ";

			return $this->query($strQuery);
		}

		function addNewReport($event_id,$challenges,$complaints,$summary,$picpath,$foldpath,$teammembers){

			$strQuery="insert into reports set
							event_id='$event_id',
							team_challenges='$challenges',
							complaints_raised='$complaints',
							is_approved=0,
							verification_comments='',
							event_summary='$summary',
							team_members='$teammembers',
							picture_paths='$picpath',
							folder_paths='$foldpath' ";
			return $this->query($strQuery);
		}

		function deleteEvent($eventid){
			$strQuery="delete from events where event_id='$eventid' ";
			return $this->query($strQuery);
		}

		function deleteReport($reportid){
			$strQuery="delete from reports where report_id='$reportid' ";
			return $this->query($strQuery);
		}

		function deleteReportwithEventid($eventid){
			$strQuery="delete from reports where event_id='$eventid' ";
			return $this->query($strQuery);
		}

		function deleteTeamMembers($eventid){
			$strQuery="delete from reportmembers where event_id='$eventid' ";
			return $this->query($strQuery);
		}

		function denyEvent($eventid,$comments,$level){

			if ($level == 2) {
				$strQuery="update events set is_verified='2', is_approved='0',verification_comments='',approved_comments='',verified_timestamp='',approved_timestamp='', nonapproval_comments='$comments' where event_id='$eventid'";
			}elseif ($level == 3) {
				$strQuery="update events set is_approved='2',verification_comments='',approved_comments='',verified_timestamp='',approved_timestamp='', nonapproval_comments='$comments' where event_id='$eventid'";
			}

			return $this->query($strQuery);
		}

		function denyReport($reportid,$comments){

				$strQuery="update reports set is_approved='2', verification_comments='',verified_timestamp='0000-00-00 00:00:00',nonapproval_comments='$comments' where report_id='$reportid'";

			return $this->query($strQuery);
		}

		function denyNewReportEventUpdate($event_id){

			$strQuery="update events set deny_status='1' where event_id='$event_id' ";
			return $this->query($strQuery);
		}

		function editEvent($eventtitle,$topic,$date,$audience,$expected_audience_attendance,$region,$town,$logistics,$mode_of_outreach,$reporter,$eventid){

			$strQuery="update events set
							eventtitle='$eventtitle',
							eventtopic='$topic',
							date_to_be_organized='$date',
							audience_category='$audience',
							expected_audience_attendance='$expected_audience_attendance',
							region='$region',
							town='$town',
							logistics='$logistics',
							mode_of_outreach='$mode_of_outreach',
							is_verified='0',
							is_approved='0',
							creator='$reporter' 
							where event_id='$eventid'";

			return $this->query($strQuery);
		}

		function editReport($event_id,$challenges,$complaints,$verifiedComments,$summary,$picpath,$foldpath,$reportid){

			$strQuery="update reports set
							event_id='$event_id',
							team_challenges='$challenges',
							complaints_raised='$complaints',
							is_approved=0,
							verification_comments='$verifiedComments',
							event_summary='$summary',
							picture_paths='$picpath',
							folder_paths='$foldpath' 
							where report_id='$reportid'";

			return $this->query($strQuery);
		}

		function getAudiences(){
			$strQuery="select * from audiences";
      	return $this->query($strQuery);
		}

		function getEvents(){
			$strQuery="select * from events where is_approved =1";
      	return $this->query($strQuery);
		}

    	function getAnEvent($eventid){
			$strQuery="SELECT e.approved_timestamp,e.audience_category,u.firstname,u.lastname,e.date_to_be_organized,e.event_id,e.eventtitle,e.eventtopic,e.expected_audience_attendance,e.is_approved,e.is_verified,e.logistics,e.mode_of_outreach,r.regionname,e.region,e.creator,e.town,e.approved_comments,e.verification_comments,e.verified_timestamp,e.nonapproval_comments,e.is_reported,e.deny_status FROM events as e inner join region as r on r.region_id = e.region inner join users as u on u.userid = e.creator where event_id = '$eventid'";
      	return $this->query($strQuery);
		}

		function getComments($event_id){
			
			$strQuery="select c.event_id,c.comment,action,c.comment_type,c.commenter_id,c.action_date,u.firstname,u.lastname from comments as c inner join users as u on u.userid = c.commenter_id where event_id='$event_id'";
      	return $this->query($strQuery);
		}

		function getRegions(){
			$strQuery="select * from region";
      	return $this->query($strQuery);
		}

		function getDashRegionFigures($fdate=false,$ldate=false){
			
			$strQuery="select r.regionname as regname, count(e.region) as figures, e.region from events as e inner join region as r on r.region_id = e.region inner join reports as u on u.event_id = e.event_id where e.is_approved = 1 and u.is_approved = 1 ";
			if(($fdate!=false) && ($ldate!=false)){
				$strQuery.="and e.date_to_be_organized BETWEEN '$fdate' and '$ldate' ";
			}
			$strQuery.="group by e.region order by r.regionname ASC";
      	return $this->query($strQuery);
		}

		function getDashTotalAttendees($fdate=false,$ldate=false,$region=false){
			$strQuery="select sum(e.expected_audience_attendance) as total from events as e inner join reports as r on r.event_id = e.event_id where e.is_approved = 1 and r.is_approved = 1 ";
			if($region!=false){
				$strQuery.="and e.region = '$region' ";
			}
			if(($fdate!=false) && ($ldate!=false)){
				$strQuery.="and e.date_to_be_organized BETWEEN '$fdate' and '$ldate' ";
			}
			return $this->query($strQuery);
		}

		function getDashTotalEvents($fdate=false,$ldate=false,$region=false){
			$strQuery="select count(e.region) as total from events as e inner join reports as r on r.event_id=e.event_id where e.is_approved = 1 and r.is_approved = 1 ";
			if($region!=false){
				$strQuery.="and e.region = '$region' ";
			}
			if(($fdate!=false) && ($ldate!=false)){
				$strQuery.="and e.date_to_be_organized BETWEEN '$fdate' and '$ldate' ";
			}
			return $this->query($strQuery);
		}

		function getDashGraphEventData($fdate=false,$ldate=false){
			$strQuery="select count(DATE(e.date_to_be_organized)) as totals, DATE(e.date_to_be_organized) as date, e.date_to_be_organized from events as e inner join reports as r on r.event_id = e.event_id where e.is_approved = 1 and r.is_approved = 1 ";
			if(($fdate!=false) && ($ldate!=false)){
				$strQuery.="and e.date_to_be_organized BETWEEN '$fdate' and '$ldate' ";
			}
			$strQuery.= "group by DATE(e.date_to_be_organized)";
			return $this->query($strQuery);
		}

		function getDashPieEventData($fdate=false,$ldate=false){
			$strQuery="select count(e.audience_category) as totals, e.audience_category as audience from events as e inner join reports as r on r.event_id=e.event_id where e.is_approved = 1 and r.is_approved = 1 ";
			if(($fdate!=false) && ($ldate!=false)){
				$strQuery.="and e.date_to_be_organized BETWEEN '$fdate' and '$ldate' ";
			}
			$strQuery.="group by e.audience_category";
			return $this->query($strQuery);
		}

		function getDashRegionNameData($fdate=false,$ldate=false){
			$strQuery="select p.region as regnum, r.regionname as name from events as p inner join region as r on r.region_id = p.region inner join reports as u on u.event_id = p.event_id where p.is_approved = 1 and u.is_approved = 1 ";
			if(($fdate!=false) && ($ldate!=false)){
				$strQuery.="and p.date_to_be_organized BETWEEN '$fdate' and '$ldate' ";
			}
			$strQuery.="group by p.region ORDER by r.regionname asc";
			return $this->query($strQuery);
		}

		function getDashRegionAudienceData($fdate=false,$ldate=false){
			$strQuery="select e.audience_category from events as e inner join reports as r on r.event_id = e.event_id where e.is_approved=1 and r.is_approved=1 ";
			if(($fdate!=false) && ($ldate!=false)){
				$strQuery.="and e.date_to_be_organized BETWEEN '$fdate' and '$ldate' ";
			}
			$strQuery.="group by e.audience_category";
			return $this->query($strQuery);
		}

		function getDashRegionAudienceFullData($region,$aud,$fdate=false,$ldate=false){
			$strQuery="select sum(e.expected_audience_attendance) as count from events as e inner join reports as r on r.event_id = e.event_id where e.region = '$region' and e.audience_category = '$aud' and e.is_approved=1 and r.is_approved=1 ";
			if(($fdate!=false) && ($ldate!=false)){
				$strQuery.="and e.date_to_be_organized BETWEEN '$fdate' and '$ldate' ";
			}
			return $this->query($strQuery);
		}

		function getDashTopAudienceCategory($fdate=false,$ldate=false,$region=false){
			$strQuery="select e.audience_category, count(e.audience_category) as total from events as e inner join reports as r on r.event_id = e.event_id where e.is_approved=1 and r.is_approved=1 ";
			if($region!=false){
				$strQuery.="and e.region = '$region' ";
			}
			if(($fdate!=false) && ($ldate!=false)){
				$strQuery.=" and e.date_to_be_organized BETWEEN '$fdate' and '$ldate' ";
			}
			$strQuery.="group by e.audience_category order by count(e.audience_category) desc limit 1";
			return $this->query($strQuery);
		}

		function getReportEventsPerRegions($region,$fdate=false,$ldate=false){
			$strQuery="select e.eventtitle from events as e inner join reports as r on r.event_id = e.event_id where e.is_approved = 1 and e.region = '$region' and r.is_approved = '1' ";
			if(($fdate!=false) && ($ldate!=false)){
				$strQuery.="and e.date_to_be_organized BETWEEN '$fdate' and '$ldate' ";
			}
			$strQuery.="order by e.date_to_be_organized ASC";
      	return $this->query($strQuery);
		}

		function getReportRegionFigures($fdate=false,$ldate=false){
			$strQuery="select r.regionname as regname, e.region, e.eventtitle,u.team_members,u.team_challenges,u.complaints_raised,u.event_summary from events as e inner join region as r on r.region_id = e.region inner join reports as u on u.event_id = e.event_id where e.is_approved = 1 and u.is_approved = 1 ";
			if(($fdate!=false) && ($ldate!=false)){
				$strQuery.="and e.date_to_be_organized BETWEEN '$fdate' and '$ldate' ";
			}
			$strQuery.="order by r.regionname ASC";
      	return $this->query($strQuery);
		}

		/**
		* get user id
		* @param user's name
		* @return user's Id
		*/
		function getID($userName){
			$strQuery="Select ID from user where username = '$userName'";
			return $this->query($strQuery);
		}

		function getAReport($reportid){
			$strQuery="SELECT e.approved_comments,e.approved_timestamp,e.creator,e.audience_category,u.firstname,u.lastname,e.date_to_be_organized,e.event_id,e.eventtitle,e.eventtopic,e.expected_audience_attendance,e.is_approved,e.is_verified,e.logistics,e.mode_of_outreach,e.region,r.regionname,e.town,e.verification_comments,e.verified_timestamp,p.complaints_raised,p.date_reported,p.event_summary,p.folder_paths,p.is_approved as reportapprove,p.team_members,p.picture_paths,p.report_id,p.team_challenges,p.verification_comments as reportverificationcomments ,p.verified_timestamp as reportverifiedtimestamp,p.nonapproval_comments FROM events as e inner join region as r on r.region_id = e.region inner join users as u on u.userid = e.creator inner join reports as p on p.event_id = e.event_id where report_id = '$reportid'";
			return $this->query($strQuery);
		}		
		
		function getReportwithEventid($event_id){

			$strQuery="select team_challenges, complaints_raised, is_approved, event_summary, picture_paths, folder_paths, team_members, report_id, date_reported,verification_comments,nonapproval_comments from reports where event_id='$event_id' ";
			return $this->query($strQuery);
		}

		function getTeamMembers($event_id){

			$strQuery="select name from reportmembers where event_id='$event_id' ";
			return $this->query($strQuery);
		}

		function reassignEvent($eventid,$reporter,$reason){

			$strQuery="update events set
							creator='$reporter',
							misc_reasons='$reason'
							where event_id='$eventid'";

			return $this->query($strQuery);
		}

		function toggleEvent($eventid, $approval, $approvedDate,$approveComments){
      
			if($approval == "0"){
				$newapproval = "1";
			} else {
				$newapproval = "0";
			}

			$strQuery="update events set is_approved='$newapproval',approved_timestamp='$approvedDate',approved_comments='$approveComments' where event_id=$eventid";
      	return $this->query($strQuery);
		}

    	function toggleVerify($eventid, $verify, $date, $verifycomments){
		 
			if($verify == "0"){
				$newverify = "1";
			} else {
				$newverify = "0";
			}
			echo $newapproval;
			$strQuery="update events set is_verified='$newverify', verification_comments='$verifycomments', verified_timestamp='$date' where event_id=$eventid";
			return $this->query($strQuery);
    	}

		function toggleReport($reportid, $approval,$date,$verificationComments){
			if($approval == "0"){
				$newapproval = "1";
			} else {
				$newapproval = "0";
			}
			$strQuery="update reports set is_approved='$newapproval', verified_timestamp='$date', verification_comments='$verificationComments' where report_id=$reportid";
			return $this->query($strQuery);
		}

	}
?>
