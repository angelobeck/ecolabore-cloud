
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

var valueRange = csv.valueMax - csv.valueMin;
var yScale = image.innerHeight / valueRange;
var yOffset = yScale * csv.valueMax;
var xScale = yScale;
var xOffset = image.innerHeight - yOffset;

var index;
var x;
var y;
var col1;
var col2;

for(let c = 0; c < columns.length; c++){
let column = columns[c];
if(column.hidden)
continue;

if(col1 === undefined){
col1 = c;
continue;
}
if(col2 === undefined){
col2 = c;
break;
}
}
if(col2 === undefined){
image.flush();
return;
}

image.colorStrong();
for(index = indexStart; index < indexEnd; index++){
y = ~~(yOffset - (yScale * rows[index][col1]));
x = ~~(xOffset + (xScale * rows[index][col2]));
image.pixel(x, y);
}
image.flush();
};
