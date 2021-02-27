
me.exec = function (argument=false){
if(typeof argument != "string" || argument.length == 0)
return;

gadgets.menu.eventBlur();
gadgets.menu.element.focus();


for(let i = 0; i < gadgets.menu.children.length; i++){
let node = gadgets.menu.children[i];
if(node.data.argument && node.data.argument == argument){
gadgets.menu.nodeChangeFocus(gadgets.menu.nodeInFocus, node);
gadgets.menu.keyEnter();
return;
}
}

};
