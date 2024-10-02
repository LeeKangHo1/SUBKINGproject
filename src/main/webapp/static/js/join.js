var express = require('express');
var app = express();
var client_id = 'YOUR_CLIENT_ID';
var client_secret = 'YOUR_CLIENT_SECRET';
var code = "0";
app.get('/captcha/nkey', function (req, res) {
   var api_url = 'https://naveropenapi.apigw.ntruss.com/scaptcha/v1/skey?code=' + code;
   var request = require('request');
   var options = {
       url: api_url,
       headers: {'X-NCP-APIGW-API-KEY-ID':client_id, 'X-NCP-APIGW-API-KEY': client_secret}
    };
   request.get(options, function (error, response, body) {
     if (!error && response.statusCode == 200) {
       res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
       res.end(body);
     } else {
       res.status(response.statusCode).end();
       console.log('error = ' + response.statusCode);
     }
   });
 });
 app.listen(3000, function () {
   console.log('http://127.0.0.1:3000/captcha/skey app listening on port 3000!');
 });