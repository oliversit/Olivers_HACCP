const bcrypt = require('bcrypt');
const saltRounds = 10;
var express = require('express');
var router = express.Router();
var connection=require('../Database');
var app = express();
// other routes also appear here
// this script to fetch data from MySQL databse table



//-------------------------------------------New Forms ------------------------------------------------------------>

router.post('/Cold_Storage_Form_New', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;	
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity"',function (err, data, fields) {
    if (err) throw err;
    res.render('Deli/Cold_Storage_Form_New', { title: 'Cold_Storage_Form_New',FormTitle: Title, userData: data, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title });		
  });	
});

router.post('/Reheating_Form_New', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;	
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity"',function (err, data, fields) {
    if (err) throw err;
    res.render('Deli/Reheating_Form_New', { title: 'Reheating_Form_New', FormTitle: Title, userData: data, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title });		
  });		
});

router.post('/Haccp_Monitoring_Form_New', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;	
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity"',function (err, data, fields) {
    if (err) throw err;
    res.render('Deli/Haccp_Monitoring_Form_New', { title: 'Haccp_Monitoring_Form_New',FormTitle: Title, userData: data, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title });	
  });	
});

router.post('/Damaged_Discarded_Form_New', function(req, res, next) {
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
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity"',function (err, data2, fields) {
    if (err) throw err;
    connection.query('SELECT * FROM Item_Maint Where Type="Vendor"',function (err, data3, fields) {
    if (err) throw err;
    res.render('Deli/Damaged_Discarded_Form_New', { title: 'Damaged_Discarded_Form_New', FormTitle: Title, userData2: data2, userId: datauserId, userData3: data3, userName: user, userDepartment: departuser, userRole: datausr, userName: user, userDepartment: departuser, userStore: datastore, userRole: datausr, FormTitle: Title});	
  });	
  });
});

router.post('/Inventory_Form_New', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;		
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity"',function (err, data, fields) {
    if (err) throw err;
    res.render('Deli/Inventory_Form_New', { title: 'Inventory_Form_New', FormTitle: Title, userData: data, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title });		
  });		
});

router.post('/Thermometer_Calibration_Form_New', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity"',function (err, data, fields) {
    if (err) throw err;
    res.render('Deli/Thermometer_Calibration_Form_New', { title: 'Thermometer_Calibration_Form_New',FormTitle: Title, userId: datauserId, userStore: datastore, userData: data, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title });		
  });		
});

router.post('/Sanitation_Form_New', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;	
    res.render('Deli/Sanitation_Form_New', { title: 'Sanitation_Form_New',FormTitle: Title, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title });		
});

router.post('/Receiving_Commissary_Form_New', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;	
    res.render('Deli/Receiving_Commissary_Form_New', { title: 'Receiving_Commissary_Form_New',FormTitle: Title, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title });		
});

router.post('/Receiving_Stores_Form_New', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;	
    res.render('Deli/Receiving_Stores_Form_New', { title: 'Receiving_Stores_Form_New', FormTitle: Title, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title });		
});

router.post('/Deviation_Record_Form_New', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;	
    res.render('Deli/Deviation_Record_Form_New', { title: 'Deviation_Record_Form_New', FormTitle: Title, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title });		
});

router.post('/Work_Order_Form_New', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;	
    res.render('Deli/Work_Order_Form_New', { title: 'Work_Order_Form_New', FormTitle: Title, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title });		
});

router.post('/Cold_Transfer_Form_New', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;	
    res.render('Deli/Cold_Transfer_Form_New', { title: 'Cold_Transfer_Form_New', FormTitle: Title, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title });		
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
    res.render('Deli/Foreign_Materials_Form_New', { title: 'Foreign_Materials_Form_New', FormTitle: Title, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title });		
});
//-------------------------------------------Submitted Forms ------------------------------------------------------------>



router.post('/Cold_Storage_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
		var Title= "Cold Storage";
	var box= "Cold Storage";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
		connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [req.body.Form_Name] ,function (err, data2, fields) {		
    if (err) throw err;
    res.render('Deli/Cold_Storage_Form', { title: 'Cold_Storage_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userData2: data2, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
  });
	});
		});
});


router.post('/Cold_Transfer_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Cold Transfer";
var box= "Cold Transfer";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
		
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity"',function (err, data2, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
        res.render('Deli/Cold_Transfer_Form', { title: 'Cold_Transfer_Form', userData: data, userData2: data2, userId: datauserId, userStore: datastore, userDataCor: dataCor, userData3: dataCor, FormBox: box, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
  });
	});
					
  });
});


