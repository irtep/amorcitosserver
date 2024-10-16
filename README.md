### amorcitosserver

## run in dev
npm run dev
(scr)

## build server
npm run build
is built to dist, can upload from there to server
remember to upload:
1. index.js
2. public folder from dist
3. package.json (to root)
then in server run npm install and restart server (not sure, if restart needed)

## build portal client
in portalclient: npm run build
builds to portalclient/build and also ./src/public, where it is served to test server