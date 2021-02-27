
me.getOptions = function(){
var menu = me.options;

var children = menu[3].children;

for(let name in ploters){
let item = {
"label": ploters[name].menuOption.label,
"action":"csvPloter",
"argument":name
};

children[children.length] = item;
}

children = menu[2].children;

for(let i = 0; i < gadgets.csv.palettes.length; i++){
let palette = gadgets.csv.palettes[i];
let item = {
"label": palette.label,
"action":"csvColorPalette",
"argument":palette.name
};

children[children.length] = item;
}

return menu;
};
