var stage = new Kinetic.Stage({
  container: "container",
  width: window.innerWidth,
  height: window.innerHeight
});

var layer = new Kinetic.Layer();
var conditions;

var clearSet = [ '!', '"', '"', ',', '.', '?', 'I', 'I', 'a', 'a', 'am', 'accomplish', 'achieve', 'admire', 'am', 'am', 'an', 'and', 'and', 'any', 'are', 'are', 'as', 'be', 'beautiful', 'boy', 'but', 'care', 'chance', 'clear', 'cloud', 'could', 'dance', 'dance', 'darkness', 'day', 'do', 'dream', 'es', 'everything', 'feel', 'for', 'free', 'fresh', 'fun', 'girl', 'grace', 'happy', 'harmony', 'he', 'hello', 'her', 'here', 'hi', 'him', 'how', 'hug', 'imagine', 'is', 'is', 'is', 'is', 'it', 'it', 'joy', 'jubilant', 'jump', 'kiss', 'laugh', 'life', 'light', 'like', 'linger', 'lips', 'love', 'make', 'maybe', 'me', 'me', 'mind', 'my', 'mystery', 'name', 'nap', 'nearby', 'next', 'night', 'no', 'on', 'or', 'peace', 'peaceful', 'possibility', 'possible', 'potential', 'rhythm', 'run', 's', 'safe', 'secure', 'she', 'should', 'simple', 'simply', 'sing', 'sing', 'skip', 'sleep', 'smile', 'so', 'soul', 'spiritual', 'stay', 'sun', 'sunny', 'the', 'the', 'the', 'there', 'think', 'this', 'this', 'thrive', 'through', 'to', 'to', 'today', 'together', 'tomorrow', 'try', 'was', 'was', 'we', 'week', 'were', 'were', 'whisper', 'will', 'will', 'wish', 'with', 'wonder', 'world', 'worthy', 'would', 'would', 'wow', 'wrap', 'year', 'yes', 'yesterday', 'you', 'you', 'your' ];
var rainSet = [ '!', '"', '"', ',', '.', '?', 'I', 'I', 'a', 'a', 'a', 'am', 'am', 'an', 'and', 'and', 'apology', 'april', 'are', 'are', 'as', 'away', 'be', 'believe', 'better', 'book', 'boy', 'bring', 'but', 'but', 'but', 'can', 'can', 'care', 'chance', 'chance', 'clean', 'cloud', 'clouds', 'cloudy', 'cold', 'come', 'cry', 'damaged', 'dance', 'dark', 'dark', 'darkness', 'day', 'desire', 'drip', 'drop', 'drown', 'es', 'feel', 'flowers', 'for', 'forever', 'get', 'girl', 'give', 'happy', 'he', 'her', 'him', 'home', 'how', 'in', 'in', 'ing', 'is', 'is', 'is', 'it', 'just', 'kiss', 'last', 'life', 'life', 'light', 'like', 'linger', 'love', 'make', 'may', 'me', 'me', 'melancholy', 'mine', 'my', 'mystery', 'nest', 'never', 'next', 'night', 'no', 'on', 'or', 'pitter-patter', 'pour', 'rain', 'read', 'rhythm', 's', 'safe', 'said', 'serene', 'shall', 'share', 'she', 'shower', 'showers', 'sing', 'singing', 'so', 'sometimes', 'sorrow', 'sorry', 'splash', 'sprinkle', 'stand', 'stay', 'storm', 'sun', 'the', 'the', 'the', 'this', 'through', 'to', 'to', 'to', 'today', 'together', 'tomorrow', 'umbrella', 'under', 'us', 'want', 'was', 'was', 'wash', 'water', 'we', 'were', 'were', 'will', 'will', 'will', 'with', 'worthy', 'would', 'would', 'yes', 'yesterday', 'you', 'you', 'your' ];
var stormSet = [ '!', '"', '"', ',', '.', '?', 'I', 'I', 'a', 'a', 'a', 'a', 'a', 'am', 'am', 'an', 'and', 'and', 'anger', 'angry', 'any', 'are', 'are', 'as', 'be', 'be', 'before', 'better', 'boy', 'break', 'broken', 'burden', 'but', 'calm', 'chance', 'chaos', 'cloud', 'could', 'crash', 'darkness', 'day', 'demons', 'destroy', 'do', 'ed', 'es', 'everything', 'eye', 'fall', 'feel', 'for', 'he', 'her', 'here', 'him', 'how', 'hurricane', 'is', 'is', 'is', 'is', 'it', 'it', 'life', 'like', 'loud', 'maybe', 'me', 'me', 'mess', 'mind', 'miss', 'my', 'my', 'mystery', 'name', 'nap', 'nearby', 'next', 'night', 'no', 'of', 'on', 'or', 'peace', 'rough', 's', 'said', 'serenity', 'shambles', 'she', 'sky', 'so', 'soft', 'spiral', 'storm', 'stormy', 'the', 'the', 'the', 'there', 'think', 'this', 'this', 'this', 'thrive', 'through', 'time', 'to', 'to', 'today', 'together', 'tomorrow', 'tomorrow', 'tornado', 'troubled', 'try', 'turbulent', 'violent', 'was', 'was', 'we', 'week', 'were', 'were', 'whisper', 'will', 'will', 'will', 'wish', 'with', 'wonder', 'world', 'worthy', 'would', 'would', 'wrap', 'year', 'yes', 'yesterday', 'you', 'you', 'your' ];
var snowSet = ['!', '"', '"', ',', '.', '?', 'I', 'I', 'a', 'a', 'always', 'am', 'an', 'and', 'angel', 'are', 'around', 'as', 'away', 'baby', 'back', 'ball', 'be', 'beautiful', 'blank', 'blush', 'board', 'boy', 'build', 'bundle', 'but', 'can', 'can', 'can\'t', 'chill', 'chill', 'chocolate', 'clean', 'cold', 'come', 'cone', 'could', 'covers', 'cuddle', 'dirty', 'do', 'don\'t', 'dust', 'eat', 'ed', 'es', 'escape', 'everyone', 'except', 'fall', 'flake', 'flurry', 'flush', 'for', 'forever', 'freeze', 'freezer', 'fridge', 'frost', 'frozen', 'girl', 'globe', 'go', 'grace', 'happy', 'harmony', 'holiday', 'holy', 'horse', 'hot', 'icicle', 'icy', 'in', 'in', 'indoors', 'innocent', 'inside', 'is', 'isolate', 'it', 'keep', 'kiss', 'land', 'let\s', 'make', 'man', 'me', 'melt', 'mine', 'my', 'never', 'night', 'nose', 'not', 'not', 'on', 'outside', 'peace', 'play', 'powder', 'preserve', 'protect', 'pure', 'quiet', 'red', 'roll', 's', 'shiver', 'should', 'silence', 'sleet', 'slip', 'slow', 'snow', 'snowflake', 'soft', 'sometimes', 'special', 'stain', 'stardust', 'stay', 'sugar', 'sun', 'taint', 'they', 'time', 'to', 'today', 'together', 'tomorrow', 'tongue', 'un', 'under', 'unique', 'want', 'we', 'wet', 'white', 'white', 'will', 'wings', 'winter', 'woman', 'wonderland', 'would', 'wrestle', 'yellow', 'yesterday', 'you', 'your', 'yours'];

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
    words = clearSet;
    document.body.style.background = '#d0e4eb';
  }
  // if storm
  else if (conditions.toLowerCase().indexOf("storm") !== -1) {
    words = stormSet;
    document.body.style.background = '#2b6578';
  }
  // if rain or drizzle
  else if (conditions.toLowerCase().indexOf("rain") !== -1 | conditions.toLowerCase().indexOf("drizzle") !== -1 |
           conditions.toLowerCase().indexOf("haze") !== -1 ) {
    words = rainSet;
    document.body.style.background = '#7ab4c7';
  }
  // if snow or sleet
  else if (conditions.toLowerCase().indexOf("snow") !== -1 | conditions.toLowerCase().indexOf("sleet") !== -1) {
    words = snowSet;
    document.body.style.background = '#f4f4f4';
  }
  else {
    words = ['no', 'weather', 'info', 'found'].concat(clearSet);
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



