# Angular6-nodeJS-webapp

There are an Angular6 Application with nodeJS and ExpressJS backend.

NW: for install this workspace you need to have a mysql schema called 'sys' and root user with 'root' password. for custom database you need to modify DB configuration into node-js-restapi/app/config/env.js .

# Installation guide

Download my workspace and lunch 'npm -i' in both project:
$ cd myApp
$ npm -i

afther dependency installation do the same process for node-js-restapi:
$ cd node-js-restapi
$ npm -i

for lunch service server you can use 'node' command:
$ cd node-js-restapi
$ node server.js

for start Angular6 server you can use 'ng serve' command:
$ cd node-js-restapi
$ ng serve --open