
me.actionRequestTestFile = function(index){
index = ~~index;

if(config.test || config.test.files || index < config.test.files.length){
let file = config.test.files[index];
me.actionApplyConfig(file.config);
me.actionRequestFile(file.url);
}
};
