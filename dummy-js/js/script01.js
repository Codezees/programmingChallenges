function numbers() {
	var firstNumber = 1;
	var secondNumber = 2;
	firstNumber + secondNumber;
	firstNumber = 2;
	firstNumber == 2;
	firstNumber == 1;
	var thirdNumber = firstNumber + secondNumber;
	thirdNumber += 1;
	thirdNumber -= 2;
	console.log("firstNumber: " + firstNumber + " secondNumber: " + secondNumber + " thirdNumber: " + thirdNumber);
}
numbers();
function startLogic() {
	window.alert('Hello');
	var newHtml = '<em>New Header</em>';
	document.getElementById('headerItem').innerHTML = newHtml;
	document.write('<h1>Header</h1><p>Test Text to the body</p><footer><small>Footer</small></footer>');
}
startLogic();
function clickHandler() {
	alert('You clicked me!');
}
var sum = 0;
var numbers = [4, 9, 16, 25];
function increment(item, index) {
	sum += item;
}
numbers.forEach(increment);
console.log("New array sum = " + sum);

var day;
switch (new Date().getDay()) {
	case 0:
		day = "Sunday";
		break;
	case 1:
		day = "Monday";
		break;
	case 2:
		day = "Tuesday";
		break;
	case 3:
		day = "Wednesday";
		break;
	case 4:
		day = "Thursday";
		break;
	case 5:
		day = "Friday";
		break;
	case 6:
		day = "Saturday";
		break;
}
console.log(day);
var countries = ["USA", "JPN", "RUS", "ENG"];
var text = "";
for (var i = 0; i < countries.length; i++) {
	text += countries[i] + " ";
	console.log(text);
}