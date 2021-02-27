
colorPalette(index){

const colors = [
[255, 255, 255],
[255, 0, 0],
[0, 255, 0],
[0, 0, 255],
[255, 127, 0],
[0, 255, 255],
[255, 0, 255],
[255, 255, 0],
[127, 127, 127]
];

index += this.colorVariant;
index %= colors.length;

if(this.colorBackground == 0 || this.colorBackground == 2){
this.r = colors[index][0];
this.g = colors[index][1];
this.b = colors[index][2];
}else{
this.r = 255 - colors[index][0];
this.g = 255 - colors[index][1];
this.b = 255 - colors[index][2];
}

if(this.colorScheme == 0){
let value = (0.299 * this.r) + (0.587 * this.g) + (0.114 * this.b);
this.r = value;
this.g = value;
this.b = value;
}
};
