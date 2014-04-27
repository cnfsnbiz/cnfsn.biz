<?php 
    function getAllPages(){
        $dir = "page/";

        $dh = opendir($dir);

        $allfiles = array();
        $visited = array();
        $futur = array();

        while (($file = readdir($dh)) !== false) { 
            $flag = false; 
            if($file !== '.' && $file !== '..') { 
                $allfiles[] = $dir.$file; 
            } 
        } 
        closedir($dh);
        return $allfiles;
    }
    $allpages = getAllPages();

include $allpages[array_rand($allpages)]
?>