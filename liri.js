var request = require("request");
var fs = require("fs");
var key = require("./key.js");
var Twitter = require("twitter");
var Spotify = require("spotify");

var client = new Twitter ({
	
	consumer_key: key.twitterKeys.consumer_key,
  	consumer_secret: key.twitterKeys.consumer_secret,
  	access_token_key: key.twitterKeys.access_token_key,
  	access_token_secret: key.twitterKeys.access_token_secret
})

console.log(key.twitterKeys.consumer_key);
console.log(key.twitterKeys.consumer_secret);
console.log(key.twitterKeys.access_token_key);
console.log(key.twitterKeys.access_token_secret);

var command = process.argv[2];
var input = process.argv[3];

switch (command) {

	case "my-tweets":
	myTweets();
	break;

	case "spotify-this-song":
	spotifyThis();
	break;

	case "movie-this":
	movieThis();
	break;

	case "do-what-it-says":
	doIt();
	break;
}

function myTweets () {

	client.get("statuses/user_timeline", {screen_name: "cgcode17", count: "20"}, function(error, tweets, response) {
	  if(error) throw error;
	  console.log(tweets);  
	});

}

function doIt() {
	fs.readFile("random.txt", "utf-8", function(err, data){
		data = data.split(",");
		console.log(data);
		command = data[0];

		console.log(command);
		input = data[1];
		console.log(input);

	switch (command) {

	case "my-tweets":
	myTweets();
	break;

	case "spotify-this-song":
	spotifyThis();
	break;

	case "movie-this":
	movieThis();
	break;

	case "do-what-it-says":
	doIt();
	break;
	}
	})
}
