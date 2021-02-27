
me.actionStart = function(folders=["actions", "engine", "gadgets"]){
say('Escaneando estrutura de objetos');
$functionsList = $listAllFunctions(folders);
say('Iniciando testes');
$functionsListIndex = 0;
$buffer = "";
$testNextFunction();
};
