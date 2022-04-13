# todos-express-oauth2-userinfo

This app illustrates how to use [Passport](https://www.passportjs.org/) with
[Express](https://expressjs.com/) to sign users in via OAuth 2.0.  Use this
example as a starting point for your own web applications.

## Quick Start

To run this app, clone the repository and install dependencies:

```bash
$ git clone https://github.com/passport/todos-express-oauth2-userinfo.git
$ cd todos-express-oauth2-userinfo
$ npm install
```

This app must be configured with an OAuth 2.0 authorization server (AS)'s
endpoints, as well as a client ID and secret that has been issued by the AS.

The endpoints should be set as options to `OAuth2UserInfoStrategy` in
[routes/auth.js](https://github.com/passport/todos-express-oauth2-userinfo/blob/master/routes/auth.js#L7-L9).

Once the client ID and secret have been obtained, create a `.env` file and add
the following environment variables:

```
CLIENT_ID=__INSERT_CLIENT_ID_HERE__
CLIENT_SECRET=__INSERT_CLIENT_SECRET_HERE__
```

Start the server.

```bash
$ npm start
```

Navigate to [`http://localhost:3000`](http://localhost:3000).

## Overview

This example illustrates how to use Passport and the [`passport-oauth2-userinfo`](https://github.com/jaredhanson/passport-oauth2-userinfo)
strategy within an Express application to sign users in via OAuth 2.0.  Note
that OAuth 2.0 does not define a standard way to represent user profile
information.  This particular strategy uses the schema from OpenID Connect's
UserInfo endpoint to overcome that limitation.

This app implements the features of a typical [TodoMVC](https://todomvc.com/)
app, and adds sign in functionality.  This app is a traditional web application,
in which all application logic and data persistence is handled on the server.

User interaction is performed via HTML pages and forms, which are rendered via
[EJS](https://ejs.co/) templates and styled with vanilla CSS.  Data is stored in
and queried from a [SQLite](https://www.sqlite.org/) database.

After users sign in, a login session is established and maintained between the
server and the browser with a cookie.  As authenticated users interact with the
app, creating and editing todo items, the login state is restored by
authenticating the session.

## License

[The Unlicense](https://opensource.org/licenses/unlicense)

## Credit

Created by [Jared Hanson](https://www.jaredhanson.me/)
