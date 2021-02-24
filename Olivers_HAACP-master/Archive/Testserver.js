var express    = require('express');
var app        = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(express.json());
//app.use(express.urlencoded());
//app.use(app.router);
app.use(express.static('public'));


var connection = mysql.createConnection({

  host     : 'localhost',
  user     : 'lampuser',
  password : 'Test0987',
  database : 'geek'

});

connection.connect();


app.get('/Testserver1.html', function (req, res) {

    res.sendFile(__dirname + '/Testserver1.html');

});


app.post('/data', function(req, res){
    var username=req.body.name;
    connection.query("INSERT INTO `student` (firstname) VALUES (?)", username.toString(), function(err, result){
        if(err) throw err;
            console.log("1 record inserted");
        });
     res.sendFile(__dirname + '/public/Testserver1.html');
});


app.get('/close', function(req,res){
  connection.end((err) => {
    if (err) {
      res.send('There is some error in closing the database');
      return console.error(err.message);
    }
    console.log('Closing the database connection.');
    res.send('Database connection successfully closed');
  });
});

//connection.end();

app.listen(3000, function () {
console.log('Example app listening on port 3000');
});