
me.keyDisplayGrid = function(key=false){
switch(key){
case "0":
case "1":
case "2":
me.grid = 0 + key;
break;

default:
me.grid++;
if(me.grid > 2)
me.grid = 0;
}

if(me.grid == 0)
say("A grade está oculta");
else if(me.grid == 1)
say("A grade está visível");
else
say("A grade é detalhada");

me.refreshCanvas();
};
