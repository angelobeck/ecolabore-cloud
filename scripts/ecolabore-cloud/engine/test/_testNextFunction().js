
var $testNextFunction = function (){

if($testTimeout > 0){
$testTimeout --;
if($testTimeout > 0){
setTimeout($testNextFunction, 50);
return;
}
$failTimeout();
}

if($functionsListIndex >= $functionsList.length){
gadgets.message.progress(1);
me.actionRefresh();
return;
}

do{
$currentTest = $functionsList[$functionsListIndex];
gadgets.message.progress($functionsListIndex / $functionsList.length);
$functionsListIndex ++;

var {folder, subfolder, functionName} = $currentTest;
functionName += '_test';
if(typeof window[folder][subfolder][functionName] == "function"){

$testTimeout = 100;
$currentStatus = 'passed';
setTimeout($testNextFunction, 30);

window[folder][subfolder][functionName]();
return;
}
$untested[$untested.length] = $currentPath();

}
while($functionsListIndex < $functionsList.length);
$testNextFunction();
};
