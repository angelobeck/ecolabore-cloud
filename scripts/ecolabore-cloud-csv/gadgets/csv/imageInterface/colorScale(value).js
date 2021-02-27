
colorScale(value){
if(value > 255)
value = 255;
else
value = ~~value;

if(this.colorScheme == 0){
if(this.colorBackground == 0){
this.r = value;
this.g = value;
this.b = value;
}else{
this.r = 255 - value;
this.g = 255 - value;
this.b = 255 - value;
}
return;
}

var mod = value % 64;
var index = (value - mod) / 64;
var fadeIn = mod / 64;
var fadeOut = 1 - fadeIn;

var palette = me.palettes[this.colorVariant];
this.r = ~~((palette.r[index] * fadeOut) + (palette.r[index + 1] * fadeIn));
this.g = ~~((palette.g[index] * fadeOut) + (palette.g[index + 1] * fadeIn));
this.b = ~~((palette.b[index] * fadeOut) + (palette.b[index + 1] * fadeIn));
};
