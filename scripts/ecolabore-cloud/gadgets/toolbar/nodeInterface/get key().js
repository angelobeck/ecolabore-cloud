
get key(){
if (this.data.key)
return this.data.key;

if(this.data.label)
return this.data.label.substr (0, 1).toLowerCase();

return this.element.firstElementChild.innerText.substr (0, 1).toLowerCase();
};