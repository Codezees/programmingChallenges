<?php
 
// your code goes here
 
function sumOfIntegers( $arr) {
	$result = 0;
  foreach($arr as $i) {
  	$result += $i;
  }
  return $result;
}
 
$inputs = array(5,1,2,3,4,5);
echo sumOfIntegers($inputs);
 
$inputs = array(2,12,12);
echo sumOfIntegers($inputs);
 
?>