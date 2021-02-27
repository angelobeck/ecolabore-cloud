
constructor (parent, data, recursive=false, firstLevel=false){
this.parent = parent;
this.index = parent.children.length;
parent.children[this.index] = this;
this.data = data;
this.children = [];
this.id = parent.id + "_" + this.index;
me.nodesById[this.id] = this;

if (firstLevel){
this.container = document.createElement ("SPAN");
this.element = document.createElement ("SPAN");
}else{
this.container = document.createElement ("DIV");
this.element = document.createElement ("DIV");
}
this.submenu = document.createElement ("DIV");

this.container.className = "menu-container";
this.element.className = "menu-item";
this.submenu.className = "menu-submenu";

this.element.setAttribute ("role", "menuitem");

this.element.onclick = function (event){
me.nodeChangeFocus (me.nodeInFocus, me.nodesById[this.id]);
me.keyEnter(); 
};
this.element.onmouseover = function (event){
me.nodeChangeFocus (me.nodeInFocus, me.nodesById[this.id]);
};
this.element.oncontextmenu = function (event){
event.preventDefault();
me.nodeChangeFocus (me.nodeInFocus, me.nodesById[this.id]);
me.keyContextMenu(); 
return false;
};

this.element.id = this.id;

var labelText = document.createElement ("SPAN");
labelText.className = "menu-label";
if (data.label)
labelText.appendChild (document.createTextNode (data.label));

var labelShortcut = document.createElement ("SPAN");
labelShortcut.className = "menu-shortcut";

if (data.shortcut){
var shortcut = " " + data.shortcut.replace (/[_]/g, "+");
labelShortcut.appendChild (document.createTextNode (shortcut));
}else if (data.falseShortcut){
var shortcut = " " + data.falseShortcut.replace (/[_]/g, "+");
labelShortcut.appendChild (document.createTextNode (shortcut));
}

this.element.appendChild (labelText);
this.element.appendChild (labelShortcut);

this.submenu.hidden = true;
this.container.appendChild (this.element);
this.container.appendChild (this.submenu);

if (firstLevel)
parent.element.appendChild (this.container);
else
parent.submenu.appendChild (this.container);

if(data.action && data.shortcut && actions[data.action]){
let argument = data.argument || false;
engine.shortcuts[data.shortcut] = { "action":actions[data.action], "argument":argument};
}
if (recursive && data.children && data.children.length)
{ // create child nodes
for (var i = 0; i < data.children.length; i++){
var child = new nodeInterface (this, data.children[i], true);
}
this.element.setAttribute ("aria-haspopup", true);
} // create child nodes

};
