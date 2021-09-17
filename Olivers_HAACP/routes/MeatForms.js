const bcrypt = require('bcrypt');
const saltRounds = 10;
var express = require('express');
var router = express.Router();
var connection=require('../Database');
var app = express();
// other routes also appear here
// this script to fetch data from MySQL databse table



//-------------------------------------------New Forms ------------------------------------------------------------>

router.post('/Packing_Form_New', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;	
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity" and (Department = "Meat" and Location = ?) or (Department = "Meat" and Location = "All")', [datastore],function (err, data, fields) {
    if (err) throw err;
    res.render('Meat/Packing_Form_New', { title: 'Packing_Form_New',FormTitle: Title, userData: data, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title });		
  });	
});

router.post('/Cooler_Form_New', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;	
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity" and (Department = "Meat" and Location = ?) or (Department = "Meat" and Location = "All")', [datastore],function (err, data, fields) {
    if (err) throw err;
    res.render('Meat/Cooler_Form_New', { title: 'Cooler_Form_New', FormTitle: Title, userData: data, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title });		
  });		
});

router.post('/Processing_Form_New', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;	
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity" and (Department = "Meat" and Location = ?) or (Department = "Meat" and Location = "All")', [datastore],function (err, data, fields) {
    if (err) throw err;
    res.render('Meat/Processing_Form_New', { title: 'Processing_Form_New',FormTitle: Title, userData: data, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title });	
  });	
});

router.post('/Raw_Product_Form_New', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;		
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity" and (Department = "Meat" and Location = ?) or (Department = "Meat" and Location = "All")', [datastore],function (err, data2, fields) {
    if (err) throw err;
    connection.query('SELECT * FROM Item_Maint Where Type="Vendor" and (Department = "Meat" and Location = ?) or (Department = "Meat" and Location = "All")', [datastore],function (err, data3, fields) {
    if (err) throw err;
    res.render('Meat/Raw_Product_Form_New', { title: 'Raw_Product_Form_New', FormTitle: Title, userData2: data2, userId: datauserId, userData3: data3, userName: user, userDepartment: departuser, userRole: datausr, userName: user, userDepartment: departuser, userStore: datastore, userRole: datausr, FormTitle: Title});	
  });	
  });
});

router.post('/Cold_Rooms_Form_New', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;		
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity" and (Department = "Meat" and Location = ?) or (Department = "Meat" and Location = "All")', [datastore],function (err, data, fields) {
    if (err) throw err;
    res.render('Meat/Cold_Rooms_Form_New', { title: 'Cold_Rooms_Form_New', FormTitle: Title, userData: data, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title });		
  });		
});

router.post('/Thermometer_Calibration_Form_New', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity" and (Department = "Meat" and Location = ?) or (Department = "Meat" and Location = "All")', [datastore],function (err, data, fields) {
    if (err) throw err;
    res.render('Meat/Thermometer_Calibration_Form_New', { title: 'Thermometer_Calibration_Form_New',FormTitle: Title, userId: datauserId, userStore: datastore, userData: data, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title });		
  });		
});

router.post('/Incoming_Materials_Form_New', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;	
    res.render('Meat/Incoming_Materials_Form_New', { title: 'Incoming_Materials_Form_New',FormTitle: Title, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title });		
});

router.post('/Brittle_Plastics_Form_New', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;	
    res.render('Meat/Brittle_Plastics_Form_New', { title: 'Brittle_Plastics_Form_New',FormTitle: Title, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title });		
});

router.post('/Preventative_Maintenance_Form_New', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;	
    res.render('Meat/Preventative_Maintenance_Form_New', { title: 'Preventative_Maintenance_Form_New', FormTitle: Title, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title });		
});

router.post('/NUOCA_Form_New', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;	
    res.render('Meat/NUOCA_Form_New', { title: 'NUOCA_Form_New', FormTitle: Title, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title });		
});

router.post('/Work_Order_Form_New', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;	
    res.render('Meat/Work_Order_Form_New', { title: 'Work_Order_Form_New', FormTitle: Title, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title });		
});

