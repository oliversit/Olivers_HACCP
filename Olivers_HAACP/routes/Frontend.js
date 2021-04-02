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
var user= req.body.username;
		var Title= req.body.Form_Title;	
		var form= req.body.Type;	
    connection.query('SELECT * FROM Item_Maint Where Type=?', [req.body.Type],  function(err, data, fields) {
		var form=req.body.Type
    if (err) throw err;
    res.render('List_Edit', { title: 'List_Edit', userData: data, formName: form, userName: user, FormTitle: Title});
	
  });

});

	router.post('/List_Edit_Item', function(req, res, next) {
var user= req.body.username;
		var Title= req.body.Form_Title;
		var form= req.body.Type;
    connection.query('SELECT * FROM Item_Maint Where Type=? and Id=?', [req.body.Type, req.body.Id],  function(err, data, fields) {
		var form=req.body.Type
    if (err) throw err;
    res.render('List_Edit_Item', { title: 'List_Edit_Item', userData: data, formName: form, userName: user, FormTitle: Title});
	
  });

});





	router.post('/List_Delete', function(req, res, next) {
	var user= req.body.username;
		var Title= req.body.Form_Title;
		var form= req.body.Type;
    connection.query("Delete From `Item_Maint` Where Id=?", [req.body.Id], function(err, result){
        if(err) throw err;
            console.log("1 record inserted");
        });
	
	    connection.query('SELECT * FROM Item_Maint Where Type=?', [req.body.Type],function (err, data, fields) {
		var form=req.body.Type
    if (err) throw err;
    res.render('List_Edit', { title: 'List_Edit', userData: data, formName: form, userName: user, FormTitle: Title});
		
  

  });





});

	router.post('/List_Update', function(req, res, next) {
	var user= req.body.username;	
		var Title= req.body.Form_Title;
		var form= req.body.Type;
    connection.query("UPDATE Item_Maint SET Name = ? WHERE Id=?", [req.body.Name, req.body.Id], function(err, result){
        if(err) throw err;
            console.log("1 record inserted");
        });
	
	    connection.query('SELECT * FROM Item_Maint Where Type=?', [req.body.Type],function (err, data, fields) {
		var form=req.body.Type
    if (err) throw err;
    res.render('List_Edit', { title: 'List_Edit', userData: data, formName: form, userName: user, FormTitle: Title});
		
  

  });





});







	
	
	
	router.post('/Main_Result', function(req, res, next) {
	var user= req.body.username;
		var Title= req.body.Form_Title;	
		var box=req.body.Form_Name;
			if (box=="Raw_Product") {box="Raw Product"}
		if (box=="Cold_Rooms") {box="Cold Rooms"}
		if (box=="Thermometer_Calibration") {box="Thermometer Calibration"}
    connection.query('SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ?', [req.body.Form_Name, req.body.Date] ,function (err, data, fields) {
		
    if (err) throw err;
    res.render('Main_Result', { title: 'Main_Result', userData: data, userName: user, FormTitle: Title, FormBox: box});	
  });
});


	router.post('/Generate', function(req, res, next) {
	var user= req.body.username;
		var Title= req.body.Form_Title;	
		var box=req.body.Form_Name;
			if (box=="Raw_Product") {box="Raw Product"}
		if (box=="Cold_Rooms") {box="Cold Rooms"}
		if (box=="Thermometer_Calibration") {box="Thermometer Calibration"}
   connection.query('SELECT * FROM Submitted_Forms Where Form_Name= ? and Date >= ? and Date <= ?', [req.body.Form_Name, req.body.Date1, req.body.Date2] ,function (err, data, fields) {
   connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [req.body.Form_Name] ,function (err, data2, fields) {
   connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date >= ? and Date <= ?', [req.body.Form_Name, req.body.Date1, req.body.Date2] ,function (err, data3, fields) {
		
    if (err) throw err;
    res.render('Generate', { title: 'Generate', userData: data, userData2: data2, userData3: data3, userName: user, FormTitle: Title, FormBox: box});	
  });
  });
  });
});


//-------------------------------------------New Forms ------------------------------------------------------------>

router.post('/Packing_Form_New', function(req, res, next) {
var user= req.body.username;
	var Title= req.body.Form_Title;	
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity"',function (err, data, fields) {
    if (err) throw err;
    res.render('Packing_Form_New', { title: 'Packing_Form_New',FormTitle: Title, userData: data, userName: user, FormTitle: Title });		
  });	
});

router.post('/Cooler_Form_New', function(req, res, next) {
var user= req.body.username;
	var Title= req.body.Form_Title;	
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity"',function (err, data, fields) {
    if (err) throw err;
    res.render('Cooler_Form_New', { title: 'Cooler_Form_New', FormTitle: Title, userData: data, userName: user, FormTitle: Title });		
  });		
});

router.post('/Processing_Form_New', function(req, res, next) {
var user= req.body.username;
	var Title= req.body.Form_Title;	
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity"',function (err, data, fields) {
    if (err) throw err;
    res.render('Processing_Form_New', { title: 'Processing_Form_New',FormTitle: Title, userData: data, userName: user, FormTitle: Title });	
  });	
});

router.post('/Raw_Product_Form_New', function(req, res, next) {
	var user= req.body.username;
var user= req.body.username;
	var Title= req.body.Form_Title;		
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity"',function (err, data2, fields) {
    if (err) throw err;
    connection.query('SELECT * FROM Item_Maint Where Type="Vendor"',function (err, data3, fields) {
    if (err) throw err;
    res.render('Raw_Product_Form_New', { title: 'Raw_Product_Form_New', FormTitle: Title, userData2: data2, userData3: data3, userName: user, userName: user, FormTitle: Title});	
  });	
  });
});

