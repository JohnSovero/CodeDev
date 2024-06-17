const mongoose = require('mongoose');

const { MONGODB_HOST, MONGODB_PORT, MONGODB_DB } = process.env;
const MONGODB_URI = `mongodb://${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DB}`;

//const MONGODB_URI = mongodb://20.55.56.229:27017/codedev

mongoose.connect(MONGODB_URI, {

}) .then(db => console.log('DB is connected', db.connection.host))
    .catch(err => console.error(err));