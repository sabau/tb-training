var spawn = require('child_process').spawn;
var stream = require("stream");
 
var duplexer = require("duplexer2");
 
module.exports = function (cmd, args){
	var ps = spawn(cmd, args);
	return duplexer(ps.stdin, ps.stdout);
};