router.post('/Cold_Rooms_Form_New', function(req, res, next) {
var user= req.body.username;
	var Title= req.body.Form_Title;		
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity"',function (err, data, fields) {
    if (err) throw err;
    res.render('Cold_Rooms_Form_New', { title: 'Cold_Rooms_Form_New', FormTitle: Title, userData: data, userName: user, FormTitle: Title });		
  });		
});

router.post('/Thermometer_Calibration_Form_New', function(req, res, next) {
var user= req.body.username;
	var Title= req.body.Form_Title;
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity"',function (err, data, fields) {
    if (err) throw err;
    res.render('Thermometer_Calibration_Form_New', { title: 'Thermometer_Calibration_Form_New',FormTitle: Title, userData: data, userName: user, FormTitle: Title });		
  });		
});

//-------------------------------------------Submitted Forms ------------------------------------------------------------>



router.post('/Packing_Form', function(req, res, next) {
	var user= req.body.username;
	var Title= req.body.Form_Title;	
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
    res.render('Packing_Form', { title: 'Packing_Form', userData: data, userDataCor: dataCor, userName: user, FormTitle: Title});
  });
	});
});


router.post('/Cooler_Form', function(req, res, next) {
	var user= req.body.username;
	var Title= req.body.Form_Title;	
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
		
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity"',function (err, data2, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
        res.render('Cooler_Form', { title: 'Cooler_Form', userData: data, userData2: data2, userDataCor: dataCor, userName: user, FormTitle: Title});
  });
	});
					
  });
});


router.post('/Processing_Form', function(req, res, next) {
	var user= req.body.username;
	var Title= req.body.Form_Title;	
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
    res.render('Processing_Form', { title: 'Processing_Form', userData: data, userDataCor: dataCor, userName: user, FormTitle: Title});
  });
	});
});


router.post('/Raw_Product_Form', function(req, res, next) {
	var user= req.body.username;
	var Title= "Raw Product";	
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    if (err) throw err;
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity"',function (err, data2, fields) {
    if (err) throw err;
    connection.query('SELECT * FROM Item_Maint Where Type="Vendor"',function (err, data3, fields) {
    if (err) throw err;
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
                res.render('Raw_Product_Form', { title: 'Raw_Product_Form', userData: data, userData2: data2, userDataCor: dataCor, userData3: data3, userName: user, FormTitle: Title});
  });
		
  });
		
  });
  });
});



router.post('/Cold_Rooms_Form', function(req, res, next) {
	var user= req.body.username;
	var Title= "Cold Rooms";	
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    if (err) throw err;
        connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
                res.render('Cold_Rooms_Form', { title: 'Cold_Rooms_Form', userData: data, userName: user, userDataCor: dataCor, FormTitle: Title});
  });
  });
});


router.post('/Thermometer_Calibration_Form', function(req, res, next) {
	var user= req.body.username;
	var Title= "Thermometer Calibration";	
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    if (err) throw err;
        connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
                res.render('Thermometer_Calibration_Form', { title: 'Thermometer_Calibration_Form', userData: data, userDataCor: dataCor, userName: user, FormTitle: Title});
  });
  });
});

//-------------------------------------------Nav Bar ------------------------------------------------------------>

router.post('/Settings', function(req, res, next) {
	var user= req.body.username;
	var Title= req.body.Form_Title;	
    res.render('Settings_Page', { title: 'Settings_Page',  userName: user, FormTitle: Title});

});

router.post('/Maintenance', function(req, res, next) {
	var user= req.body.username;
	var Title= req.body.Form_Title;	
    res.render('Maint_Page', { title: 'Maint_Page',  userName: user, FormTitle: Title});

});

router.post('/Support', function(req, res, next) {
	var user= req.body.username;
	var Title= req.body.Form_Title;	
    res.render('Support_Page', { title: 'Support_Page',  userName: user, FormTitle: Title});

});


router.post('/Dashboard', function(req, res, next) {
	var user= req.body.username;
	var Title= req.body.Form_Title;	
    res.render('Dashboard', { title: 'Dashboard', userName: user, FormTitle: Title});

});

router.post('/Reports', function(req, res, next) {
	var user= req.body.username;
	var Title= req.body.Form_Title;	
    res.render('Reports', { title: 'Reports', userName: user, FormTitle: Title});

});

router.post('/Previous_Form_Selection', function(req, res, next) {
	var user= req.body.username;
	var Title= req.body.Form_Title;	
    res.render('Previous_Form_Selection', { title: 'Previous_Form_Selection', userName: user, FormTitle: Title});

});

router.post('/Log_Out', function(req, res, next) {

    res.redirect('/');

});








//-------------------------------------------Log In Procedure ------------------------------------------------------------>



router.post('/auth', function(req, res) {
	var user= req.body.username;
	var password = req.body.password;
	var Title= req.body.Form_Title;
	if (user && password) {
		connection.query('SELECT * FROM Users WHERE userName = ? AND passwd = ?', [user, password], function(error, results, fields) {
			
			if (results.length > 0) {
					res.render('Dashboard', { title: 'Dashboard',FormTitle: Title, userName: user});
			} else {
				res.render('Sign_Incorrect', { title: 'Sign_Incorrect', userName: user, FormTitle: Title});
			}			
		
		});
	}
});

module.exports = router;


