router.post('/Released_Material_Form_New', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;	
    res.render('Meat/Released_Material_Form_New', { title: 'Released_Material_Form_New', FormTitle: Title, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title });		
});

router.post('/Foreign_Materials_Form_New', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;
					var box= req.body.Form_Name;
		if (box=="Raw_Product") {box="Raw Product"}
		if (box=="Cold_Rooms") {box="Cold Rooms"}
		if (box=="Thermometer_Calibration") {box="Thermometer Calibration"}
		if (box=="Incoming_Materials") {box="Incoming Materials"}
		if (box=="Brittle_Plastics") {box="Brittle Plastics"}
		if (box=="Preventative_Maintenance") {box="Preventative Maintenance"}
		if (box=="Foreign_Materials") {box="Foreign Materials"}
		if (box=="Released_Material") {box="Rejected/Released"}
		if (box=="Work_Order") {box="Work Order"}
    res.render('Meat/Foreign_Materials_Form_New', { title: 'Foreign_Materials_Form_New', FormTitle: Title, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title });		
});
//-------------------------------------------Submitted Forms ------------------------------------------------------------>



router.post('/Packing_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;
					var box= req.body.Form_Name;
		if (box=="Raw_Product") {box="Raw Product"}
		if (box=="Cold_Rooms") {box="Cold Rooms"}
		if (box=="Thermometer_Calibration") {box="Thermometer Calibration"}
		if (box=="Incoming_Materials") {box="Incoming Materials"}
		if (box=="Brittle_Plastics") {box="Brittle Plastics"}
		if (box=="Preventative_Maintenance") {box="Preventative Maintenance"}
		if (box=="Foreign_Materials") {box="Foreign Materials"}
		if (box=="Released_Material") {box="Rejected/Released"}
		if (box=="Work_Order") {box="Work Order"}
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
		connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [req.body.Form_Name] ,function (err, data2, fields) {		
    if (err) throw err;
    res.render('Meat/Packing_Form', { title: 'Packing_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userData2: data2, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
  });
	});
		});
});


router.post('/Cooler_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;
				var box= req.body.Form_Name;
		if (box=="Raw_Product") {box="Raw Product"}
		if (box=="Cold_Rooms") {box="Cold Rooms"}
		if (box=="Thermometer_Calibration") {box="Thermometer Calibration"}
		if (box=="Incoming_Materials") {box="Incoming Materials"}
		if (box=="Brittle_Plastics") {box="Brittle Plastics"}
		if (box=="Preventative_Maintenance") {box="Preventative Maintenance"}
		if (box=="Foreign_Materials") {box="Foreign Materials"}
		if (box=="Released_Material") {box="Rejected/Released"}
		if (box=="Work_Order") {box="Work Order"}
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
		
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity" and (Department = "Meat" and Location = ?) or (Department = "Meat" and Location = "All")', [datastore],function (err, data2, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
        res.render('Meat/Cooler_Form', { title: 'Cooler_Form', userData: data, userData2: data2, userId: datauserId, userStore: datastore, userDataCor: dataCor, userData3: dataCor, FormBox: box, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
  });
	});
					
  });
});


router.post('/Processing_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;
					var box= req.body.Form_Name;
		if (box=="Raw_Product") {box="Raw Product"}
		if (box=="Cold_Rooms") {box="Cold Rooms"}
		if (box=="Thermometer_Calibration") {box="Thermometer Calibration"}
		if (box=="Incoming_Materials") {box="Incoming Materials"}
		if (box=="Brittle_Plastics") {box="Brittle Plastics"}
		if (box=="Preventative_Maintenance") {box="Preventative Maintenance"}
		if (box=="Foreign_Materials") {box="Foreign Materials"}
		if (box=="Released_Material") {box="Rejected/Released"}
		if (box=="Work_Order") {box="Work Order"}
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
				connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [req.body.Form_Name] ,function (err, data2, fields) {	
    if (err) throw err;
    res.render('Meat/Processing_Form', { title: 'Processing_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userData2: data2, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
  });
	});
});
});

