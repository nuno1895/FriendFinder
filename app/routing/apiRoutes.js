

var friends = require("../data/friends");

module.exports = function(app) {
	// API GET requests
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});

	// API POST request
app.post("/api/friends", function(req, res) {
   console.log(req.body.userGrade);
   var userFinalScore = req.body.userGrade;

   var resultsArray = [];

   for (var i = 0; i < friends.length; i++) {
     if (userFinalScore == friends[i].userGrade) {
       resultsArray.push(friends[i]);
     };
   };
   res.json(resultsArray);
          
    
	})
};

