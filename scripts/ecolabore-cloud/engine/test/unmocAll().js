
me.unmocAll = function(){
for(let i = 0; i < $currentMocked.length; i++){
if($currentMocked[i] !== false)
me.unmoc($currentMocked[i]);
}

$currentMocked = [];
};
