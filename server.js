var express         =   require('express');
var app             =   express();
var bodyParser      =   require('body-parser');
var methodOverride  =   require('method-override');
var mysql           =   require("mysql");
var users           =   require('./app/routes/users');
var http            =   require('http').Server(app);
var io              =   require('socket.io')(http);
var MongoClient     =   require('mongodb').MongoClient
  , assert          =   require('assert');

var   monk          =   require('monk');
var   url           =   'localhost:27017/myproject';

var db              =   monk(url);

db.then(() => {
  console.log('Connected correctly to server')
})


app.use(function (req, res, next) {
    req.con = db;
    next();
});

/*MongoClient.connect('mongodb://localhost:27017/myproject', function (err, db) {
  if (err) throw err

  db.collection('customers').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })
})*/



var port = process.env.PORT || 3000; 

app.use(bodyParser.json());  
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(express.static(__dirname + '/public')); 


io.on('connection', function(socket){
    
});


app.use('/', users);

app.listen(port);	
console.log('Magic happens on port ' + port); 			
exports = module.exports = app; 						
