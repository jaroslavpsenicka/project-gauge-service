var express = require('express')
const bodyParser = require('body-parser');
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(bodyParser.text());
app.use(express.static(__dirname + '/public'))

var value = '90';

app.get('/value', function(request, response) {
  response.send(value);
})

app.post('/value', function(request, response) {
	value = request.body;
	response.status(200).send();
 })
 
app.listen(app.get('port'), function() {
  console.log("Running at port" + app.get('port'))
})
