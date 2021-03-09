var express = require('express');
var router = express.Router();
var connection=require('../Database');
var app        = express();
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/user-list', function(req, res, next) {
    var sql='SELECT * FROM Submitted_Forms';
    connection.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('user-list', { title: 'User List', userData: data});
  });
});








	router.post('/List_Edit', function(req, res, next) {

    connection.query('SELECT * FROM Item_Maint Where Type=?', [req.body.Type],  function(err, data, fields) {
		var form=req.body.Type
    if (err) throw err;
    res.render('List_Edit', { title: 'List_Edit', userData: data, formName: form});
	
  });

});

	router.post('/List_Edit_Item', function(req, res, next) {

    connection.query('SELECT * FROM Item_Maint Where Type=? and Id=?', [req.body.Type, req.body.Id],  function(err, data, fields) {
		var form=req.body.Type
    if (err) throw err;
    res.render('List_Edit_Item', { title: 'List_Edit_Item', userData: data, formName: form});
	
  });

});





	router.post('/List_Delete', function(req, res, next) {
	
	
	
	
    connection.query("Delete From `Item_Maint` Where Id=?", [req.body.Id], function(err, result){
        if(err) throw err;
            console.log("1 record inserted");
        });
	
	    connection.query('SELECT * FROM Item_Maint Where Type=?', [req.body.Type],function (err, data, fields) {
		var form=req.body.Type
    if (err) throw err;
    res.render('List_Edit', { title: 'List_Edit', userData: data, formName: form});
		
  

  });





});

	router.post('/List_Update', function(req, res, next) {
	
	
	
	
    connection.query("UPDATE Item_Maint SET Name = ? WHERE Id=?", [req.body.Name, req.body.Id], function(err, result){
        if(err) throw err;
            console.log("1 record inserted");
        });
	
	    connection.query('SELECT * FROM Item_Maint Where Type=?', [req.body.Type],function (err, data, fields) {
		var form=req.body.Type
    if (err) throw err;
    res.render('List_Edit', { title: 'List_Edit', userData: data, formName: form});
		
  

  });





});







	
	
	
	router.post('/Main_Result', function(req, res, next) {
	
	
	
	
    connection.query('SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ?', [req.body.Form_Name, req.body.Date] ,function (err, data, fields) {
		
    if (err) throw err;
    res.render('Main_Result', { title: 'Main_Result', userData: data});
		
  

  });





});






router.post('/Packing_Form', function(req, res, next) {
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    if (err) throw err;
    res.render('Packing_Form', { title: 'Packing_Form', userData: data});
  });
});


router.post('/Cooler_Form', function(req, res, next) {
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
		
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity"',function (err, data2, fields) {
    if (err) throw err;
    res.render('Cooler_Form', { title: 'Cooler_Form', userData: data, userData2: data2});
		
  });
		
		
		
  });
});



router.post('/Cooler_Form_New', function(req, res, next) {
 
		
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity"',function (err, data, fields) {
    if (err) throw err;
    res.render('Cooler_Form_New', { title: 'Cooler_Form_New', userData: data });
		
  });
		
		
		

});






router.post('/Processing_Form', function(req, res, next) {
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    if (err) throw err;
    res.render('Processing_Form', { title: 'Processing_Form', userData: data});
  });
});


router.post('/Raw_Product_Form', function(req, res, next) {
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    if (err) throw err;
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity"',function (err, data2, fields) {
    if (err) throw err;
    connection.query('SELECT * FROM Item_Maint Where Type="Vendor"',function (err, data3, fields) {
    if (err) throw err;
    res.render('Raw_Product_Form', { title: 'Raw_Product_Form', userData: data, userData2: data2, userData3: data3});
		
  });
		
  });
  });
});


router.post('/Raw_Product_Form_New', function(req, res, next) {

    connection.query('SELECT * FROM Item_Maint Where Type="Commodity"',function (err, data2, fields) {
    if (err) throw err;
    connection.query('SELECT * FROM Item_Maint Where Type="Vendor"',function (err, data3, fields) {
    if (err) throw err;
    res.render('Raw_Product_Form_New', { title: 'Raw_Product_Form_New', userData2: data2, userData3: data3});
		
  });
		
  });

});







router.post('/Cold_Rooms_Form', function(req, res, next) {
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    if (err) throw err;
    res.render('Cold_Rooms_Form', { title: 'Cold_Rooms_Form', userData: data});
  });
});


router.post('/Thermometer_Calibration_Form', function(req, res, next) {
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    if (err) throw err;
    res.render('Thermometer_Calibration_Form', { title: 'Thermometer_Calibration_Form', userData: data});
  });
});




module.exports = router;



