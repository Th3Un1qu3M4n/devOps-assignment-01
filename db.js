const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host     : process.env.RDS_HOSTNAME,
//   user     : process.env.RDS_USERNAME,
//   password : process.env.RDS_PASSWORD,
//   port     : process.env.RDS_PORT,
//   database  : process.env.RDS_DB_NAME,
//   // database: 'user'
// });
const connection = mysql.createConnection({
  host     : "awseb-e-tnwmbwpxxz-stack-awsebrdsdatabase-yly8cpd12ipi.cz3120lb214m.us-west-2.rds.amazonaws.com",
  user     : "th3un1qu3m4n",
  password : "mySecretPassword_41",
  port     : 3306,
  database  : 'user',

});
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'th3un1qu3m4n',
//   password: 'mySecretPassword_41',
//   database: 'user'
// });

module.exports = connection;