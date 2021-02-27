
me.keyControlArrowDown = function (){
if (!me.nodeInFocus)
return;

var node = me.nodeInFocus;

if (!node.next)
return engine.audio.alertError();

me.nodeChangeFocus (node, node.next, node.selected, node.next.selected);
me.selectionStart = me.nodeInFocus;
};
