
me.done = function (){
if($currentStatus == 'passed')
$passed ++;
else if($status == 'failed')
$failed ++;

me.unmocAll();
$testTimeout = 0;
};
