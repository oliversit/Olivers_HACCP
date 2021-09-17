const bcrypt = require('bcrypt');
const saltRounds = 10;
var express = require('express');
var router = express.Router();
var connection=require('../Database');
var app = express();
// other routes also appear here
// this script to fetch data from MySQL databse table

	router.post('/User_List', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
var Title= req.body.Form_Title;	
var form= req.body.Type;	   
    
		if (datausr=="Store Level") {
			    connection.query('SELECT  Id, userName, firstname, lastname, email, role, store, Department FROM Users Where userName=? and Id=?', [req.body.username, req.body.userid],   function(err, data2, fields) {
    if (err) throw err;
		
    res.render('Settings_Page_Standard', { title: 'Settings_Page_Standard', userId: datauserId, userStore: datastore, userData2: data2, formName: form, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
	
  });
			}
		
		
		else {
			 connection.query('SELECT  Id, userName, role, store FROM Users',   function(err, data, fields) {
				 if (err) throw err;
    res.render('User_List', { title: 'User_List', userData: data, formName: form, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
				   });
		}
	


});

	router.post('/User_List_Update', function(req, res, next) {
	var user= req.body.username;
	var standarduser= req.body.userName;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;	
		var Title= req.body.Form_Title;
		var form= req.body.Type;
    connection.query("UPDATE Users SET userName = ?, firstname = ?, lastname = ?, email = ?, role = ?, store = ?, Department = ? WHERE Id=?", [req.body.userName, req.body.firstname, req.body.lastname, req.body.email, req.body.role, req.body.store, req.body.department, req.body.Id], function(err, result){
		if (err) throw err;
            console.log("1 record inserted");
        });
	
		if (datausr=="Store Level") {
		
    res.render('Cheese/CheeseDashboard', { title: 'Dashboard', userId: datauserId, userStore: datastore, formName: form, userName: standarduser, userDepartment: departuser, userRole: datausr, FormTitle: Title});
	
			}
		
		else {
		var userchange= req.body.checkuser;
		var currentuser= req.body.userName;
			if(userchange==1){user=currentuser};
			
			 connection.query('SELECT  Id, userName, role, store FROM Users',   function(err, data, fields) {
				 if (err) throw err;
    res.render('User_List', { title: 'User_List', userData: data, formName: form, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
				   });
		}





});

	router.post('/User_List_Edit', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
		var Title= req.body.Form_Title;	
		var form= req.body.Type;	
    connection.query('SELECT  Id, userName, firstname, lastname, email, role, store, Department FROM Users Where userName=? and Id=?', [req.body.userName, req.body.Id],   function(err, data, fields) {
		var form=req.body.Type
    if (err) throw err;
		
    res.render('Settings_Page_Admin', { title: 'Settings_Page_Admin', userData: data, userId: datauserId, userStore: datastore, formName: form, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
	
  });

});



	router.post('/User_List_Delete', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
		var Title= req.body.Form_Title;
		var form= req.body.Type;
    connection.query("Delete From `Users` Where Id=?", [req.body.Id], function(err, result){
        if(err) throw err;
            console.log("1 record inserted");
        });
	
	    connection.query('SELECT  Id, userName, role, store FROM Users',function (err, data, fields) {
		var form=req.body.Type
    if (err) throw err;
    res.render('User_List', { title: 'User_List', userData: data, formName: form, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title});
		
  

  });





});

router.post('/New_User', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;	
    res.render('New_User', { title: 'New_User',  userName: user, userDepartment: departuser, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title});

});


	router.post('/List_Edit', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
		var departselect =req.body.DeptLocation;
		var Storeselect =req.body.StoreLocation;
		var Title= req.body.Form_Title;	
		var form= req.body.Type;
	
	if (Storeselect=="All")
		{
    connection.query('SELECT * FROM Item_Maint Where Type=? and Department=?', [req.body.Type, departselect],  function(err, data, fields) {
		var form=req.body.Type
    if (err) throw err;
    res.render('List_Edit', { title: 'List_Edit', userData: data, formName: form, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title, SelectedDept: departselect, SelectedStore: Storeselect});
	
  });
		}
		
		else
			
			{
		    connection.query('SELECT * FROM Item_Maint Where Type=? and Department=? and Location=?', [req.body.Type, departselect, Storeselect ],  function(err, data, fields) {
		var form=req.body.Type
    if (err) throw err;
    res.render('List_Edit', { title: 'List_Edit', userData: data, formName: form, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title, SelectedDept: departselect, SelectedStore: Storeselect});
	
  });		
				
				
			}
			
			
			
});




	router.post('/List_Edit_Item', function(req, res, next) {
var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
		var departselect =req.body.DeptLocation;
			var Storeselect =req.body.StoreLocation;
		var Title= req.body.Form_Title;
		var form= req.body.Type;
    connection.query('SELECT * FROM Item_Maint Where Type=? and Id=?', [req.body.Type, req.body.Id],  function(err, data, fields) {
		var form=req.body.Type
    if (err) throw err;
    res.render('List_Edit_Item', { title: 'List_Edit_Item', userData: data, formName: form, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title, SelectedDept: departselect, SelectedStore: Storeselect});
	
  });

});





	router.post('/List_Delete', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
		var Title= req.body.Form_Title;
		var departselect =req.body.DeptLocation;
			var Storeselect =req.body.StoreLocation;
		var form= req.body.Type;
    connection.query("Delete From `Item_Maint` Where Id=?", [req.body.Id], function(err, result){
        if(err) throw err;
            console.log("1 record inserted");
        });
	
	if (Storeselect=="All")
		{
    connection.query('SELECT * FROM Item_Maint Where Type=? and Department=?', [req.body.Type, departselect],  function(err, data, fields) {
		var form=req.body.Type
    if (err) throw err;
    res.render('List_Edit', { title: 'List_Edit', userData: data, formName: form, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title, SelectedDept: departselect, SelectedStore: Storeselect});
	
  });
		}
		
		else
			
			{
		    connection.query('SELECT * FROM Item_Maint Where Type=? and Department=? and Location=?', [req.body.Type, departselect, Storeselect ],  function(err, data, fields) {
		var form=req.body.Type
    if (err) throw err;
    res.render('List_Edit', { title: 'List_Edit', userData: data, formName: form, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title, SelectedDept: departselect, SelectedStore: Storeselect});
	
  });		
				
				
			}





});

	router.post('/List_Update', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var departselect =req.body.DeptLocation;
		var Storeselect =req.body.StoreLocation;
		var Title= req.body.Form_Title;
		var form= req.body.Type;
    connection.query("UPDATE Item_Maint SET Name = ?, Department=?, Location=? WHERE Id=?", [req.body.Name, departselect, Storeselect, req.body.Id], function(err, result){
        if(err) throw err;
            console.log("1 record inserted");
        });
	
	if (Storeselect=="All")
		{
    connection.query('SELECT * FROM Item_Maint Where Type=? and Department=?', [req.body.Type, departselect],  function(err, data, fields) {
		var form=req.body.Type
    if (err) throw err;
    res.render('List_Edit', { title: 'List_Edit', userData: data, formName: form, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title, SelectedDept: departselect, SelectedStore: Storeselect});
	
  });
		}
		
		else
			
			{
		    connection.query('SELECT * FROM Item_Maint Where Type=? and Department=? and Location=?', [req.body.Type, departselect, Storeselect ],  function(err, data, fields) {
		var form=req.body.Type
    if (err) throw err;
    res.render('List_Edit', { title: 'List_Edit', userData: data, formName: form, userId: datauserId, userStore: datastore, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title, SelectedDept: departselect, SelectedStore: Storeselect});
	
  });		
				
				
			}





});







	
	
	
	router.post('/Main_Result', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
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
		if (box=="Cold_Storage") {box="Cold Storage"}	
        if (box=="Cold_Transfer") {box="Cold Transfer"}	
        if (box=="Haccp_Monitoring") {box="Haccp Monitoring"}	
        if (box=="Damaged_Discarded") {box="Damaged/Discarded"}	
        if (box=="Deviation_Record") {box="Deviation Record"}	
        if (box=="Receiving_Commissary") {box="Receiving (Commissary)"}	
        if (box=="Receiving (Stores)") {box="Receiving (Stores)"}	
		
		 if (ReportLocation=="All") { 
		    connection.query('SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Department = ?', [req.body.Form_Name, req.body.Date, departuser ] ,function (err, data, fields) {
		
    if (err) throw err;
    res.render('Main_Result', { title: 'Main_Result', userData: data, userName: user, userDepartment: departuser, userId: datauserId, userStore: datastore, userRole: datausr, FormTitle: Title, FormBox: box});	
  });
		 }
	
//---++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++----->		
	else
	
	{
		    connection.query('SELECT * FROM Submitted_Forms Where Form_Name= ? and store= ? and Date = ? and Department = ?', [req.body.Form_Name, ReportLocation, req.body.Date, departuser] ,function (err, data, fields) {
		
    if (err) throw err;
    res.render('Main_Result', { title: 'Main_Result', userData: data, userName: user, userDepartment: departuser, userId: datauserId, userStore: datastore, userRole: datausr, FormTitle: Title, FormBox: box});	
  });
		
}
//---++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++----->		
	
});


	router.post('/Generate', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
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
		Excel_Form= req.body.Form_Name1;
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
		if (box=="Cold_Storage") {box="Cold Storage"}	
        if (box=="Cold_Transfer") {box="Cold Transfer"}	
        if (box=="Haccp_Monitoring") {box="Haccp Monitoring"}	
        if (box=="Damaged_Discarded") {box="Damaged/Discarded"}	
        if (box=="Deviation_Record") {box="Deviation Record"}	
        if (box=="Receiving_Commissary") {box="Receiving (Commissary)"}	
        if (box=="Receiving (Stores)") {box="Receiving (Stores)"}
		if (datausr=="Store Level") {AForm_Name=AForm_Name+"_Standard"}
     if (ReportLocation=="All") { 
		   connection.query('SELECT * FROM Submitted_Forms Where Form_Name= ? and Department = ? and Date >= ? and Date <= ?', [Form_Type, departuser, req.body.Date1, req.body.Date2] ,function (err, data, fields) {
   connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [Form_Type] ,function (err, data2, fields) {
   connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Department = ?  and Date >= ? and Date <= ?', [Form_Type, departuser, req.body.Date1, req.body.Date2] ,function (err, data3, fields) {
		
    if (err) throw err;
	   if (Report_Select=="Weekly") { 
		   
		   if (datausr=="Administrator"){
		   res.render('Weekly_Generate', { title: 'Weekly_Generate', userData: data, userData2: data2, userData3: data3, userName: user, userDepartment: departuser, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title, FormBox: box, AForm: AForm_Name, ExcelForm: Excel_Form, Dateone: D1, Datetwo: D2, ReportType: Report_Select, Astore: ReportLocation, NumStart: StartNum, NumEnd: EndNum, Page_On: NumPage2});
	   }
	   
	   else {
	
		  	   		   res.render('Weekly_Generate_Standard', { title: 'Weekly_Generate_Standard', userData: data, userData2: data2, userData3: data3, userName: user, userDepartment: departuser, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title, FormBox: box, AForm: AForm_Name, ExcelForm: Excel_Form, Dateone: D1, Datetwo: D2, ReportType: Report_Select, Astore: ReportLocation, NumStart: StartNum, NumEnd: EndNum, Page_On: NumPage2}); 
		   
	   }

	   
	   }
	   	  
	   if (Report_Select=="Range") {    
		   
		   if (datausr=="Administrator"){
		   res.render('Generate', { title: 'Generate', userData: data, userId: datauserId, userStore: datastore, userData2: data2, userData3: data3, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title, FormBox: box, AForm: AForm_Name, ExcelForm: Excel_Form, Dateone: D1, Datetwo: D2, ReportType: Report_Select, Astore: ReportLocation, NumStart: StartNum, NumEnd: EndNum, Page_On: NumPage2});
		   }
		   
		   
		   else {
			   
					   res.render('Generate_Standard', { title: 'Generate_Standard', userData: data, userId: datauserId, userStore: datastore, userData2: data2, userData3: data3, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title, FormBox: box, AForm: AForm_Name, ExcelForm: Excel_Form, Dateone: D1, Datetwo: D2, ReportType: Report_Select, Astore: ReportLocation, NumStart: StartNum, NumEnd: EndNum, Page_On: NumPage2});   
			   
		   }
	   
	   
	   }
	
  });
  });
  });
	 }
		
