
me.actionParseData = function(test){
var lines = test.split("\n");
if(lines.length < 2){
say("Empty file");
return;
}

var linesLength = lines.length;
var columns = [];
var rows = [];
rows[linesLength - 1] = [];

for(let x = 0; x < linesLength; x++){
rows[x] = [];
let line = lines[x];
let parts = line.split("\t");
let partsLength = parts.length;

for(let y = 0; y < partsLength; y++){
let value = parseFloat(parts[y]);

if(!columns[y])
columns[y] = { "min":0, "max":0, "hidden":false };

if(value < columns[y].min)
columns[y].min = value;
else if(value > columns[y].max)
columns[y].max = value;

rows[x][y] = value;
}
}

me.columns = columns;
me.rows = rows;

me.columns[0].hidden = true;
me.keyScaleY("y");

say(rows.length + ' linhas ' + columns.length + ' colunas reconhecidas');
};
