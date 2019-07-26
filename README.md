# LIRI Node Application

LIRI, Language Interpretation and Recognition Interface, is a command line node application that returns data to a user's terminal/Bash window based on the following parameters:

* concert-this
* spotify-this-song
* movie-this
* do-what-it-says

## Concert-this:


![](https://github.com/Jrofalk/liri-node-app/blob/master/Images/concert-this.PNG)

The concert-this command will have LIRI utilize the Bands in Town Artist Events API to locate the following information regarding a given artist's (e.g., Tomb Mold) upcoming concerts:

* Name of the venue where the concert will occur
* Location of the venue
* Date of the event

## Spotify-this-song:

![](https://github.com/Jrofalk/liri-node-app/blob/master/Images/spotify-this-song.PNG)

The spotify-this-song command will have LIRI search the Spotify API to locate the following information regarding a given song (e.g., "1979"):

* Artist
* Name of the song
* A preview link of the song (if available)
* Name of the album that the song is from

## Movie-this:

![](https://github.com/Jrofalk/liri-node-app/blob/master/Images/movie-this.PNG)

The movie-this command will allow LIRI to search the OMDB API for information regarding a given film (e.g., "The Discreet Charm of the Bourgeoisie"). The following data will be displayed:

* Title of the film
* Year the film came out
* IMDB Rating of the film
* Rotten Tomatoes rating of the film
* Country where the film was produced
* Language of the film
* Plot of the film
* Actors in the film

## Do-what-it-says:

![](https://github.com/Jrofalk/liri-node-app/blob/master/Images/do-what-it-says.PNG)

Utilizing the above command will allow LIRI to use the information stored in the file "random.txt" and then call on another command. In this instance LIRI would use the spotify-this-song command to search for information regarding the song "I Want It That Way."

## LIRI was builting using the following technologies:

* Spotify API
* Bands in Town Artist Events API
* OMDB API
* JS
* Node.js
* NPM Packages, including Axios, Moment, and DotEnv
