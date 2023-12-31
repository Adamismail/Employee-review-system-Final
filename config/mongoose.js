const mongoose = require('mongoose');

const DB = 'mongodb://0.0.0.0:27017/ERS';

mongoose.connect(DB).then(()=>{
    console.log('connection successful');
}).catch((err)=> console.log("no connection "+ err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to MongoDB ');
});

module.exports = db;