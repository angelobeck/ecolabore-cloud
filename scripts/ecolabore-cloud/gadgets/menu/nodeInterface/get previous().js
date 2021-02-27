
get previous(){
if(this.index == 0)
return false;

return this.parent.children[this.index - 1];
};
