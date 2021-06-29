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
 app.set('views', 'C:/wamp64/www/Haccp/Olivers_HAACP/views')
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
	var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var Title= req.body.Form_Title;	
    connection.query("INSERT INTO `Submitted_Forms` (Date,Form_Name, Corection_ID, Column_1, Column_2, Column_3, Column_4, Column_5, Column_6, Column_7, Column_8, Column_9, Column_10, Column_11, Column_12, Column_13, Column_14, Column_15, Column_16, Column_17, Column_18, Column_19, Column_20, store ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )", [req.body.Date, req.body.Form_Name, req.body.Corection_ID, req.body.Column_1, req.body.Column_2, req.body.Column_3, req.body.Column_4, req.body.Column_5, req.body.Column_6, req.body.Column_7, req.body.Column_8, req.body.Column_9, req.body.Column_10, req.body.Column_11, req.body.Column_12, req.body.Column_13, req.body.Column_14, req.body.Column_15, req.body.Column_16, req.body.Column_17, req.body.Column_18, req.body.Column_19, req.body.Column_20, req.body.FormStore ], function(err, result){
        if(err) throw err;
            console.log("Form inserted");
        });
	
        connection.query("INSERT INTO `Corrective_Actions` (Date, Form_Name, Corection_1, Corection_2, Corection_3, Corection_4, Corection_5, Corection_6, Corection_7, Corection_8, Corection_9, Corection_10, Corection_11, Corection_12, Corection_13, Corection_14, Corection_15, Corection_16, Corection_17, Corection_18, Corection_19, Corection_20, Corection_21, Corection_22, Corection_23, Corection_24, Corection_25, Corection_26, Corection_27, Corection_28, Corection_29, Corection_30, Corection_31, Corection_32, Corection_33, Corection_34, Corection_35, Corection_36, Corection_37, Corection_38, Corection_39, Corection_40, Corection_41, Corection_42, Corection_43, Corection_44, Corection_45, Corection_46, Corection_47, Corection_48, Corection_49, Corection_50, Corection_51, Corection_52, Corection_53, Corection_54, Corection_55, Corection_56, Corection_57, Corection_58, Corection_59, Corection_60, Corection_61, Corection_62, Corection_63, Corection_64, Corection_65, Corection_66, Corection_67, Corection_68, Corection_69, Corection_70, Corection_71, Corection_72, Corection_73, Corection_74, Corection_75, store ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )", [req.body.Date, req.body.Form_Name, req.body.Corection_1, req.body.Corection_2, req.body.Corection_3, req.body.Corection_4, req.body.Corection_5, req.body.Corection_6, req.body.Corection_7, req.body.Corection_8, req.body.Corection_9, req.body.Corection_10, req.body.Corection_11, req.body.Corection_12, req.body.Corection_13, req.body.Corection_14, req.body.Corection_15, req.body.Corection_16, req.body.Corection_17, req.body.Corection_18, req.body.Corection_19, req.body.Corection_20, req.body.Corection_21, req.body.Corection_22, req.body.Corection_23, req.body.Corection_24, req.body.Corection_25, req.body.Corection_26, req.body.Corection_27, req.body.Corection_28, req.body.Corection_29, req.body.Corection_30, req.body.Corection_31, req.body.Corection_32, req.body.Corection_33, req.body.Corection_34, req.body.Corection_35, req.body.Corection_36, req.body.Corection_37, req.body.Corection_38, req.body.Corection_39, req.body.Corection_40, req.body.Corection_41, req.body.Corection_42, req.body.Corection_43, req.body.Corection_44, req.body.Corection_45, req.body.Corection_46, req.body.Corection_47, req.body.Corection_48, req.body.Corection_49, req.body.Corection_50, req.body.Corection_51, req.body.Corection_52, req.body.Corection_53, req.body.Corection_54, req.body.Corection_55, req.body.Corection_56, req.body.Corection_57, req.body.Corection_58, req.body.Corection_59, req.body.Corection_60, req.body.Corection_61, req.body.Corection_62, req.body.Corection_63, req.body.Corection_64, req.body.Corection_65, req.body.Corection_66,req.body.Corection_67, req.body.Corection_68, req.body.Corection_69, req.body.Corection_70, req.body.Corection_71, req.body.Corection_72, req.body.Corection_73, req.body.Corection_74, req.body.Corection_75, req.body.FormStore ], function(err, result){
        if(err) throw err;
            console.log("Correction inserted");
        });
	
