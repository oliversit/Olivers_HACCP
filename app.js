const express = require('express');
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');


app.get('/signin',function(req,res){
  let title = 'Sign In';
  res.render('signin',{pageTitle: title});
});

app.get('/test',function(req,res){
  let title = 'HAACP'
  res.render('test',{pageTitle: title});
});

app.get('/dash',function(req,res){
  let title = 'Forms';
  res.render('dash',{pageTitle: title});
});






















app.listen(3000,function(){
  console.log('The Server is Running on Port 3000 ')
});
