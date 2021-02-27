
var $passed = 0;
var $failed = 0;
var $fails = [];
var $warnings = [];
var $untested = [];

var $functionsList = [];
var $functionsListIndex = 0;

var $testTimeout = 0;
var $currentStatus = 'passed';
var $currentMocked = [];
var $buffer = "";