router.post('/Raw_Product_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Raw Product";
					var box= req.body.Form_Name;
		if (box=="Raw_Product") {box="Raw Product"}
		if (box=="Cold_Rooms") {box="Cold Rooms"}
		if (box=="Thermometer_Calibration") {box="Thermometer Calibration"}
		if (box=="Incoming_Materials") {box="Incoming Materials"}
		if (box=="Brittle_Plastics") {box="Brittle Plastics"}
		if (box=="Preventative_Maintenance") {box="Preventative Maintenance"}
		if (box=="Foreign_Materials") {box="Foreign Materials"}
		if (box=="Released_Material") {box="Rejected/Released"}
		if (box=="Work_Order") {box="Work Order"}
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
			connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [req.body.Form_Name] ,function (err, data2, fields) {
    if (err) throw err;
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity" and (Department = "Meat" and Location = ?) or (Department = "Meat" and Location = "All")', [datastore],function (err, data2, fields) {
    if (err) throw err;
    connection.query('SELECT * FROM Item_Maint Where Type="Vendor" and (Department = "Meat" and Location = ?) or (Department = "Meat" and Location = "All")', [datastore],function (err, data4, fields) {
    if (err) throw err;
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
                res.render('Meat/Raw_Product_Form', { title: 'Raw_Product_Form', userData: data, userData2: data2, userDataCor: dataCor, userData3: dataCor, FormBox: box, userData4: data4, userName: user, userDepartment: departuser, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title});
  });
		
  });
	  });	
  });
  });
});



router.post('/Cold_Rooms_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Cold Rooms";
	var box= req.body.Form_Name;
		if (box=="Raw_Product") {box="Raw Product"}
		if (box=="Cold_Rooms") {box="Cold Rooms"}
		if (box=="Thermometer_Calibration") {box="Thermometer Calibration"}
		if (box=="Incoming_Materials") {box="Incoming Materials"}
		if (box=="Brittle_Plastics") {box="Brittle Plastics"}
		if (box=="Preventative_Maintenance") {box="Preventative Maintenance"}
		if (box=="Foreign_Materials") {box="Foreign Materials"}
		if (box=="Released_Material") {box="Rejected/Released"}
		if (box=="Work_Order") {box="Work Order"}
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    if (err) throw err;
        connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
	connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [req.body.Form_Name] ,function (err, data2, fields) {		
    if (err) throw err;
                res.render('Meat/Cold_Rooms_Form', { title: 'Cold_Rooms_Form', userData: data, userName: user, userDepartment: departuser, userRole: datausr, userDataCor: dataCor, userData3: dataCor, FormBox: box, userData2: data2, FormBox: box, userId: datauserId, userStore: datastore, FormTitle: Title});
  });
  });
  });
});


router.post('/Thermometer_Calibration_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Thermometer Calibration";
					var box= req.body.Form_Name;
		if (box=="Raw_Product") {box="Raw Product"}
		if (box=="Cold_Rooms") {box="Cold Rooms"}
		if (box=="Thermometer_Calibration") {box="Thermometer Calibration"}
		if (box=="Incoming_Materials") {box="Incoming Materials"}
		if (box=="Brittle_Plastics") {box="Brittle Plastics"}
		if (box=="Preventative_Maintenance") {box="Preventative Maintenance"}
		if (box=="Foreign_Materials") {box="Foreign Materials"}
		if (box=="Released_Material") {box="Rejected/Released"}
		if (box=="Work_Order") {box="Work Order"}
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    if (err) throw err;
        connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
                res.render('Meat/Thermometer_Calibration_Form', { title: 'Thermometer_Calibration_Form', userId: datauserId, userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userName: user, userDepartment: departuser, userStore: datastore, userRole: datausr, FormTitle: Title});
  });
  });
});

