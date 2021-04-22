
me.eventLoad = function(){
document.title = "Gerar gráfico";

gadgets.file.create();
gadgets.menu.create(config.menu.getOptions());
gadgets.toolbar.create(config.toolbar.getOptions());
gadgets.csv.create();
gadgets.spreadsheet.create();
};
