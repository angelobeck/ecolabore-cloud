
me.keyUnaryOperator = function(key){
private.lastOperation = "";
var value = me.parseBuffer();

switch(key){
case "c":
private.buffer = "" + (value * value * value);
return;

case "i":
private.buffer = "" + (-1 * value);
return;

case 'r':
if(value > 0 || value < 0)
private.buffer = 1 / value;
return;

case 'o':
private.buffer = Math.cos(value);
return;

case 'p':
private.buffer = Math.PI;
return;

case "q":
private.buffer = "" + (value * value);
return;

case 's':
private.buffer = Math.sin(value);
return;

case "t":
private.buffer = Math.tan(value);
return;

default:
say("Not implemented " + key + " in gadgets.calculator.keyUnaryOperator(key)");
}
};
