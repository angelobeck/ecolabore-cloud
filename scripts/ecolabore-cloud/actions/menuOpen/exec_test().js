
me.exec_test = function (){
if(!gadgets.menu.nodesById.length)
return engine.test.untested();

return engine.test.done();

for(let i = 0; i < gadgets.menu.children.length; i++){
let node = gadgets.menu.children[i];
if(node.data.argument){
me._test_argument = node.data.argument;
me.exec(node.data.argument);
setTimeout(me.exec_test_2, 30);
return;
}
}

engine.test.warning("Não há menus nomeados a testar");
engine.test.done();
};
