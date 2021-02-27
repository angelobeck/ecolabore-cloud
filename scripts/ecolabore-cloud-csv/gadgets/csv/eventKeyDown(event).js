
me.eventKeyDown = function(event){

if(event.altKey || event.ctrlKey || event.metaKey)
return;

var key = event.key;
if(event.shiftKey)
key = "Shift_" + event.key;

switch(key){
case "1":
case "2":
case "3":
case "4":
case "5":
case "6":
case "7":
case "8":
return me.keyDisplayColumn(key);

case "ArrowLeft":
case "ArrowRight":
case "End":
case "Home":
case "PageDown":
case "PageUp":
return me.keyOffsetX(key);

case "z":
case "x":
case "ArrowUp":
case "ArrowDown":
return me.keyScaleX(key);

case "+":
case "-":
case "y":
return me.keyScaleY(key);

case "c":
return me.keyColorPalette();

case "v":
return me.keyColorScheme();

case "b":
return me.keyColorBackground();

case "g":
return me.keyDisplayGrid(key);

case "p":
return me.keyPloter("0");

case "ContextMenu":
event.preventDefault();
return;
}

};
