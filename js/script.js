var html = '';
var rgbColor;

function randomRGB() {
  return Math.floor(Math.random() * 256 );
}

function randomColor() { /* creating a function means it can be used elsewhere, outside the for loop */
  var color = 'rgb(';
  color += randomRGB() + ','; /* calls the randomRGB function, adds a comma, then adds that to the color variable */
  color += randomRGB() + ',';
  color += randomRGB() + ')';
  return color;
}

function print(message) {
  document.write(message);
}

for ( var i = 0; i <= 1000; i += 1 ) {
  rgbColor = randomColor();
  html += '<div style="background-color:' + rgbColor + '"></div>';
}
print(html);
