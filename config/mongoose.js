
//import the library or require the library
const mongoose = require('mongoose')
//import mongoose from 'mongoose';

//connect to database
mongoose.connect('mongodb://localhost/contacts_list_db');

//acquire the conection
const db = mongoose.connection;

//error
db.on('error', console.error.bind(console, 'error connecting to db'));

//up and running
db.once('open', function(){
  console.log('Successfully connected to db');
});