# React Starter

Simple starter for react, using gulp and and webpack.

## Requirements

* webpack ```npm install -g webpack```
* bower ```npm install -g bower```
* gulp ```npm install -g gulp```
* mocha ```npm install -g mocha```

## Contains

* React
* Sass support
* Bootstrap Sass
* jQuery
* gulp

## Available gulp task

Shorcut
* ```gulp build``` build the production bundle
* ```gulp build-dev``` build the development bundle and refresh it on every change in app directory
* ```gulp server``` run a simple server on dist directory
* ```gulp dev``` run test for a single run

Webpack
* ```gulp webpack:build``` build the production bundle
* ```gulp webpack:build-dev``` build the development bundle with source map
* ```gulp webpack-dev-server``` start an instance of webpack-dev-server

Mocha
* ```gulp mocha:single``` run test for a single run
* ```gulp mocha:watch``` run test when files change
