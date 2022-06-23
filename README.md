# Chat Application Boilerplate

This is a boilerplate for a chat application build with Typescript & Socket.IO. It consists of a client app and a server app that communicates via Websockets.

## Intro

Install and run the project, then open to tabs and test it out by sending some messages!

Read the docs on [Socket.IO](https://socket.io) for a better understanding of how to send and listen for events, how to join and leave rooms, etc.

Checkout the [comms](./comms.ts) file, that's where you define the communcation events between the client and server.

## Usage with a frontend framework

The client app is a bare typescript project without any framework/libraries. If you'd rather code in React/Vue/Svelt then create a new project with `npm init vite@latest` and remove the old client project.

Just remember to add the proxy setting found in `vite.config.js` to the new project. Also the new project folder must have the same name `client` in order for the configured npm scripts to work.

## Install & Run

Will run both client and server in parallel (not optimal for output)

1. `npm install`
2. `npm start`

### Installation in two tabs

Open two terminals and run the following commands

1. `npm run client-install`
2. `npm run server-install`

### Run project in two tabs

Open two terminals and run the following commands

1. `npm run client`
2. `npm run server`

### Remove node_modules

Run the follow command to remove all three node_modules folders

- `npm run rm-node-modules`.
