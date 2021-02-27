
rect(x1, y1, width, height){
var x, y;

for(x = x1; x < x1 + width; x++){
for(y = y1; y < y1 + height; y++){
this.pixel(x, y);
}
}
};
