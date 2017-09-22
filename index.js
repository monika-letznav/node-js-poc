var express = require("express");
var app     = express();
app.set('port', (process.env.PORT || 8080));

app.use(express.static(__dirname + '/views/pages'));
//Store all HTML files in pages folder.
app.use(express.static(__dirname + '/views/script'));
//Store all JS and CSS in Scripts folder.

app.get('/',function(req,res){
  res.sendFile('index.html');
  //It will find and locate index.html from View or Scripts
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});