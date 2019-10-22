const express = require('express');
const app = express();
const db = require('./db');
const path = require('path');
const port = process.env.PORT || 3000
//const {syncAndSeed, User} = db;

app.use(express.json());
app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res, next)=>{
  res.sendFile(path.join(__dirname, 'index.html'))
})



db.syncAndSeed()
  .then(()=>{app.listen(port,console.log(`listening on port ${port}`))})
