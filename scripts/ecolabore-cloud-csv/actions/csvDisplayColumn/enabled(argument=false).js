
me.enabled = function (argument=false){
if(isNaN(argument))
return false;
if(!gadgets.csv.columns[argument])
return false;

return true;
};
