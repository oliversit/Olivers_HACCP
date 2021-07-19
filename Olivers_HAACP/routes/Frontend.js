const bcrypt = require('bcrypt');
const saltRounds = 10;
var express = require('express');
var router = express.Router();
var connection=require('../Database');
var app = express();
// another routes also appear here
// this script to fetch data from MySQL databse table

	router.post('/User_List', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var Title= req.body.Form_Title;	
var form= req.body.Type;	   
    
		if (datausr=="Store Level") {
			    connection.query('SELECT  Id, userName, firstname, lastname, email, role, store FROM Users Where userName=? and Id=?', [req.body.username, req.body.userid],   function(err, data2, fields) {
    if (err) throw err;
		
    res.render('Settings_Page_Standard', { title: 'Settings_Page_Standard', userId: datauserId, userStore: datastore, userData2: data2, formName: form, userName: user, userRole: datausr, FormTitle: Title});
	
  });
			}
		
		
		else {
			 connection.query('SELECT  Id, userName, role, store FROM Users',   function(err, data, fields) {
				 if (err) throw err;
    res.render('User_List', { title: 'User_List', userData: data, formName: form, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title});
				   });
		}
	


});

	router.post('/User_List_Update', function(req, res, next) {
	var user= req.body.username;
	var standarduser= req.body.userName;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;	
		var Title= req.body.Form_Title;
		var form= req.body.Type;
    connection.query("UPDATE Users SET userName = ?, firstname = ?, lastname = ?, email = ?, role = ?, store = ? WHERE Id=?", [req.body.userName, req.body.firstname, req.body.lastname, req.body.email, req.body.role, req.body.store, req.body.Id], function(err, result){
		if (err) throw err;
            console.log("1 record inserted");
        });
	
		if (datausr=="Store Level") {
		
    res.render('Dashboard', { title: 'Dashboard', userId: datauserId, userStore: datastore, formName: form, userName: standarduser, userRole: datausr, FormTitle: Title});
	
			}
		
		else {
		var userchange= req.body.checkuser;
		var currentuser= req.body.userName;
			if(userchange==1){user=currentuser};
			
			 connection.query('SELECT  Id, userName, role, store FROM Users',   function(err, data, fields) {
				 if (err) throw err;
    res.render('User_List', { title: 'User_List', userData: data, formName: form, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title});
				   });
		}





});

	router.post('/User_List_Edit', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
		var Title= req.body.Form_Title;	
		var form= req.body.Type;	
    connection.query('SELECT  Id, userName, firstname, lastname, email, role, store FROM Users Where userName=? and Id=?', [req.body.userName, req.body.Id],   function(err, data, fields) {
		var form=req.body.Type
    if (err) throw err;
		
    res.render('Settings_Page_Admin', { title: 'Settings_Page_Admin', userData: data, userId: datauserId, userStore: datastore, formName: form, userName: user, userRole: datausr, FormTitle: Title});
	
  });

});

	router.post('/User_List_Update', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;	
		var Title= req.body.Form_Title;
		var form= req.body.Type;
    connection.query("UPDATE Item_Maint SET Name = ? WHERE Id=?", [req.body.Name, req.body.Id], function(err, result){
        if(err) throw err;
            console.log("1 record inserted");
        });
	
	    connection.query('SELECT * FROM Item_Maint Where Type=?', [req.body.Type],function (err, data, fields) {
		var form=req.body.Type
    if (err) throw err;
    res.render('List_Edit', { title: 'List_Edit', userData: data, formName: form, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title});
		
  

  });





});

	router.post('/User_List_Delete', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
		var Title= req.body.Form_Title;
		var form= req.body.Type;
    connection.query("Delete From `Users` Where Id=?", [req.body.Id], function(err, result){
        if(err) throw err;
            console.log("1 record inserted");
        });
	
	    connection.query('SELECT  Id, userName, role, store FROM Users',function (err, data, fields) {
		var form=req.body.Type
    if (err) throw err;
    res.render('User_List', { title: 'User_List', userData: data, formName: form, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title});
		
  

  });





});

