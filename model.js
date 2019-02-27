const model = {
  getAccessToken: function() {
    return {
      accessTokenExpiresAt: new Date(Date.now() + 1 * 60 * 60 * 1000),
      user: {
        name: 'works!'
      }
    };
  },

  getAuthorizationCode: function() {
    return 'works!';
  },
  /*
  getClient: function() {
  },

  getUser: function() {
  }
  */
};

module.exports = new Proxy(model, {
  get: (target, prop, receiver) => {
    return (...argumentsList) => {
      console.log(prop, argumentsList, '...');
      const res = target[prop](...argumentsList);
      console.log('=>', { res });
      return res;
    };
  },
});
