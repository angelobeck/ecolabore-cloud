
me.eventChange = function(){
if(me.element.files.length == 0)
return;

me.processReceivedFiles(me.element.files);
};
