
me.keyBackSpace = function(){
if(private.buffer.length <= 1)
private.buffer = "";
else
private.buffer = private.buffer.substr(0, private.buffer.length - 1);
};
