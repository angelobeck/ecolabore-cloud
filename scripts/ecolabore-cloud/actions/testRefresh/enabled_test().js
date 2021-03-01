
me.enabled_test = function (){
engine.test.assert(me.enabled, [], true);
engine.test.assert(me.enabled, [1], true);
engine.test.assert(me.enabled, [""], true);
engine.test.assert(me.enabled, ["somename"], true);
engine.test.done();
};
