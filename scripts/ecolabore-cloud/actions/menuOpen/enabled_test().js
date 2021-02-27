
me.enabled_test = function (){
engine.test.assert(me.enabled, [], false);
engine.test.assert(me.enabled, [1], false);
engine.test.assert(me.enabled, [""], false);
engine.test.assert(me.enabled, ["somename"], true);
engine.test.done();
};
