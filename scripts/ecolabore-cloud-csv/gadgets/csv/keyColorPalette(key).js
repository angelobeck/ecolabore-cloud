
me.keyColorPalette = function(key){
var name = "" + key;
for(let index = 0; index < me.palettes.length; index++){
let palette = me.palettes[index];
if(palette.name == name){
me.image.colorVariant = index;
me.refreshCanvas();
say('Paleta ' + palette.label + ' em uso');
return;
}
}

let index = me.image.colorVariant;
index ++;
if(index >= me.palettes.length)
index = 0;

me.image.colorVariant = index;

me.refreshCanvas();

say('Paleta ' + me.palettes[index].label + ' em uso');
};
