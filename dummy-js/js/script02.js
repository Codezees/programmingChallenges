var testVariable;
//var testVariable = 'ABC';
//var testVariable = '';
//var testVariable = null;
var isUndefined = (testVariable === undefined);
var isNull = (testVariable === null);
var isEmpty = (testVariable === '');

document.getElementById('isUndefined').innerHTML = isUndefined;
document.getElementById('isNull').innerHTML = isNull;
document.getElementById('isEmpty').innerHTML = isEmpty;


var $elem = document.getElementById('output'); 
$elem.innerHTML += 'Test'; //Test

$elem.innerHTML += 4 + 6; //Test10

$elem.innerHTML += 4 + 6 + ' Demo'; //Test1010 Demo

$elem.innerHTML += 'Demo ' + 4 + 6; //Test1010 DemoDemo 46

$elem.innerHTML += 'Demo ' + (4 + 6); //Test1010 DemoDemo 46Demo 10


var myArray = new Array();
function myFunc() {
	return 1;
};
myArray[0] = Date.now;
myArray[1] = myFunc;
myArray[2] = new Array("Demo", "Test");

console.log(myArray); //[function, function, array]