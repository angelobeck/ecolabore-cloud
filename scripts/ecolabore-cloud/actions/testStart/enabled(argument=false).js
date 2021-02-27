
me.enabled = function (argument=false){
if(argument === false)
return true;

if(!Array.isArray(argument))
return false;

return true;
};
