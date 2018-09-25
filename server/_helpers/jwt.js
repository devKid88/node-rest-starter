const expressJwt = require('express-jwt');
const keys = require('../../config/keys');
const userService = require('../user/user.service');

async function isRevoked(req, payload, done) {
  const user = await userService.getById(payload.sub);

  // revoke token if user no longer exists
  if (!user) {
    return done(null, true);
  }

  return done();
}

function jwt() {
  const { secret } = keys;
  return expressJwt({ secret, isRevoked }).unless({
    path: [
      // public routes that don't require authentication
      '/api/users/authenticate',
      '/api/users/register',
    ],
  });
}

module.exports = jwt;
