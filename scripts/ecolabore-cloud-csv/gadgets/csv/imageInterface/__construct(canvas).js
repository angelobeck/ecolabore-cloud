
constructor(canvas){
this.textToDraw = [];
this.canvas = canvas;
this.context = canvas.getContext("2d");
this.width = canvas.width;
this.height = canvas.height;
this.marginTop = 10;
this.marginRight = 10;
this.marginBottom = 10;
this.marginLeft = 10;
this.innerWidth = this.width - (this.marginLeft + this.marginRight);
this.innerHeight = this.height - (this.marginTop + this.marginBottom);
this.colorBackground = 0;
this.colorScheme = 1;
this.colorVariant = 0;
this.image = this.context.createImageData(this.width, this.height);
this.data = this.image.data;
this.r = 127;
this.g = 127;
this.b = 127;
};
