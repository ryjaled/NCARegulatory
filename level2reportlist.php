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

$id=$_REQUEST['userregion'];

$columns = array(
// datatable column index  => database column name
    0 => 'eventtitle',
    1 => 'regionname',
    2 => 'firstname',
    3 => 'date_reported',
    4 => 'is_approved',
    5 => 'report_id'
);

// getting total number records without any search
$sql = "select e.eventtitle,e.creator,u.firstname,u.lastname,g.regionname, r.is_approved, r.date_reported, r.report_id ,r.event_id from reports as r inner join events as e on e.event_id = r.event_id inner join users as u on u.userid = e.creator inner join region as g on g.region_id = e.region where e.region = '$id' ";
$query=mysqli_query($conn, $sql) or die("level2reportlist.php: get information0");
$totalData = mysqli_num_rows($query);
$totalFiltered = $totalData;  // when there is no search parameter then total number rows = total number filtered rows.

$sql = "select e.eventtitle,e.creator,u.firstname,u.lastname,g.regionname, r.is_approved, r.date_reported, r.report_id ,r.event_id from reports as r inner join events as e on e.event_id = r.event_id inner join users as u on u.userid = e.creator inner join region as g on g.region_id = e.region where e.region = '$id' ";
if( !empty($requestData['search']['value']) ) {   // if there is a search parameter, $requestData['search']['value'] contains search parameter
  $sql.=" AND ( eventtitle LIKE '".$requestData['search']['value']."%' ";
  $sql.=" OR firstname LIKE '".$requestData['search']['value']."%' ";
  $sql.=" OR lastname LIKE '".$requestData['search']['value']."%' )";
}

$query=mysqli_query($conn, $sql) or die("level2reportlist.php: get information1");
$totalFiltered = mysqli_num_rows($query); // when there is a search parameter then we have to modify total number filtered rows as per search result.
$sql.=" ORDER BY ". $columns[$requestData['order'][0]['column']]." ".$requestData['order'][0]['dir']." LIMIT ".$requestData['start']." ,".$requestData['length']."   ";
/* $requestData['order'][0]['column'] contains column index, $requestData['order'][0]['dir'] contains order such as asc/desc  */
$query=mysqli_query($conn, $sql) or die("level2reportlist.php: get information2");

$data = array();
while( $row=mysqli_fetch_array($query) ) {  // preparing an array
	$nestedData=array();

    $nestedData[] = $row['eventtitle'];
    $nestedData[] = $row['regionname'];
    $nestedData[] = $row['firstname'].' '.$row['lastname'];
    $nestedData[] = date('jS F Y', strtotime($row['date_reported']));

    if( $row['is_approved'] == "0"){
        $approveLabel = "<p style='color: grey; margin-top: 20px;'>Pending</p>";
				// $buttonshow = "<button onclick='editor({$row['event_id']},{$row['report_id']})' class='btn btn-just-icon btn-success' rel='tooltip' data-placement='bottom' title='View & Verify'><i class='material-icons'>assignment</i></button>";
      } 
      if( $row['is_approved'] == "1"){
        $approveLabel = "<p style='color: green; margin-top: 20px;'>Approved</p>";
				// $buttonshow = "<button onclick='editor({$row['event_id']},{$row['report_id']})' class='btn btn-just-icon btn-success' rel='tooltip' data-placement='bottom' title='View & Verify'><i class='material-icons'>assignment</i></button>";
      }
      if( $row['is_approved'] == "2"){
        $approveLabel = "<p style='color: red; margin-top: 20px;'>Rejected</p>";
				// $buttonshow = "<button onclick='editor({$row['event_id']},{$row['report_id']})' class='btn btn-just-icon btn-success' rel='tooltip' data-placement='bottom' title='View & Verify'><i class='material-icons'>assignment</i></button>";
      }

      $nestedData[] = $approveLabel;

      $queryID = $row['report_id'];
      $queryApproval = $row['is_approved'];

      if( ($row['is_approved'] == "0") )
      {
        // $buttonshow = "<a rel='tooltip' data-placement='bottom' title='View' onclick='level1viewer({$row['event_id']})' class='btn btn-success btn-just-icon '><i class='material-icons'>assignment</i></a><a rel='tooltip' data-placement='bottom' title='Edit' onclick='' class='btn btn-warning btn-just-icon '><i class='material-icons'>visibility</i></a><a rel='tooltip' data-placement='bottom' title='Delete' onclick='' class='btn btn-danger btn-just-icon '><i class='material-icons'>cancel</i></a>";
        $buttonshow = "<div class='dropdown'><button href='#' class='btn-simple btn-primary dropdown-toggle' data-toggle='dropdown' aria-expanded='true'><b class='caret'></b></button><ul class='dropdown-menu'><li><a onclick='ApproveReportToggle(".$queryID.",\"".$queryApproval."\")' href='#'>Approve Report</a></li><li><a onclick='level2ReportView({$row['report_id']})' href='#'>View Report Details</a></li><li><a onclick='denyReportModal({$row['report_id']})' href='#'>Deny Report</a></li></ul></div>";
      }
     
      if( ($row['is_approved'] == "1") )
      {
        // $buttonshow = "<a rel='tooltip' data-placement='bottom' title='View' onclick='level1viewer({$row['event_id']})' class='btn btn-success btn-just-icon '><i class='material-icons'>assignment</i></a><a rel='tooltip' data-placement='bottom' title='Edit' onclick='' class='btn btn-warning btn-just-icon '><i class='material-icons'>visibility</i></a><a rel='tooltip' data-placement='bottom' title='Delete' onclick='' class='btn btn-danger btn-just-icon '><i class='material-icons'>cancel</i></a>";
        $buttonshow = "<div class='dropdown'><button href='#' class='btn-simple btn-primary dropdown-toggle' data-toggle='dropdown' aria-expanded='true'><b class='caret'></b></button><ul class='dropdown-menu'><li><a onclick='level2ReportView({$row['report_id']})' href='#'>View Report Details</a></li></ul></div>";
      }
      if( ($row['is_approved'] == "2") )
      {
        // $buttonshow = "<a rel='tooltip' data-placement='bottom' title='View' onclick='level1viewer({$row['event_id']})' class='btn btn-success btn-just-icon '><i class='material-icons'>assignment</i></a><a rel='tooltip' data-placement='bottom' title='Edit' onclick='' class='btn btn-warning btn-just-icon '><i class='material-icons'>visibility</i></a><a rel='tooltip' data-placement='bottom' title='Delete' onclick='' class='btn btn-danger btn-just-icon '><i class='material-icons'>cancel</i></a>";
        $buttonshow = "<div class='dropdown'><button href='#' class='btn-simple btn-primary dropdown-toggle' data-toggle='dropdown' aria-expanded='true'><b class='caret'></b></button><ul class='dropdown-menu'><li><a onclick='level2ReportView({$row['report_id']})' href='#'>View Report Details</a></li></ul></div>";
      }

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