res.render('Dashboard', { title: 'Dashboard', userName: user, userRole: datausr,userId: datauserId, userStore: datastore, FormTitle: Title});
	
});


app.post('/data_update', function(req, res){
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
		var Title= req.body.Form_Title;	
		var box=req.body.Form_Name;
			if (box=="Raw_Product") {box="Raw Product"}
		if (box=="Cold_Rooms") {box="Cold Rooms"}
		if (box=="Thermometer_Calibration") {box="Thermometer Calibration"}
		if (box=="Incoming_Materials") {box="Incoming Materials"}
		if (box=="Brittle_Plastics") {box="Brittle Plastics"}
		if (box=="Preventative_Maintenance") {box="Preventative Maintenance"}
		if (box=="Foreign_Materials") {box="Foreign Materials"}
		if (box=="Released_Material") {box="Rejected/Released"}
		if (box=="Work_Order") {box="Work Order"}
    connection.query("UPDATE Submitted_Forms SET Date = ?, Form_Name = ?, Corection_ID = ?, Column_1 = ?, Column_2 = ?, Column_3 = ?, Column_4 = ?, Column_5 = ?, Column_6 = ?, Column_7 = ?, Column_8 = ?, Column_9 = ?, Column_10 = ?, Column_11 = ?, Column_12 = ?, Column_13 = ?, Column_14 = ?, Column_15 = ?, Column_16 = ?, Column_17 = ?, Column_18 = ?, Column_19 = ?, Column_20 = ?, store = ? WHERE Id = ? ", [req.body.Date, req.body.Form_Name, req.body.Corection_ID, req.body.Column_1, req.body.Column_2, req.body.Column_3, req.body.Column_4, req.body.Column_5, req.body.Column_6, req.body.Column_7, req.body.Column_8, req.body.Column_9, req.body.Column_10, req.body.Column_11, req.body.Column_12, req.body.Column_13, req.body.Column_14, req.body.Column_15, req.body.Column_16, req.body.Column_17, req.body.Column_18, req.body.Column_19, req.body.Column_20, req.body.FormStore, req.body.Id ], function(err, result){
        if(err) throw err;
            console.log("Form Updated");
        });
	
        connection.query("UPDATE Corrective_Actions SET Date = ?, Form_Name = ?, Corection_1 = ?, Corection_2 = ?, Corection_3 = ?, Corection_4 = ?, Corection_5 = ?, Corection_6 = ?, Corection_7 = ?, Corection_8 = ?, Corection_9 = ?, Corection_10 = ?, Corection_11 = ?, Corection_12 = ?, Corection_13 = ?, Corection_14 = ?, Corection_15 = ?, Corection_16 = ?, Corection_17 = ?, Corection_18 = ?, Corection_19 = ?, Corection_20 = ?, Corection_21 = ?, Corection_22 = ?, Corection_23 = ?, Corection_24 = ?, Corection_25 = ?, Corection_26 = ?, Corection_27 = ?, Corection_28 = ?, Corection_29 = ?, Corection_30 = ?, Corection_31 = ?, Corection_32 = ?, Corection_33 = ?, Corection_34 = ?, Corection_35 = ?, Corection_36 = ?, Corection_37 = ?, Corection_38 = ?, Corection_39 = ?, Corection_40 = ?, Corection_41 = ?, Corection_42 = ?, Corection_43 = ?, Corection_44 = ?, Corection_45 = ?, Corection_46 = ?, Corection_47 = ?, Corection_48 = ?, Corection_49 = ?, Corection_50 = ?, Corection_51 = ?, Corection_52 = ?, Corection_53 = ?, Corection_54 = ?, Corection_55 = ?, Corection_56 = ?, Corection_57 = ?, Corection_58 = ?, Corection_59 = ?, Corection_60 = ?, Corection_61 = ?, Corection_62 = ?, Corection_63 = ?, Corection_64 = ?, Corection_65 = ?, Corection_66 = ?, Corection_67 = ?, Corection_68 = ?, Corection_69 = ?, Corection_70 = ?, Corection_71 = ?, Corection_72 = ?, Corection_73 = ?, Corection_74 = ?, Corection_75 = ?, store = ? WHERE Id = ?", [req.body.Date, req.body.Form_Name, req.body.Corection_1, req.body.Corection_2, req.body.Corection_3, req.body.Corection_4, req.body.Corection_5, req.body.Corection_6, req.body.Corection_7, req.body.Corection_8, req.body.Corection_9, req.body.Corection_10, req.body.Corection_11, req.body.Corection_12, req.body.Corection_13, req.body.Corection_14, req.body.Corection_15, req.body.Corection_16, req.body.Corection_17, req.body.Corection_18, req.body.Corection_19, req.body.Corection_20, req.body.Corection_21, req.body.Corection_22, req.body.Corection_23, req.body.Corection_24, req.body.Corection_25, req.body.Corection_26, req.body.Corection_27, req.body.Corection_28, req.body.Corection_29, req.body.Corection_30, req.body.Corection_31, req.body.Corection_32, req.body.Corection_33, req.body.Corection_34, req.body.Corection_35, req.body.Corection_36, req.body.Corection_37, req.body.Corection_38, req.body.Corection_39, req.body.Corection_40, req.body.Corection_41, req.body.Corection_42, req.body.Corection_43, req.body.Corection_44, req.body.Corection_45, req.body.Corection_46, req.body.Corection_47, req.body.Corection_48, req.body.Corection_49, req.body.Corection_50, req.body.Corection_51, req.body.Corection_52, req.body.Corection_53, req.body.Corection_54, req.body.Corection_55, req.body.Corection_56, req.body.Corection_57, req.body.Corection_58, req.body.Corection_59, req.body.Corection_60, req.body.Corection_61, req.body.Corection_62, req.body.Corection_63, req.body.Corection_64, req.body.Corection_65, req.body.Corection_66,req.body.Corection_67, req.body.Corection_68, req.body.Corection_69, req.body.Corection_70, req.body.Corection_71, req.body.Corection_72, req.body.Corection_73, req.body.Corection_74, req.body.Corection_75, req.body.FormStore, req.body.Id ], function(err, result){
        if(err) throw err;
            console.log("Correction Updated");
        });
	
    connection.query('SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ?', [req.body.Form_Name, req.body.Date] ,function (err, data, fields) {
		
    if (err) throw err;
    res.render('Dashboard', { title: 'Dashboard', userData: data, userName: user, userId: datauserId, userStore: datastore, userRole: datausr, FormTitle: Title, FormBox: box});	
  });
	
});



