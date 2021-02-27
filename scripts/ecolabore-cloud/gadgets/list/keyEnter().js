
me.keyEnter = function (){
if (!me.nodeInFocus)
return;

var data = me.nodeInFocus.data;
if (!data.type)
return;

switch (data.type){

case 'dir':
if (data.location)
gadgets.tree.actionGoLocation (data.location);
break;

case 'message':
gadgets.editor.load = data.location;
engine.popup.action = engine.url.message;
engine.popup.element.focus();
break;

case 'audio':
if (data.location)
engine.audio.play (data.location);
break;

case 'text':
gadgets.editor.load = data.location;
engine.popup.action = engine.url.editor;
engine.popup.element.focus();
break;

}
};
