
line(x1, y1, x2, y2){
var x, y;

if(x2 < x1)
[x1, y1, x2, y2] = [x2, y2, x1, y1];

if(x1 == x2){
if(y1 > y2)
[y1, y2] = [y2, y1];

for(y = y1; y <= y2; y++){
this.pixel(x1, y);
}
return;
}

if(y1 == y2){
for(x = x1; x <= x2; x++){
this.pixel(x, y1);
}
return;
}

var deltaX = x2 - x1;
var deltaY = (y1 < y2) ? y2 - y1 : y1 - y2;
var a;

if(deltaX >= deltaY){
a = deltaY / deltaX;
if(y1 > y2)
a *= -1;
for(x = x1; x <= x2; x++){
y = ~~(y1 + (a * (x - x1)));
this.pixel(x, y);
}
return;
}

a = deltaX / deltaY;

if(y1 < y2){
for(y = y1; y <= y2; y++){
x = ~~(x1 + (a * (y - y1)));
this.pixel(x, y);
}
return;
}

for(y = y1; y >= y2; y--){
x = ~~(x1 + (a * (y - y1)));
this.pixel(x, y);
}

};

