
me.eventLoad = function(){
document.addEventListener("keydown", me.eventKeyDown);
document.addEventListener("keyup", me.eventKeyUp);
};

window.addEventListener("load", me.eventLoad);
