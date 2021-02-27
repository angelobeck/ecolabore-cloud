
$isMocked = function(ref){
for(const mocked of $currentMocked){
if(mocked === ref)
return true;
}

return false;
};
