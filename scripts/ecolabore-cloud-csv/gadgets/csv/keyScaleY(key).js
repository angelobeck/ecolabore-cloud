
me.keyScaleY = function(key){
if(me.rows.length == 0)
return;
if(me.columns.length == 0)
return;

switch(key){
case "y":
var min = 0;
var max = 0;

for(let c = 0; c < me.columns.length; c++){
if(me.columns[c].hidden)
continue;

if(max < me.columns[c].max)
max = me.columns[c].max;
if(min > me.columns[c].min)
min = me.columns[c].min;
}

if(max == 0 && min == 0)
return;

me.valueMin = min;
me.valueMax = max;
say('Exibindo valores Y=' + me.valueMin + ' a Y=' + me.valueMax);
break;

}

me.refreshCanvas();
};
