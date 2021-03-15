
me.printScaleY = function(csv){
const image = csv.image;

if(csv.grid == 0){
image.margins(10, 10, 10, 10);
return;
}

image.margins(30, 10, 30, 10);

var x;
var y;
var value;
var valueRange = csv.valueMax - csv.valueMin;
var xMax = image.innerWidth;
var yMax = image.innerHeight;
var yScale = yMax / valueRange;
var yOffset = csv.valueMax * yScale;

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

image.line(0, y, 30, y);

if(csv.grid == 1)
continue;

image.colorLight();
for(let shortStep = 1; shortStep < 10; shortStep++){
y = ~~(yOffset - (yScale * (value + (shortStep * valueShortStep))));
image.line(10, y, 30, y);
} // shortStep
} // valueStep

image.colorStrong();

image.text("" + csv.valueMax, 0, 0);
image.line(0, 0, xMax, 0);

image.text("" + csv.valueMin, 0, yMax);
image.line(0, yMax, xMax, yMax);

image.margins(30, 10, 30, 50);
};
