
me.progress = function(value){
me.progressBar.value = ~~(value * 100);
me.progressValue.innerHTML = '' + ~~(value * 100) + '%';
};
