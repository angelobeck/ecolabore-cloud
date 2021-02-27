
argument(argument, type, required){
this.arguments[this.arguments.length] = argument;

if(required == false && (argument === false || argument === undefined))
return;

if(typeof argument == type)
return;

var buffer = "To call " + this.path + "(), argument " + (this.arguments.length + 1) + " must be of type " + type + "; " + typeof(argument) + " guiven";
this.test.fail(buffer);
};
