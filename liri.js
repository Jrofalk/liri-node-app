require("dotenv").config();

var Spotify = require('node-spotify-api');
var axios = require("axios");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);


var commands = process.argv[2];
var value = process.argv[3];

switch (commands) {
    case "concert-this":
        concertThis();
        break;

    case "spotify-this-song":
        spotifySong();
        break;

    case "movie-this":

        break;

    case "do-what-it-says":

        break;
}

function concertThis() {
    var artist = value;
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function (response) {
            let results = response.data;
            console.log(results);
            for (let i = 0; i < results.length; i++) {
                console.log("Venue: " + results[i].venue.name);
                console.log("Venue Location: " + results[i].venue.city + ", " + results[i].venue.region + " " + results[i].venue.country);
                //Will need to add moment js to what is below in order to translate date into proper format, look at inquirergeocode.js from activities to see how to do this
                console.log("Date: " + results[i].datetime);
            }
        });
}

function spotifySong() {
    var song = value;
    spotify.search({ type: 'track', query: song, limit: 1 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        else {
            let results = data.tracks.items;
            console.log(results);
            for (let i = 0; i < results.length; i++) {
                console.log("Artist(s): " + results[i].artists[0].name);
                console.log("Song: " + results[i].name);
                console.log("Preview: " + results[i].preview_url);
                console.log("Album: " + results[i].album.name);
            }

        }
    });
}


