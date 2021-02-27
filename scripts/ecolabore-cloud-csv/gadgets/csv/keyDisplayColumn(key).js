
me.keyDisplayColumn = function(key){
var n = parseInt(key);

if(!me.columns[n])
return;

me.columns[n].hidden = !me.columns[n].hidden;

if(me.columns[n].hidden)
say('Ocultando coluna ' + n);
else
say('Exibindo coluna ' + n);

me.refreshCanvas();
};
