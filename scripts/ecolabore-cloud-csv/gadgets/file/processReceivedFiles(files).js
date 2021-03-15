
me.processReceivedFiles = function (files){
if(files.length == 0)
return;

const file = files[0];
file.arrayBuffer().then(function (buffer){
if(buffer.byteLength == 0)
return;

const view = new Uint8Array(buffer);
say(view.length);
const decoder = new TextDecoder();
var fromString = decoder.decode(view);
var pos = fromString.lastIndexOf("]");
if(pos == -1)
return gadgets.csv.actionParseData(fromString);

return gadgets.csv.actionParseData(fromString.substr(pos));
});
};
