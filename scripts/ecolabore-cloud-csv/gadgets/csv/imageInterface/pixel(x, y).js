
pixel(x, y){
if(x < 0 || x > this.innerWidth)
return;
if(y < 0 || y > this.innerHeight)
return;

x += this.marginLeft;
y += this.marginTop;

var p = (y * this.width * 4) + (x * 4);
if(p + 3 > this.data.length)
return;

if(this.colorBackground == 0){
if(this.data[p] + this.r > 255)
this.data[p] = 255;
else
this.data[p] += this.r;

if(this.data[p + 1] + this.g > 255)
this.data[p + 1] = 255;
else
this.data[p + 1] += this.g;

if(this.data[p + 2] + this.b > 255)
this.data[p + 2] = 255;
else
this.data[p + 2] += this.b;

}else if(this.colorBackground == 1){

if(this.data[p] - (255 - this.r) < 0)
this.data[p] = 0;
else
this.data[p] -= 255 - this.r;

if(this.data[p + 1] - (255 - this.g) < 0)
this.data[p + 1] = 0;
else
this.data[p + 1] -= 255 - this.g;

if(this.data[p + 2] - (255 - this.b) < 0)
this.data[p + 2] = 0;
else
this.data[p + 2] -= 255 - this.b;
}else{
this.data[p] = this.r;
this.data[p + 1] = this.g;
this.data[p + 2] = this.b;
}
};
