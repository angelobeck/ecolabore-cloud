
var $assertFail = function (argumentList, returnedValue){
$fails[$fails.length] = "Unexpected return on call " + $currentPath(argumentList, returnedValue);
};
