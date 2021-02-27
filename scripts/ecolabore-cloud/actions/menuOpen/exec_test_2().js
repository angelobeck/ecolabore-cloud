
me.exec_test_2 = function (){

var node = gadgets.menu.nodeInFocus;
if(node.data.argument != me._test_argument || node.submenu.hidden == true)
engine.test.fail("Não pude abrir o menu");

gadgets.menu.eventBlur();

engine.test.done();
};
