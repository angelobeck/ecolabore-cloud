
me.print = function(csv){

var image = csv.image;
var columns = csv.columns;
var rows = csv.rows;

image.clear();
me.printScaleY(csv);

var indexStart = ~~csv.indexMin;
var indexEnd = ~~csv.indexMax;
if(indexEnd >= rows.length)
indexEnd = rows.length - 1;

var xMax = image.innerWidth;
var xScale = (indexEnd - indexStart) / xMax;

var valueRange = csv.valueMax - csv.valueMin;
var yScale = image.innerHeight / valueRange;
var yOffset = yScale * csv.valueMax;

var index;
var indexPrevious;
var x;
var y;

for(let c = 0; c < columns.length; c++){
let column = columns[c];
if(column.hidden)
continue;

image.colorPalette(c);

for(x = 0; x < xMax; x++){

if(x == 0){
y = ~~(yOffset - (yScale * rows[indexStart][c]));
image.pixel(x, y);

indexPrevious = indexStart;
continue;
}

index = ~~(indexStart + (x * xScale));
if(index > indexEnd)
index = indexEnd;

if(index == indexPrevious)
continue;

if(index == indexPrevious + 1){
y = ~~(yOffset - (yScale * rows[index][c]));
image.pixel(x, y);

indexPrevious = index;
continue;
}

for(let horse = indexPrevious + 1; horse <= index; horse++){
y = ~~(yOffset - (yScale * rows[horse][c]));
image.pixel(x, y);
}
indexPrevious = index;

} // x
} // c

image.flush();
};
