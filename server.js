var express = require('express');
var app = express();

app.use(express.static('www'));

app.set('port', process.env.PORT || 500);
app.listen(app.get('port'), function(){
    console.log('Express ionic gitserver listing onport ' + app.get('port'));
})