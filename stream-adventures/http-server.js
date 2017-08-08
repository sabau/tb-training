
    function write (buf, _, next) {
	          this.push(buf.toString().toUpperCase());
	          next();
	        }
    function end (done) { done(); }

    var http = require('http');
    var through = require('through2');
    var stream = through(write, end);
    var fs = require('fs');
    var server = http.createServer(function (req, res) {
	            if (req.method === 'POST') {
			                req.pipe(stream).pipe(res);
			            }
	    else  res.end('beep boop\n');
	        });
    server.listen(process.argv[2]);

