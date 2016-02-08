#!/usr/bin/env node

//this hook installs all your plugins
 
// add your plugins to this list--either 
// the identifier, the filesystem location 
// or the URL
var pluginlist = [
    "cordova-plugin-splashscreen",
    "cordova-plugin-statusbar",
	"cordova-plugin-whitelist",
    "org.apache.cordova.inappbrowser@0.6.0"
];
 
// no need to configure below
var sys = require('sys');
var exec = require('child_process').exec;
 
function puts(error, stdout, stderr) {
    console.log(stdout)
}
 
pluginlist.forEach(function(plug) {
    exec("cordova plugin add " + plug, puts);
});