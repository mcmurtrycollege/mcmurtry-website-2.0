# mcmurtry-website-2.0
Redesigned McMurtry Website from scratch.

## Important Notes
If you are working on the client, and need a node module not normally included make sure to use `npm install <module_name> --save` inside the `client` directory. Otherwise, the module will be added to the node modules of the backend server (not what you want).

Also, please follow the folder structure set up. This can get very disorganized very fast if we are not careful. 

All __CSS__ files should go in `client/componentStyles`.

All large __React Components__ (like full page templates) should be placed in `client/displays`. 

All smaller __React Components__ should be placed in `client/displays/components`.

Follow the quick start below to get going!

## Quick Start

``` bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

### License

This project is licensed under the MIT License