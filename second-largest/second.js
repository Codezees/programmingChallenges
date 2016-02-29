var myArray = ['1','4','5','3','7']; 

function second_max(array) {
	var max1, max2 = 0;
	for (var i =0; i < array.length-1; i++) {

		if (array[i] > max1 ) {
			max2 = max1;
			max1 = array[i];
		}
		else if (array[i] > max2 ) {
        max2 = array[i];
      }
    };
    return max2;
}

console.log (second_max(myArray));