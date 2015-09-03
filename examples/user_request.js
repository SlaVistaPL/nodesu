var OsuApi = require('../lib/index.js');

var osu = new OsuApi({
  apiKey: 'your_api_key_here'
});

// Showcase getUser
osu.getUser(osu.user.byUsername("Nexerq"), function(err, response) {
  if (err) {
    return console.log (err);
  }

  console.log("Get user request:");
  console.log("Raw output:");
  console.log(JSON.stringify(response) + "\n");
  console.log("Parsed response:");
  var parseResp = "Name: " + response.username + "\nRank: " + response.pp_rank + "\nCountry: " + response.country + "\n";
  console.log(parseResp);
  return getBest();
});

// For the below, we actually cannot get the beatmap name/artist, as the API only responds with the ID. This would be another call.
// You can implement that in your own project, but this is only an example.

// Showcase getUserBest
function getBest () {
  osu.getUserBest(osu.user.byUsername("Nexerq"), osu.mode.default, function(err, response) { // PLEASE be mindful that osu.mode.default can be used as .all as it just = null. Default looks better for convenience here as this api call does NOT get all modes, default is standard.
    if (err) {
      return console.log (err);
    }

    console.log("Get user best request:");
    console.log("Raw output:");
    console.log(JSON.stringify(response) + "\n");
    console.log("Parsed response:");
    console.log("Best score: " + response[0].score + "\nPP gained: " + response[0].pp + "\n");
    return getRecent();
  });
}

// Showcase getUserRecent (pretty much same as above ;D)
function getRecent() {
    osu.getUserRecent(osu.user.byUsername("Nexerq"), osu.mode.default, function(err, response) { // Same reason as above as to why we use default over all for formatting
    if (err) {
      return console.log (err);
    }

    console.log("Get user recent request:");
    console.log("Raw output:");
    console.log(JSON.stringify(response) + "\n");
    console.log("Parsed response:");
    console.log("Most recent beatmap score: " + response.score + "\nPlay rank achiveved: " + response.rank);
    return getRecent();
  });
}