fs = require('fs');
connect = require('connect');

console.log(__dirname);

var port = Number(process.env.PORT || 3000);


var app = connect()
  .use(connect.bodyParser())
  .use(connect.static(__dirname + '/public'))
  .use(function (req, res) {
    var url = convertURL(req.url);

    if (okURL(url)){
      fs.readFile(url, function(err, data) {
        if (err) {
          res.writeHead(404);
          return res.end("File not found.");
        }

        res.setHeader("Content-Type", mime.lookup(url));
        res.writeHead(200);
        res.end(data);
        
      });
    } else {
      res.writeHead(402);
      return res.end("Forbidden.");
    }

//    res.end();
//     if (req.url === '/process') {
//       res.end(req.body.name + ' would repeat ' + req.body.repeat + ' times.');
//     } else {
// //      res.end(req.url+' is not a valid page.');
//         res.end();
//     }
  })
  .listen(3000);
