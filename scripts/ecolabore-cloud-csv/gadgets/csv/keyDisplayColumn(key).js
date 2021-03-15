
me.keyDisplayColumn = function(key){
var n = parseInt(key);
n --;

if(!me.columns[n])
return;

me.columns[n].hidden = !me.columns[n].hidden;

if(me.columns[n].hidden)
say('Ocultando coluna ' + (n + 1));
else
say('Exibindo coluna ' + (n + 1));

me.refreshCanvas();
};
