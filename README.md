# mcmurtry-website-2.0
Redesigned McMurtry Website from scratch.

## Important Notes
If you are working on the client, and need a node module not normally included make sure to use `npm install <module_name> --save` inside the `client` directory. Otherwise, the module will be add to the node modules of the backend server (not what you want).

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