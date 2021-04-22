
me.print = function(csv){
const image = csv.image;
const columns = csv.columns;
const rows = csv.rows;

image.clear();
ploters.waveDots.printScaleY(csv);

var indexStart = ~~csv.indexMin;
var indexEnd = ~~csv.indexMax;
if(indexEnd >= rows.length)
indexEnd = rows.length - 1;

var xMax = image.innerWidth;
var xScale = (indexEnd - indexStart) / xMax;

var valueRange = csv.valueMax - csv.valueMin;
var yScale = csv.image.innerHeight / valueRange;
var yOffset = yScale * csv.valueMax;

var index;
var indexPrevious;
var x;
var xPrevious;
var y;
var yMin;
var yMax;
var yPrevious;

for(let c = 0; c < columns.length; c++){
if(columns[c].hidden)
continue;
if(columns[c].dataType && columns[c].dataType != 'int' && columns[c].dataType != 'float')
continue;


image.colorPalette(c);

for(x = 0; x < xMax; x++){

if(x == 0){
y = ~~(yOffset - (yScale * rows[indexStart][c]));
image.pixel(x, y);

indexPrevious = indexStart;
xPrevious = x;
yPrevious = y;
continue;
}

index = ~~(indexStart + (x * xScale));
if(index >= rows.length)
index = rows.length - 1;

if(index == indexPrevious)
continue;

y = ~~(yOffset - (yScale * rows[index][c]));

if(x > xPrevious + 1){
image.line(xPrevious, yPrevious, x, y);

xPrevious = x;
yPrevious = y;
indexPrevious = index;
continue;
}

yMin = y;
yMax = y;

for(let intermediateIndex = indexPrevious + 1; intermediateIndex < index; intermediateIndex++){
let yCurrent = ~~(yOffset - (yScale * rows[intermediateIndex][c]));
if(yCurrent > yMax)
yMax = yCurrent;
else if(yCurrent < yMin)
yMin = yCurrent;
}

if(yPrevious > yMax)
yMax = yPrevious - 1;
else if (yPrevious < yMin)
yMin = yPrevious + 1;

image.line(x, yMax, x, yMin);

xPrevious = x;
yPrevious = y;
indexPrevious = index;

} // x
} // c

image.flush();
};
