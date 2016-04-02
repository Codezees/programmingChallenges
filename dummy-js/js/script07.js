var canvas = document.getElementById("purpleCanvas");
var context = canvas.getContext("2d");

context.fillStyle = "#eee5ed";
context.strokeStyle = "#5a0354";
context.lineWidth = 10;

//line
context.moveTo(0, 0);
context.lineTo(730, 400);
context.stroke();

//line
context.moveTo(730, 0);
context.lineTo(0, 400);
context.stroke();

//cyrcle large
context.beginPath();
context.arc(360, 200, 70, 0, 2 * Math.PI);
context.fill();
context.stroke();

//cyrcle medium
context.beginPath();
context.arc(360, 200, 35, 0, 2 * Math.PI);
context.fillStyle = "#8b4e87";
context.fill();
context.stroke();

//cyrcle small
context.beginPath();
context.arc(360, 200, 14, 0, 2 * Math.PI);
context.fillStyle = "#ffffff";
context.fill();
context.stroke();

//arrow
context.beginPath();
context.moveTo(480, 230);
context.lineTo(520, 285);
context.lineTo(455, 280);
context.stroke();

//text
context.fillStyle = "#480243";
context.strokeStyle = "#480243";

context.font = "65px Segoe UI";
context.lineWidth = 5;
context.fillText("This is", 270, 80);
context.font = "80px Segoe UI";
context.strokeText("SKA", 290, 380);