router.post('/Incoming_Materials_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Incoming Materials";
					var box= req.body.Form_Name;
		if (box=="Raw_Product") {box="Raw Product"}
		if (box=="Cold_Rooms") {box="Cold Rooms"}
		if (box=="Thermometer_Calibration") {box="Thermometer Calibration"}
		if (box=="Incoming_Materials") {box="Incoming Materials"}
		if (box=="Brittle_Plastics") {box="Brittle Plastics"}
		if (box=="Preventative_Maintenance") {box="Preventative Maintenance"}
		if (box=="Foreign_Materials") {box="Foreign Materials"}
		if (box=="Released_Material") {box="Rejected/Released"}
		if (box=="Work_Order") {box="Work Order"}
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
	connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [req.body.Form_Name] ,function (err, data2, fields) {
    if (err) throw err;
    res.render('Meat/Incoming_Materials_Form', { title: 'Incoming_Materials_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userData2: data2, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
  });
	});
		});
});

router.post('/Brittle_Plastics_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Brittle Plastics";
			var box= req.body.Form_Name;
		if (box=="Raw_Product") {box="Raw Product"}
		if (box=="Cold_Rooms") {box="Cold Rooms"}
		if (box=="Thermometer_Calibration") {box="Thermometer Calibration"}
		if (box=="Incoming_Materials") {box="Incoming Materials"}
		if (box=="Brittle_Plastics") {box="Brittle Plastics"}
		if (box=="Preventative_Maintenance") {box="Preventative Maintenance"}
		if (box=="Foreign_Materials") {box="Foreign Materials"}
		if (box=="Released_Material") {box="Rejected/Released"}
		if (box=="Work_Order") {box="Work Order"}
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
    res.render('Meat/Brittle_Plastics_Form', { title: 'Brittle_Plastics_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
  });
	});
});

router.post('/Preventative_Maintenance_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Preventative Maintenance";
					var box= req.body.Form_Name;
		if (box=="Raw_Product") {box="Raw Product"}
		if (box=="Cold_Rooms") {box="Cold Rooms"}
		if (box=="Thermometer_Calibration") {box="Thermometer Calibration"}
		if (box=="Incoming_Materials") {box="Incoming Materials"}
		if (box=="Brittle_Plastics") {box="Brittle Plastics"}
		if (box=="Preventative_Maintenance") {box="Preventative Maintenance"}
		if (box=="Foreign_Materials") {box="Foreign Materials"}
		if (box=="Released_Material") {box="Rejected/Released"}
		if (box=="Work_Order") {box="Work Order"}
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
    res.render('Meat/Preventative_Maintenance_Form', { title: 'Preventative_Maintenance_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
  });
	});
});

router.post('/NUOCA_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title
					var box= req.body.Form_Name;
		if (box=="Raw_Product") {box="Raw Product"}
		if (box=="Cold_Rooms") {box="Cold Rooms"}
		if (box=="Thermometer_Calibration") {box="Thermometer Calibration"}
		if (box=="Incoming_Materials") {box="Incoming Materials"}
		if (box=="Brittle_Plastics") {box="Brittle Plastics"}
		if (box=="Preventative_Maintenance") {box="Preventative Maintenance"}
		if (box=="Foreign_Materials") {box="Foreign Materials"}
		if (box=="Released_Material") {box="Rejected/Released"}
		if (box=="Work_Order") {box="Work Order"};	
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
    res.render('Meat/NUOCA_Form', { title: 'NUOCA_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
  });
	});
});

router.post('/Work_Order_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Work Order";
					var box= req.body.Form_Name;
		if (box=="Raw_Product") {box="Raw Product"}
		if (box=="Cold_Rooms") {box="Cold Rooms"}
		if (box=="Thermometer_Calibration") {box="Thermometer Calibration"}
		if (box=="Incoming_Materials") {box="Incoming Materials"}
		if (box=="Brittle_Plastics") {box="Brittle Plastics"}
		if (box=="Preventative_Maintenance") {box="Preventative Maintenance"}
		if (box=="Foreign_Materials") {box="Foreign Materials"}
		if (box=="Released_Material") {box="Rejected/Released"}
		if (box=="Work_Order") {box="Work Order"}
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
    res.render('Meat/Work_Order_Form', { title: 'Work_Order_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
  });
	});
});

