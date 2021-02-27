
me.getOptions = function(){
var menu = me.options;

// Ploters
var children = menu[1].children[0].children;

for(let name in ploters){
let item = {
"label": ploters[name].menuOption.label,
"action":"csvPloter",
"argument":name
};

children[children.length] = item;
}

// Palettes
children = menu[1].children[5].children;

for(let i = 0; i < gadgets.csv.palettes.length; i++){
let palette = gadgets.csv.palettes[i];
let item = {
"label": palette.label,
"action":"csvColorPalette",
"argument":palette.name
};

children[children.length] = item;
}

// Test files
children = menu[0].children[0].children;
for(let i = 0; i < config.test.files.length; i++){
let file = config.test.files[i];
let item = {
label:file.config.label,
action:"csvRequestTestFile",
argument:0+i
}

children[children.length] = item;
}

return menu;
};
