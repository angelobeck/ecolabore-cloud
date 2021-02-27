
var $failTimeout = function(){
$fails[$fails.length] = 'Tempo limite atingido - ' + $currentPath();
$currentStatus = 'failed';
me.done();
};
