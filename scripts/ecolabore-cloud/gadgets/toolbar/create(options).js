
me.create = function (options){
me.element = document.getElementById("toolbar");
if (!me.element)
return;

me.element.setAttribute("tabindex", 0);
me.element.setAttribute ("role", "menu");
me.element.addEventListener ("keydown", me.eventKeyDown);
me.element.addEventListener ("blur", me.eventBlur);
me.element.addEventListener ("focus", me.eventFocus);

for (let i = 0; i < options.length; i++){
let current = options[i];
let node = new nodeInterface (me, current, true, true);
if (i == 0){
me.nodeInFocus = node;
me.firstNode = node;
}
}
me.element.setAttribute ("aria-activedescendant", me.nodeInFocus.id);
};
