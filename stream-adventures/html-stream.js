var trumpet = require('trumpet');
var fs = require('fs');
var through = require('through2');
var tr = trumpet();
process.stdin.pipe(tr).pipe(process.stdout);
var loud = tr.select('.loud').createStream();

loud.pipe(through(function (buf, enc, next) {
	this.push(buf.toString().toUpperCase());
	next();
})).pipe(loud);
