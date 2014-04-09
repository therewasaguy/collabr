var fs = require('fs');
var connect = require('connect');
var url = require('url');
var mime = require('mime');

var port = Number(process.env.PORT || 3000);


var app = connect()
  .use(connect.bodyParser())
  .use(connect.static(__dirname + '/public/'))
  .use(function (req, res) {
    var u = req.url;
      fs.readFile(u, function(err, data) {
        if (err) {
          res.writeHead(404);
          return res.end(data + "File not found.");
        }
        res.setHeader("Content-Type", mime.lookup(u));
        console.log("MIME: " + mime.lookup(u));
        res.writeHead(200);
        res.end(data);
        
      });
  }).listen(port, function() {
    console.log("listening on port " + port);
  });
