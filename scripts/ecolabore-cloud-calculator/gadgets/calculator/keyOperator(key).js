
me.keyOperator = function(key){
private.clearBuffer = true;

switch(key){
case "Shift_+":
private.lastOperation = "+";
return;

case "Shift_*":
private.lastOperation = "*";
return;

default:
private.lastOperation = key;
}
};
