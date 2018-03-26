var expressSession = require('express-session');
var mongoStore = require('connect-mongodb-session')(expressSession); // ties our sessions into our current mongo db (this is one option: could also set up session storage in a separate server -- redis, etc.)
var store = new mongoStore({
  uri: '',
  collection: 'Sessions'
})
store.on('error', function(err) {
  console.log('[SESSION ERROR]', err)
})
var session = expressSession({
  secret: "ShHhHhH It'S a SeCrEtT",
  cookie: {
    maxAge: 1000*60*60*24*7*52 // number of milliseconds in one year    
  },
  store,
  resave: true,
  saveUninitialized: true
})
module.exports = session;