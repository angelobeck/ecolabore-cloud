
me.actionParseAWP = function(test){
const lines = test.split("\n");
if(lines.length < 2){
say("Empty file");
return;
}

const linesLength = lines.length;
me.columns = me.awpColumns;
var rows = [];

for(let x = 0; x < linesLength; x++){
let line = lines[x];
let parts = line.split("=");
if(parts.length < 2)
continue;
if(/^[0-9]+$/.exec(parts[0]))
rows[rows.length] = me.awpParseRow(parts[1]);
}
me.rows = rows;

me.keyScaleY("y");

say(me.rows.length + ' linhas ' + me.columns.length + ' colunas reconhecidas');
};

me.awpParseRow = function(fromHex) {
const year = parseInt(fromHex.substr(0, 4), 16);
const month = parseInt(fromHex.substr(4, 2), 16);
const day = parseInt(fromHex.substr(6, 2), 16);
const date = year + '-' + me.awpPad(month) + '-' + me.awpPad(day);

const hour = parseInt(fromHex.substr(8, 2), 16);
const minutes = parseInt(fromHex.substr(10, 2), 16);
const time = me.awpPad(hour) + ':' + me.awpPad(minutes);

const sis = parseInt(fromHex.substr(16, 2), 16);
const dia = parseInt(fromHex.substr(20, 2), 16);
const m = parseInt(fromHex.substr(24, 2), 16);
const fc = parseInt(fromHex.substr(28, 2), 16);
const s = parseInt(fromHex.substr(36, 2), 16);

const pp = sis - dia;

const row = [
date,
time,
sis,
dia,
m,
fc,
s,
pp
];

for(let i = 0; i < row.length; i++){
let value = row[i];
let column = me.columns[i];

if(!column.min)
column.min = value;
else if(column.min > value)
column.min = value;

if(!column.max)
column.max = value;
else if(column.max < value)
column.max = value;
}

return row;
};

me.awpPad = function(number) {
var str = '' + number;
if(str.length < 2)
return '0' + str;
else
return str;
}
