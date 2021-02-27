
me.eventBlur = function (){
me.hasFocus = false;

me.nodeChangeFocus (me.nodeInFocus, me.firstNode);
me.nodeInFocus.element.classList.remove("active");
me.nodeInFocus.submenu.hidden = true;
};
