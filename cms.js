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

function start() {
  inquirer.prompt([
    {
    type: 'list', 
    name: 'choice',
    message: "What would you like to do?",
    choices: ['View all employees', 'View all employees by department', 'View all employees by manager', 'Add employee', 'Add department', 'Add role', 'Update employee role', 'QUIT'] 
    },
  ]).then(response => {console.log(response)}).catch(err => {console.error(err)})
};

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  start();
});


//connection.end(); // move to end of prompt function