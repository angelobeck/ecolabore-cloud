
me.parseBuffer = function(){
if(private.buffer.length == 0)
return 0;

var result = parseFloat(private.buffer);

if(isNaN(result))
return 0;

return result;
};
