
me.keyColorBackground = function(argument=false){

switch(argument){
case 0:
case 1:
case 2:
case 3:
me.image.colorBackground = argument;
break;

default:
me.image.colorBackground ++;
if(me.image.colorBackground > 3)
me.image.colorBackground = 0;
}

me.refreshCanvas();

switch(me.image.colorBackground){
case 0:
say('Fundo escuro');
break;

case 1:
say('Fundo claro');
break;

case 2:
say('Fundo cinza claro');
break;

case 3:
say('Fundo cinza escuro');
break;
}
};
