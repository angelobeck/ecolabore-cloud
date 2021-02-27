
var $listAllFunctions = function(folders){
var folder, subfolder, functionName;

var functionsList = [];

for(let i = 0;  i < folders.length; i++){
folder = folders[i];

if(typeof window[folder] != "object")
continue;

for(subfolder in window[folder]){
if(subfolder == "test")
continue;

if(typeof window[folder][subfolder] != "object")
continue;

for(functionName in window[folder][subfolder]){
if(functionName.includes("_test"))
continue;
if(functionName.includes("_moc"))
continue;
if(typeof window[folder][subfolder][functionName] != "function")
continue;

functionsList[functionsList.length] = { "folder":folder, "subfolder":subfolder, "functionName":functionName };
}
}
}

return functionsList;
};
