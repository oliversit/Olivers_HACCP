var express    = require('express');
var app        = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');
var BringtoFront = require('./routes/Frontend');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(express.json());
//app.use(express.urlencoded());
//app.use(app.router);
app.use(express.static('public'));

app.set("view engine", "ejs"); 

app.use('/Frontend', BringtoFront);


var connection = mysql.createConnection({

  host     : 'localhost',
  user     : 'lampuser',
  password : 'Test0987',
  database : 'Haccp'

});

connection.connect();


app.post('/data', function(req, res){
var user= req.body.username;
	var Title= req.body.Form_Title;	
    connection.query("INSERT INTO `Submitted_Forms` (Date,Form_Name, Corection_ID, Column_1, Column_2, Column_3, Column_4, Column_5, Column_6, Column_7, Column_8, Column_9, Column_10, Column_11, Column_12, Column_13, Column_14, Column_15, Column_16, Column_17, Column_18, Column_19, Column_20 ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )", [req.body.Date, req.body.Form_Name, req.body.Corection_ID, req.body.Column_1, req.body.Column_2, req.body.Column_3, req.body.Column_4, req.body.Column_5, req.body.Column_6, req.body.Column_7, req.body.Column_8, req.body.Column_9, req.body.Column_10, req.body.Column_11, req.body.Column_12, req.body.Column_13, req.body.Column_14, req.body.Column_15, req.body.Column_16, req.body.Column_17, req.body.Column_18, req.body.Column_19, req.body.Column_20 ], function(err, result){
        if(err) throw err;
            console.log("Form inserted");
        });
	
        connection.query("INSERT INTO `Corrective_Actions` (Date,Form_Name, Corection_1, Corection_2, Corection_3, Corection_4, Corection_5, Corection_6, Corection_7, Corection_8, Corection_9, Corection_10, Corection_11, Corection_12, Corection_13, Corection_14, Corection_15, Corection_16, Corection_17, Corection_18, Corection_19, Corection_20 ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )", [req.body.Date, req.body.Form_Name, req.body.Corection_1, req.body.Corection_2, req.body.Corection_3, req.body.Corection_4, req.body.Corection_5, req.body.Corection_6, req.body.Corection_7, req.body.Corection_8, req.body.Corection_9, req.body.Corection_10, req.body.Corection_11, req.body.Corection_12, req.body.Corection_13, req.body.Corection_14, req.body.Corection_15, req.body.Corection_16, req.body.Corection_17, req.body.Corection_18, req.body.Corection_19, req.body.Corection_20 ], function(err, result){
        if(err) throw err;
            console.log(" Correction inserted");
        });
	
res.render('Dashboard', { title: 'Dashboard', userName: user, FormTitle: Title});
	
});



app.post('/List', function(req, res){
var user= req.body.username;
	var Title= req.body.Form_Title;
	var form= req.body.Type;
    connection.query("INSERT INTO `Item_Maint` (Type,Name) VALUES (?,?)", [req.body.Type, req.body.Name], function(err, result){
        if(err) throw err;
            console.log("1 record inserted");
        });
	
	    connection.query('SELECT * FROM Item_Maint Where Type=?', [req.body.Type],function (err, data, fields) {
		var form=req.body.Type
    if (err) throw err;
    res.render('List_Edit', { title: 'List_Edit', userData: data, formName: form, userName: user, FormTitle: Title});
		
  

  });
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
