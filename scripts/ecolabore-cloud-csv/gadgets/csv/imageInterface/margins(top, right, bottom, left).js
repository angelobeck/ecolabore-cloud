
margins(top, right, bottom, left){
this.marginTop = top;
this.marginRight = right;
this.marginBottom = bottom;
this.marginLeft = left;
this.innerWidth = this.width - (left + right);
this.innerHeight = this.height - (top + bottom);
};