app.post('/List', function(req, res){
var user= req.body.username;
	var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var Title= req.body.Form_Title;
	var form= req.body.Type;
    connection.query("INSERT INTO `Item_Maint` (Type,Name) VALUES (?,?)", [req.body.Type, req.body.Name], function(err, result){
        if(err) throw err;
            console.log("1 record inserted");
        });
	
	    connection.query('SELECT * FROM Item_Maint Where Type=?', [req.body.Type],function (err, data, fields) {
		var form=req.body.Type
    if (err) throw err;
    res.render('List_Edit', { title: 'List_Edit', userData: data, formName: form,userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title});
		
  

  });
});


app.post('/New', function(req, res){
var user= req.body.username;
	var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var Title= req.body.Form_Title;
	var form= req.body.Type;
    connection.query("INSERT INTO `Users` (firstname, lastname, userName, passwd, email, role, store) VALUES (?,?,?,?, ?, ?, ?)", [req.body.firstname, req.body.lastname, req.body.userName, req.body.passwd, req.body.email, req.body.role, req.body.store], function(err, result){
        if(err) throw err;
            console.log("1 record inserted");
        });
	
    connection.query('SELECT  Id, userName, role, store FROM Users',   function(err, data, fields) {
		var form=req.body.Type
    if (err) throw err;
    res.render('User_List', { title: 'User_List', userData: data, formName: form, userName: user, userId: datauserId, userStore: datastore, userRole: datausr, FormTitle: Title});
	
  });
});



app.get('/', function(req, res) {
    res.render('index', { title: 'Sign In' });
})


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
