
me.create = function (){
me.workspace = document.getElementById("workspace");
if (!me.workspace)
return;

me.element = document.createElement("TABLE");
me.element.id = "spreadsheet";

me.workspace.appendChild(me.element);
};
