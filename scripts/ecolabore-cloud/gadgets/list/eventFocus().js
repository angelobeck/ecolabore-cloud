
me.eventFocus = function(){
if(engine.focus.gadgetInFocus == me)
return;

if(engine.focus.gadgetInFocus && engine.focus.gadgetInFocus.eventBlur)
engine.focus.gadgetInFocus.eventBlur();

engine.focus.gadgetInFocus = me;

engine.focus.elementInFocus = me.element;
};