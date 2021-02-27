
clear(){
var data = this.data;
var length = data.length;
var v = 0;
if(this.colorBackground == 1)
v = 255;
else if(this.colorBackground == 2)
v = 170;
else if(this.colorBackground == 2)
v = 85;

for(let i = 0; i < length; i += 4){
data[i] = v;
data[i + 1] = v;
data[i + 2] = v;
data[i + 3] = 255;
}
};
