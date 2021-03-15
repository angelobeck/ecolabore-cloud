
me.enabled = function (argument=false){
if(isNaN(argument))
return false;

argument = argument - 1;
if(!gadgets.csv.columns[argument])
return false;

return true;
};
