
me.keyArrowDown = function (){
if (!me.nodeInFocus)
return;

var node = me.nodeInFocus;
if (!node.next)
return engine.audio.alertError();

me.nodeUnselectAll();
me.nodeChangeFocus (node, node.next);
me.selectionStart = me.nodeInFocus;
};
