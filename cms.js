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

//initial inquirer prompt function
function start() {
  inquirer.prompt([
    {
    type: 'list', 
    name: 'choice',
    message: "What would you like to do?",
    choices: ['View all employees', 'View all employees by department', 'View all employees by manager', 'Add employee', 'Add department', 'Add role', 'Update employee role', 'QUIT'] 
    },
  ]).then(response => {
    if(response.choice === 'View all employees') {               
      viewAllEmp();
    } else if(response.choice === 'View all employees by department') {               
      viewEmployeeByDept(); 
    } else if(response.choice === 'View all employees by manager') {               
      viewEmployeeByMan(); 
    } else if(response.choice === 'Add employee') {               
      addEmployee(); 
    } else if(response.choice === 'Add department') {               
      addDeptartment(); 
    } else if(response.choice === 'Add role') {               
      addRole(); 
    } else if(response.choice === 'Update employee role') {               
      updateRole(); 
    }  else if(response.choice === 'QUIT') {               
      connection.end(); 
    }
  })
};

function viewAllEmp() {
  inquirer.prompt([

  ])
};

function viewEmployeeByDept() {
  inquirer.prompt([

  ])
};

function viewEmployeeByMan() {
  inquirer.prompt([

  ])
};

function addEmployee() {
  inquirer.prompt([

  ])
};

function addDeptartment() {
  inquirer.prompt([

  ])
};

function addRole() {
  inquirer.prompt([

  ])
};

function updateRole() {
  inquirer.prompt([

  ])
};

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  start();
});
