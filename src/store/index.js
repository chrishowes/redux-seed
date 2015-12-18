if (__PRODUCTION__) {
  module.exports = require('./production.js');
} else {
  module.exports = require('./development.js');
}