
me.keyScaleX = function(key){
if(me.rows.length == 0)
return;

var indexStep = me.indexStep;
var indexDelta = me.indexMax - me.indexMin;

var indexModule = 0;
if(indexStep != 0)
indexModule = me.indexMin % indexStep;

me.indexMin -= indexModule;
me.indexMax = me.indexMin + indexDelta;

var indexEnd = me.rows.length;

switch(key){
case "x":
me.indexMin = 0;
me.indexMax = me.rows.length;
break;

case "z":
if(indexStep != 0)
me.indexMax = ~~me.indexMin + indexStep;
else
me.indexMax = me.indexMin + me.image.innerWidth;
if(me.indexMax > indexEnd){
me.indexMax = indexEnd;
me.indexMin = me.indexEnd - me.image.innerWidth;
if(me.indexMin < 0)
me.indexMin = 0;
}
break;

case "ArrowUp":
if(indexStep != 0 && me.indexMax - indexStep <= me.indexMin + indexStep)
me.indexMax = me.indexMin + indexStep;
else if(indexStep != 0)
me.indexMax -= indexStep;
else if(indexDelta == 1)
return;
else if(~~(indexDelta * 0.09090909090909) < 2)
me.indexMax --;
else
me.indexMax -= ~~(indexDelta * 0.090909090909);
break;

case "ArrowDown":
if(indexStep != 0)
me.indexMax += indexStep;
else if(~~(indexDelta / 10) < 2)
me.indexMax ++;
else
me.indexMax += ~~(indexDelta / 10);
if(me.indexMax > indexEnd){
me.indexMin -= me.indexMax - indexEnd;
me.indexMax = indexEnd;
if(me.indexMin < 0)
me.indexMin = 0;
}
break;
}

me.indexMin = ~~me.indexMin;
me.indexMax = ~~me.indexMax;

say('Exibindo valores X=' + me.indexMin + ' a X=' + me.indexMax);
me.refreshCanvas();
};
