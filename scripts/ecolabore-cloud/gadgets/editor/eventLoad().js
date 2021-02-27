
me.eventLoad = function (){
me.element = document.getElementById("editor");
if (!me.element)
return;

me.command = document.getElementById ("command");
me.command.addEventListener ("keydown", me.eventKeyDown);
me.command.addEventListener ("keypress", me.eventKeyPress);

me.element.onfocus = function () { me.command.focus(); };

engine.focus.elementInFocus = me.command;
if (!window.opener.gadgets.editor.load)
return;

var location = window.opener.gadgets.editor.load;
window.opener.gadgets.editor.load = false;

me.actionLoad (location);
};

window.addEventListener ("load", me.eventLoad);
