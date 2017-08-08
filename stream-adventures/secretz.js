
var tar = require('tar');
var zlib = require('zlib');
var crypto = require('crypto');
var decipher = crypto.createDecipher(process.argv[2], process.argv[3]);
var hash = crypto.createHash('md5', {encodings: 'hex'});

var parser = new tar.Parse();
parser.on('entry', function (e) {
	if (e.type !== 'File') return;

	e.pipe(hash).pipe( concat(function (h) {
		console.log(h + ' ' + e.path);
	}));
});

process.stdin
	.pipe(decipher)
	.pipe(zlib.createGunzip())
	.pipe(parser)
//	.pipe(process.stdout)
;

