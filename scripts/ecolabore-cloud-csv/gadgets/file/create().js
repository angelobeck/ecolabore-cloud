
me.create = function(){
me.element = document.createElement("INPUT");
me.element.setAttribute("type", "file");
me.element.style.display = "none";
me.element.id = "open_local_file";
me.element.addEventListener("change", me.eventChange);

document.body.appendChild(me.element);
};
