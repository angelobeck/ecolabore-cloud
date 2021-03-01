<?php

class eclApp_cloudCalculator
{ // class eclApp_cloudCalculator

const name = 'calculator';
const menuType = 'section';
const dataFrom = 'cloudCalculator_content';

static function dispatch($document)
{ // function dispatch

$document->render->scripts[] = $document->urlFiles('ecolabore-cloud/ecolabore-cloud.js', true, '-scripts');
$document->render->scripts[] = $document->urlFiles('ecolabore-cloud/ecolabore-cloud-calculator.js', true, '-scripts');
} // function dispatch

} // class eclApp_cloudCalculator

?>