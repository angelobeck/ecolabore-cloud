
me.unmoc = function(ref){
for(let name in ref){
if(name.includes("_moc"))
continue;
if(name.includes("_test"))
continue;
if(name.includes("_waitting"))
continue;

if(typeof ref[name + "_waitting"] != "function")
continue;

ref[name] = ref[name + "_waiting"];
}

for(let i = 0; i < $currentMocked.length; i++){
if($currentMocked[i] === ref){
$currentMocked[i] = false;
break;
}
}
};
