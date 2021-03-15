
me.create = function (){
me.workspace = document.getElementById("workspace");
if (!me.workspace)
return;

var width = me.workspace.offsetWidth;
var height = ~~(width / 2);

me.workspace.innerHTML = '<canvas id="csv" width="' + width + '" height="' + height + '"></canvas>';
me.element = document.getElementById("csv");
me.element.style.width = width;
me.element.style.height = height;
me.element.setAttribute("tabindex", "0");
me.element.addEventListener("keydown", me.eventKeyDown);
me.element.addEventListener("keyup", me.eventKeyUp);
me.element.addEventListener("focus", me.eventFocus);
me.element.addEventListener("click", me.eventClick);

me.element.addEventListener("dragenter", me.eventDragEnter, false);
me.element.addEventListener("dragover", me.eventDragOver, false);
me.element.addEventListener("drop", me.eventDrop, false);

engine.focus.elementInFocus = me.element;
me.element.focus();

me.image = new imageInterface(me.element);
me.xMax = me.image.innerWidth;
me.image.clear();
me.image.flush();
};
