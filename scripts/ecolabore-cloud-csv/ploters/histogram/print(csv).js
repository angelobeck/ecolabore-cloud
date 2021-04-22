
me.print = function(csv){

var image = csv.image;
var columns = csv.columns;
var rows = csv.rows;

image.clear();

var indexStart = ~~csv.indexMin;
var indexEnd = ~~csv.indexMax;
if(indexEnd >= rows.length)
indexEnd = rows.length - 1;

var valueMax = csv.valueMax;
var valueMin = csv.valueMin;
var valueRange = valueMax - valueMin;
var valueStep = ~~(csv.magnitude(valueRange) / 2);

var enabledColumns = [];

// discover enabled columns
for(let c = 0; c < columns.length; c++){
let column = columns[c];
if(column.hidden)
continue;
if(column.dataType && column.dataType != 'int' && column.dataType != 'float')
continue;

enabledColumns[enabledColumns.length] = c;
}

if(enabledColumns.length == 0){
image.flush();
return;
}

// creates an empty table
var histogram = [];
for(let i = valueMin, step = 0; i <= valueMax; i += valueStep, step++){
histogram[step] = [];
for(let c = 0; c < enabledColumns.length; c++) {
histogram[step][c] = 0;
}
}

// populates the new table counting how many times a values matches a cell
var max = 0;
for(let index = indexMin; index < indexMax; index++){
for (let c = 0; c < enabledColumns.length; c++) {
let value = rows[index][enabledColumns[c]];
if(value > valueMax || value < valueMin)
continue;

let step = ~~(value / valueStep);
histogram[step][c] ++;
if(histogram[step][c] > max)
max = histogram[step][c];
}
}

// prints table
for(let c = 0; c < enabledColumns.length; c++) {
for(let step = 0; step < histogram.length; step++) {

}
}

image.flush();
};
