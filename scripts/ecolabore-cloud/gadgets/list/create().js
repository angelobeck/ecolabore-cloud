
me.create = function (){
me.element = document.getElementById("list");
if (!me.element)
return;

me.element.setAttribute ("role", "listbox");
me.element.setAttribute("tabindex", 0);
me.element.addEventListener("focus", me.eventFocus);
me.element.addEventListener ("keydown", me.eventKeyDown);

};