router.post('/New_User', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var Title= req.body.Form_Title;	
    res.render('New_User', { title: 'New_User',  userName: user, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title});

});


	router.post('/List_Edit', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
		var Title= req.body.Form_Title;	
		var form= req.body.Type;	
    connection.query('SELECT * FROM Item_Maint Where Type=?', [req.body.Type],  function(err, data, fields) {
		var form=req.body.Type
    if (err) throw err;
    res.render('List_Edit', { title: 'List_Edit', userData: data, formName: form, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title});
	
  });

});

	router.post('/List_Edit_Item', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
		var Title= req.body.Form_Title;
		var form= req.body.Type;
    connection.query('SELECT * FROM Item_Maint Where Type=? and Id=?', [req.body.Type, req.body.Id],  function(err, data, fields) {
		var form=req.body.Type
    if (err) throw err;
    res.render('List_Edit_Item', { title: 'List_Edit_Item', userData: data, formName: form, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title});
	
  });

});





	router.post('/List_Delete', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
		var Title= req.body.Form_Title;
		var form= req.body.Type;
    connection.query("Delete From `Item_Maint` Where Id=?", [req.body.Id], function(err, result){
        if(err) throw err;
            console.log("1 record inserted");
        });
	
	    connection.query('SELECT * FROM Item_Maint Where Type=?', [req.body.Type],function (err, data, fields) {
		var form=req.body.Type
    if (err) throw err;
    res.render('List_Edit', { title: 'List_Edit', userData: data, formName: form, userName: user, userId: datauserId, userStore: datastore, userRole: datausr, FormTitle: Title});
		
  

  });





});

	router.post('/List_Update', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;	
		var Title= req.body.Form_Title;
		var form= req.body.Type;
    connection.query("UPDATE Item_Maint SET Name = ? WHERE Id=?", [req.body.Name, req.body.Id], function(err, result){
        if(err) throw err;
            console.log("1 record inserted");
        });
	
	    connection.query('SELECT * FROM Item_Maint Where Type=?', [req.body.Type],function (err, data, fields) {
		var form=req.body.Type
    if (err) throw err;
    res.render('List_Edit', { title: 'List_Edit', userData: data, formName: form, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title});
		
  

  });





});







	
	
	
	router.post('/Main_Result', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
		var ReportLocation=req.body.Report_Location
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
		
		 if (ReportLocation=="All") { 
		    connection.query('SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ?', [req.body.Form_Name, req.body.Date] ,function (err, data, fields) {
		
    if (err) throw err;
    res.render('Main_Result', { title: 'Main_Result', userData: data, userName: user, userId: datauserId, userStore: datastore, userRole: datausr, FormTitle: Title, FormBox: box});	
  });
		 }
	
//---++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++----->		
	else
	
	{
		    connection.query('SELECT * FROM Submitted_Forms Where Form_Name= ? and store= ? and Date = ?', [req.body.Form_Name, ReportLocation, req.body.Date] ,function (err, data, fields) {
		
    if (err) throw err;
    res.render('Main_Result', { title: 'Main_Result', userData: data, userName: user, userId: datauserId, userStore: datastore, userRole: datausr, FormTitle: Title, FormBox: box});	
  });
		
}
//---++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++----->		
	
});


	router.post('/Generate', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
		var Excel_Form= req.body.Form_Name;
		var AForm_Name= req.body.Form_Name;
		var Form_Type = req.body.Form_Name;
		var D1 = req.body.Date1;
		var D2 = req.body.Date2;
		var Title= req.body.Form_Title;	
		var box= req.body.Form_Name;
		var ReportLocation=req.body.Report_Location;
		var Report_Select= req.body.Report_Type;
		var NumPage1=req.body.PageNum1;
		var NumPage2=req.body.PageNum2;
		var StartNum=NumPage1*10;
		var EndNum=NumPage2*10;
		if (Report_Select=="Range") {
		Form_Type= req.body.Form_Name1;
		box= req.body.Form_Name1;
		AForm_Name= req.body.Form_Name1;
		}
		
		if (box=="Raw_Product") {box="Raw Product"}
		if (box=="Cold_Rooms") {box="Cold Rooms"}
		if (box=="Thermometer_Calibration") {box="Thermometer Calibration"}
		if (box=="Incoming_Materials") {box="Incoming Materials"}
		if (box=="Brittle_Plastics") {box="Brittle Plastics"}
		if (box=="Preventative_Maintenance") {box="Preventative Maintenance"}
		if (box=="Foreign_Materials") {box="Foreign Materials"}
		if (box=="Released_Material") {box="Rejected/Released"}
		if (box=="Work_Order") {box="Work Order"}
		if (datausr=="Store Level") {AForm_Name=AForm_Name+"_Standard"}
     if (ReportLocation=="All") { 
		   connection.query('SELECT * FROM Submitted_Forms Where Form_Name= ? and Date >= ? and Date <= ?', [Form_Type, req.body.Date1, req.body.Date2] ,function (err, data, fields) {
   connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [Form_Type] ,function (err, data2, fields) {
   connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date >= ? and Date <= ?', [Form_Type, req.body.Date1, req.body.Date2] ,function (err, data3, fields) {
		
    if (err) throw err;
	   if (Report_Select=="Weekly") { 
		   
		   if (datausr=="Administrator"){
		   res.render('Weekly_Generate', { title: 'Weekly_Generate', userData: data, userData2: data2, userData3: data3, userName: user, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title, FormBox: box, AForm: AForm_Name, ExcelForm: Excel_Form, Dateone: D1, Datetwo: D2, ReportType: Report_Select, Astore: ReportLocation, NumStart: StartNum, NumEnd: EndNum, Page_On: NumPage2});
	   }
	   
	   else {
	
		  	   		   res.render('Weekly_Generate_Standard', { title: 'Weekly_Generate_Standard', userData: data, userData2: data2, userData3: data3, userName: user, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title, FormBox: box, AForm: AForm_Name, ExcelForm: Excel_Form, Dateone: D1, Datetwo: D2, ReportType: Report_Select, Astore: ReportLocation, NumStart: StartNum, NumEnd: EndNum, Page_On: NumPage2}); 
		   
	   }

	   
	   }
	   	  
	   if (Report_Select=="Range") {    
		   
		   if (datausr=="Administrator"){
		   res.render('Generate', { title: 'Generate', userData: data, userId: datauserId, userStore: datastore, userData2: data2, userData3: data3, userName: user, userRole: datausr, FormTitle: Title, FormBox: box, AForm: AForm_Name, Astore: ReportLocation, NumStart: StartNum, NumEnd: EndNum, Page_On: NumPage2});
		   }
		   
		   
		   else {
			   
					   res.render('Generate_Standard', { title: 'Generate_Standard', userData: data, userId: datauserId, userStore: datastore, userData2: data2, userData3: data3, userName: user, userRole: datausr, FormTitle: Title, FormBox: box, AForm: AForm_Name, Astore: ReportLocation, NumStart: StartNum, NumEnd: EndNum, Page_On: NumPage2});   
			   
		   }
	   
	   
	   }
	
  });
  });
  });
	 }
		
