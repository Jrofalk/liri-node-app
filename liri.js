require("dotenv").config();

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var commands = process.argv[2];
var value = process.argv[3];

switch (commands) {
case "concert-this":
  //each function goes on this line ex. deposit();
  break;

case "spotify-this-song":
  
  break;

case "movie-this":
  
  break;

case "do-what-it-says":
  
  break;
}

