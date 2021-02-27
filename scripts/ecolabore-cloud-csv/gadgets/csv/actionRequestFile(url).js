
me.actionRequestFile = function(url){
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
if (this.readyState != 4 || this.status != 200) 
return;

me.actionParseData(this.responseText);
}

request.open("GET", url, true);
request.send();
};
