	var keys = require('./keys.js');  
	var Spotify = require('spotify');
	var Twitter = require('twitter');
	var request = require('request');
	var fs = require('fs');
	var inquirer = require('inquirer');



function displayTweet () {

var twitterKeys = keys.twitterKeys;
// Twitter
var client = new Twitter({
  consumer_key: twitter.consumer_key,
  consumer_secret: twitter.consumer_secret,
  access_token_key: twitter.access_token_key,
  access_token_secret: twitter.access_token_secret
});

var params = {
		screen_name: 'webdevCW',
		count: 20
	};

	file.log(" ");
	file.log("---------------------------------- Tweets ----------------------------------");

	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if (error) {
			console.log(error);
		}
		if (!error) {
			tweets.forEach(function(tweet) {
				file.log(tweet.text);
			})
		}
	});
}

inquirer.prompt([

{
	type: "list", 
	message: "Choose a command",
	choices: ['my-tweets', 'spotify-this-song', 'movie-this', 'do-what-it-says'],
	name: "command"
}
]).then(answers => {

	switch(answers.command) {
		case "my-tweets":

		inquirer.prompt([

	  {
	  	type: "input", 
	  	message: "Please enter a valid Twitter handler",
	  	name: "twitterName"
	  }
				]).then(answers => {

					if (!answers.twitterName ){
						answers.twitterName = "webdevCW";
					}
					
					displayTweet(answers.twitterName);
					
				});
		
		break;

		case "spotify-this-song":
	  inquirer.prompt([

	  {
	  	type: "input", 
	  	message: "Enter the name of a song you'd like to hear",
	  	name: "song"
	  }
				]).then(answers => {

					if (!answers.song ){
						answers.song = "The Sign";
					}
					
					displaySongInfo(answers.song);
					
				});

				break;

				case "movie-this":

	  inquirer.prompt([

	  {
	  	type: "input", 
	  	message: "Please enter the name of a movie \n",
	  	name: "movie"
	  }
				]).then(answers => {
					if (!answers.movie ){
						answers.movie = "Mr. Nobody";
					}

					displayMovieInfo(answers.movie);
				});

				break;

				case "do-what-it-says":
				readFromFile();

				break;
			}

		});