router.post('/Released_Material_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Released Material";
					var box= req.body.Form_Name;
		if (box=="Raw_Product") {box="Raw Product"}
		if (box=="Cold_Rooms") {box="Cold Rooms"}
		if (box=="Thermometer_Calibration") {box="Thermometer Calibration"}
		if (box=="Incoming_Materials") {box="Incoming Materials"}
		if (box=="Brittle_Plastics") {box="Brittle Plastics"}
		if (box=="Preventative_Maintenance") {box="Preventative Maintenance"}
		if (box=="Foreign_Materials") {box="Foreign Materials"}
		if (box=="Released_Material") {box="Rejected/Released"}
		if (box=="Work_Order") {box="Work Order"}
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
    res.render('Meat/Released_Material_Form', { title: 'Released_Material_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
  });
	});
});

router.post('/Foreign_Materials_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Foreign Materials";
					var box= req.body.Form_Name;
		if (box=="Raw_Product") {box="Raw Product"}
		if (box=="Cold_Rooms") {box="Cold Rooms"}
		if (box=="Thermometer_Calibration") {box="Thermometer Calibration"}
		if (box=="Incoming_Materials") {box="Incoming Materials"}
		if (box=="Brittle_Plastics") {box="Brittle Plastics"}
		if (box=="Preventative_Maintenance") {box="Preventative Maintenance"}
		if (box=="Foreign_Materials") {box="Foreign Materials"}
		if (box=="Released_Material") {box="Rejected/Released"}
		if (box=="Work_Order") {box="Work Order"}
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
    res.render('Meat/Foreign_Materials_Form', { title: 'Foreign_Materials_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
  });
	});
});



//-------------------------------------------Standard User Form ------------------------------------------------------------>


router.post('/Packing_Standard_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;	
	var box= req.body.Form_Name;	
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
				connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [req.body.Form_Name] ,function (err, data2, fields) {	
    if (err) throw err;
    res.render('Meat/Packing_Standard_Form', { title: 'Packing_Standard_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userData2: data2, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
  });
	});
		});
});

router.post('/Cooler_Standard_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;	
	var box= req.body.Form_Name;
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
		
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity" and (Department = "Meat" and Location = ?) or (Department = "Meat" and Location = "All")', [datastore],function (err, data2, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
				connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [req.body.Form_Name] ,function (err, data2, fields) {	
    if (err) throw err;
        res.render('Meat/Cooler_Standard_Form', { title: 'Cooler_Standard_Form', userData: data, userData2: data2, userId: datauserId, userStore: datastore, userDataCor: dataCor, userData3: dataCor, FormBox: box, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
  });
	});
	});				
  });
});


router.post('/Processing_Standard_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;	
	var box= req.body.Form_Name;
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
				connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [req.body.Form_Name] ,function (err, data2, fields) {	
    if (err) throw err;
    res.render('Meat/Processing_Standard_Form', { title: 'Processing_Standard_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userData2: data2, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
  });
	});
		});
});


router.post('/Raw_Product_Standard_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Raw Product";	
	var box= "Raw Product";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
				connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [req.body.Form_Name] ,function (err, data2, fields) {	
    if (err) throw err;
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity" (Department = "Meat" and Location = ?) or (Department = "Meat" and Location = "All")', [datastore],function (err, data2, fields) {
    if (err) throw err;
    connection.query('SELECT * FROM Item_Maint Where Type="Vendor" and (Department = "Meat" and Location = ?) or (Department = "Meat" and Location = "All")', [datastore],function (err, data4, fields) {
    if (err) throw err;
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
                res.render('Meat/Raw_Product_Standard_Form', { title: 'Raw_Product_Standard_Form', userData: data, userData2: data2, userDataCor: dataCor, userData3: dataCor, FormBox: box, userData4: data4, userName: user, userDepartment: departuser, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title});
  });
		
  });
	});		
  });
  });
});



router.post('/Cold_Rooms_Standard_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Cold Rooms";
	var box= "Cold Rooms";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    if (err) throw err;
        connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
					connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [req.body.Form_Name] ,function (err, data2, fields) {	
    if (err) throw err;
                res.render('Meat/Cold_Rooms_Standard_Form', { title: 'Cold_Rooms_Standard_Form', userData: data, userName: user, userDepartment: departuser, userRole: datausr, userDataCor: dataCor, userData3: dataCor, FormBox: box, userData2: data2, userId: datauserId, userStore: datastore, FormTitle: Title});
  });
  });
		});
});


