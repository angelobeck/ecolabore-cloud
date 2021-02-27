
me.keyColorScheme = function(){
if(me.image.colorScheme == 0)
me.image.colorScheme = 1;
else
me.image.colorScheme = 0;

me.refreshCanvas();

if(me.image.colorScheme == 0)
say('Gráfico em preto e branco');
else
say('Gráfico colorido');
};
