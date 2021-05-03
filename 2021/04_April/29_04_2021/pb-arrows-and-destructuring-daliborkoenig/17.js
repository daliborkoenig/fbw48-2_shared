/*

Assignment 17

We can also destucture objects. We might do this if we want
to assign specific object properties into variables.

One common place where you might destructure objects is
from a response from a server. You might only be interested
in specific properties.

Take a look at this object:

const trackInfo = {
     id: 34673523945,
     formats: [ 'mp3', 'flac', 'aac' ],
     album: 'Old Skool Jungle',
     artist: 'Roni Size',
     title: 'Its Jazzy'
};

There is a lot of information here we could assume we would
not use, so we might destructure the data out of it to make
it simpler.

If we only wanted the album, we would write code like this:

const { album } = trackInfo;

We must reference the keys in the object we want to destructure
from. The names of these keys will become new variables.

In the example above "album" becomes a new variable.

The keys referenced must exist in the object.

Read about destructuring objects here:

(English)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring

(Deutsch)
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Destrukturierende_Zuweisung#Objektdestrukturierung

1. In the following code, destructure the keys "artist" and
     "title" from the object "trackInfo"

2. console.log() your result

*/

const trackInfo = {
     id: 34673523945,
     timestamp: 8528967705468754,
     spotify_id: '34d2f7asd889fda89789',
     artist_id: 2372874243,
     formats: [ 'mp3', 'flac', 'aac' ],
     artist: 'Venetian Snares',
     title: 'Hajnal',
     album: 'Rossz Csillag Alatt Született'
};

console.log();
