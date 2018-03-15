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
	0 => 'eventtitle',
   1 => 'regionname',
   2 => 'town',
   3 => 'date_reported',
   4 => 'event_id'
);

// getting total number records without any search
$sql = "select e.event_id,e.eventtitle,s.date_reported,r.regionname,e.town,e.creator,s.report_id FROM events as e inner join region as r on r.region_id= e.region inner join reports as s on s.event_id = e.event_id WHERE s.is_approved ='1'";
$query=mysqli_query($conn, $sql) or die("level3list.php: get information0");
$totalData = mysqli_num_rows($query);
$totalFiltered = $totalData;  // when there is no search parameter then total number rows = total number filtered rows.

// $sql = "select report_id, eventtitle, date_organized, region from reports where reporter = '$id'";
$sql = "select e.event_id,e.eventtitle,s.date_reported,r.regionname,e.town,e.creator,s.report_id FROM events as e inner join region as r on r.region_id= e.region inner join reports as s on s.event_id = e.event_id WHERE s.is_approved ='1'";
if( !empty($requestData['search']['value']) ) {   // if there is a search parameter, $requestData['search']['value'] contains search parameter
	$sql.=" AND eventtitle LIKE '".$requestData['search']['value']."%'";
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
    $nestedData[] = $row['town'];
    $nestedData[] = date('jS F Y', strtotime($row['date_reported']));

	$buttonshow = "<div class='dropdown'><button href='#' class='btn-simple btn-primary dropdown-toggle' data-toggle='dropdown' aria-expanded='true'><b class='caret'></b></button><ul class='dropdown-menu'><li><a onclick='level2ReportView({$row['report_id']})' href='#'>View Report Details</a></li></ul></div>";
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
