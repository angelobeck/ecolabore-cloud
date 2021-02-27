
me.keyArrowUp = function (){
if (!me.nodeInFocus)
return;

var node = me.nodeInFocus;
if (!node.previous)
return engine.audio.alertError();

me.nodeUnselectAll();
me.nodeChangeFocus (node, node.previous);
me.selectionStart = me.nodeInFocus;
};
