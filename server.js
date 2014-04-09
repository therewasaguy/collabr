fs = require('fs');
connect = require('connect');

console.log(__dirname);

var app = connect()
  .use(connect.bodyParser())
  .use(connect.static(__dirname + '/public'))
  .use(function (req, res) {
    if (req.url === '/process') {
      res.end(req.body.name + ' would repeat ' + req.body.repeat + ' times.');
    } else {
      res.end(req.url+' is not a valid page.');
    }
  })
  .listen(3000);
