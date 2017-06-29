var userDatabase=require('../models/userlist');
var express=require('express');

//configure routes

var router=express.Router();

router.route('/userlist')
    .get(function(req,res){
       userDatabase.find().exec(function(err,list){
           if(err)
                res.send(err);
           res.send(list);
       });
    })

    .post(function(req,res){
        var newUser=new userDatabase(req.body);
        newUser.save(function(err){
            if(err)
                res.send(err);
            res.send({message:'User Added'});
        });
    });

router.route('/userlist/:id')
    .put(function(req,res){
        userDatabase.findOne({_id:req.params.id},function(err,user){

            if(err)
                res.send(err);

           for(prop in req.body){
                user[prop]=req.body[prop];
           }

            // save the movie
            user.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'user updated!' });
            });

        });
    })

    .get(function(req,res){
        userDatabase.findOne({category:req.params.id},function(err, user) {
            if(err)
                res.send(err);
                console.log("get user");
            res.json(user);
        });
    })

    .delete(function(req,res){
        userDatabase.remove({
            _id: req.params.id
        }, function(err, user) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports=router;
