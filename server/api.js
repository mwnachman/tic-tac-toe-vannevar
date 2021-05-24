const axios = require('axios')
const config = require('./config/server.json')
const mysql = require('mysql')

const aws_config = config['aws-mysql']
aws_config.connectionLimit = 10
aws_config.waitForConnections = true
const con = mysql.createPool(aws_config)


/* -------------------------------------------------- */
/* ------------------- Route Handlers --------------- */
/* -------------------------------------------------- */

function login(req, res) {

}

function logout(req, res) {

}

function getLeaderboard(req, res) {

}

function getUsers(req, res) {
  console.log('blah')
  let query = `
    SELECT *
    FROM User;
  `;
  con.query(query, function(err, rows) {
    if (err) console.error(err);
    else {
      res.json(rows);
    }
  });
  // res.status(500).send({ error: 'Something failed!' })
}

module.exports = {
  login,
  logout,
  getLeaderboard,
  getUsers,
}
