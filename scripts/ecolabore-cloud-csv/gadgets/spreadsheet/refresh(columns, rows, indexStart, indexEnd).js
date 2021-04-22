
me.refresh = function(columns, rows, indexStart, indexEnd){
if(!me.element)
return;
if(rows.length == 0) {
me.element.innerHTML = '';
return;
}

const labels = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
var label = '';

var buffer = '<tr><td>ROW</td>';
for(let c = 0; c < columns.length; c++) {
if(columns[c].label)
label = columns[c].label;
else
label = labels[c];
buffer += '<td>' + label + '</td>';
}
buffer += '</tr>';


if(indexStart < 0 || indexStart >= rows.length)
indexStart = 0;
if(indexEnd < 0 || indexEnd >= rows.length)
indexEnd = rows.length - 1;
if(indexEnd - indexStart < 0)
return;
if(indexEnd - indexStart > 200)
indexEnd = indexStart + 200;

for(let index = indexStart; index <= indexEnd; index++) {
buffer += '<tr><td>' + index + '</td>';

for(let c = 0; c < columns.length; c++){
buffer += '<td>' + rows[index][c] + '</td>';
}
buffer += '</tr>';
}
me.element.innerHTML = buffer;
};
