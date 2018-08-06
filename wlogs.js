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
request.onload = function() {
    var blizzData = request.response;
    populate(blizzData);
}

// Use the data to populate the element (or whatever you want to do with it)

// Create a function for this!!
function populate(jsonObj) {
    var perf1 = 0;
    var para1 = document.createElement('p');
    for (var i=0; i<jsonObj.length; i++) {
        if ((jsonObj[i].encounterName == "Garothi Worldbreaker") && (jsonObj[i].difficulty == 5)) {
            if (jsonObj[i].percentile > perf1) {
                perf1 = jsonObj[i].percentile;
            }

        }
    }
    para1.textContent = "Garothi Worldbreaker: " + perf1;
    dumpDiv.appendChild(para1);

    var perf2 = 0;
    var para2 = document.createElement('p');
    for (var i=0; i<jsonObj.length; i++) {
        if ((jsonObj[i].encounterName == "Felhounds of Sargeras") && (jsonObj[i].difficulty == 5)) {
            if (jsonObj[i].percentile > perf2) {
                perf2 = jsonObj[i].percentile;
            }

        }
    }
    para2.textContent = "Felhounds of Sargeras: " + perf2;
    dumpDiv.appendChild(para2);

    var perf3 = 0;
    var para3 = document.createElement('p');
    for (var i=0; i<jsonObj.length; i++) {
        if ((jsonObj[i].encounterName == "Antoran High Command") && (jsonObj[i].difficulty == 5)) {
            if (jsonObj[i].percentile > perf3) {
                perf3 = jsonObj[i].percentile;
            }

        }
    }
    para3.textContent = "Antoran High Command: " + perf3;
    dumpDiv.appendChild(para3);

    var perf4 = 0;
    var para4 = document.createElement('p');
    for (var i=0; i<jsonObj.length; i++) {
        if ((jsonObj[i].encounterName == "Portal Keeper Hasabel") && (jsonObj[i].difficulty == 5)) {
            if (jsonObj[i].percentile > perf4) {
                perf4 = jsonObj[i].percentile;
            }

        }
    }
    para4.textContent = "Portal Keeper Hasabel: " + perf4;
    dumpDiv.appendChild(para4);

    var perf5 = 0;
    var para5 = document.createElement('p');
    for (var i=0; i<jsonObj.length; i++) {
        if ((jsonObj[i].encounterName == "The Defense of Eonar") && (jsonObj[i].difficulty == 5)) {
            if (jsonObj[i].percentile > perf5) {
                perf5 = jsonObj[i].percentile;
            }

        }
    }
    para5.textContent = "The Defense of Eonar: " + perf5;
    dumpDiv.appendChild(para5);

    var perf6 = 0;
    var para6 = document.createElement('p');
    for (var i=0; i<jsonObj.length; i++) {
        if ((jsonObj[i].encounterName == "Imonar the Soulhunter") && (jsonObj[i].difficulty == 5)) {
            if (jsonObj[i].percentile > perf6) {
                perf6 = jsonObj[i].percentile;
            }

        }
    }
    para6.textContent = "Imonar the Soulhunter: " + perf6;
    dumpDiv.appendChild(para6);

    var perf7 = 0;
    var para7 = document.createElement('p');
    for (var i=0; i<jsonObj.length; i++) {
        if ((jsonObj[i].encounterName == "Kin'garoth") && (jsonObj[i].difficulty == 5)) {
            if (jsonObj[i].percentile > perf7) {
                perf7 = jsonObj[i].percentile;
            }

        }
    }
    para7.textContent = "Kin'garoth: " + perf7;
    dumpDiv.appendChild(para7);

    var perf8 = 0;
    var para8 = document.createElement('p');
    for (var i=0; i<jsonObj.length; i++) {
        if ((jsonObj[i].encounterName == "Varimathras") && (jsonObj[i].difficulty == 5)) {
            if (jsonObj[i].percentile > perf8) {
                perf8 = jsonObj[i].percentile;
            }

        }
    }
    para8.textContent = "Varimathras: " + perf8;
    dumpDiv.appendChild(para8);

    var perf9 = 0;
    var para9 = document.createElement('p');
    for (var i=0; i<jsonObj.length; i++) {
        if ((jsonObj[i].encounterName == "The Coven of Shivarra") && (jsonObj[i].difficulty == 5)) {
            if (jsonObj[i].percentile > perf9) {
                perf9 = jsonObj[i].percentile;
            }

        }
    }
    para9.textContent = "The Coven of Shivarra: " + perf9;
    dumpDiv.appendChild(para9);

    var perf10 = 0;
    var para10 = document.createElement('p');
    for (var i=0; i<jsonObj.length; i++) {
        if ((jsonObj[i].encounterName == "Aggramar") && (jsonObj[i].difficulty == 5)) {
            if (jsonObj[i].percentile > perf10) {
                perf10 = jsonObj[i].percentile;
            }

        }
    }
    para10.textContent = "Aggramar: " + perf10;
    dumpDiv.appendChild(para10);

    var perf11 = 0;
    var para11 = document.createElement('p');
    for (var i=0; i<jsonObj.length; i++) {
        if ((jsonObj[i].encounterName == "Argus the Unmaker") && (jsonObj[i].difficulty == 5)) {
            if (jsonObj[i].percentile > perf11) {
                perf11 = jsonObj[i].percentile;
            }

        }
    }
    para11.textContent = "Argus the Unmaker: " + perf11;
    dumpDiv.appendChild(para11);

    var total = document.createElement('h3');
    var avgperf = (perf1 + perf2 + perf3 + perf4 + perf5 + perf6 + perf7 + perf8 + perf9 + perf10 + perf11)/11;
    total.textContent = avgperf;
    dumpPic.appendChild(total);
}

// function populate(jsonObj) {
//     var bosses = ["Garothi Worldbreaker", "Felhounds of Sargeras", "Antoran High Command", "The Defense of Eonar", "Portal Keeper Hasabel", "Imonar the Soulhunter", "Kin'garoth", "Varimathras", "The Coven of Shivarra", "Aggramar", "Argus the Unmaker"];
//     var perf = 0;
//     var x = 0;
//     for (var i=0; i<jsonObj.length; i++) {
//         if ((jsonObj[i].encounterName == bosses[x]) && (jsonObj[i].difficulty == 5)) {
//             if (jsonObj[i].percentile > perf) {
//                 perf = jsonObj[i].percentile;
//                 var para = document.createElement('p');
//                 para.textContent = bosses[x] + ": " + perf;
//                 dumpDiv.appendChild(para);
//                 perf = 0;
//                 if (x < bosses.length) {
//                     x++;
//                 }
//             }  
//         }
//     }
// }