router.post('/Thermometer_Calibration_Standard_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Thermometer Calibration";
	var box= "Thermometer Calibration";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    if (err) throw err;
        connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
                res.render('Meat/Thermometer_Calibration_Standard_Form', { title: 'Thermometer_Calibration_Standard_Form', userId: datauserId, userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userName: user, userDepartment: departuser, userStore: datastore, userRole: datausr, FormTitle: Title});
  });
  });
});

router.post('/Incoming_Materials_Standard_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Incoming Materials";
	var box= "Incoming Materials";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
				connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [req.body.Form_Name] ,function (err, data2, fields) {	
    if (err) throw err;
    res.render('Meat/Incoming_Materials_Standard_Form', { title: 'Incoming_Materials_Standard_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userData2: data2, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
  });
	});
		});
});

router.post('/Brittle_Plastics_Standard_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Brittle Plastics";
	var box= "Brittle Plastics";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
    res.render('Meat/Brittle_Plastics_Standard_Form', { title: 'Brittle_Plastics_Standard_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
  });
	});
});

router.post('/Preventative_Maintenance_Standard_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Preventative Maintenance";
	var box= "Preventative Maintenance";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
    res.render('Meat/Preventative_Maintenance_Standard_Form', { title: 'Preventative_Maintenance_Standard_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
  });
	});
});

router.post('/NUOCA_Standard_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;	
	var box= req.body.Form_Name;
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
    res.render('Meat/NUOCA_Standard_Form', { title: 'NUOCA_Standard_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
  });
	});
});

router.post('/Work_Order_Standard_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Work Order";
	var box= "Work Order";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
    res.render('Meat/Work_Order_Standard_Form', { title: 'Work_Order_Standard_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
  });
	});
});

router.post('/Released_Material_Standard_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Released Material";
	var box= "Released Material";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
    res.render('Meat/Released_Material_Standard_Form', { title: 'Released_Material_Standard_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
  });
	});
});

router.post('/Foreign_Materials_Standard_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Foreign Materials";
	var box= "Foreign Materials";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
    res.render('Meat/Foreign_Materials_Standard_Form', { title: 'Foreign_Materials_Standard_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
  });
	});
});


router.post('/Previous_Form_Selection', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;	
	var Today = new Date();
var dd = String(Today.getDate()).padStart(2, '0');
var mm = String(Today.getMonth() + 1).padStart(2, '0'); 
var yyyy = Today.getFullYear();
Today = yyyy + '-' + mm + '-' + dd;
	
	if (datausr=="Administrator") {
    res.render('Meat/Previous_Form_Selection', { title: 'Previous_Form_Selection', userName: user, userDepartment: departuser, userId: datauserId, userStore: datastore, TodaysDate: Today, userRole: datausr, FormTitle: Title});
	}
	
		else {
    res.render('Meat/Previous_Standard_Selection', { title: 'Previous_Standard_Selection', userName: user, userDepartment: departuser, userId: datauserId, userStore: datastore, TodaysDate: Today, userRole: datausr, FormTitle: Title});
	}
});

router.post('/Previous_Form_Selection2', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;	
		var Today = new Date();
var dd = String(Today.getDate()).padStart(2, '0');
var mm = String(Today.getMonth() + 1).padStart(2, '0'); 
var yyyy = Today.getFullYear();
Today = yyyy + '-' + mm + '-' + dd;
	
	if (datausr=="Administrator") {
    res.render('Meat/Previous_Form_Selection2', { title: 'Previous_Form_Selection2', userName: user, userDepartment: departuser, userId: datauserId, userStore: datastore, TodaysDate: Today, userRole: datausr, FormTitle: Title});
	}
	
		else {
    res.render('Meat/Previous_Standard_Selection2', { title: 'Previous_Standard_Selection2', userName: user, userDepartment: departuser, userId: datauserId, userStore: datastore, TodaysDate: Today, userRole: datausr, FormTitle: Title});
	}
});


module.exports = router;


















