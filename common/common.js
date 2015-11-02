var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    server = new Server('localhost', 27017, {auto_reconnect: true});
var db = new Db('TESTDB', server);


module.exports.find = function (collection, callback) {

    db.open(function (err, db) {
        if (!err) {
            console.log("Connected to 'TESTDB' database");

            db.collection(collection, function (err, collection) {
                collection.find().toArray(function (err, items) {
                    callback(items);
                    db.close();
                });
            });
        } else {

        }
    });

};
