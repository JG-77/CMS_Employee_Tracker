const mysql = require('mysql'); 
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: 'localhost',

 
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: 'Je$ter7798$code',
  database: '',
});