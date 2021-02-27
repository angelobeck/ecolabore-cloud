
me.create = function (){
me.workspace = document.getElementById("list");
if (!me.workspace)
return;

var t = "'";
var buffer = '';
buffer += '<label>Resultado<input type="text" id="calculator_input" value="0"></label>';
buffer += '<div style="display:grid; grid-template-columns(1fr 1fr 1fr)">';

for(let i = 1; i < 10; i++){
buffer += '<button onclick="gadgets.calculator.keyNumeric(' + t + i + t + ')">' + i + '</button>';
}

buffer += '<div></div>';
buffer += '<button onclick="gadgets.calculator.keyNumeric(' + t + '0' + t + ')">0</button>';
buffer += '<div></div>';

buffer += '</div>';

workspace.innerHTML = buffer;
me.input = document.getElementById("calculator_input");
me.input.addEventListener("focus", me.eventFocus);
me.input.addEventListener("keydown", me.eventKeyDown);
me.input.addEventListener("keyup", me.eventKeyUp);
me.input.focus();

private.buffer = "";
};
