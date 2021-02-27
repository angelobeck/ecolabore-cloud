
me.eventLoad = function(){

var buffer = '';
buffer += '<div style="min-height:100%; width:100%; display:flex; flex-direction:column;">';
buffer += '<div id="menu"></div>';
buffer += '<div id="toolbar"></div>';
buffer += '<div id="workspace" style="flex-grow:1; display:flex">';
buffer += '<div id="tree"></div>';
buffer += '<div id="list"></div>';
buffer += '</div>';
buffer += '<div id="commands"></div>';
buffer += '<div id="statusbar" style="display:flex">';
buffer += '<div id="message" style="flex-basis:0; flex-grow:1">Carregando</div>';
buffer += '<div style="flex-basis:0; flex-grow:1"><progress id="progress"></progress><span id="progressvalue"></span></div>';
buffer += '</div>';
buffer += '</div>';

document.body.innerHTML = buffer;

gadgets.message.eventLoad();
if(config && config.layout && config.layout.eventLoad)
config.layout.eventLoad();
};

window.addEventListener("load", me.eventLoad);
