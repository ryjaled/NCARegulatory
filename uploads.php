<?php
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');

$folder = $_COOKIE["foldname"];
$uploads_dir = 'uploads';

if(!is_dir($uploads_dir."/".$folder)) {
    $old = umask(0);
    mkdir($uploads_dir."/".$folder, 0777, true);
	chmod($uploads_dir, 0777);
	chmod($uploads_dir."/".$folder, 0777);
    umask($old);
}

foreach ($_FILES["files"]["error"] as $key => $error) {
    if ($error == UPLOAD_ERR_OK) {
        $tmp_name = $_FILES["files"]["tmp_name"][$key];
        $name = basename($_FILES["files"]["name"][$key]);
        move_uploaded_file($tmp_name, $uploads_dir."/".$folder."/".$name);
        echo json_encode(array('succeded'));
    }
}

?>   