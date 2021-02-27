
me.eventKeyUp = function(event){

if(event.key != "Alt")
private.altKey = false;

if(private.altKey == false)
return;

private.altKey = false;

if(gadgets.menu.hasFocus == false)
gadgets.menu.element.focus();
else if(engine.focus.elementInFocus)
engine.focus.elementInFocus.focus();
};
