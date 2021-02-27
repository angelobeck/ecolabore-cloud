<?php

class eclApp_integrationCloud
{ // class eclApp_integrationCloud

static function is_child ($me, $name)
{ // function is_child
if ($name != 'cloud')
return false;
if (SYSTEM_HOSTING_MODE == 0)
return true;
if ($me->applicationName == 'adminIntegrations')
return true;

return false;
} // function is_child

static function get_menu_type ()
{ // function get_menu_type
return 'section';
} // function get_menu_type

static function get_children_names ($me)
{ // function get_children_names
if (SYSTEM_HOSTING_MODE == 0)
return array ('cloud');
if ($me->applicationName == 'adminIntegrations')
return ['cloud'];

return [];
} // function get_children_names

static function constructor_helper ($me)
{ // function constructor_helper
global $store, $system;
$me->data = $store->control->read ('integrationCloud_content');
$me->map = ['integrationCloud_config'];
$me->groups = $system->groups;
$me->access = 4;
} // function constructor_helper

static function dispatch ($document)
{ // function dispatch
global $store;
$document->mod->list = new eclMod_admin_list ($document);
} // function dispatch

} // class eclApp_integrationCloud

?>