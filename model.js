const model = {
  // We support returning promises.
  getAccessToken: async function() {
    return {
      accessTokenExpiresAt: new Date(Date.now() + 1 * 60 * 60 * 1000),
      user: {
        name: 'works!'
      }
    };
  },

  // Or, calling a Node-style callback.
  getAuthorizationCode: function(done) {
    done(null, 'works!');
  },

  // Or, using generators.
  getClient: function*() {
    yield somethingAsync();
    return 'works!';
  },

  // Or, async/wait (using Babel).
  getUser: async function() {
    await somethingAsync();
    return 'works!';
  }
};

const OAuth2Server = require('oauth2-server');
let oauth = new OAuth2Server({model: model});

module.exports = model;
