
me.printScaleY = function(csv){
const image = csv.image;
image.margins(30, 10, 30, 10);

var x;
var y;
var value;
var valueRange = csv.valueMax - csv.valueMin;
var yMax = image.innerHeight;
var yScale = yMax / valueRange;
var yOffset = csv.valueMax * yScale;

var colorScale = 255 / yMax;
var color;

for(y = 0; y < yMax; y++){
color = (yMax - y) * colorScale; 
image.colorScale(color);
image.line(30, y, 70, y);
} // scale

if(csv.grid == 0)
return;

var valueStep = csv.magnitude(valueRange);
var valueShortStep = valueStep / 10;

if(csv.valueMin <= 0)
for(value = 0; value - valueStep > csv.valueMin; value -= valueStep);
else
for(value = 0; value + valueStep < csv.valueMin; value += valueStep);

for(; value < csv.valueMax; value += valueStep){
image.colorStrong();
y = ~~(yOffset - (yScale * value));

if(value == 0)
image.text("0", 0, y);

for(x = 0; x < 30; x++){
image.pixel(x, y);
} // x

if(csv.grid == 1)
continue;

image.colorLight();
for(let shortStep = 1; shortStep < 10; shortStep++){
y = ~~(yOffset - (yScale * (value + (shortStep * valueShortStep))));
for(x = 10; x < 30; x++){
image.pixel(x, y);
} // x
} // shortStep
} // valueStep


// print max value
image.colorStrong();
image.text("" + csv.valueMax, 0, 0);
for(x = 0; x < 30; x++){
image.pixel(x, 0);
} // x

// print min value
image.text("" + csv.valueMin, 0, yMax);
for(x = 0; x < 30; x++){
image.pixel(x, yMax);
} // x

};
