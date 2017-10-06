var pool = require('../util/dbconnection');

var adsdata = {
    addState: function(inputData, cb){
        var sql = "INSERT INTO state(STATEID, STATENAME, CREATIONDATE, UPDATIONDATE)values("+inputData.sid+",'"+inputData.sname+"','"+inputData.cdate+"','"+inputData.udate+"')";
        pool.getConnection(function(error, connection){
            if (error) {
                console.log('connection error'+error);
            }
            else{
                connection.query(sql, function(error, result){
                    if (error) {
                        cb(error, null);
                    }
                    else{
                        cb(null, result);
                    }
                });
            }
        });
    },

	
    updateState: function(inputData, cb){
        var sql = "update state SET STATENAME='"+inputData.sname+"', CREATIONDATE='"+inputData.cdate+"', UPDATIONDATE='"+inputData.udate+"' WHERE id="+sid;
        pool.getConnection(function(error, connection){
            if (error) {
                console.log('connection error'+error);
            }
            else{
                connection.query(sql, function(error, result){
                    if (error) {
                        cb(error, null);
                    }
                    else{
                        cb(null, result);
                    }
                });
            }
        });
    },
// all database list
    listState: function(cb){
        var sql = "select * from state";
        pool.getConnection(function(error, connection){
            if (error) {
                console.log("connection error"+error);
            }
            else{
                connection.query(sql, function(error, result){
                if (error) {
                    cb(error, null);    
                }
                else{
                    cb(null, result);
                }
                    
                });
                }
                
            });
        },
    cityList:function(cb){
            var sql = "select * from city";
            pool.getConnection(function(error, connection){
                if (error) {
                    console.log("connection error"+error);
                }
                else{
                    connection.query(sql, function(error, result){
                        if (error) {
                            cb(error, null);
                        }
                        else{
                            cb(null, result);
                        }
                    });
                }
            });
        },    

    getStateById:function(sid, cb){
        var sql ="select * from state where id"+sid;
        pool.getConnection(function(error, connection){
            if (error) {
            console.log('show content:'+error);
            }
            else{
                connection.query(sql, function(error, result){
            if (error) {
            cb(error, null);
            }
            else
            {
            cb(null, result);
            }
            });
        }
    });

    },
    deleteState:function(sid, cb){
        var sql = "delete from state where id="+sid;
        pool.getConnection(function(error, connection){
            if (error) {
                console.log('connection error'+error);
            }
            else{
                connection.query(function(error, result){
                    if (error) {
                        cb(error, null);
                    }
                    else{
                        cb(null, result);
                    }
                });
            }
        });
    },
    cityAdd: function(inputData, cb){
        var sql = "INSERT INTO city (CITYID, CITYNAME, STATEID, CREATIONDATE, UPDATIONDATE)values("+inputData.cid+",'"+inputData.cname+"',"+inputData.sid+",'"+inputData.cdate+"','"+inputData.udate+"')";
        pool.getConnection(function(error, connection){
            if (error) {
                console.log('connection error'+error);
            }
            else{
                connection.query(sql, function(error, result){
                    if (error) {
                        cb(error, null);
                    }
                    else{
                        cb(null, result);
                    }
                });
            }
        });
    }

}

module.exports = adsdata;