
me.fail = function (message){
$fails[$fails.length] = message + ' ' + $currentPath();
$currentStatus = 'failed';
};
