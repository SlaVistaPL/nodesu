var extend = require('xtend'); // Use simple extend module because I'm lazy to write my own

function OsuApi (options) {
  // Bunch of default settings
  var settings = {
    apiUri: 'https://osu.ppy.sh/api',
    apiKey: null
  };

  // "Extend" the user's ones in
  settings = extend(settings, options);

  this.settings = settings;
}

OsuApi.prototype.request = function(endpoint, params, cb) {
  return require('./api/request.js')(this, endpoint, params, cb);
};

OsuApi.prototype.modes = require('./api/modes.js');

OsuApi.prototype.beatmap = require('./api/beatmap/beatmap.js');

OsuApi.prototype.beatmaps = function(object, mode, cb) {
  return require('./api/beatmap/get_beatmaps.js')(this, object, mode, cb);
};

module.exports = OsuApi;