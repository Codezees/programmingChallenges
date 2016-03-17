$(document).ready(function(){
	var currentChoice = 0;

	$("#btn1").hide();
	$("#btn2").hide();

	$("#btnChoice1").click(function() {
		$("#btn1").show();
		$("#btn2").hide();

		currentChoice = 1;
		// update the database...
	});

	$("#btnChoice2").click(function() {
		$("#btn1").hide();
		$("#btn2").show();

		currentChoice = 2;
		// update the database...
	});
});