//---++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++----->		
		else
			
			{
				
				
				   connection.query('SELECT * FROM Submitted_Forms Where Form_Name= ? and store= ? and Date >= ? and Date <= ?', [Form_Type, ReportLocation, req.body.Date1, req.body.Date2] ,function (err, data, fields) {
   connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [Form_Type] ,function (err, data2, fields) {
   connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and store= ? and Date >= ? and Date <= ?', [Form_Type, ReportLocation, req.body.Date1, req.body.Date2] ,function (err, data3, fields) {
		
    if (err) throw err;
	   if (Report_Select=="Weekly") { 
		   
		   if (datausr=="Administrator"){
		   res.render('Weekly_Generate', { title: 'Weekly_Generate', userData: data, userData2: data2, userData3: data3, userName: user, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title, FormBox: box, AForm: AForm_Name, ExcelForm: Excel_Form, Dateone: D1, Datetwo: D2, ReportType: Report_Select, Astore: ReportLocation, NumStart: StartNum, NumEnd: EndNum, Page_On: NumPage2 });
	   }
	   
	   else {
	
		  	   		   res.render('Weekly_Generate_Standard', { title: 'Weekly_Generate_Standard', userData: data, userData2: data2, userData3: data3, userName: user, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title, FormBox: box, AForm: AForm_Name, ExcelForm: Excel_Form, Dateone: D1, Datetwo: D2, ReportType: Report_Select, Astore: ReportLocation, NumStart: StartNum, NumEnd: EndNum, Page_On: NumPage2}); 
		   
	   }

	   
	   }
	   	  
	   if (Report_Select=="Range") {    
		   
		   if (datausr=="Administrator"){
		   res.render('Generate', { title: 'Generate', userData: data, userId: datauserId, userStore: datastore, userData2: data2, userData3: data3, userName: user, userRole: datausr, FormTitle: Title, FormBox: box, AForm: AForm_Name, Astore: ReportLocation, NumStart: StartNum, NumEnd: EndNum, Page_On: NumPage2});
		   }
		   
		   
		   else {
			   
					   res.render('Generate_Standard', { title: 'Generate_Standard', userData: data, userId: datauserId, userStore: datastore, userData2: data2, userData3: data3, userName: user, userRole: datausr, FormTitle: Title, FormBox: box, AForm: AForm_Name, Astore: ReportLocation, NumStart: StartNum, NumEnd: EndNum, Page_On: NumPage2});   
			   
		   }
	   
	   
	   }
	
  });
  });
  });
				
				
				
			}
//---++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++----->		
});


