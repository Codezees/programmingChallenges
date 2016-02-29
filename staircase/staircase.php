<?php

// your code goes here

function StairCase($n) {
  for($i=1; $i<=$n; $i++) {
    for($j=1; $j<=$n-$i; $j++) {
      echo " ";
    }
    for($j=1; $j<=$i; $j++) {
      echo "#";
    }
    echo "\n";
  }
  
$__fp = fopen("php://stdin", "r");

// fscanf($__fp, "%d", $_n);

StairCase(50);

  
}

?>