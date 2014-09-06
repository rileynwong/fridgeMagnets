var stage = new Kinetic.Stage({
  container: "container",
  width: window.innerWidth,
  height: window.innerHeight
});

var layer = new Kinetic.Layer();

var conditions;
var city;

// use ipinfo.io IP lookup API to find location
$.get("http://ipinfo.io", function(response) {
  city = response.city;
}, "jsonp");

var createClear = function() {
  words = Words.clearSet;
  document.body.style.background = '#d0e4eb';
}

var createStorm = function() {
  words = Words.stormSet;
  document.body.style.background = '#2b6578';
}

var createRain = function() {
  words = Words.rainSet;
  document.body.style.background = '#7ab4c7';
}

var createSnow = function() {
  words = Words.snowSet;
  document.body.style.background = '#f4f4f4';
}

Weather.getCurrent(city, function(current) {
  conditions = current.conditions();
console.log("current conditions: " + conditions);

  // if clear
  if (conditions.toLowerCase().indexOf("clear") !== -1 | conditions.toLowerCase().indexOf("clouds") !== -1) {
    createClear();    
  }
  // if storm
  else if (conditions.toLowerCase().indexOf("storm") !== -1) {
    createStorm();
  }
  // if rain or drizzle
  else if (conditions.toLowerCase().indexOf("rain") !== -1 | conditions.toLowerCase().indexOf("drizzle") !== -1 |
           conditions.toLowerCase().indexOf("haze") !== -1 ) {
    createRain();
  }
  // if snow or sleet
  else if (conditions.toLowerCase().indexOf("snow") !== -1 | conditions.toLowerCase().indexOf("sleet") !== -1) {
    createSnow();  }
  else {
    createClear();
  }
	
  var displayWidth = window.innerWidth / 8;
  var displayHeight = window.innerHeight / 2;

  // n being the number of words
  for(w in words) {		
    // for each magnet, create a group for text + rectangle
    var group = new Kinetic.Group({
      draggable: true
    });

    var simpleText = new Kinetic.Text({
      x: displayWidth + 6,
      y: displayHeight,
      text: words[w],
      fontSize: 12,
      fontFamily: 'Times New Roman',
      fill: 'black'
    });
  
    var rect = new Kinetic.Rect({
      x: displayWidth + 2,
      y: displayHeight - 4,
      width: simpleText.getWidth() + 8,
      height: simpleText.getHeight() + 8,
      stroke: 'black',
      strokeWidth: 1,
      fill: 'white'
    });
  
    group.add(rect);
    group.add(simpleText);
  		
    layer.add(group);
  
    displayWidth = displayWidth + simpleText.getWidth() + 12;
  
    if (displayWidth > 7 * window.innerWidth / 8) {
      displayWidth = window.innerWidth / 8;
      displayHeight += 25;
    }
  }

  stage.add(layer);
});



