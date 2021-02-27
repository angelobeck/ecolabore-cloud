
me.keyEnter = function (){
var node = me.nodeInFocus;

me.nodeCheckActions (node);
if (node.element.tagName != "SPAN" && node.children.length > 0)
{ // open submenu
node.submenu.hidden = false;
setTimeout (function (){
me.nodeChangeFocus (me.nodeInFocus, me.nodeInFocus.children[0]);
}, 10);
return;
} // open submenu

var argument = node.data.argument || false; 
if (node.data.action && actions[node.data.action] && actions[node.data.action].enabled(argument))
{ // execute action

if (engine.focus.elementInFocus)
engine.focus.elementInFocus.focus();
else
me.nodeChangeFocus(node, me.firstNode);
actions[node.data.action].exec(argument);
return;
} // execute action

};
