var dbconfig = require('./config/database');
var mysql = require('mysql');
var connection = mysql.createConnection(dbconfig.connection);

var route = function(app){

    //Enable CORS
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

	app.get('/api/messages',function(req,res){
        var row = [];
        connection.query(`select * from message;`, 
        	function (err, rows) {        
	            if (err) {
                	console.log(err);
            	} else {
            		res.json(rows);
        		}
        });
    });

	app.post('/api/newmessage', function(req,res){
           connection.query(`INSERT INTO message 
                 	(message_sent_date, message_content, sender) 
                 	VALUES (NOW(), '${req.body.message}', '${req.body.sender}')`,
                 	function(err) {
                 		if(err){
                 			console.log('Something went wrong: ',err)
                 		} else {
                            res.json({sender: req.body.sender, message_content: req.body.message});
                        }
                 	}
               )
            });
    }

exports.route = route;