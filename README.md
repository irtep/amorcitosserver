### amorcitosserver

sitten iz nelosesta oma ja portal uista oma ja molemmat
buildataan serverille ja sieltä distiin eri nimillä
https://chatgpt.com/c/671aab52-ba40-8006-95e2-73428b609da1

## run in dev

open XAMPP and start all, should be at port 3306, you get dev database then

in server folder:

npm run dev

has UI there in server/src/public

## test built server

in server folder:

npm start

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

## clients (user interfaces)

to run in dev mode go to portal_ui or iz4_ui folder and npm start.

to build:

"npm run build" in portal_ui or iz4_ui directory, depending which you need.

note, that in index.ts you need to have <BrowserRouter>, if you run it in dev on its own, but before you build, change it to <BrowserRouter basename="/iz4"> or it will not work in node server

then go to root and "node build_ui_and_deploy.js" this copies both built ui's to relevant directories, in server directory, to both src and dist publics

## test accounts for iz4 dev:
petetest:test
testi2:test12
