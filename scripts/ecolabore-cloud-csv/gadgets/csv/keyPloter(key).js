
me.keyPloter = function(key){
var name = "" + key;

if(ploters[name]){
me.ploter = name;
ploters[me.ploter].init(me);
me.refreshCanvas();
say('Ploter ' + ploters[name].menuOption.label + ' em uso');
return;
}

var names = Object.keys(ploters);
var index = 0;
for(; index < names.length; index++){
if(names[index] == me.ploter)
break;
}

index++;
if(index >= names.length)
index = 0;
name = names[index];

me.ploter = name;
ploters[me.ploter].init(me);
me.refreshCanvas();
say('Ploter ' + ploters[name].menuOption.label + ' em uso');
};
