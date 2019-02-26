const OAuth2Server = require('oauth2-server');
const Request = OAuth2Server.Request;
const Response = OAuth2Server.Response;

const oauth = new OAuth2Server({
  model: require('./model')
});

let request = new Request({
  method: 'GET',
  query: {},
  headers: {Authorization: 'Bearer foobar'}
});

let response = new Response({
  headers: {}
});

oauth.authenticate(request, response)
  .then((token) => {
    console.log('The request was successfully authenticated.', token);
  })
  .catch((err) => {
    console.log('The request failed authentication.', err);
  });
