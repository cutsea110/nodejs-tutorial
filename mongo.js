var MongoClient = require('mongodb').MongoClient,
    settings = require('./settings');
MongoClient.connect("mongodb://"+settings.host+"/"+settings.db, function(err, db) {
    if (err) { return console.dir(err); }
    console.log("connected to db");
    db.collection("users", function(err, coll) {
	var docs = [
	    {name: "taguchi", score: 40},
	    {name: "fkoji", score: 80},
	    {name: "dotinstall", score: 60}
	];
	coll.insert(docs, function(err, result) {
	    console.dir(result);
	});
    });
});
