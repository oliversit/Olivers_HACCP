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
  database : 'Haccp'

});

connection.connect();


app.get('/Packing.html', function (req, res) {

    res.sendFile(__dirname + '/public/Packing.html');

});


app.post('/data', function(req, res){

    connection.query("INSERT INTO `Submitted_Forms` (Date,Form_Name, Corection_ID, Column_1, Column_2, Column_3, Column_4, Column_5, Column_6, Column_7, Column_8, Column_9, Column_10, Column_11, Column_12, Column_13, Column_14, Column_15, Column_16, Column_17, Column_18, Column_19, Column_20 ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )", [req.body.Date, req.body.Form_Name, req.body.Corection_ID, req.body.Column_1, req.body.Column_2, req.body.Column_3, req.body.Column_4, req.body.Column_5, req.body.Column_6, req.body.Column_7, req.body.Column_8, req.body.Column_9, req.body.Column_10, req.body.Column_11, req.body.Column_12, req.body.Column_13, req.body.Column_14, req.body.Column_15, req.body.Column_16, req.body.Column_17, req.body.Column_18, req.body.Column_19, req.body.Column_20 ], function(err, result){
        if(err) throw err;
            console.log("1 record inserted");
        });
     res.sendFile(__dirname + '/public/Packing.html');
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