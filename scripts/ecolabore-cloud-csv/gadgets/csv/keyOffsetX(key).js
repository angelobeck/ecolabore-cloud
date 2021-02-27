
me.keyOffsetX = function(key){
if(me.rows.length == 0)
return;

var indexMin = me.indexMin;
var indexMax = me.indexMax;
var indexDelta = indexMax - indexMin;
var indexEnd = me.rows.length;
var indexStep = me.indexStep;

switch(key){
case "ArrowLeft":
if(indexStep != 0)
indexMin -= indexStep;
else if(~~(indexDelta / 10) < 2)
indexMin --;
else
indexMin -= ~~(indexDelta / 10);
break;

case "ArrowRight":
if(indexStep != 0)
indexMin += indexStep;
else if(~~(indexDelta / 10) < 2)
indexMin ++;
else
indexMin += indexDelta / 10;
break;

case "PageUp":
indexMin -= indexDelta;
break;

case "PageDown":
indexMin += indexDelta;
break;

case "Home":
indexMin = 0;
break;

case "End":
indexMin = indexEnd;
}

if(indexMin + indexDelta > indexEnd)
indexMin = indexEnd - indexDelta;
if(indexMin < 0)
indexMin = 0;

if(indexMin == me.indexMin)
return;

me.indexMin = ~~indexMin;
me.indexMax = ~~(indexMin + indexDelta);

say('Iniciando em X=' + me.indexMin);
me.refreshCanvas();
};
