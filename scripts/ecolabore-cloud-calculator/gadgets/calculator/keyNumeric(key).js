
me.keyNumeric = function(key){
if(private.clearBuffer){
private.clearBuffer = false;
private.value = me.parseBuffer();
private.buffer = "";
}

private.buffer += key;
};
