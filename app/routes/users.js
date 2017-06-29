var express =   require('express');
var router  =   express.Router();
var util    =   require("util");
var fs      =   require("fs");
var path    =   require('path');
var url     =   require('url');

/* GET users listing. */
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

router.get('/tariffs', function(req, res, next) {
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