//---++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++----->		
		else
			
			{
				
				
				   connection.query('SELECT * FROM Submitted_Forms Where Form_Name= ? and store= ? and Department = ? and Date >= ? and Date <= ?', [Form_Type, ReportLocation, departuser, req.body.Date1, req.body.Date2] ,function (err, data, fields) {
   connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [Form_Type] ,function (err, data2, fields) {
   connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and store= ? and Date >= ? and Date <= ?', [Form_Type, ReportLocation, req.body.Date1, req.body.Date2] ,function (err, data3, fields) {
		
    if (err) throw err;
	   if (Report_Select=="Weekly") { 
		   
		   if (datausr=="Administrator"){
		   res.render('Weekly_Generate', { title: 'Weekly_Generate', userData: data, userData2: data2, userData3: data3, userName: user, userDepartment: departuser, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title, FormBox: box, AForm: AForm_Name, ExcelForm: Excel_Form, Dateone: D1, Datetwo: D2, ReportType: Report_Select, Astore: ReportLocation, NumStart: StartNum, NumEnd: EndNum, Page_On: NumPage2 });
	   }
	   
	   else {
	
		  	   		   res.render('Weekly_Generate_Standard', { title: 'Weekly_Generate_Standard', userData: data, userData2: data2, userData3: data3, userName: user, userDepartment: departuser, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title, FormBox: box, AForm: AForm_Name, ExcelForm: Excel_Form, Dateone: D1, Datetwo: D2, ReportType: Report_Select, Astore: ReportLocation, NumStart: StartNum, NumEnd: EndNum, Page_On: NumPage2}); 
		   
	   }

	   
	   }
	   	  
	   if (Report_Select=="Range") {    
		   
		   if (datausr=="Administrator"){
		   res.render('Generate', { title: 'Generate', userData: data, userId: datauserId, userStore: datastore, userData2: data2, userData3: data3, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title, FormBox: box, AForm: AForm_Name, Astore: ReportLocation, NumStart: StartNum, NumEnd: EndNum, Page_On: NumPage2});
		   }
		   
		   
		   else {
			   
					   res.render('Generate_Standard', { title: 'Generate_Standard', userData: data, userId: datauserId, userStore: datastore, userData2: data2, userData3: data3, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title, FormBox: box, AForm: AForm_Name, Astore: ReportLocation, NumStart: StartNum, NumEnd: EndNum, Page_On: NumPage2});   
			   
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
var departuser =req.body.userdepartment;
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
		if (box=="Cold_Storage") {box="Cold Storage"}	
        if (box=="Cold_Transfer") {box="Cold Transfer"}	
        if (box=="Haccp_Monitoring") {box="Haccp Monitoring"}	
        if (box=="Damaged_Discarded") {box="Damaged/Discarded"}	
        if (box=="Deviation_Record") {box="Deviation Record"}	
        if (box=="Receiving_Commissary") {box="Receiving (Commissary)"}	
        if (box=="Receiving (Stores)") {box="Receiving (Stores)"}
		if (datausr=="Store Level") {AForm_Name=AForm_Name+"_Standard"}
 if (ReportLocation=="All") {
    connection.query('SELECT * FROM Submitted_Forms Where Form_Name= ? and Department = ? and Date >= ? and Date <= ?', [Form_Type, departuser, req.body.Date1, req.body.Date2] ,function (err, data, fields) {
   connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [Form_Type] ,function (err, data2, fields) {
   connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Department = ? and Date >= ? and Date <= ?', [Form_Type, departuser, req.body.Date1, req.body.Date2] ,function (err, data3, fields) {
		
    if (err) throw err;
	   if (Report_Select=="Weekly") { 
		   
		   if (datausr=="Administrator"){
		   res.render('Export', { title: 'Export', userData: data, userData2: data2, userData3: data3, userName: user, userDepartment: departuser, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title, FormBox: box, AForm: AForm_Name, ExcelForm: Excel_Form, Dateone: D1, Datetwo: D2, ActionType: Action_Type, ReportType: Report_Select, Astore: ReportLocation, Page1_Num: NumPage1, Page2_Num: NumPage2});
	   }
	   
	   else {
		     res.render('Export', { title: 'Export', userData: data, userData2: data2, userData3: data3, userName: user, userDepartment: departuser, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title, FormBox: box, AForm: AForm_Name, ExcelForm: Excel_Form, Dateone: D1, Datetwo: D2, ReportType: Report_Select, ActionType: Action_Type, Astore: ReportLocation, Page1_Num: NumPage1, Page2_Num: NumPage2});
		   
	   }
	   		 
	   
	   }
	   	  
	   if (Report_Select=="Range") {    
		   
		   if (datausr=="Administrator"){
		   res.render('Generate', { title: 'Generate', userData: data, userId: datauserId, userStore: datastore, userData2: data2, userData3: data3, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title, ReportType: Report_Select, FormBox: box, AForm: AForm_Name, Astore: ReportLocation, Page1_Num: NumPage1, Page2_Num: NumPage2});
		   }
		   
		   
		   else {
			   
					   res.render('Generate_Standard', { title: 'Generate_Standard', userData: data, userId: datauserId, userStore: datastore, userData2: data2, userData3: data3, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title, FormBox: box, AForm: AForm_Name, ReportType: Report_Select,  Astore: ReportLocation, Page1_Num: NumPage1, Page2_Num: NumPage2});   
			   
		   }
	   
	   
	   }
	
  });
  });
  });
 
 
 }

	
//---++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++----->	
	else {  
	   connection.query('SELECT * FROM Submitted_Forms Where Form_Name= ? and Department = ? and store= ? and Date >= ? and Date <= ?', [Form_Type, departuser, ReportLocation, req.body.Date1, req.body.Date2] ,function (err, data, fields) {
   connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [Form_Type] ,function (err, data2, fields) {
   connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Department = ? and store= ? and Date >= ? and Date <= ?', [Form_Type, departuser, ReportLocation, req.body.Date1, req.body.Date2] ,function (err, data3, fields) {
		
    if (err) throw err;
	   if (Report_Select=="Weekly") { 
		   
		   if (datausr=="Administrator"){
		   res.render('Export', { title: 'Export', userData: data, userData2: data2, userData3: data3, userName: user, userDepartment: departuser, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title, FormBox: box, AForm: AForm_Name, ExcelForm: Excel_Form, Dateone: D1, Datetwo: D2, ActionType: Action_Type, ReportType: Report_Select, Astore: ReportLocation, Page1_Num: NumPage1, Page2_Num: NumPage2});
	   }
	   
	   else {
		    res.render('Export', { title: 'Export', userData: data, userData2: data2, userData3: data3, userName: user, userDepartment: departuser, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title, FormBox: box, AForm: AForm_Name, ExcelForm: Excel_Form, Dateone: D1, Datetwo: D2, ActionType: Action_Type, ReportType: Report_Select, Astore: ReportLocation, Page1_Num: NumPage1, Page2_Num: NumPage2}); 
		   
	   }
	   		 
	   
	   }
	   	  
	   if (Report_Select=="Range") {    
		   
		   if (datausr=="Administrator"){
		   res.render('Generate', { title: 'Generate', userData: data, userId: datauserId, userStore: datastore, userData2: data2, userData3: data3, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title, FormBox: box, AForm: AForm_Name, Astore: ReportLocation, Page1_Num: NumPage1, Page2_Num: NumPage2});
		   }
		   
		   
		   else {
			   
					   res.render('Generate_Standard', { title: 'Generate_Standard', userData: data, userId: datauserId, userStore: datastore, userData2: data2, userData3: data3, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title, FormBox: box, AForm: AForm_Name, Astore: ReportLocation, Page1_Num: NumPage1, Page2_Num: NumPage2});   
			   
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
var departuser =req.body.userdepartment;
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
		if (box=="Cold_Storage") {box="Cold Storage"}	
        if (box=="Cold_Transfer") {box="Cold Transfer"}	
        if (box=="Haccp_Monitoring") {box="Haccp Monitoring"}	
        if (box=="Damaged_Discarded") {box="Damaged/Discarded"}	
        if (box=="Deviation_Record") {box="Deviation Record"}	
        if (box=="Receiving_Commissary") {box="Receiving (Commissary)"}	
        if (box=="Receiving (Stores)") {box="Receiving (Stores)"}
		if (datausr=="Store Level") {AForm_Name=AForm_Name+"_Standard"}
   connection.query('SELECT * FROM Submitted_Forms Where Form_Name= ? and Department = ? and Date >= ? and Date <= ?', [Form_Type, departuser, req.body.Date1, req.body.Date2] ,function (err, data, fields) {
   connection.query('SELECT * FROM Question_Table Where Form_Name= ?', [Form_Type] ,function (err, data2, fields) {
   connection.query('SELECT * FROM Corrective_Actions Where Form_Name= ? and Department = ? and Date >= ? and Date <= ?', [Form_Type, departuser, req.body.Date1, req.body.Date2] ,function (err, data3, fields) {
		
    if (err) throw err;
	   if (Report_Select=="Weekly") { 
		   
		   if (datausr=="Administrator"){
		   res.render('Print', { title: 'Print', userData: data, userData2: data2, userData3: data3, userName: user, userDepartment: departuser, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title, FormBox: box, AForm: AForm_Name, Dateone: D1, Datetwo: D2, ActionType: Action_Type, ReportType: Report_Select});
	   }
	   
	   else {
		   
		   
	   }
	   		   res.render('Weekly_Generate_Standard', { title: 'Weekly_Generate_Standard', userData: data, userData2: data2, userData3: data3, userName: user, userDepartment: departuser, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title, FormBox: box, AForm: AForm_Name, Dateone: D1, Datetwo: D2, ActionType: Action_Type, ReportType: Report_Select});
	   
	   }
	   	  
	   if (Report_Select=="Range") {    
		   
		   if (datausr=="Administrator"){
		   res.render('Generate', { title: 'Generate', userData: data, userId: datauserId, userStore: datastore, userData2: data2, userData3: data3, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title, FormBox: box, AForm: AForm_Name});
		   }
		   
		   
		   else {
			   
					   res.render('Generate_Standard', { title: 'Generate_Standard', userData: data, userId: datauserId, userStore: datastore, userData2: data2, userData3: data3, userName: user, userDepartment: departuser, userRole: datausr, FormTitle: Title, FormBox: box, AForm: AForm_Name});   
			   
		   }
	   
	   
	   }
	
  });
  });
  });
});

//-------------------------------------------Nav Bar ------------------------------------------------------------>

router.post('/Settings', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;	
    res.render('Settings_Page_Admin', { title: 'Settings_Page_Admin',  userName: user, userDepartment: departuser, userRole: datausr, userStore: datastore, userId: datauserId, FormTitle: Title});

});

router.post('/Maintenance', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;	
    res.render('Maint_Page', { title: 'Maint_Page',  userName: user, userDepartment: departuser, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title});

});

router.post('/Support', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;	
    res.render('Support_Page', { title: 'Support_Page',  userName: user, userDepartment: departuser, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title});

});


router.post('/Dashboard', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;
	
	if (departuser=="Cheese") {
    res.render('Cheese/CheeseDashboard', { title: 'Dashboard', userName: user, userDepartment: departuser, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title});
	}
	
	else
		{
	
				if (departuser=="Deli") {
    res.render('Deli/DeliDashboard', { title: 'Dashboard', userName: user, userDepartment: departuser, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title});
	}
			
			else {
					if (departuser=="Meat") {
    res.render('Meat/MeatDashboard', { title: 'Dashboard', userName: user, userDepartment: departuser, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title});
	}
				
			}
			
		}
	
});

router.post('/Dashboard2', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;	
	
	if (departuser=="Cheese") {
    res.render('Cheese/CheeseDashboard2', { title: 'Dashboard2', userName: user, userDepartment: departuser, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title});
	}
	
	else
		{
	
				if (departuser=="Deli") {
    res.render('Deli/DeliDashboard2', { title: 'Dashboard2', userName: user, userDepartment: departuser, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title});
	}
			
			else {
					if (departuser=="Meat") {
    res.render('Meat/MeatDashboard2', { title: 'Dashboard2', userName: user, userDepartment: departuser, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title});
	}
				
			}
			
		}

});

router.post('/Reports', function(req, res, next) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
var departuser =req.body.userdepartment;
	var Title= req.body.Form_Title;	
	if (datausr=="Administrator") {
    res.render(departuser+'/Reports', { title: 'Reports', userName: user, userDepartment: departuser, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title});
	}
	
	else {
	
		    res.render(departuser+'/Reports_Standard', { title: 'Reports_Standard', userName: user, userDepartment: departuser, userRole: datausr, userId: datauserId, userStore: datastore, FormTitle: Title});
		
	}
		
		
		
});


router.post('/auth', function(req, res) {
	var user= req.body.username;
var datausr= req.body.userrole;
var datauserId =req.body.userid;
var datastore =req.body.userstore;
	var departuser =req.body.userdepartment;
	var password = req.body.password;
	var Title= req.body.Form_Title;
	if (user && password) {
		connection.query('SELECT * FROM Users WHERE userName = ?', [user], function(error, results, fields) {
			if (results.length > 0) {
			const comparison = bcrypt.compareSync(password,results[0].passwd)
			if (comparison) {
				var departuser = results[0].Department;
//---++++++++++++++++++++++++++++++++++++++++++Cheese Log In+++++++++++++++++++++++++++++++++++++++++++++++++++++++++----->	
			
				if (departuser=="Cheese") {
				
							connection.query('SELECT Id, role, store FROM Users WHERE userName = ?', [user], function(error, data, fields) {
					res.render('Cheese/CheeseDashboard', { title: 'Dashboard', FormTitle: Title, userName: user, userDepartment: departuser, userStore: data[0].store, userId: data[0].Id, userRole: data[0].role});	
		
		});
				}
			
//---++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++----->	
	else	{
		
//---++++++++++++++++++++++++++++++++++++++++++Deli Log In+++++++++++++++++++++++++++++++++++++++++++++++++++++++++----->	
			
				if (departuser=="Deli") {
				
							connection.query('SELECT Id, role, store FROM Users WHERE userName = ?', [user], function(error, data, fields) {
					res.render('Deli/DeliDashboard', { title: 'Dashboard', FormTitle: Title, userName: user, userDepartment: departuser, userStore: data[0].store, userId: data[0].Id, userRole: data[0].role});	
		
		});
				}
			
//---++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++----->	
	else {
//---++++++++++++++++++++++++++++++++++++++++++Deli Log In+++++++++++++++++++++++++++++++++++++++++++++++++++++++++----->	
			
				if (departuser=="Meat") {
				
							connection.query('SELECT Id, role, store FROM Users WHERE userName = ?', [user], function(error, data, fields) {
					res.render('Meat/MeatDashboard', { title: 'Dashboard', FormTitle: Title, userName: user, userDepartment: departuser, userStore: data[0].store, userId: data[0].Id, userRole: data[0].role});	
		
		});
				}
			
//---++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++----->
		
		
	}	
		
		
		
		
	}	
			
			} else {
				res.render('Sign_Incorrect', { title: 'Sign_Incorrect', userName: user, FormTitle: Title});
			}			
		
			} else {
				res.render('Sign_Incorrect', { title: 'Sign_Incorrect', userName: user, FormTitle: Title});
			}			
		
		});
	}
});


router.post('/Log_Out', function(req, res, next) {

    res.redirect('/');

});




















module.exports = router;


















