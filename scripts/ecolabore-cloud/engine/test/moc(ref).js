
me.moc = function(ref){
if($isMocked(ref))
return;

$currentMocked[$currentMocked.length] = ref;
for(let name in ref){
if(name.includes("_moc"))
continue;
if(name.includes("_test"))
continue;
if(name.includes("_waitting"))
continue;

if(typeof ref[name + "_waitting"] == "function")
continue;
if(typeof ref[name + "_moc"] != "function")
continue;

ref[name + "_waitting"] = ref[name];
ref[name] = ref[name + "_moc"];
}
};
