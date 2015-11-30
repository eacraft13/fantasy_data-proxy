var cors    = require('cors');
var express = require('express');
var path    = require('path');
var request = require('request');



var app = express();
app.use(cors());

app.get('/*', function(req, res) {

  var options = {
    url: 'https://api.fantasydata.net' + req.path,
    headers: {
      'Ocp-Apim-Subscription-Key': 'f05dcf2fe1934b4197174577dfe3068b'
    }
  };

  request(options, function(error, response, body) {
    if (!error && response.statusCode == 200)
      res.send(body);
    else
      res.status(500).send(error);
  });

});



app.listen(8000);
