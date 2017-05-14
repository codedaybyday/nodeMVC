var http = require('http');
var config = require('./app/config');
var server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end('hello word!');
});
server.listen(config.port || 8888);