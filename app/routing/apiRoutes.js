var path = require('path');

var friends = require("../data/friends")

module.exports = function(app){
    app.get("/api/friends", function(req,res){
        res.json(friends);
    })

    app.post("../data/friends", function(req,res){
        
        console.log(req);
        friends.push(req.body);

        //go through friends.js scores and compare, res.json the best partner
    })
}