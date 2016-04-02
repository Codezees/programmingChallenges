$(document).ready(function () {
    manipulateDOM();
});

function manipulateDOM() {
  var h1 = $('h1');
  h1.text('This is SKA');
  h1.css('color', '#ff0303');
  h1.css('font-family', 'Aharoni');
  h1.css('text-align', 'center');
  var h3 = $('h3');
  h3.css('font-family', 'Broadway');
  h3.css('line-height', '80px');
  h3.first().css('text-decoration', 'underline');
  h3.first().text('Music is life...Live a fun one...');
  var h3Second = $('h3:last');
  h3Second.css('color', '#ffffff'); 
  h3Second.css('background-color', '#000000'); 
  h3Second.text('Listen to SKA!');
  h3Second.css('text-align', 'right');
}