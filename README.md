# Open DIS for Javascript

<span class="badge-npmversion"><a href="https://npmjs.org/package/open-dis" title="View this project on NPM"><img src="https://img.shields.io/npm/v/open-dis.svg" alt="NPM version" /></a></span>

## Introduction

A Javascript implementation of DIS that decodes IEEE 1278.1
binary data format messages and turns them into Javascript
objects.

This library is intended to be used on the client side with
the websocket receiving data. The web socket hands off an
event message with binary data attached, and the javascript
library decodes it and turns it into a javascript object.

The code also includes some simple coordinate system transforms
to change DIS world coordinates to (lat, lon, alt) or to a
position in a local tanget plane coordinate system.

## Build

To generate a single `dis6.min.js` and `dis7.min.js` from the source files, run the following command:

`$ npm install`

## Types

To generate the types of DIS 6 for Typescript, run the following command:

`$ npm run types`

# Release

Releases are published to http://npmjs.com/package/open-dis

1. `$ npm login`
1. `$ npm version <version-to-be-released>`
1. `$ npm publish`
1. `$ git push`
1. `$ git push --tags`
1. Draft a new GitHub Release for this tag.

## Examples

Example code using this library for sending and receiving DIS packets with Node.js can be found here: https://github.com/keckxde/node-disnetworkclient 
