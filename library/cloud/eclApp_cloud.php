<?php

class eclApp_cloud
{ // class eclApp_cloud

const menuType = 'domain';

static function is_child ($parent, $name)
{ // function is_child
if(!defined('INTEGRATION_CLOUD_DOMAIN'))
return false;

if ($name == INTEGRATION_CLOUD_DOMAIN)
return true;

return false;
} // function is_child

static function get_children_names ()
{ // function get_children_names
if(!defined('INTEGRATION_CLOUD_DOMAIN'))
return [];

return [INTEGRATION_CLOUD_DOMAIN];
} // function get_children_names

static function constructor_helper ($me)
{ // function constructor_helper
global $store;
$me->data = $store->control->read ('cloud_content');

$me->getMap();
$me->map[] = 'cloud_index';
$me->map[] = 'cloud_menu';
$me->map[] = 'adminDefault';

$me->isDomain = true;
} // function constructor_helper

} // class eclApp_cloud

?>