var duplexer = require("duplexer2");
var through = require('through2').obj;

module.exports = function (counter){
	var count = {};
	var input = through(w, e);
	return duplexer({objectMode: true}, input, counter);

	function w (r,_,n){
		count[r.country] = (count[r.country] || 0) + 1;
		n();
	}

	function e(done) {
		counter.setCounts(count);
		done();
	}
};
