fs = require('fs');
connect = require('connect');
u = require('url');
mime = require('mime');

console.log(__dirname);

var port = Number(process.env.PORT || 3000);


var app = connect()
  .use(connect.bodyParser())
  .use(connect.static(__dirname + '/public'))
  .use(function (req, res) {
    var url = __dirname + req.url;

    if (url){
      fs.readFile(url, function(err, data) {
        // if (err) {
        //   res.writeHead(404);
        //   return res.end("File not found.");
        // }

        res.setHeader("Content-Type", mime.lookup(url));
        res.writeHead(200);
        res.end(data);
        
      });
    } else {
      res.writeHead(402);
      return res.end("Forbidden.");
    }
  }).listen(port);
