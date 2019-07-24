require("dotenv").config();

var axios = require("axios");
//var keys = require("./keys.js");
//var spotify = new Spotify(keys.spotify);


var commands = process.argv[2];
var value = process.argv[3];

switch (commands) {
case "concert-this":
  concertThis();
  break;

case "spotify-this-song":
  
  break;

case "movie-this":
  
  break;

case "do-what-it-says":
  
  break;
}

function concertThis(){
    var artist = value;
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function(response) {
          console.log(response.data);
        }
      );
}

