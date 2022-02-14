//* EXPRESS APP SETUP */
const express = require('express');

require('dotenv').config();

const app = require('express')();
const PORT = process.env.PORT || 3000;

//* NEXT APP SETUP */
const next = require('next');
//! Check for development vs. production
const dev = process.env.NODE_ENV !== 'production';
//! There's a giant error warning that pops up when you're in development
const nextApp = next({ dev });
//! This is a built-in next router that'll handle ALL of the request made to the server
const handler = nextApp.getRequestHandler();

//* MIDDLEWARES */ 
app.use(express.json());

nextApp.prepare().then(() => {
  app.all('*', (req, res) => handler(req, res))
  app.listen(PORT, (err) => {
    if (err) console.log(err);
    else console.log(`I'm listening at port ${PORT}!`);
  })
})