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

$id=$_REQUEST['usersessionid'];

// if (isset($_SESSION['levelid'])){
// 	$id = $_SESSION['levelid'];
// 	echo $id;
// }

// if (isset($_COOKIE['userlevelid'])){
// 	$id = $_COOKIE['userlevelid'];
// }

$columns = array( 
// datatable column index  => database column name	
	0 => 'eventtitle',
	1 => 'region', 
	2 => 'date_to_be_organized',
	3 => 'is_verified',
	4 => 'is_approved',
	5 => 'event_id',
	6 => 'event_id'
);

// getting total number records without any search
$sql = "SELECT e.event_id,r.regionname as region,e.eventtitle,e.date_to_be_organized,e.is_verified,e.is_approved,e.is_reported,e.deny_status FROM events as e inner join region as r on r.region_id = e.region WHERE creator='$id' ";// order by e.event_id DESC
$query=mysqli_query($conn, $sql) or die("level1list.php: get information0");
$totalData = mysqli_num_rows($query);
$totalFiltered = $totalData;  // when there is no search parameter then total number rows = total number filtered rows.

$sql = "SELECT e.event_id,r.regionname as region,e.eventtitle,e.date_to_be_organized,e.is_verified,e.is_approved,e.is_reported,e.deny_status FROM events as e inner join region as r on r.region_id = e.region WHERE creator='$id' ";
if( !empty($requestData['search']['value']) ) {   // if there is a search parameter, $requestData['search']['value'] contains search parameter
	$sql.=" AND eventtitle LIKE '".$requestData['search']['value']."%' ";
}
//$sql.="order by e.event_id DESC";

$query=mysqli_query($conn, $sql) or die("level1list.php: get information1");
$totalFiltered = mysqli_num_rows($query); // when there is a search parameter then we have to modify total number filtered rows as per search result. 
$sql.=" ORDER BY ". $columns[$requestData['order'][0]['column']]." ".$requestData['order'][0]['dir']." LIMIT ".$requestData['start']." ,".$requestData['length']."   ";
/* $requestData['order'][0]['column'] contains column index, $requestData['order'][0]['dir'] contains order such as asc/desc  */	
$query=mysqli_query($conn, $sql) or die("level1list.php: get information2");

