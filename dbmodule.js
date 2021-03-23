var databaseUrl = "localhost/mydb1";
var mongojs = require("./node_modules/mongojs");
var db = mongojs(databaseUrl);
var collections = db.collection("users");
console.log("Connected");



exports.saveUser = function(name, email,gender,address, response) {
console.log('Saving user to mongo');
db.users.insert({ "name": name, "email": email,"gender":gender,"address":address },
function(err, saved) {
if (err || !saved)
console.log(err);
else
console.log("User saved");
            //dbo.close;
        });
}
exports.updateUser = function(name, email,gender,address, response) {
    console.log('Updating user to mongo');
    db.users.update({ "name": name, "email": email},{$set:{"gender":gender,"address":address}},{upsert:true},
    function(err, updated){
    if (err || !updated)
    console.log(err);
    else
    console.log("Details updated");
                //dbo.close;
            });
}
exports.deleteUser = function(name, email,gender,address, response) {
    console.log('Deleting user from mongo');
    db.users.remove({ "name": name, "email": email},
    function(err, deleted){
    if (err || !deleted)
    console.log(err);
    else
    console.log("User deleted");
                //dbo.close;
            });
}
