
var $currentPath = function (argumentList=[], returnedValue=undefined){
var buffer =  $currentTest.folder + '.' + $currentTest.subfolder + '.' + $currentTest.functionName + '(';
buffer += $arrayToString(argumentList);
buffer += ')';
if(returnedValue !== undefined)
buffer += ": " + $valueToString(returnedValue);
return buffer;
};
