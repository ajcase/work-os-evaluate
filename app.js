require('dotenv').config();
var express = require('express');
var app = express();

const { WorkOS } = require('@workos-inc/node');

const workos = new WorkOS(process.env.WORKOS_API_KEY);
const clientID = process.env.WORKOS_CLIENT_ID;

app.get('/auth', (_req, res) => {
  // A WorkOS Connection ID
  const connection = 'conn_01GM9TM80GBWGSAG36M6P0SDYH';

  // The callback URI WorkOS should redirect to after the authentication
  const redirectURI = 'http://localhost:3000/callback';

  const authorizationUrl = workos.sso.getAuthorizationURL({
    connection,
    clientID,
    redirectURI,
  });

  res.redirect(authorizationUrl);
});

app.get('/callback', async (req, res) => {
  const { code } = req.query;

  const { profile } = await workos.sso.getProfileAndToken({
    code,
    clientID,
  });
  console.log(profile);

  // Use the information in `profile` for further business logic.
  res.send(`This is a private page, but ${profile.first_name} is allowed.`);
});

app.get('/', function (req, res) {
  res.send('Hello World! Navigate to /auth to log in');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
