
//console.log('beep boop');
var fs = require('fs');
//fs.createReadStream(process.argv[2]).pipe(process.stdout);

//process.stdin.pipe(process.stdout);
//
var through = require('through2');
var stream =  through(write, end);
var split = require('split');
var line = 0;
function write(buffer, encoding, next){
	if (line % 2 == 1)
		this.push(buffer.toString().toUpperCase() + '\n');
	else
		this.push(buffer.toString().toLowerCase() + '\n');
	line++;
	next();
}

function end(done){
	done();
}


process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);