router.post('/Haccp_Monitoring_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Haccp Monitoring";
var box= "Haccp Monitoring";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
				connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [req.body.Form_Name] ,function (err, data2, fields) {	
    if (err) throw err;
    res.render('Deli/Haccp_Monitoring_Form', { title: 'Haccp_Monitoring_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userData2: data2, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
  });
	});
});
});

router.post('/Reheating_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Reheating";
var box= "Reheating";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
			connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [req.body.Form_Name] ,function (err, data2, fields) {
    if (err) throw err;
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity"',function (err, data2, fields) {
    if (err) throw err;
    connection.query('SELECT * FROM Item_Maint Where Type="Vendor"',function (err, data4, fields) {
    if (err) throw err;
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
                res.render('Deli/Reheating_Form', { title: 'Reheating_Form', userData: data, userData2: data2, userDataCor: dataCor, userData3: dataCor, FormBox: box, userData4: data4, userName: user, userDepartment: departuser, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title});
  });
		
  });
	  });	
  });
  });
});



router.post('/Inventory_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Inventory";
var box= "Inventory";
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
                res.render('Deli/Inventory_Form', { title: 'Inventory_Form', userData: data, userName: user, userDepartment: departuser, userRole: datausr, userDataCor: dataCor, userData3: dataCor, FormBox: box, userData2: data2, FormBox: box, userId: datauserId, userStore: datastore, FormTitle: Title});
  });
  });
  });
});


router.post('/Sanitation_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Sanitation";
			var box= "Sanitation";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    if (err) throw err;
        connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
                res.render('Deli/Sanitation_Form', { title: 'Sanitation_Form', userId: datauserId, userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userName: user, userDepartment: departuser, userStore: datastore, userRole: datausr, FormTitle: Title});
  });
  });
});

router.post('/Damaged_Discarded_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Damaged/Discarded";
	var box= "Damaged Discarded";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
	connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [req.body.Form_Name] ,function (err, data2, fields) {
    if (err) throw err;
    res.render('Deli/Damaged_Discarded_Form', { title: 'Damaged_Discarded_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userData2: data2, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
  });
	});
		});
});

router.post('/Deviation_Record_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Deviation Record";
		var box= "Deviation Record";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
    res.render('Deli/Deviation_Record_Form', { title: 'Deviation_Record_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
  });
	});
});

router.post('/Receiving_Commissary_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Receiving (Commissary)";
	var box= "Receiving (Commissary)";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
    res.render('Deli/Receiving_Commissary_Form', { title: 'Receiving_Commissary_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
  });
	});
});

router.post('/Receiving_Stores_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Receiving (Stores)";
var box= "Receiving (Stores)";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
    res.render('Deli/Receiving_Stores_Form', { title: 'Receiving_Stores_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
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
var box= "Thermometer Calibration";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
    res.render('Deli/Thermometer_Calibration_Form', { title: 'Thermometer_Calibration_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
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
var box= "Released Material";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
    res.render('Deli/Released_Material_Form', { title: 'Released_Material_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
  });
	});
});




//-------------------------------------------Standard User Form ------------------------------------------------------------>


router.post('/Cold_Storage_Standard_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Cold Storage";	
var box= "Cold Storage";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
				connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [req.body.Form_Name] ,function (err, data2, fields) {	
    if (err) throw err;
    res.render('Deli/Cold_Storage_Standard_Form', { title: 'Cold_Storage_Standard_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userData2: data2, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
  });
	});
		});
});

router.post('/Cold_Transfer_Standard_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Cold Transfer";	
var box= "Cold Transfer";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
		
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity"',function (err, data2, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
				connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [req.body.Form_Name] ,function (err, data2, fields) {	
    if (err) throw err;
        res.render('Deli/Cold_Transfer_Standard_Form', { title: 'Cold_Transfer_Standard_Form', userData: data, userData2: data2, userId: datauserId, userStore: datastore, userDataCor: dataCor, userData3: dataCor, FormBox: box, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
  });
	});
	});				
  });
});


