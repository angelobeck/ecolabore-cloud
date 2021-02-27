
me.keyEqual = function(){
if(!private.lastOperation || private.lastOperation == "")
return;
var value = me.parseBuffer();

switch(private.lastOperation){
case "+":
private.buffer = value + private.value;
private.value = value;
private.lastOperation = "+=";
return;

case "+=":
private.buffer = value + private.value;
return;

case "-":
private.buffer = private.value - value;
private.value = value;
private.lastOperation = "-=";
return;

case "-=":
private.buffer = value - private.value;
return;

case "*":
private.buffer = value * private.value;
private.value = value;
private.lastOperation = "*=";
return;

case "*=":
private.buffer = value * private.value;
return;

case "/":
if(value == 0){
say("Division by zero");
return;
}
private.buffer = private.value / value;
private.value = value;
private.lastOperation = "/=";
return;

case "/=":
private.buffer = value / private.value;
return;

}
};
