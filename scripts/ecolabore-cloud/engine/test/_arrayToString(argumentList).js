
var $arrayToString = function (argumentList){
if(!Array.isArray(argumentList))
return '';
if(!argumentList.length)
return '';

var values = [];
for(let i = 0; i < argumentList.length; i++){
values[values.length] = $valueToString(argumentList[i]);
}
return values.join(', ');
};