router.post('/Haccp_Monitoring_Standard_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Haccp Monitoring";	
var box= "Haccp Monitoring";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
				connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [req.body.Form_Name] ,function (err, data2, fields) {	
    if (err) throw err;
    res.render('Deli/Haccp_Monitoring_Standard_Form', { title: 'Haccp_Monitoring_Standard_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userData2: data2, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
  });
	});
		});
});


router.post('/Reheating_Standard_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Reheating";	
var box= "Reheating";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
				connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [req.body.Form_Name] ,function (err, data2, fields) {	
    if (err) throw err;
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity"',function (err, data2, fields) {
    if (err) throw err;
    connection.query('SELECT * FROM Item_Maint Where Type="Vendor"',function (err, data4, fields) {
    if (err) throw err;
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
                res.render('Deli/Reheating_Standard_Form', { title: 'Reheating_Standard_Form', userData: data, userData2: data2, userDataCor: dataCor, userData3: dataCor, FormBox: box, userData4: data4, userName: user, userDepartment: departuser, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title});
  });
		
  });
	});		
  });
  });
});



router.post('/Inventory_Standard_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Inventory";
var box= "Inventory";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    if (err) throw err;
        connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
					connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [req.body.Form_Name] ,function (err, data2, fields) {	
    if (err) throw err;
                res.render('Deli/Inventory_Standard_Form', { title: 'Inventory_Standard_Form', userData: data, userName: user, userDepartment: departuser, userRole: datausr, userDataCor: dataCor, userData3: dataCor, FormBox: box, userData2: data2, userId: datauserId, userStore: datastore, FormTitle: Title});
  });
  });
		});
});


router.post('/Sanitation_Standard_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Sanitation";
var box= "Sanitation";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    if (err) throw err;
        connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
                res.render('Deli/Sanitation_Standard_Form', { title: 'Sanitation_Standard_Form', userId: datauserId, userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userName: user, userDepartment: departuser, userStore: datastore, userRole: datausr, FormTitle: Title});
  });
  });
});

router.post('/Damaged_Discarded_Standard_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Damaged/Discarded";
	var box= "Damaged/Discarded";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
				connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [req.body.Form_Name] ,function (err, data2, fields) {	
    if (err) throw err;
    res.render('Deli/Damaged_Discarded_Standard_Form', { title: 'Damaged_Discarded_Standard_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userData2: data2, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
  });
	});
		});
});

router.post('/Deviation_Record_Standard_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Deviation Record";
	var box= "Deviation Record";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
    res.render('Deli/Deviation_Record_Standard_Form', { title: 'Deviation_Record_Standard_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
  });
	});
});

router.post('/Receiving_Commissary_Standard_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Receiving (Commissary)";
	var box= "Receiving (Commissary)";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
    res.render('Deli/Receiving_Commissary_Standard_Form', { title: 'Receiving_Commissary_Standard_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
  });
	});
});

router.post('/Receiving_Stores_Standard_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= "Receiving (Stores)";	
	var box= "Receiving (Stores)";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
    res.render('Deli/Receiving_Stores_Standard_Form', { title: 'Receiving_Stores_Standard_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
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
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
    res.render('Deli/Thermometer_Calibration_Standard_Form', { title: 'Thermometer_Calibration_Standard_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
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
    res.render('Deli/Released_Material_Standard_Form', { title: 'Released_Material_Standard_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
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
    res.render('Deli/Foreign_Materials_Standard_Form', { title: 'Foreign_Materials_Standard_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
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
    res.render('Deli/Previous_Form_Selection', { title: 'Previous_Form_Selection', userName: user, userDepartment: departuser, userId: datauserId, userStore: datastore, TodaysDate: Today, userRole: datausr, FormTitle: Title});
	}
	
		else {
    res.render('Deli/Previous_Standard_Selection', { title: 'Previous_Standard_Selection', userName: user, userDepartment: departuser, userId: datauserId, userStore: datastore, TodaysDate: Today, userRole: datausr, FormTitle: Title});
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
    res.render('Deli/Previous_Form_Selection2', { title: 'Previous_Form_Selection2', userName: user, userDepartment: departuser, userId: datauserId, userStore: datastore, TodaysDate: Today, userRole: datausr, FormTitle: Title});
	}
	
		else {
    res.render('Deli/Previous_Standard_Selection2', { title: 'Previous_Standard_Selection2', userName: user, userDepartment: departuser, userId: datauserId, userStore: datastore, TodaysDate: Today, userRole: datausr, FormTitle: Title});
	}
});





module.exports = router;


















