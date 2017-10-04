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
        var sql = "update state SET STATENAME='"+inputData.sname+"', CREATIONDATE='"+inputData.cdate+"', UPDATIONDATE='"+inputData.udate+"' WHERE id="+id;
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

    listState: function(){
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

    getStateById:function(id, cb){
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

}

module.exports = adsdata;