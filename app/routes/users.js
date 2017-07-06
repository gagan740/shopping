var express =   require('express');
var router  =   express.Router();
var util    =   require("util");
var fs      =   require("fs");
var path    =   require('path');
var url     =   require('url');

//mongodb Queries
// db.customers.find( { password: { $in: [ '111111', '101010' ] } } )    for in
// db.customers.find( { password: { $nin: [ '111111', '101010' ] } } )   for not in
// db.collection('customers').find({})																	 for find (select)
// db.collection('customers').insert()																	 for insert
// db.customers.update({_id : ObjectId("595603e1b6540b280535e0bc")},{$set:{name : "testing","phone" : "7894561235",username: "test@testmail.com",password : "111111"}} )			 for update
// db.customers.remove( { "_id" : ObjectId("5956071ecfe055345d6ea853") } ) for remove(Delete)





router.post('/login', function(req, res, next) {
	var db = req.con;
	console.log("FormData "+ JSON.stringify(req.body));
	db.collection('customers').find(req.body,function(err,docs){
		//console.info(docs[0]);
		if(docs[0]){
			res.send("Success.");
		}else{
			res.send("Plesse check your credentials.")
		}
	})
});

router.post('/register', function(req, res, next) {
	var db = req.con;
	console.log("FormData "+ JSON.stringify(req.body));
	db.collection('customers').insert(req.body,function(err,docs){
		console.info(docs);
		if(docs){
			res.send("Success.");
		}else{
			res.send("Something went wrong please try again later.")
		}
	})
});

router.get('/calls', function(req, res, next) {
	var db = req.con;
	db.collection('calls').find({},{ limit : 100000 },function(err,docs){
		console.log(docs);
		if(docs){
			res.send(docs);
		}else{
			res.send("Something went wrong please try again later.")
		}
	});
});

router.get('/news', function(req, res, next) {
	var db = req.con;
	var data = "";
	db.query('SELECT * FROM tariffs',function(err,rows){
		if(err) throw err;

		console.log('Data received from Db:\n');
		console.log(rows);
		var data = rows;
		console.log("Outside--"+data.id);
		//res.render('userIndex', { title: 'User Information', dataGet: data });
		res.send(data);
	});
});

router.post('/addtariffs', function(req, res, next) {
	var db = req.con;
	console.log("FormData "+ JSON.stringify(req.body));
	var qur = db.query('INSERT INTO tariffs set ? ', req.body , function(err,rows){
		if(err) throw err;
		console.log(rows);
		res.setHeader('Content-Type', 'application/json');
		//res.redirect('/users/index');
		res.send(rows);
	});
	console.log("Query "+qur.sql);
});
module.exports = router;
