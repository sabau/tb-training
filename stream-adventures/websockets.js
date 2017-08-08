var ws = require('websocket-stream');
var stream = ws('ws://192.168.153.128:8099');
stream.end('hello\n');

