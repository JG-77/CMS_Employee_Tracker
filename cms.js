const mysql = require('mysql'); 
const inquirer = require('inquirer');


const connection = mysql.createConnection({
  host: 'localhost',

  port: 3306,

  user: 'root',

  // MySQL password and database
  password: 'Je$ter7798$code',
  database: 'employee_DB',
});


connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  start();
});


//connection.end(); // move to end of prompt function