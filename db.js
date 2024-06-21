const mysql = require('mysql2');
 

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  pass: root,
  database: 'mydata'
});
 
connection.query(
  'SELECT * FROM `table',
  function(err, results, fields) {
    console.log(results);
    console.log(fields); 
  }
);