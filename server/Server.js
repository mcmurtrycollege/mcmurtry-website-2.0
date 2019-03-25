/*
 * This is the backend API.
 * Later we can add better modules like body parsers and such
 * to further improve the backend.
 * Right now, this is all we need, which isn't much. 
 */


const express = require('express');

const app = express();

// Default Response.
app.get("/", (req, res) => {
  res.send("Connect on port 3000 for React Client.");
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);

// Add maybe a command line interface later.
console.log("McMurtry Website 2.0!");