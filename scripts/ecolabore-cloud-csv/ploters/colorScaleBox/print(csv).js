
me.print = function(csv){
const brickBoxPadding = 10;

const image = csv.image;
const columns = csv.columns;
const rows = csv.rows;

var brickRows = 1;
if(csv.indexStep && csv.indexStep > 0)
brickRows = csv.indexStep;

var brickColumns = ~~((csv.indexMax - csv.indexMin) / brickRows);
if(brickColumns < 1)
brickColumns = 1;

if(brickColumns >= image.innerWidth)
brickColumns = image.innerWidth;

var index;
var indexModule = csv.indexMin % brickRows;
var indexStart = ~~(csv.indexMin - indexModule);
if(indexStart < 0)
indexStart = 0;
var indexMax = rows.length;

var x;
var y;
var brickCounter;
var value;
var valueRange = csv.valueMax - csv.valueMin;
var valueScale = 255 / valueRange;
var valueOffset = csv.valueMin * valueScale * -1;

image.clear();
me.printScaleY(csv);

var visibleColumns = 0;
for(let c = 0; c < columns.length; c++){
if(columns[c].hidden)
continue;

visibleColumns ++;
} // c

if(visibleColumns == 0){
image.flush();
return;
}

var brickBoxHeight = ~~(image.height / visibleColumns);
var brickBoxInnerHeight = brickBoxHeight - (2 * brickBoxPadding);
var brickBoxInnerWidth = image.width - (brickBoxPadding + 100);
var brickWidth = ~~(brickBoxInnerWidth / brickColumns);
var brickHeight = ~~(brickBoxInnerHeight / brickRows);

currentColumn = 0;
for(let c = 0; c < columns.length; c++){
let column = columns[c];
if(column.hidden)
continue;

currentColumn++;

var top = (brickBoxHeight * (currentColumn - 1)) + brickBoxPadding
image.margins(top, brickBoxPadding, 0, 130);

brickCounter = 0;

for(let brickColumn = 0; brickColumn < brickColumns; brickColumn++){
x = brickColumn * brickWidth;

for(let brickRow = 0; brickRow < brickRows; brickRow ++){
brickCounter ++;
index = indexStart + brickCounter;

if(index < 0 || index >= indexMax)
continue;

value = ~~(valueOffset + valueScale * rows[index][c]);
image.colorScale(value);
y = brickRow * brickHeight;
image.rect(x, y, brickWidth, brickHeight);

} // brickRow
} // brickColumn
} // c

image.flush();
};
