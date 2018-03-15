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

//$id=$_REQUEST['userregion'];

$columns = array(
// datatable column index  => database column name
   0 => 'fname',
   1 => 'lname',
   2 => 'email',
   3 => 'region',
   4 => 'level',
   5 => 'status',
   6 => 'userid'

);

// getting total number records without any search
$sql = "select u.userid as userid, u.firstname as fname, u.lastname as lname, u.email as email, u.status as status, u.level as level, r.regionname as region from users as u inner join region as r on r.region_id = u.region where u.level < 5";
$query=mysqli_query($conn, $sql) or die("dashusers.php: get information0");
$totalData = mysqli_num_rows($query);
$totalFiltered = $totalData;  // when there is no search parameter then total number rows = total number filtered rows.

$sql = "select u.userid as userid, u.firstname as fname, u.lastname as lname, u.email as email, u.status as status, u.level as level, r.regionname as region from users as u inner join region as r on r.region_id = u.region where u.level < 5";
if( !empty($requestData['search']['value']) ) {   // if there is a search parameter, $requestData['search']['value'] contains search parameter
   $sql.=" AND ( firstname LIKE '".$requestData['search']['value']."%' ";
   $sql.=" OR lastname LIKE '".$requestData['search']['value']."%' ";
   $sql.=" OR email LIKE '".$requestData['search']['value']."%' ";
   $sql.=" OR status LIKE '".$requestData['search']['value']."%' ";
   $sql.=" OR region LIKE '".$requestData['search']['value']."%' )";
}
$query=mysqli_query($conn, $sql) or die("dashusers.php: get information1");
$totalFiltered = mysqli_num_rows($query); // when there is a search parameter then we have to modify total number filtered rows as per search result.
$sql.=" ORDER BY ". $columns[$requestData['order'][0]['column']]." ".$requestData['order'][0]['dir']." LIMIT ".$requestData['start']." ,".$requestData['length']."   ";
/* $requestData['order'][0]['column'] contains column index, $requestData['order'][0]['dir'] contains order such as asc/desc  */
$query=mysqli_query($conn, $sql) or die("dashusers.php: get information2");

$data = array();
while( $row=mysqli_fetch_array($query) ) {  // preparing an array
	$nestedData=array();

	$nestedData[] = $row['fname'];
   $nestedData[] = $row['lname'];
   $nestedData[] = $row['email'];
   $nestedData[] = $row['region'];
   $level = $row['level'];
   switch ($level) {
      case '1':
         $level = 'Outreach Team';
         break;
      case '2':
         $level = 'Regional Manager';
         break;
	case '3':
 	   $level = 'Project Manager';
 	   break;
      case '4':
         $level = 'Management';
         break;

      default:
         $level = 'Officer';
         break;
   }
   $nestedData[] = $level;
   $nestedData[] = $row['status'];
   if ($row['status'] == 'active') {
      $buttonshow = "<a onclick='deleteUsers({$row['userid']})' class='btn btn-success btn-sm ' data-uk-tooltip title='Deactivate'><i class='material-icons'>sync</i></a>";
   }else{
      $buttonshow = "<a onclick='reactivateUsers({$row['userid']})' class='btn btn-just-button btn-sm btn-rose' data-uk-tooltip title='Reactivate'><i class='material-icons'>sync</i></a>";
   }
	//$buttonshow = "<a onclick='deleteUsers({$row['userid']})' class='btn btn-rose btn-md '><i class='material-icons'>sync</i></a>";
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
