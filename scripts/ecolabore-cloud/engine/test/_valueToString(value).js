
var $valueToString = function(value){
if(Array.isArray(value))
return '[' + $arrayToString(value) + ']';

if(typeof value == "string")
return '"' + value + '"';

return '' + value;
};