$data = array();
while( $row=mysqli_fetch_array($query) ) {  // preparing an array
	$nestedData=array();

	$nestedData[] = $row['eventtitle'];
	$nestedData[] = $row['region'];
	$enddate = date('jS F Y', strtotime($row['date_to_be_organized']));
	$nestedData[] = $enddate;
	
	if( $row['is_verified'] == "0"){
        $verifyLabel = "<p style='color: grey; margin-top: 20px;'>Pending</p>";
	  } 
	  if( $row['is_verified'] == "1"){
        $verifyLabel = "<p style='color: green; margin-top: 20px;'>Verified</p>";
	  } 
	  if( $row['is_verified'] == "2"){
        $verifyLabel = "<p style='color: red; margin-top: 20px;'>Rejected</p>";
	  } 
    $nestedData[] = $verifyLabel;

    if( $row['is_approved'] == "0"){
        $approveLabel = "<p style='color: grey; margin-top: 20px;'>Pending</p>";
	  } 
	  if( $row['is_approved'] == "1"){
        $approveLabel = "<p style='color: green; margin-top: 20px;'>Approved</p>";
	  } 
	  if( $row['is_approved'] == "2"){
        $approveLabel = "<p style='color: red; margin-top: 20px;'>Rejected</p>";
	  } 
	  
	$nestedData[] = $approveLabel;
	
	if( ($row['is_verified'] == "0") && ($row['is_approved'] == "0") )
	{
		// $buttonshow = "<a rel='tooltip' data-placement='bottom' title='View' onclick='level1viewer({$row['event_id']})' class='btn btn-success btn-just-icon '><i class='material-icons'>assignment</i></a><a rel='tooltip' data-placement='bottom' title='Edit' onclick='' class='btn btn-warning btn-just-icon '><i class='material-icons'>visibility</i></a><a rel='tooltip' data-placement='bottom' title='Delete' onclick='' class='btn btn-danger btn-just-icon '><i class='material-icons'>cancel</i></a>";
		$buttonshow = "<div class='dropdown'><button href='#' class='btn-simple btn-primary dropdown-toggle' data-toggle='dropdown' aria-expanded='true'><b class='caret'></b></button><ul class='dropdown-menu'><li><a onclick='level1Edit({$row['event_id']}, event)' href='#'>Edit Event</a></li><li><a onclick='level1View({$row['event_id']})' href='#'>View Details</a></li><li><a onclick='deleteevent({$row['event_id']})' href='#'>Delete Event</a></li></ul></div>";
	}
	if( ($row['is_verified'] == "1") && ($row['is_approved'] == "0") )
	{
		// $buttonshow = "<a rel='tooltip' data-placement='bottom' title='View' onclick='level1viewer({$row['event_id']})' class='btn btn-success btn-just-icon '><i class='material-icons'>assignment</i></a><a rel='tooltip' data-placement='bottom' title='Edit' onclick='' class='btn btn-warning btn-just-icon '><i class='material-icons'>visibility</i></a><a rel='tooltip' data-placement='bottom' title='Delete' onclick='' class='btn btn-danger btn-just-icon '><i class='material-icons'>cancel</i></a>";
		$buttonshow = "<div class='dropdown'><button href='#' class='btn-simple btn-primary dropdown-toggle' data-toggle='dropdown' aria-expanded='true'><b class='caret'></b></button><ul class='dropdown-menu'><li><a onclick='level1View({$row['event_id']})' href='#'>View Details</a></li></ul></div>";
	}
	if( ($row['is_verified'] == "1") && ($row['is_approved'] == "1") && ($row['is_reported'] == "0") )
	{
		// $buttonshow = "<a rel='tooltip' data-placement='bottom' title='View' onclick='level1viewer({$row['event_id']})' class='btn btn-success btn-just-icon '><i class='material-icons'>assignment</i></a><a rel='tooltip' data-placement='bottom' title='Edit' onclick='' class='btn btn-warning btn-just-icon '><i class='material-icons'>visibility</i></a><a rel='tooltip' data-placement='bottom' title='Delete' onclick='' class='btn btn-danger btn-just-icon '><i class='material-icons'>cancel</i></a>";
		$buttonshow = "<div class='dropdown'><button href='#' class='btn-simple btn-primary dropdown-toggle' data-toggle='dropdown' aria-expanded='true'><b class='caret'></b></button><ul class='dropdown-menu'><li><a style='color: red' onclick='level1Edit({$row['event_id']}, event)' href='#'>Reschedule Event</a></li><li><a onclick='level1View({$row['event_id']})' href='#'>View Details</a></li><li><a onclick='addReportModal({$row['event_id']}, event)' href='#'>Add Report</a></li></ul></div>";
	}
	if( ($row['is_verified'] == "1") && ($row['is_approved'] == "1") && ($row['is_reported'] == "1") )
	{
		// $buttonshow = "<a rel='tooltip' data-placement='bottom' title='View' onclick='level1viewer({$row['event_id']})' class='btn btn-success btn-just-icon '><i class='material-icons'>assignment</i></a><a rel='tooltip' data-placement='bottom' title='Edit' onclick='' class='btn btn-warning btn-just-icon '><i class='material-icons'>visibility</i></a><a rel='tooltip' data-placement='bottom' title='Delete' onclick='' class='btn btn-danger btn-just-icon '><i class='material-icons'>cancel</i></a>";
		$buttonshow = "<div class='dropdown'><button href='#' class='btn-simple btn-primary dropdown-toggle' data-toggle='dropdown' aria-expanded='true'><b class='caret'></b></button><ul class='dropdown-menu'><li><a onclick='level1View({$row['event_id']})' href='#'>View Details</a></li><li><a onclick='level1ReportView({$row['event_id']})' href='#'>View Report</a></li></ul></div>";//<li><a onclick='deleteReportModal({$row['event_id']})' href='#'>Delete Report</a></li>
	}
	if( ($row['is_verified'] == "1") && ($row['is_approved'] == "1") && ($row['is_reported'] == "1") && ($row['deny_status'] == "1") )
	{
		// $buttonshow = "<a rel='tooltip' data-placement='bottom' title='View' onclick='level1viewer({$row['event_id']})' class='btn btn-success btn-just-icon '><i class='material-icons'>assignment</i></a><a rel='tooltip' data-placement='bottom' title='Edit' onclick='' class='btn btn-warning btn-just-icon '><i class='material-icons'>visibility</i></a><a rel='tooltip' data-placement='bottom' title='Delete' onclick='' class='btn btn-danger btn-just-icon '><i class='material-icons'>cancel</i></a>";
		$buttonshow = "<div class='dropdown'><button href='#' class='btn-simple btn-primary dropdown-toggle' data-toggle='dropdown' aria-expanded='true'><b class='caret'></b></button><ul class='dropdown-menu'><li><a onclick='level1View({$row['event_id']})' href='#'>View Details</a></li><li><a onclick='level1ReportView({$row['event_id']})' href='#'>View Report</a></li><li><a onclick='deleteDeniedReport({$row['event_id']})' href='#'>Delete Report</a></li></ul></div>";
	}
	if( ($row['is_verified'] == "2") || ($row['is_approved'] == "2") )
	{
		// $buttonshow = "<a rel='tooltip' data-placement='bottom' title='View' onclick='level1viewer({$row['event_id']})' class='btn btn-success btn-just-icon '><i class='material-icons'>assignment</i></a><a rel='tooltip' data-placement='bottom' title='Edit' onclick='' class='btn btn-warning btn-just-icon '><i class='material-icons'>visibility</i></a><a rel='tooltip' data-placement='bottom' title='Delete' onclick='' class='btn btn-danger btn-just-icon '><i class='material-icons'>cancel</i></a>";
		$buttonshow = "<div class='dropdown'><button href='#' class='btn-simple btn-primary dropdown-toggle' data-toggle='dropdown' aria-expanded='true'><b class='caret'></b></button><ul class='dropdown-menu'><li><a onclick='level1Edit({$row['event_id']}, event)' href='#'>Edit Event</a></li><li><a onclick='level1View({$row['event_id']})' href='#'>View Details</a></li><li><a onclick='deleteevent({$row['event_id']})' href='#'>Delete Event</a></li></ul></div>";
	}

	$nestedData[] = $buttonshow;
	$nestedData[] = (int)$row['event_id'];
	
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
