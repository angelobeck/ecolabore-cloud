
me.enabled = function (argument=false){
if(isNaN(argument)){
say('invalid argument ' + argument);
return false;
}
if(!config.test || !config.test.files || config.test.files.length == 0)
return false;

return true;
};
