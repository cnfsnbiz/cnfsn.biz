<?php
//INCLUDES RANDOM PAGE FROM THE "PAGE/" FOLDER
$dir = "page/";

$dh = opendir($dir);

$files = array(); 
while (($file = readdir($dh)) !== false) { 
	$flag = false; 
	if($file !== '.' && $file !== '..') { 
		$files[] = $file; 
	} 
} 
closedir($dh);

include("page/".$files[array_rand($files)])
?>
