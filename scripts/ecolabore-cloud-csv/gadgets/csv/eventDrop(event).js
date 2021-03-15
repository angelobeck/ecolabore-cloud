
me.eventDrop = function(event){
event.stopPropagation();
event.preventDefault();


if(event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files.length > 0)
return gadgets.file.processReceivedFiles(event.dataTransfer.files);
};
