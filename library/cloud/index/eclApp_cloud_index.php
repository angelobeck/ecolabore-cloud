<?php

class eclApp_cloud_index
{ // class eclApp_cloud_index

const name = '';
const menuType = 'section';
const dataFrom = 'cloud_content';

static function constructor_helper ($me)
{ // function constructor_helper
array_pop ($me->pathway);
} // function constructor_helper

static function dispatch($document)
{ // function dispatch
$document->render->scripts[] = $document->urlFiles('ecolabore-cloud/ecolabore-cloud.js', true, '-scripts');
} // function dispatch

} // class eclApp_cloud_index

?>