router.post('/Export', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
			var Excel_Form= req.body.Form_Name;
		var AForm_Name= req.body.Form_Name;
		var Form_Type = req.body.Form_Name;
		var D1 = req.body.Date1;
		var D2 = req.body.Date2;
	var Action_Type=req.body.Action;
		var Title= req.body.Form_Title;	
		var box= req.body.Form_Name;
		var ReportLocation=req.body.Report_Location
		var Report_Select= req.body.Report_Type;
			var NumPage1=req.body.PageNum1;
		var NumPage2=req.body.PageNum2;
		if (Report_Select=="Range") {  
		Form_Type= req.body.Form_Name1;
		box= req.body.Form_Name1;
		AForm_Name= req.body.Form_Name1;
		}
		
		if (box=="Raw_Product") {box="Raw Product"}
		if (box=="Cold_Rooms") {box="Cold Rooms"}
		if (box=="Thermometer_Calibration") {box="Thermometer Calibration"}
		if (box=="Incoming_Materials") {box="Incoming Materials"}
		if (box=="Brittle_Plastics") {box="Brittle Plastics"}
		if (box=="Preventative_Maintenance") {box="Preventative Maintenance"}
		if (box=="Foreign_Materials") {box="Foreign Materials"}
		if (box=="Released_Material") {box="Rejected/Released"}
		if (box=="Work_Order") {box="Work Order"}
		if (datausr=="Store Level") {AForm_Name=AForm_Name+"_Standard"}
 if (ReportLocation=="All") {
    connection.query('SELECT * FROM Submitted_Forms Where Form_Name= ? and Date >= ? and Date <= ?', [Form_Type, req.body.Date1, req.body.Date2] ,function (err, data, fields) {
   connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [Form_Type] ,function (err, data2, fields) {
   connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date >= ? and Date <= ?', [Form_Type, req.body.Date1, req.body.Date2] ,function (err, data3, fields) {
		
    if (err) throw err;
	   if (Report_Select=="Weekly") { 
		   
		   if (datausr=="Administrator"){
		   res.render('Export', { title: 'Export', userData: data, userData2: data2, userData3: data3, userName: user, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title, FormBox: box, AForm: AForm_Name, ExcelForm: Excel_Form, Dateone: D1, Datetwo: D2, ActionType: Action_Type, ReportType: Report_Select, Astore: ReportLocation, Page1_Num: NumPage1, Page2_Num: NumPage2});
	   }
	   
	   else {
		     res.render('Export', { title: 'Export', userData: data, userData2: data2, userData3: data3, userName: user, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title, FormBox: box, AForm: AForm_Name, ExcelForm: Excel_Form, Dateone: D1, Datetwo: D2, ReportType: Report_Select, ActionType: Action_Type, Astore: ReportLocation, Page1_Num: NumPage1, Page2_Num: NumPage2});
		   
	   }
	   		 
	   
	   }
	   	  
	   if (Report_Select=="Range") {    
		   
		   if (datausr=="Administrator"){
		   res.render('Generate', { title: 'Generate', userData: data, userId: datauserId, userStore: datastore, userData2: data2, userData3: data3, userName: user, userRole: datausr, FormTitle: Title, ReportType: Report_Select, FormBox: box, AForm: AForm_Name, Astore: ReportLocation, Page1_Num: NumPage1, Page2_Num: NumPage2});
		   }
		   
		   
		   else {
			   
					   res.render('Generate_Standard', { title: 'Generate_Standard', userData: data, userId: datauserId, userStore: datastore, userData2: data2, userData3: data3, userName: user, userRole: datausr, FormTitle: Title, FormBox: box, AForm: AForm_Name, ReportType: Report_Select,  Astore: ReportLocation, Page1_Num: NumPage1, Page2_Num: NumPage2});   
			   
		   }
	   
	   
	   }
	
  });
  });
  });
 
 
 }

	
//---++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++----->	
	else {  
	   connection.query('SELECT * FROM Submitted_Forms Where Form_Name= ? and store= ? and Date >= ? and Date <= ?', [Form_Type,ReportLocation, req.body.Date1, req.body.Date2] ,function (err, data, fields) {
   connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [Form_Type] ,function (err, data2, fields) {
   connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and store= ? and Date >= ? and Date <= ?', [Form_Type, ReportLocation, req.body.Date1, req.body.Date2] ,function (err, data3, fields) {
		
    if (err) throw err;
	   if (Report_Select=="Weekly") { 
		   
		   if (datausr=="Administrator"){
		   res.render('Export', { title: 'Export', userData: data, userData2: data2, userData3: data3, userName: user, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title, FormBox: box, AForm: AForm_Name, ExcelForm: Excel_Form, Dateone: D1, Datetwo: D2, ActionType: Action_Type, ReportType: Report_Select, Astore: ReportLocation, Page1_Num: NumPage1, Page2_Num: NumPage2});
	   }
	   
	   else {
		    res.render('Export', { title: 'Export', userData: data, userData2: data2, userData3: data3, userName: user, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title, FormBox: box, AForm: AForm_Name, ExcelForm: Excel_Form, Dateone: D1, Datetwo: D2, ActionType: Action_Type, ReportType: Report_Select, Astore: ReportLocation, Page1_Num: NumPage1, Page2_Num: NumPage2}); 
		   
	   }
	   		 
	   
	   }
	   	  
	   if (Report_Select=="Range") {    
		   
		   if (datausr=="Administrator"){
		   res.render('Generate', { title: 'Generate', userData: data, userId: datauserId, userStore: datastore, userData2: data2, userData3: data3, userName: user, userRole: datausr, FormTitle: Title, FormBox: box, AForm: AForm_Name, Astore: ReportLocation, Page1_Num: NumPage1, Page2_Num: NumPage2});
		   }
		   
		   
		   else {
			   
					   res.render('Generate_Standard', { title: 'Generate_Standard', userData: data, userId: datauserId, userStore: datastore, userData2: data2, userData3: data3, userName: user, userRole: datausr, FormTitle: Title, FormBox: box, AForm: AForm_Name, Astore: ReportLocation, Page1_Num: NumPage1, Page2_Num: NumPage2});   
			   
		   }
	   
	   
	   }
	
  });
  });
  });
	
	}
