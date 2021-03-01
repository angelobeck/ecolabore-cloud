<?php

class eclApp_cloudCsv
{ // class eclApp_cloudCsv

const name = 'csv';
const menuType = 'section';
const map = 'cloudCsv_endpoint';
const dataFrom = 'cloudCsv_content';

static function dispatch($document)
{ // function dispatch

$document->render->styles[] = $document->urlFiles('ecolabore-cloud/ecolabore-cloud.css', true, '-shared');
$document->render->scripts[] = $document->urlFiles('ecolabore-cloud/ecolabore-cloud.js', true, '-scripts');
$document->render->scripts[] = $document->urlFiles('ecolabore-cloud/ecolabore-cloud-csv.js', true, '-scripts');

$pathway = $document->pathway;
$pathway[] = '-endpoint';
$url = $document->url($pathway);

$buffer = '

config = config || {};
config.endpoints = config.endpoints || {};
config.endpoints.csv = "' . $url . '";

config.test = config.test || {};
config.test.files = [
';

$items = [];
$dir = PATH_COMPONENTS . 'ecolabore-cloud/shared/';
foreach(scandir($dir) as $file)
{ // each file
if($file[0] == '.')
continue;

if(substr($file, -5) != '.json')
continue;

$testFile = substr($file, 0, -5) . '.csv';
$url = $document->urlFiles('ecolabore-cloud/' . $testFile, true, '-shared');
$config = file_get_contents($dir . $file);
$items[] = '{
"url":"' . $url . '",
"config":' . $config . '
}';
} // each file

$buffer .= implode(',' . CRLF, $items) . CRLF . '];' . CRLF;

$document->render->cuts['script'] = $buffer;
} // function dispatch

} // class eclApp_cloudCsv

?>