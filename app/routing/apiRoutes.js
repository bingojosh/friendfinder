var path = require('path');

var friends = require("../data/friends")

module.exports = function(app){
    app.get("/api/friends", function(req,res){
        res.json(friends);
    })

    app.post("/data/friends", function(req,res){
        
        console.log(req.body);


        //go through friends.js scores and compare, res.json the best partner
        var match;
        var score = Number.MAX_SAFE_INTEGER;

        for(i=0; i<friends.length;i++){
            var tempscore = 0;

            for(j=0;j<friends[i].scores.length;j++){
                tempscore += Math.abs(friends[i].scores[j] - req.body.scores[j]);
            }
            if(tempscore < score){
                score = tempscore;
                match = friends[i]
                console.log(match)
            }
        }
        friends.push(req.body);

        res.json(match);
    })
}