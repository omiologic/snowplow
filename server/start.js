'use strict';

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const {resolve} = require('path');
const PrettyError = require('pretty-error');
const finalHandler = require('finalhandler');

// PrettyError docs: https://www.npmjs.com/package/pretty-error

// Bones has a symlink from node_modules/APP to the root of the app.
// That means that we can require paths relative to the app root by
// saying require('APP/whatever').

// This next line requires our root index.js:
const pkg = require('APP');

const app = express();

if (!pkg.isProduction && !pkg.isTesting) {
    // Logging middleware (dev only)
  app.use(require('volleyball'));
}

// Pretty error prints errors all pretty.
const prettyError = new PrettyError;

// Skip events.js and http.js and similar core node files.
prettyError.skipNodeFiles();

// Skip all the trace lines about express' core and sub-modules.
prettyError.skipPackage('express');

module.exports = app
// Session middleware - compared to express-session (which is what's used in the Auther workshop), cookie-session stores sessions in a cookie, rather than some other type of session store.
// Cookie-session docs: https://www.npmjs.com/package/cookie-session
    .use(require('cookie-session')({
      name: 'session',
      keys: [process.env.SESSION_SECRET || 'an insecure secret key'],
    }))

    // Body parsing middleware
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())

    // Serve static files from ../public
    .use(express.static(resolve(__dirname, '..', 'public')))

    // any requests with an extension (.js, .css, etc.) turn into 404
    .use((req, res, next) => {
      if (path.extname(req.path).length) {
        const err = new Error('Not found');
        err.status = 404;
        next(err);
      } else {
        next();
      }
    })

    // Send index.html for anything else.
    .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')))

    // Error middleware interceptor, delegates to same handler Express uses.
    // https://github.com/expressjs/express/blob/master/lib/application.js#L162
    // https://github.com/pillarjs/finalhandler/blob/master/index.js#L172
    .use((err, req, res) => {
      console.error(prettyError.render(err));
      finalHandler(req, res)(err);
    });

if (module === require.main) {
    // Start listening only if we're the main module.
    //
    // https://nodejs.org/api/modules.html#modules_accessing_the_main_module
  const server = app.listen(
        pkg.port,
        () => {
          console.log(`--- Started HTTP Server for ${pkg.name} ---`);
          const { address, port } = server.address();
          const host = address === '::' ? 'localhost' : address;
          const urlSafeHost = host.includes(':') ? `[${host}]` : host;
          console.log(`Listening on http://${urlSafeHost}:${port}`);
        }
    );
}
