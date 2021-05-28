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
  const query = `SELECT employee.id AS ID, employee.first_name AS First_name, employee.last_name AS Last_name, role.title AS Title, department.name AS Department, role.salary AS Salary, CONCAT (manager.Last_name, ', ', manager.First_name) AS Manager
    FROM employee 
    LEFT JOIN role ON employee.role_id = role.id 
    LEFT JOIN department ON role.department_id = department.id
    LEFT JOIN employee manager ON manager.id = employee.manager_id;`;
  connection.query(query, (err, res) => {
    if (err) throw err;
     res.forEach(({ ID, First_name, Last_name, Title, Salary, Manager }) => 
     console.log(`ID: ${ID} || First Name: ${First_name} || Last Name: ${Last_name} || Role Title: ${Title} || Salary: ${Salary} || Manager: ${Manager}`));
    start();
  })
};

function viewEmployeeByDept() {
  connection.query('SELECT * FROM department', (err, results) => {
    if (err) throw err;
    inquirer.prompt([
       {
          name: 'dept',
          type: 'rawlist',
          choices() {
            const deptArray = [];
            results.forEach(({ name }) => {
              deptArray.push(name);
            });
            return deptArray;
          },
          message: 'What Department would you like to view?',
        }
    ])
    .then((response) => {
        let chosendept;
        results.forEach((dept) => {
          if (dept.name === response.dept) {
            chosendept = dept;
            connection.query( `SELECT employee.id AS ID, employee.first_name AS First_name, employee.last_name AS Last_name, role.title AS Title, department.name AS Department, role.salary AS Salary, CONCAT (manager.Last_name, ', ', manager.First_name) AS Manager
              FROM employee 
              LEFT JOIN role ON employee.role_id = role.id 
              LEFT JOIN department ON role.department_id = department.id
              LEFT JOIN employee manager ON manager.id = employee.manager_id
              WHERE department.name !=?;`, 
              [
                {
                name: response.dept,
                },
              ],
              (err, res) => {
            if (err) throw err;
            console.log(res)
            res.forEach(({ ID, First_name, Last_name, Title, Salary, Manager }) => 
            console.log(`ID: ${ID} || First Name: ${First_name} || Last Name: ${Last_name} || Role Title: ${Title} || Salary: ${Salary} || Manager: ${Manager}`));
            start();
            })
          }
        });
    });
  });
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
