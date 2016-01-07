This example demonstrates how to use [Express](http://expressjs.com/) 4.x and
[Passport](http://passportjs.org/) to authenticate users via OAuth 2.0.  Use
this example as a starting point for your own web applications.

Note that OAuth 2.0 does not define a standard way to represent user profile
information.  This particular strategy uses the schema from OpenID Connect's
UserInfo endpoint, to overcome that limitation.

## Instructions

To install this example on your computer, clone the repository and install
dependencies.

```bash
$ git clone git@github.com:passport/express-4.x-oauth2-userinfo-example.git
$ cd express-4.x-oauth2-userinfo-example
$ npm install
```

The example uses environment variables to configure the client ID and
client secret needed to access the OAuth 2.0 protected API.  Start the server
with those variables set to the appropriate credentials.

```bash
$ CLIENT_ID=__OAUTH2_CLIENT_ID__ CLIENT_SECRET=__OAUTH2_CLIENT_SECRET__ node server.js
```

Open a web browser and navigate to [http://localhost:3000/](http://localhost:3000/)
to see the example in action.
