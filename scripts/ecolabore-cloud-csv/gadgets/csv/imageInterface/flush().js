
flush(){
this.context.putImageData(this.image, 0, 0);

this.context.font = "16px Arial";
for(let i = 0; i < this.textToDraw.length; i++){
let [text, x, y, r, g, b] = this.textToDraw[i];
this.context.fillStyle = "rgb(" + r + ", " + g + ", " + b + ")";
this.context.fillText(text, x, y); 
}

this.textToDraw = [];
};
