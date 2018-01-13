	var twitter = require('twitter');
	var spotify = require('spotify');
	var request = require('request');
	var fs = require("fs");
	var inquirer = require('inquirer');
	var keys = require('./keys.js');  




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
					
					displayTweets(answers.twitterName);
					
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
						answers.song = "The Sign, Ace of Base";
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
