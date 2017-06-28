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

/*router.get('/add', function(req, res, next) {
	res.render('userAdd', { title: 'Add User'});
});
*/
/*router.get('/update/:id', function(req, res, next) {
	var db = req.con;
	db.query('SELECT * FROM user WHERE id = ? ',[req.params.id] ,function(err,rows){
		if(err){
			res.send(JSON.stringify({'status': 0, 'msg': 'Error User deleted', 'raw': JSON.stringify(req.params)}));
		}
		res.render('updateUser', { title: 'Update User', data: rows});
	});
});*/

/*router.put('/update', function(req, res, next) {
	console.log("---"+JSON.stringify(req.body));
	var db = req.con;
	var data = {
			name: req.body.name,
			email: req.body.email
		}
	db.query('UPDATE user set ? WHERE id = ?',[data, req.body.id] ,function(err,rows){
		if(err){
			res.send(JSON.stringify({'status': 0, 'msg': 'Error updating user', 'raw': JSON.stringify(req.body)}));
		}
		res.send(JSON.stringify({'status': 1, 'msg': 'User updated', 'raw': JSON.stringify(req.body)}));
	});
});

router.delete('/delete/:id', function(req, res) {
	//var url_parts = url.parse(req.url, true); // Read parameter from url if any
	//console.log("---"+JSON.stringify(url_parts.query));
	console.log("---"+JSON.stringify(req.params));
	var db = req.con;
	db.query('DELETE FROM user WHERE id = ? ',[req.params.id] ,function(err,rows){
		if(err){
			res.send(JSON.stringify({'status': 0, 'msg': 'Error User deleted', 'raw': JSON.stringify(req.params)}));
		}
		res.send(JSON.stringify({'status': 1, 'msg': 'User deleted', 'raw': JSON.stringify(req.params)}));
	});
});
	
*/

module.exports = router;
