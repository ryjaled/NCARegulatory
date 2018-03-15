<?php
//customized by Brian Martey
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
/** written by Brian Martey*/

/* Database connection start */
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "ncaoutreach";

$conn = mysqli_connect($servername, $username, $password, $dbname) or die("Connection failed: " . mysqli_connect_error());

/* Database connection end */
// storing  request (ie, get/post) global array to a variable
$requestData= $_REQUEST;

$columns = array(
// datatable column index  => database column name
	0 => 'action',
	1 => 'firstname',
	2 => 'date'
	
);

// getting total number records without any search
$sql = "select e.eventlog_id,e.event_title,u.firstname as fname,u.lastname as lname,e.action,e.date,r.regionname from eventlogs as e inner join users as u on u.userid = e.user_id inner join region as r on r.region_id = e.region";
$query=mysqli_query($conn, $sql) or die("eventloglist.php: get information0");
$totalData = mysqli_num_rows($query);
$totalFiltered = $totalData;  // when there is no search parameter then total number rows = total number filtered rows.

$sql = "select e.eventlog_id,e.event_title,u.firstname as fname,u.lastname as lname,e.action,e.date,r.regionname from eventlogs as e inner join users as u on u.userid = e.user_id inner join region as r on r.region_id = e.region";
if( !empty($requestData['search']['value']) ) {   // if there is a search parameter, $requestData['search']['value'] contains search parameter
	$sql.=" Where ( u.firstname LIKE '".$requestData['search']['value']."%'";
	$sql.=" or u.lastname LIKE '".$requestData['search']['value']."%'";
	$sql.=" or r.regionname LIKE '".$requestData['search']['value']."%' )";
}
$query=mysqli_query($conn, $sql) or die("eventloglist.php: get information1");
$totalFiltered = mysqli_num_rows($query); // when there is a search parameter then we have to modify total number filtered rows as per search result.
$sql.=" ORDER BY ". $columns[$requestData['order'][0]['column']]." ".$requestData['order'][0]['dir']." LIMIT ".$requestData['start']." ,".$requestData['length']."   ";
/* $requestData['order'][0]['column'] contains column index, $requestData['order'][0]['dir'] contains order such as asc/desc  */
$query=mysqli_query($conn, $sql) or die("eventloglist.php: get information2");

$data = array();
while( $row=mysqli_fetch_array($query) ) {  // preparing an array
	$nestedData=array();

	$enddate = date('jS F Y', strtotime($row['date']));
	// strpos($row['action'], 'event') !== false

	if ((strpos($row['action'], 'added') !== false) && (strpos($row['action'], 'event') !== false)){
		$nestedData[] = "<i style='padding: 20px;color: black' ' class='fa fa-calendar-plus-o fa-lg'></i>";	
		$nestedData[] = "<p style='padding-top: 14px;'>".$row['fname'].' '.$row['lname'].' '.$row['action'].': '.$row['event_title'].' in '.$row['regionname'].' Region'."</p>";	
		$nestedData[] = $enddate;
	}
	else if ((strpos($row['action'], 'edited') !== false) && (strpos($row['action'], 'event') !== false)){
		$nestedData[] = "<i style='padding: 20px;color: orange' '  class='fa fa-pencil-square-o fa-lg'></i>";	
		$nestedData[] = "<p style='padding-top: 14px;'>".$row['fname'].' '.$row['lname'].' '.$row['action'].': '.$row['event_title'].' in '.$row['regionname'].' Region'."</p>";	
		$nestedData[] = $enddate;
	}
	else if ((strpos($row['action'], 'verified') !== false) && (strpos($row['action'], 'event') !== false)){
		$nestedData[] = "<i style='padding: 20px;color: green' '  class='fa fa-check-circle-o fa-lg'></i>";	
		$nestedData[] = "<p style='padding-top: 14px;'>".$row['fname'].' '.$row['lname'].' '.$row['action'].': '.$row['event_title'].' in '.$row['regionname'].' Region'."</p>";	
		$nestedData[] = $enddate;
	}
	else if ((strpos($row['action'], 'approved') !== false) && (strpos($row['action'], 'event') !== false)){
		$nestedData[] = "<i style='padding: 20px;color: green' '  class='fa fa-check fa-lg'></i>";	
		$nestedData[] = "<p style='padding-top: 14px;'>".$row['fname'].' '.$row['lname'].' '.$row['action'].': '.$row['event_title'].' in '.$row['regionname'].' Region'."</p>";	
		$nestedData[] = $enddate;
	}
	else if ((strpos($row['action'], 'approved') !== false) && (strpos($row['action'], 'report') !== false)){
		$nestedData[] = "<i style='padding: 20px;color: green' '  class='fa fa-thumbs-o-up fa-lg'></i>";	
		$nestedData[] = "<p style='padding-top: 14px;'>".$row['fname'].' '.$row['lname'].' '.$row['action'].': '.$row['event_title'].' in '.$row['regionname'].' Region'."</p>";	
		$nestedData[] = $enddate;
	}else{
		$nestedData[] = "<i style='padding: 20px;color: blue'  class='fa fa-calendar-plus-o fa-lg'></i>";	
		$nestedData[] = "<p style='padding-top: 14px;'>".$row['fname'].' '.$row['lname'].' '.$row['action'].': '.$row['event_title'].' in '.$row['regionname'].' Region'."</p>";	
		$nestedData[] = $enddate;
	}

	// $nestedData[] = "<p>X".$row['fname'].' '.$row['lname'].' '.$row['action'].': '.$row['event_title'].' in '.$row['regionname'].' Region'."</p>";
	

	$data[] = $nestedData;
}

$json_data = array(
			"draw"            => intval( $requestData['draw'] ),   // for every request/draw by clientside , they send a number as a parameter, when they recieve a response/data they first check the draw number, so we are sending same number in draw.
			"recordsTotal"    => intval( $totalData ),  // total number of records
			"recordsFiltered" => intval( $totalFiltered ), // total number of records after searching, if there is no searching then totalFiltered = totalData
			"data"            => $data   // total data array
			);

echo json_encode($json_data);  // send data as json format

?>
