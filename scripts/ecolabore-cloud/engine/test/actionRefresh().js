
me.actionRefresh = function(){
$buffer = '';

$buffer += 'Escaneando ' + $functionsListIndex + ' de ' + $functionsList.length + ' funções<br>';
$buffer += 'Passaram = ' + $passed + '<br>';
$buffer += 'Falharam = ' + $failed + '<br>';
$buffer += 'Não testadas = ' + $untested.length + '<br>';

$buffer += 'Erros detectados = ' + $fails.length + '<br>';
$buffer += 'Avisos = ' + $warnings.length + '<br>';


if($fails.length > 0)
$buffer += '<h3>Falhas</h3>' + $fails.join('<br>') + '<br>';

if($warnings.length > 0)
$buffer += '<h3>Avisos</h3>' + $warnings.join('<br>') + '<br>';

if($untested.length > 0)
$buffer += '<h3>Não testados</h3>' + $untested.join('<br>') + '<br>';

say($buffer);
};
