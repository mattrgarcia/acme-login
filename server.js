const express = require('express');
const app = express();
const db = require('./db');
const path = require('path');
const port = process.env.PORT || 3000
//const {syncAndSeed, User} = db;


db.syncAndSeed()
  .then(()=>{app.listen(port,console.log(`listening on port ${port}`))})


