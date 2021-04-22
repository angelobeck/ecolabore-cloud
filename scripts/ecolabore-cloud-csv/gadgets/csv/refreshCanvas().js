
me.refreshCanvas = function(){
if(ploters[me.ploter] && ploters[me.ploter].print)
ploters[me.ploter].print(me);
gadgets.spreadsheet.refresh(me.columns, me.rows, me.indexMin, me.indexMax);
};
