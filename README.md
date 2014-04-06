fridgeMagnets
=============
magnetic poetry based on current weather conditions

generates different sets of magnets based on your current weather conditions (clear, rainy, stormy, snowy)

click + drag to move magnets around

uses [ipinfo.io](http://ipinfo.io/)'s IP Geolocation API to find current location and [Weather.js](http://weatherjs.com/) Javascript weather library to fetch weather data from [OpenWeatherMap](http://openweathermap.org/)'s API

fridgeMagnets finds the user's current location by IP address to determine the current weather conditions.
Based on the weather conditions, the set of magnets displayed will be different. For example, if it is a 
clear day, the words on the magnts will be generally more positive.

Here are some examples:

conditions: 'sky is clear'
![sky is clear](http://i.imgur.com/s71rnbH.png)

conditions: 'thunderstorm'
![thunderstorm](http://i.imgur.com/G41XbAM.png)

conditions: 'light drizzle'
![light drizzle](http://i.imgur.com/TCU7uGc.png)

conditions: 'sleet'
![sleet](http://i.imgur.com/IjjEY1N.png)