//---++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++----->	
	
	
});


router.post('/Print', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
		var AForm_Name= req.body.Form_Name;
		var Form_Type = req.body.Form_Name;
		var D1 = req.body.Date1;
		var D2 = req.body.Date2;
	var Action_Type=req.body.Action;
		var Title= req.body.Form_Title;	
		var box= req.body.Form_Name;
		var Report_Select= req.body.Report_Type;
		if (Report_Select=="Range") {
		Form_Type= req.body.Form_Name1;
		box= req.body.Form_Name1;
		AForm_Name= req.body.Form_Name1;
		}
		
		if (box=="Raw_Product") {box="Raw Product"}
		if (box=="Cold_Rooms") {box="Cold Rooms"}
		if (box=="Thermometer_Calibration") {box="Thermometer Calibration"}
		if (box=="Incoming_Materials") {box="Incoming Materials"}
		if (box=="Brittle_Plastics") {box="Brittle Plastics"}
		if (box=="Preventative_Maintenance") {box="Preventative Maintenance"}
		if (box=="Foreign_Materials") {box="Foreign Materials"}
		if (box=="Released_Material") {box="Rejected/Released"}
		if (box=="Work_Order") {box="Work Order"}
		if (datausr=="Store Level") {AForm_Name=AForm_Name+"_Standard"}
   connection.query('SELECT * FROM Submitted_Forms Where Form_Name= ? and Date >= ? and Date <= ?', [Form_Type, req.body.Date1, req.body.Date2] ,function (err, data, fields) {
   connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [Form_Type] ,function (err, data2, fields) {
   connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date >= ? and Date <= ?', [Form_Type, req.body.Date1, req.body.Date2] ,function (err, data3, fields) {
		
    if (err) throw err;
	   if (Report_Select=="Weekly") { 
		   
		   if (datausr=="Administrator"){
		   res.render('Print', { title: 'Print', userData: data, userData2: data2, userData3: data3, userName: user, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title, FormBox: box, AForm: AForm_Name, Dateone: D1, Datetwo: D2, ActionType: Action_Type, ReportType: Report_Select});
	   }
	   
	   else {
		   
		   
	   }
	   		   res.render('Weekly_Generate_Standard', { title: 'Weekly_Generate_Standard', userData: data, userData2: data2, userData3: data3, userName: user, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title, FormBox: box, AForm: AForm_Name, Dateone: D1, Datetwo: D2, ActionType: Action_Type, ReportType: Report_Select});
	   
	   }
	   	  
	   if (Report_Select=="Range") {    
		   
		   if (datausr=="Administrator"){
		   res.render('Generate', { title: 'Generate', userData: data, userId: datauserId, userStore: datastore, userData2: data2, userData3: data3, userName: user, userRole: datausr, FormTitle: Title, FormBox: box, AForm: AForm_Name});
		   }
		   
		   
		   else {
			   
					   res.render('Generate_Standard', { title: 'Generate_Standard', userData: data, userId: datauserId, userStore: datastore, userData2: data2, userData3: data3, userName: user, userRole: datausr, FormTitle: Title, FormBox: box, AForm: AForm_Name});   
			   
		   }
	   
	   
	   }
	
  });
  });
  });
});
//-------------------------------------------New Forms ------------------------------------------------------------>

router.post('/Packing_Form_New', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var Title= req.body.Form_Title;	
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity"',function (err, data, fields) {
    if (err) throw err;
    res.render('Packing_Form_New', { title: 'Packing_Form_New',FormTitle: Title, userData: data, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title });		
  });	
});

router.post('/Cooler_Form_New', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var Title= req.body.Form_Title;	
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity"',function (err, data, fields) {
    if (err) throw err;
    res.render('Cooler_Form_New', { title: 'Cooler_Form_New', FormTitle: Title, userData: data, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title });		
  });		
});

router.post('/Processing_Form_New', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var Title= req.body.Form_Title;	
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity"',function (err, data, fields) {
    if (err) throw err;
    res.render('Processing_Form_New', { title: 'Processing_Form_New',FormTitle: Title, userData: data, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title });	
  });	
});

