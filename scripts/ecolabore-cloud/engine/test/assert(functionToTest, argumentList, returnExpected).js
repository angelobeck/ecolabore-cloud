
me.assert = function (functionToTest, argumentList, returnExpected){
var [arg1, arg2, arg3, arg4] = argumentList;
var returnedValue = functionToTest(arg1, arg2, arg3, arg4);
if(returnedValue != returnExpected){
$assertFail(argumentList, returnedValue);
$currentStatus = 'failed';
}
};
