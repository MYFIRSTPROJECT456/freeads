var express = require('express');
var router = express.Router();
var modeldata = require('../model/freeadsmodel');

router.get('/', function(req, res, next){
res.render('admin');
});


router.get('/add', function(req, res,  next){
res.render('addstate');
});

router.post('/add', function(req, res, next){
	var stateData = 
	{
 	  sid : req.body.sid,
 	sname : req.body.sname,
 	cdate : req.body.cdate,
 	udate : req.body.udate
    }
   modeldata.addState(stateData, function(error, result){
   if (error) {
   var msg = 'wrong inputdata';
		res.redirect('/add?error'+msg);
	}
   else{
		res.redirect('/');
    }

});
});


router.get('/list', function(req, res,  next){
res.render('statelist');
});
router.get('/edit', function(req, res,  next){
res.render('stateupdate');
});



router.get('/list', function(req, res, next){
modeldata.listState(function(error, result){
		if (error) {
			res.render('/statelist',{error:error})
		}
		else{
			res.redirect('/statelist', {data:result});
		}
});
});

module.exports = router;