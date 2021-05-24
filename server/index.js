/* global process:false */
const cors = require('cors')
const serverless = require('serverless-http');
const express = require('express');
var routes = require('./api.js');
const config = require('./config/server.json')
const app = express();

const APIRoot = config.BASE_URL[process.env.NODE_ENV || 'development']

app.use(cors({credentials: true, origin: {APIRoot}}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.post('/login', routes.login);
app.get('/leaderboard', routes.getLeaderboard);


// comment out line below for lambda deployment
app.listen(3000, () => console.log(`Listening on: 3000`));
// module.exports.handler = serverless(app);
