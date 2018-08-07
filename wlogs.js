// Method obtained from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

// Grab variable for where data will be stored
var dumpDiv = document.getElementById('dump');
var dumpPic = document.getElementById('pic');

// Save API url in a variable
var requestURL = 'https://www.warcraftlogs.com:443/v1/parses/character/blowski/illidan/US?metric=dps&partition=1&timeframe=historical&api_key=ec36e9ac4fc71b402db77295aa8a7a94';

// Create a request object
var request = new XMLHttpRequest();

// Open the request object. Takes in the HTTP method 'GET', as well as the url
request.open('GET', requestURL);

// Set the response type to 'json' so it knows the server is sending a JSON object. Then send the request
request.responseType = 'json';
request.send();

// Wait for response to return, then store in a variable (blizzData) that contains the JavaScript object converted from JSON
// request.onload = function() {
//     var blizzData = request.response;
//     populate(blizzData);
// }

// Use the data to populate the element (or whatever you want to do with it)

// Create a function for this!!



var bosses = ["Garothi Worldbreaker", "Felhounds of Sargeras", "Antoran High Command", "The Defense of Eonar", "Portal Keeper Hasabel", "Imonar the Soulhunter", "Kin'garoth", "Varimathras", "The Coven of Shivarra", "Aggramar", "Argus the Unmaker"];
var bossCount = 0;
var bossTotal = 0;

request.onload = function() {
    var blizzData = request.response;
    for (var i = 0; i<bosses.length; i++) {
        perfPercentile(blizzData, bosses[i])
    }
    dumpPic.innerHTML = "Best perf. avg: " + (bossTotal/bossCount);
}

function perfPercentile(jsonObj, bossName) {
    var perf = 0;
    var para = document.createElement('p');
    for (var i=0; i<jsonObj.length; i++) {
        if ((jsonObj[i].encounterName == bossName) && (jsonObj[i].difficulty == 5)) {
            if (jsonObj[i].percentile > perf) {
                perf = jsonObj[i].percentile;
            }

        }
    }
    if (perf > 0) {
        bossTotal += perf;
        bossCount++;
    } else {
        perf = " N/A";
    }
    para.textContent = bossName + ": " + perf;
    dumpDiv.appendChild(para);
}

