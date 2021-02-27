
me.eventFocus = function (){
me.hasFocus = true;

if (!me.nodeInFocus){
if (!me.firstNode)
return;

me.nodeInFocus = me.firstNode;
}

me.nodeInFocus.element.classList.add("active");
me.nodeCheckActions (me);
};
