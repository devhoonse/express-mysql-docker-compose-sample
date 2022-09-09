import express from 'express';
import mysql from 'mysql';


const connection = mysql.createConnection({
  host     : process.env.DB_HOST || 'localhost',
  port     : 3306,
  user     : 'svc_express',
  password : 'password',
  database : 'db_express'
});
// connection.connect();


const app = express();


app.get('/', (req, res) => {
  connection.query('SELECT 1 + 1 AS solution from dual', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
    res.json(results);
  });
});


app.listen(4000, function () {
  console.log('Server is Running on Port : ', 4000);
});
