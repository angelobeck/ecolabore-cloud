
get next(){
if(this.index + 1 == this.parent.children.length)
return false;

return this.parent.children[this.index + 1];
};
