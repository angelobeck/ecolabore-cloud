
me.enabled_moc = function (argument=false){
var trace = engine.test.trace("actions.applicationOpen.enabled");
trace.argument(argument, "string", true);

if(typeof argument == "string" && argument.length > 0)
return true;

return false;
};
