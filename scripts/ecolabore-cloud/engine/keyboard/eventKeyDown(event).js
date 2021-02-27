
me.eventKeyDown = function(event){

if(event.key == "Alt")
private.altKey = true;
else
private.altKey = false;

var key = "";
if(event.ctrlKey)
key = "Ctrl_";
if(event.shiftKey)
key += "Shift_";
if(event.altKey || event.metaKey)
key += "Alt_";

key += event.key;

if(!engine.shortcuts[key])
return;

var shortcut = engine.shortcuts[key];
if(!shortcut.action.enabled(shortcut.argument))
return;

event.stopPropagation();
event.preventDefault();
shortcut.action.exec(shortcut.argument);

};
