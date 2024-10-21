### amorcitosserver

## run in dev

SERVER:

in root folder:

npm run dev

has portal front end there in src/public

PORTAL FRONT:

in portalclient folder:

npm start

## build dev server

in root folder:

npm run build

## deploy to prod

is built to dist, can upload from there to server
remember to upload these three:
1. index.js
2. public folder from dist
3. package.json (to root)

then in server run npm install and restart server (not sure, if restart needed)

## build portal client

in portalclient folder: npm run build

builds to portalclient/build and also ./src/public, where it is served to test server.
remember to build also in server, to get that to prod

## server dev mode
open XAMPP and start server, should be at port 3306