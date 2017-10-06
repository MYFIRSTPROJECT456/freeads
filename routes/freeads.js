    var express = require('express');
    var router = express.Router();
    var modeldata = require('../model/freeadsmodel');
//router concept
router.get('/', function(req, res, next){
res.render('admin');
});


router.get('/add', function(req, res,  next){
res.render('addstate');
});
router.get('/cityadd', function(req, res, next){
  res.render('addcity');
});
// add data in database
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
router.post('/cityadd',function(req, res, next){
  var cityData = {
    cid : req.body.cid,
    cname : req.body.cname,
    sid : req.body.sid,
    cdate : req.body.cdate,
    udate : req.body.udate
  }
  console.log(cityData);
  modeldata.cityAdd(cityData, function(error, result){
    if (error) {
      var msg = 'wrong inputData';
      res.redirect('/cityadd?'+msg);
    }
    else{
      res.redirect('/citylist');
    }
  });
});
//show database list
router.get('/list', function(req, res, next){
  modeldata.listState(function(error, result){
    if (error) {
      res.render('statelist', {error:error});
    }
    else{
      res.render('statelist', {data:result});
    }
  });
});
router.get('/citylist', function(req, res, next){
  modeldata.cityList(function(error, result){
    if (error) {
      res.render('citylist' ,{error:error});
    }
    else{
      res.render('citylist' ,{data:result});
    }
  });
});
router.get('/edit', function(req, res, next) {
	var id = req.query.studentid;
	modeldata.getStateById(id, function(err, result) {
    	if (err) {
    	
    		res.render('stateupdate', {err:err});
    	} else  {
    		res.render('stateupdate', {data:result});
    	}
    });	

  //res.render('update');
});
//delete data from database
router.get('/delete', function(req, res, next){
  var id = req.query.stateid;
  modeldata.deleteState(id, function(error, result){
      res.redirect('/list');
  });
});
//post update data in database
router.post(function(req, res, next){
  var stateData = 
  {
    sid : req.body.sid,
  sname : req.body.sname,
  cdate : req.body.cdate,
  udate : req.body.udate
    }
    modeldata.updateState(stateData, function(error, result){
      if (error) {
        res.render('updateState');
      }
      else{
        res.redirect('list');
      }
    });
});

module.exports = router;