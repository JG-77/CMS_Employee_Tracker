const mysql = require('mysql'); 
const inquirer = require('inquirer');
const cTable = require('console.table');

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
    }
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
   const query =
    'SELECT * FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN employee manager ON manager.id = employee.manager_id'; //LEFT JOIN employee manager ON manager.id = employee.manager_id
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.log(res)
     res.forEach(({ id, first_name, last_name, title, salary, manager_id }) => 
     console.log(`ID: ${id} || First Name: ${first_name} || Last Name: ${last_name} || Role Title: ${title} || Salary: ${salary} || Manager: ${manager_id}`));
    start();
  })
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
