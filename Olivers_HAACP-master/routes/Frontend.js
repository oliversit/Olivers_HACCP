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
module.exports = router;





router.post('/Main_Result', function(req, res, next) {
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date] ,function (err, data, fields) {
    if (err) throw err;
    res.render('Main_Result', { title: 'Main_Result', userData: data});
  });
});
module.exports = router;





router.post('/Packing_Form', function(req, res, next) {
    var sql='SELECT * FROM Submitted_Forms Where Form_Name= ? and Date = ? and Id= ?';
    connection.query(sql, [req.body.Form_Name, req.body.Date, req.body.Id] ,function (err, data, fields) {
    if (err) throw err;
    res.render('Packing_Form', { title: 'Packing_Form', userData: data});
  });
});
module.exports = router;