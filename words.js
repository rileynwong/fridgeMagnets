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

Weather.getCurrent(city, function(current) {
  console.log(["current conditions:" + current.conditions()].join(" "));
  conditions = current.conditions();

  console.log(city);

  // if clear
  if (conditions.toLowerCase().indexOf("clear") !== -1 | conditions.toLowerCase().indexOf("clouds") !== -1) {
    words = Words.clearSet;
    document.body.style.background = '#d0e4eb';
  }
  // if storm
  else if (conditions.toLowerCase().indexOf("storm") !== -1) {
    words = Words.stormSet;
    document.body.style.background = '#2b6578';
  }
  // if rain or drizzle
  else if (conditions.toLowerCase().indexOf("rain") !== -1 | conditions.toLowerCase().indexOf("drizzle") !== -1 |
           conditions.toLowerCase().indexOf("haze") !== -1 ) {
    words = Words.rainSet;
    document.body.style.background = '#7ab4c7';
  }
  // if snow or sleet
  else if (conditions.toLowerCase().indexOf("snow") !== -1 | conditions.toLowerCase().indexOf("sleet") !== -1) {
    words = Words.snowSet;
    document.body.style.background = '#f4f4f4';
  }
  else {
    words = ['no', 'weather', 'info', 'found'].concat(Words.clearSet);
    document.body.style.background = '#ffffff';
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



