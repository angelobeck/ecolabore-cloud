
me.actionApplyConfig = function(config){

if(config.ploter && ploters[config.ploter])
me.ploter = config.ploter;
ploters[me.ploter].init(me);

me.config = config;
};
