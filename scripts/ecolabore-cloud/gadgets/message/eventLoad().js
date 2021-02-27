
me.eventLoad = function (){
me.element = document.getElementById("message");
if(!me.element)
return;

me.progressBar = document.getElementById("progress");
me.progressBar.setAttribute("max", 100);
me.progressBar.setAttribute("aria-live", "polite");
me.progressValue = document.getElementById("progressvalue");

me.element.setAttribute("aria-live", "polite");

window.say = me.replaceText;
};
