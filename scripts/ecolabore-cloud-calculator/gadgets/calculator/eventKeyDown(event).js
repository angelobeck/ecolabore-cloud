
me.eventKeyDown = function(event){

if(event.altKey || event.ctrlKey || event.metaKey)
return;

var key = event.key;
if(event.shiftKey)
key = "Shift_" + event.key;

switch(key){
case "0":
case "1":
case "2":
case "3":
case "4":
case "5":
case "6":
case "7":
case "8":
case "9":
case ".":
return me.keyNumeric(key);

case ",":
return me.keyNumeric(".");

case '+':
case "Shift_+":
case '-':
case '/':
case '*':
case "Shift_*":
case "%":
case "Shift_%":
case "y":
case "Shift_y":
return me.keyOperator(key);

case "c":
case "i":
case "l":
case "n":
case "o":
case "p":
case "q":
case "s":
case "t":
case "Shift_c":
case "Shift_q":
case "Shift_o":
case "Shift_s":
case "Shift_t":
case "Shift_!":
return me.keyUnaryOperator(key);

case "=":
case "Enter":
return me.keyEqual();

case "Backspace":
return me.keyBackSpace();

case "Escape":
case "Delete":
return me.keyDelete();
}

};
