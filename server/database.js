const mongoose = require('mongoose');

const { MONGODB_HOST, MONGODB_DB } = process.env;
const MONGODB_URI = `mongodb://${MONGODB_HOST}/${MONGODB_DB}`;

mongoose.connect(MONGODB_URI, {

}) .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));