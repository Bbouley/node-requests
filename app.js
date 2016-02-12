var http = require('http');
var request = require('request');

function handleRequest(req, res) {
    request('http://pokeapi.co/api/v2/pokemon/1', function(err, response, body) {
        if(err) {
            res.end('Error, Request Failed - ' + err);
        } else if (!err && response.statusCode === 200) {
            res.end(body);
        }
    });
}

var server = http.createServer(handleRequest);

server.listen(8080, 'localhost', function() {
    console.log('listening on port 8080');
});
