var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

var value = '0';

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