router.post('/Raw_Product_Form_New', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var Title= req.body.Form_Title;		
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity"',function (err, data2, fields) {
    if (err) throw err;
    connection.query('SELECT * FROM Item_Maint Where Type="Vendor"',function (err, data3, fields) {
    if (err) throw err;
    res.render('Raw_Product_Form_New', { title: 'Raw_Product_Form_New', FormTitle: Title, userData2: data2, userId: datauserId, userData3: data3, userName: user, userRole: datausr, userName: user, userStore: datastore, userRole: datausr, FormTitle: Title});	
  });	
  });
});

router.post('/Cold_Rooms_Form_New', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var Title= req.body.Form_Title;		
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity"',function (err, data, fields) {
    if (err) throw err;
    res.render('Cold_Rooms_Form_New', { title: 'Cold_Rooms_Form_New', FormTitle: Title, userData: data, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title });		
  });		
});

router.post('/Thermometer_Calibration_Form_New', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var Title= req.body.Form_Title;
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity"',function (err, data, fields) {
    if (err) throw err;
    res.render('Thermometer_Calibration_Form_New', { title: 'Thermometer_Calibration_Form_New',FormTitle: Title, userId: datauserId, userStore: datastore, userData: data, userName: user, userRole: datausr, FormTitle: Title });		
  });		
});

router.post('/Incoming_Materials_Form_New', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var Title= req.body.Form_Title;	
    res.render('Incoming_Materials_Form_New', { title: 'Incoming_Materials_Form_New',FormTitle: Title, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title });		
});

router.post('/Brittle_Plastics_Form_New', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var Title= req.body.Form_Title;	
    res.render('Brittle_Plastics_Form_New', { title: 'Brittle_Plastics_Form_New',FormTitle: Title, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title });		
});

router.post('/Preventative_Maintenance_Form_New', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var Title= req.body.Form_Title;	
    res.render('Preventative_Maintenance_Form_New', { title: 'Preventative_Maintenance_Form_New', FormTitle: Title, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title });		
});

router.post('/NUOCA_Form_New', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var Title= req.body.Form_Title;	
    res.render('NUOCA_Form_New', { title: 'NUOCA_Form_New', FormTitle: Title, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title });		
});

router.post('/Work_Order_Form_New', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var Title= req.body.Form_Title;	
    res.render('Work_Order_Form_New', { title: 'Work_Order_Form_New', FormTitle: Title, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title });		
});

router.post('/Released_Material_Form_New', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var Title= req.body.Form_Title;	
    res.render('Released_Material_Form_New', { title: 'Released_Material_Form_New', FormTitle: Title, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title });		
});

router.post('/Foreign_Materials_Form_New', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
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
    res.render('Foreign_Materials_Form_New', { title: 'Foreign_Materials_Form_New', FormTitle: Title, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title });		
});
//-------------------------------------------Submitted Forms ------------------------------------------------------------>



router.post('/Packing_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
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
    res.render('Packing_Form', { title: 'Packing_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userData2: data2, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title});
  });
	});
		});
});


router.post('/Cooler_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
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
		
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity"',function (err, data2, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
        res.render('Cooler_Form', { title: 'Cooler_Form', userData: data, userData2: data2, userId: datauserId, userStore: datastore, userDataCor: dataCor, userData3: dataCor, FormBox: box, userName: user, userRole: datausr, FormTitle: Title});
  });
	});
					
  });
});


router.post('/Processing_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
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
    res.render('Processing_Form', { title: 'Processing_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userData2: data2, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title});
  });
	});
});
});

router.post('/Raw_Product_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
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
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity"',function (err, data2, fields) {
    if (err) throw err;
    connection.query('SELECT * FROM Item_Maint Where Type="Vendor"',function (err, data4, fields) {
    if (err) throw err;
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
                res.render('Raw_Product_Form', { title: 'Raw_Product_Form', userData: data, userData2: data2, userDataCor: dataCor, userData3: dataCor, FormBox: box, userData4: data4, userName: user, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title});
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
                res.render('Cold_Rooms_Form', { title: 'Cold_Rooms_Form', userData: data, userName: user, userRole: datausr, userDataCor: dataCor, userData3: dataCor, FormBox: box, userData2: data2, FormBox: box, userId: datauserId, userStore: datastore, FormTitle: Title});
  });
  });
  });
});


router.post('/Thermometer_Calibration_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
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
                res.render('Thermometer_Calibration_Form', { title: 'Thermometer_Calibration_Form', userId: datauserId, userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userName: user, userStore: datastore, userRole: datausr, FormTitle: Title});
  });
  });
});

router.post('/Incoming_Materials_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
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
    res.render('Incoming_Materials_Form', { title: 'Incoming_Materials_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userData2: data2, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title});
  });
	});
		});
});

