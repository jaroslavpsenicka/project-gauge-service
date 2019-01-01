var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

var value = 0;

app.get('/', function(request, response) {
  response.send(value)
})

app.post('/', function(request, response) {
	value = request.body;
 })
 
app.listen(app.get('port'), function() {
  console.log("Running at port" + app.get('port'))
})
