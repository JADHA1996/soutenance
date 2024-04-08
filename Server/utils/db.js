const mysql = require ("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1111",
  database: "employeems",
});

con.connect(function (err) {
  if (err) {
    console.log("erreur de connexion");
  } else {
    console.log("Connecté");
  }
});

module.exports = con