router.post('/Brittle_Plastics_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
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
    res.render('Brittle_Plastics_Form', { title: 'Brittle_Plastics_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title});
  });
	});
});

router.post('/Preventative_Maintenance_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
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
    res.render('Preventative_Maintenance_Form', { title: 'Preventative_Maintenance_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title});
  });
	});
});

router.post('/NUOCA_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
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
    res.render('NUOCA_Form', { title: 'NUOCA_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title});
  });
	});
});

router.post('/Work_Order_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
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
    res.render('Work_Order_Form', { title: 'Work_Order_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title});
  });
	});
});

router.post('/Released_Material_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
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
    res.render('Released_Material_Form', { title: 'Released_Material_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title});
  });
	});
});

router.post('/Foreign_Materials_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
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
    res.render('Foreign_Materials_Form', { title: 'Foreign_Materials_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title});
  });
	});
});



//-------------------------------------------Standard User Form ------------------------------------------------------------>


router.post('/Packing_Standard_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var Title= req.body.Form_Title;	
	var box= req.body.Form_Name;	
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
				connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [req.body.Form_Name] ,function (err, data2, fields) {	
    if (err) throw err;
    res.render('Packing_Standard_Form', { title: 'Packing_Standard_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userData2: data2, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title});
  });
	});
		});
});

router.post('/Cooler_Standard_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var Title= req.body.Form_Title;	
	var box= req.body.Form_Name;
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
		
    connection.query('SELECT * FROM Item_Maint Where Type="Commodity"',function (err, data2, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
				connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [req.body.Form_Name] ,function (err, data2, fields) {	
    if (err) throw err;
        res.render('Cooler_Standard_Form', { title: 'Cooler_Standard_Form', userData: data, userData2: data2, userId: datauserId, userStore: datastore, userDataCor: dataCor, userData3: dataCor, FormBox: box, userName: user, userRole: datausr, FormTitle: Title});
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
	var Title= req.body.Form_Title;	
	var box= req.body.Form_Name;
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
				connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [req.body.Form_Name] ,function (err, data2, fields) {	
    if (err) throw err;
    res.render('Processing_Standard_Form', { title: 'Processing_Standard_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userData2: data2, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title});
  });
	});
		});
});


router.post('/Raw_Product_Standard_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var Title= "Raw Product";	
	var box= "Raw Product";
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
                res.render('Raw_Product_Standard_Form', { title: 'Raw_Product_Standard_Form', userData: data, userData2: data2, userDataCor: dataCor, userData3: dataCor, FormBox: box, userData4: data4, userName: user, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title});
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
	var Title= "Cold Rooms";
	var box= "Cold Rooms";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    if (err) throw err;
        connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
					connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [req.body.Form_Name] ,function (err, data2, fields) {	
    if (err) throw err;
                res.render('Cold_Rooms_Standard_Form', { title: 'Cold_Rooms_Standard_Form', userData: data, userName: user, userRole: datausr, userDataCor: dataCor, userData3: dataCor, FormBox: box, userData2: data2, userId: datauserId, userStore: datastore, FormTitle: Title});
  });
  });
		});
});


router.post('/Thermometer_Calibration_Standard_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var Title= "Thermometer Calibration";
	var box= "Thermometer Calibration";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    if (err) throw err;
        connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
                res.render('Thermometer_Calibration_Standard_Form', { title: 'Thermometer_Calibration_Standard_Form', userId: datauserId, userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userName: user, userStore: datastore, userRole: datausr, FormTitle: Title});
  });
  });
});

router.post('/Incoming_Materials_Standard_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var Title= "Incoming Materials";
	var box= "Incoming Materials";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
				connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [req.body.Form_Name] ,function (err, data2, fields) {	
    if (err) throw err;
    res.render('Incoming_Materials_Standard_Form', { title: 'Incoming_Materials_Standard_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userData2: data2, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title});
  });
	});
		});
});

router.post('/Brittle_Plastics_Standard_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var Title= "Brittle Plastics";
	var box= "Brittle Plastics";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
    res.render('Brittle_Plastics_Standard_Form', { title: 'Brittle_Plastics_Standard_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title});
  });
	});
});

router.post('/Preventative_Maintenance_Standard_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var Title= "Preventative Maintenance";
	var box= "Preventative Maintenance";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
    res.render('Preventative_Maintenance_Standard_Form', { title: 'Preventative_Maintenance_Standard_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title});
  });
	});
});

router.post('/NUOCA_Standard_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var Title= req.body.Form_Title;	
	var box= req.body.Form_Name;
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
    res.render('NUOCA_Standard_Form', { title: 'NUOCA_Standard_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title});
  });
	});
});

router.post('/Work_Order_Standard_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var Title= "Work Order";
	var box= "Work Order";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
    res.render('Work_Order_Standard_Form', { title: 'Work_Order_Standard_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title});
  });
	});
});

