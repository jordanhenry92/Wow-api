// Method obtained from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

// Grab variable for where data will be stored
var dumpDiv = document.getElementById('dump');
var dumpPic = document.getElementById('pic');

// Save API url in a variable
var requestURL = 'https://raider.io/api/v1/characters/profile?region=us&realm=illidan&name=dethski&fields=previous_mythic_plus_scores';

// Create a request object
var request = new XMLHttpRequest();

// Open the request object. Takes in the HTTP method 'GET', as well as the url
request.open('GET', requestURL);

// Set the response type to 'json' so it knows the server is sending a JSON object. Then send the request
request.responseType = 'json';
request.send();

// Wait for response to return, then store in a variable (blizzData) that contains the JavaScript object converted from JSON
request.onload = function() {
    var blizzData = request.response;
    populate(blizzData);
}

// Use the data to populate the element (or whatever you want to do with it)
function populate(jsonObj) {
    dumpDiv.innerHTML = jsonObj.name + '<br>' + 'Score: ' + jsonObj.previous_mythic_plus_scores.all;
    var img = new Image();
    img.src = jsonObj.thumbnail_url;
    dumpPic.appendChild(img);
}

