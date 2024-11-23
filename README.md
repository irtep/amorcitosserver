### amorcitosserver

check from .ENV which DB you want to use

## run in dev

in server folder:

npm run dev

has UI there in server/src/public

## test built server

in server folder:

npm start

## build dev server

first disable CORS (if enabled) from server/index.ts

in server folder:

npm run build

it builds it to server/dist

## deploy to prod

is built to dist, can upload from there to server
remember to upload these three:

1. index.js
2. public folder from dist (need to delete it first and then upload)
3. other folders from dist, what were updated

if you added some dependencies, you might need to add those to package.json at server

if dependency change, run npm install and restart server (not sure, if restart needed)

## clients (user interfaces)

to run in dev mode go to portal_ui or iz4_ui folder and npm start.

to build:

for iz4_ui:  note, that in index.ts you need to have <BrowserRouter>, if you run it in dev on its own, but before you build, change it to <BrowserRouter basename="/iz4"> or it will not work in node server
Also, at context api (iz4context.tsx), change in line 21, modeOfUse to dev or prod, whichever you need

then to build, first check, that you have modeOfUse 'prod', and BrowserRouter with basename, then
"npm run build" in portal_ui or iz4_ui directory, depending which you need.
and then go to root and "node build_ui_and_deploy.js" this copies both built ui's to relevant directories, in server directory, to both src and dist publics

## test accounts for iz4 dev:
test2:test2