router.post('/Released_Material_Standard_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var Title= "Released Material";
	var box= "Released Material";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
    res.render('Released_Material_Standard_Form', { title: 'Released_Material_Standard_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title});
  });
	});
});

router.post('/Foreign_Materials_Standard_Form', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var Title= "Foreign Materials";
	var box= "Foreign Materials";
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Date = ? and Id= ?', [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, dataCor, fields) {
    if (err) throw err;
    res.render('Foreign_Materials_Standard_Form', { title: 'Foreign_Materials_Standard_Form', userData: data, userDataCor: dataCor, userData3: dataCor, FormBox: box, userId: datauserId, userStore: datastore, userName: user, userRole: datausr, FormTitle: Title});
  });
	});
});

//-------------------------------------------Nav Bar ------------------------------------------------------------>

router.post('/Settings', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var Title= req.body.Form_Title;	
    res.render('Settings_Page_Admin', { title: 'Settings_Page_Admin',  userName: user, userRole: datausr, userStore: datastore, userId: datauserId, FormTitle: Title});

});

router.post('/Maintenance', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var Title= req.body.Form_Title;	
    res.render('Maint_Page', { title: 'Maint_Page',  userName: user, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title});

});

router.post('/Support', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var Title= req.body.Form_Title;	
    res.render('Support_Page', { title: 'Support_Page',  userName: user, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title});

});


router.post('/Dashboard', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var Title= req.body.Form_Title;	
    res.render('Dashboard', { title: 'Dashboard', userName: user, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title});

});

router.post('/Dashboard2', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var Title= req.body.Form_Title;	
    res.render('Dashboard2', { title: 'Dashboard2', userName: user, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title});

});

router.post('/Reports', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var Title= req.body.Form_Title;	
	if (datausr=="Administrator") {
    res.render('Reports', { title: 'Reports', userName: user, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title});
	}
	
	else {
	
		    res.render('Reports_Standard', { title: 'Reports_Standard', userName: user, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title});
		
	}
		
		
		
});

router.post('/Previous_Form_Selection', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var Title= req.body.Form_Title;	
	var Today = new Date();
var dd = String(Today.getDate()).padStart(2, '0');
var mm = String(Today.getMonth() + 1).padStart(2, '0'); 
var yyyy = Today.getFullYear();
Today = yyyy + '-' + mm + '-' + dd;
	
	if (datausr=="Administrator") {
    res.render('Previous_Form_Selection', { title: 'Previous_Form_Selection', userName: user, userId: datauserId, userStore: datastore, TodaysDate: Today, userRole: datausr, FormTitle: Title});
	}
	
		else {
    res.render('Previous_Standard_Selection', { title: 'Previous_Standard_Selection', userName: user, userId: datauserId, userStore: datastore, TodaysDate: Today, userRole: datausr, FormTitle: Title});
	}
});

router.post('/Previous_Form_Selection2', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var Title= req.body.Form_Title;	
		var Today = new Date();
var dd = String(Today.getDate()).padStart(2, '0');
var mm = String(Today.getMonth() + 1).padStart(2, '0'); 
var yyyy = Today.getFullYear();
Today = yyyy + '-' + mm + '-' + dd;
	
	if (datausr=="Administrator") {
    res.render('Previous_Form_Selection2', { title: 'Previous_Form_Selection2', userName: user, userId: datauserId, userStore: datastore, TodaysDate: Today, userRole: datausr, FormTitle: Title});
	}
	
		else {
    res.render('Previous_Standard_Selection2', { title: 'Previous_Standard_Selection2', userName: user, userId: datauserId, userStore: datastore, TodaysDate: Today, userRole: datausr, FormTitle: Title});
	}
});

router.post('/Log_Out', function(req, res, next) {

    res.redirect('/');

});








//-------------------------------------------Log In Procedure ------------------------------------------------------------>



router.post('/auth', function(req, res) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var password = req.body.password;
	var Title= req.body.Form_Title;
	if (user && password) {
		connection.query('SELECT * FROM Users WHERE userName = ?', [user], function(error, results, fields) {
			if (results.length > 0) {
			const comparison = bcrypt.compareSync(password,results[0].passwd)
			if (comparison) {
							connection.query('SELECT Id, role, store FROM Users WHERE userName = ?', [user], function(error, data, fields) {
					res.render('Dashboard', { title: 'Dashboard', FormTitle: Title, userName: user, userStore: data[0].store, userId: data[0].Id, userRole: data[0].role});	
		
		});
			} else {
				res.render('Sign_Incorrect', { title: 'Sign_Incorrect', userName: user, FormTitle: Title});
			}			
		
			} else {
				res.render('Sign_Incorrect', { title: 'Sign_Incorrect', userName: user, FormTitle: Title});
			}			
		
		});
	}
});



module.exports = router;


















