var OsuApi = require('../lib/index.js');

var osu = new OsuApi({
  apiKey: 'your_api_key_here'
});

osu.request('/get_user', {u: "Nexerq"}, function(err, response) {
  if (!err) {
    console.log(response);
    return;
  }
  return console.log(err);
});
