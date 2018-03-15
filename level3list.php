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
$constant = 1;

$columns = array(
// datatable column index  => database column name
  0 => 'eventtitle',
  1 => 'regionname',
  2 => 'firstname',
  3 => 'verified_timestamp',
  4 => 'is_approved',
  5 => 'event_id'
);

// getting total number records without any search
$sql = "SELECT e.event_id,e.eventtitle,e.is_verified,e.verified_timestamp,e.is_approved,e.creator,u.firstname, u.lastname,r.regionname,e.region,e.town,e.is_reported FROM events as e inner join region as r on r.region_id= e.region inner join users as u on u.userid = e.creator WHERE e.is_verified='$constant' and e.is_approved < '2'";
$query=mysqli_query($conn, $sql) or die("level3list.php: get information0");
$totalData = mysqli_num_rows($query);
$totalFiltered = $totalData;  // when there is no search parameter then total number rows = total number filtered rows.

// $sql = "select report_id, eventtitle, date_organized, region from reports where reporter = '$id'";
$sql = "SELECT e.event_id,e.eventtitle,e.is_verified,e.verified_timestamp,e.is_approved,e.creator,u.firstname, u.lastname,r.regionname,e.region,e.town,e.is_reported FROM events as e inner join region as r on r.region_id= e.region inner join users as u on u.userid = e.creator WHERE e.is_verified='$constant' and e.is_approved < '2'";
if( !empty($requestData['search']['value']) ) {   // if there is a search parameter, $requestData['search']['value'] contains search parameter
  $sql.=" AND ( eventtitle LIKE '".$requestData['search']['value']."%' ";
  $sql.=" OR firstname LIKE '".$requestData['search']['value']."%' ";
  $sql.=" OR regionname LIKE '".$requestData['search']['value']."%' ";
  $sql.=" OR lastname LIKE '".$requestData['search']['value']."%' )";
}
$query=mysqli_query($conn, $sql) or die("level3list.php: get information1");
$totalFiltered = mysqli_num_rows($query); // when there is a search parameter then we have to modify total number filtered rows as per search result.
$sql.=" ORDER BY ". $columns[$requestData['order'][0]['column']]." ".$requestData['order'][0]['dir']." LIMIT ".$requestData['start']." ,".$requestData['length']."   ";
/* $requestData['order'][0]['column'] contains column index, $requestData['order'][0]['dir'] contains order such as asc/desc  */
$query=mysqli_query($conn, $sql) or die("level3list.php: get information2");

$data = array();
while( $row=mysqli_fetch_array($query) ) {  // preparing an array
	$nestedData=array();

    $nestedData[] = $row['eventtitle'];
    $nestedData[] = $row['regionname'];
    $nestedData[] = $row['firstname'].' '.$row['lastname'];
    $nestedData[] = date('jS F Y', strtotime($row['verified_timestamp']));


      if( $row['is_approved'] == "0"){
        $verifyLabel = "<p style='color: grey; margin-top: 20px;'>Pending</p>";
      } 
      if( $row['is_approved'] == "1"){
         $verifyLabel = "<p style='color: green; margin-top: 20px;'>Approved</p>";
      } 
      if( $row['is_approved'] == "2"){
         $verifyLabel = "<p style='color: red; margin-top: 20px;'>Rejected</p>";
      } 

    $nestedData[] = $verifyLabel;
    // $nestedData[] = $row['report_id'];

	$queryID = $row['event_id'];
    $queryApprove = $row['is_approved'];

	if( ($row['is_approved'] == "0") )
    {
      // $buttonshow = "<a rel='tooltip' data-placement='bottom' title='View' onclick='level1viewer({$row['event_id']})' class='btn btn-success btn-just-icon '><i class='material-icons'>assignment</i></a><a rel='tooltip' data-placement='bottom' title='Edit' onclick='' class='btn btn-warning btn-just-icon '><i class='material-icons'>visibility</i></a><a rel='tooltip' data-placement='bottom' title='Delete' onclick='' class='btn btn-danger btn-just-icon '><i class='material-icons'>cancel</i></a>";
      $buttonshow = "<div class='dropdown'><button href='#' class='btn-simple btn-primary dropdown-toggle' data-toggle='dropdown' aria-expanded='true'><b class='caret'></b></button><ul class='dropdown-menu'><li><a onclick='approveEventToggle(".$queryID.",\"".$queryApprove."\")' href='#'>Approve</a></li><li><a onclick='level3View({$row['event_id']})' href='#'>View Details</a></li><li><a onclick='denyEventModal({$row['event_id']},3)' href='#'>Deny</a></li></ul></div>";

    }
    if( ($row['is_approved'] == "1") && ($row['is_reported'] == "0"))
    {
      // $buttonshow = "<a rel='tooltip' data-placement='bottom' title='View' onclick='level1viewer({$row['event_id']})' class='btn btn-success btn-just-icon '><i class='material-icons'>assignment</i></a><a rel='tooltip' data-placement='bottom' title='Edit' onclick='' class='btn btn-warning btn-just-icon '><i class='material-icons'>visibility</i></a><a rel='tooltip' data-placement='bottom' title='Delete' onclick='' class='btn btn-danger btn-just-icon '><i class='material-icons'>cancel</i></a>";
      $buttonshow = "<div class='dropdown'><button href='#' class='btn-simple btn-primary dropdown-toggle' data-toggle='dropdown' aria-expanded='true'><b class='caret'></b></button><ul class='dropdown-menu'><li><a style='color: red' onclick='reassignEventToggle({$row['event_id']},{$row['creator']},{$row['region']})' href='#'>Reassign Event</a></li><li><a onclick='level3View({$row['event_id']})' href='#'>View Details</a></li></ul></div>";
    }
    if( ($row['is_approved'] == "1") && ($row['is_reported'] == "1"))
    {
      // $buttonshow = "<a rel='tooltip' data-placement='bottom' title='View' onclick='level1viewer({$row['event_id']})' class='btn btn-success btn-just-icon '><i class='material-icons'>assignment</i></a><a rel='tooltip' data-placement='bottom' title='Edit' onclick='' class='btn btn-warning btn-just-icon '><i class='material-icons'>visibility</i></a><a rel='tooltip' data-placement='bottom' title='Delete' onclick='' class='btn btn-danger btn-just-icon '><i class='material-icons'>cancel</i></a>";
      $buttonshow = "<div class='dropdown'><button href='#' class='btn-simple btn-primary dropdown-toggle' data-toggle='dropdown' aria-expanded='true'><b class='caret'></b></button><ul class='dropdown-menu'><li><a onclick='level3View({$row['event_id']})' href='#'>View Details</a></li></ul></div>";
    }

    //$nestedData[] = $row['event_id'];
	  $nestedData[] = $buttonshow;

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
