### amorcitosserver

sitten iz nelosesta oma ja portal uista oma ja molemmat
buildataan serverille ja sieltä distiin eri nimillä
https://chatgpt.com/c/671aab52-ba40-8006-95e2-73428b609da1

## run in dev

open XAMPP and start all, should be at port 3306, you get dev database then

in server folder:

npm run dev

has UI there in server/src/public

## build dev server

in root folder:

npm run build

it builds it to server/dist

## deploy to prod

is built to dist, can upload from there to server
remember to upload these three:

1. index.js
2. public folder from dist

if you added some dependencies, you might need to add those to package.json at server

if dependency change, run npm install and restart server (not sure, if restart needed)

## client (user interface)

to run in dev mode go to client folder and npm start.

to build:

delete in server/src/public/static/js all three main.* files, they will be replaced

also, delete in server/dist/public/static/js same three, for same reason.

in client folder: npm run build

builds to client/build and also server/src/public, where it is served to test server.

remember to build also in server, to get that to prod
