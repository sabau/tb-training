var crypto = require('crypto');
var tar = require('tar');
var zlib = require('zlib');
var concat = require('concat-stream');

var parser = new tar.Parse();
parser.on('entry', function (e) {
	console.log(e);
	if (e.type === 'File'){
	    	var md5 = crypto.createHash('md5', { encoding: 'hex' });
	    	e.pipe(md5).pipe(process.stdout);
		console.log(entry.path);
					
//		            console.log(hash + ' ' + e.path);
	}
});

var cipher = process.argv[2];
var pw = process.argv[3];
process.stdin
    .pipe(crypto.createDecipher(cipher, pw))
    .pipe(zlib.createGunzip())
    .pipe(parser)
;
