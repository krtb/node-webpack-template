# node-webpack-template

## Overview
- A base template for setting up a working node server, with Webpack.

## Example Usage
- Useful for getting a React app setup
- If using Typescript with Babel
- For API uses alongside non-JavaScript files like GraphQl, SVG, etc.

## Design Goals
- Clear configuration of packages
- Up-to-date dependency tre

## Usage
- `npm install`
  - If Errors due to old package-lock.json, delete and re-install npm.
- `npm start`
  - NPM is Configured to run Webpack for hot-reloading.
- `http://localhost:3000/`
  - App will run on port 3000, though can be changed in server.js file.
  - Will show `hello world!` on browser when successful

## Developer Info
- Will always run on the latest pulic release of Node, and associated dependencies. 
  - Tested on `Node v16.13.0`
- Stack
  - Node
  - Express
  - Webpack
  - Babel




