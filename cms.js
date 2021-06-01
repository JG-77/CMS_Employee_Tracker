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

// Displays all employees
function viewAllEmp() {
  const query = `SELECT employee.id AS ID, employee.first_name AS First_name, employee.last_name AS Last_name, role.title AS Title, department.name AS Department, role.salary AS Salary, CONCAT (manager.Last_name, ', ', manager.First_name) AS Manager
    FROM employee 
    LEFT JOIN role ON employee.role_id = role.id 
    LEFT JOIN department ON role.department_id = department.id
    LEFT JOIN employee manager ON manager.id = employee.manager_id;`;
  connection.query(query, (err, res) => {
    if (err) throw err;
     res.forEach(({ ID, First_name, Last_name, Department, Title, Salary, Manager }) => 
     console.log(`ID: ${ID} || First Name: ${First_name} || Last Name: ${Last_name} || Department: ${Department} || Title: ${Title} || Salary: ${Salary} || Manager: ${Manager}`));
    start();
  })
};

// Displays employees in specific department
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
              LEFT JOIN role on employee.role_id = role.id 
              LEFT JOIN department on role.department_id = department.id 
              LEFT JOIN employee manager ON manager.id = employee.manager_id
              WHERE department.name=?`, 
                chosendept.name,
              (err, res) => {
            if (err) throw err;
            res.forEach(({ ID, First_name, Last_name, Department, Title, Salary, Manager }) => 
            console.log(`ID: ${ID} || First Name: ${First_name} || Last Name: ${Last_name} || Department: ${Department} || Title: ${Title} || Salary: ${Salary} || Manager: ${Manager}`));
            start();
            })
          }
        });
    });
  });
};

// Displays employees by manager
function viewEmployeeByMan() {
  inquirer.prompt([
    
  ])
};

// Adds new employee
function addEmployee() {
  inquirer.prompt([
    {
    type: 'input', 
    name: 'id',
    message: "What is the employee's ID number?",
    },
    {
    type: 'input', 
    name: 'firstName',
    message: "What is the employee's first name?",
    },
    {
    type: 'input', 
    name: 'lastName',
    message: "What is the employee's last name?",
    },
    {
    type: 'input', 
    name: 'roleid',
    message: "What is the employee's role ID?",
    },
    {
    type: 'input', 
    name: 'managerid',
    message: "What is the employee's manager ID?",
    },
  ])
  .then((response) => {
    const query = connection.query(
    'INSERT INTO employee SET ?',
    {
      id: response.id,
      first_name: response.firstName,
      last_name: response.lastName,
      role_id: response.roleid,
      manager_id: response.managerid,
    },
     (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} New employee added!\n`);
      start(); 
    });
    console.log(query.sql);
  })
};

// Adds new department
function addDeptartment() {
  inquirer.prompt([
    {
    type: 'input', 
    name: 'deptid',
    message: "What is the department's ID number?",
    },
    {
    type: 'input', 
    name: 'deptName',
    message: "What is the department's name?",
    },
  ])
  .then((response) => {
    const query = connection.query(
    'INSERT INTO department SET ?',
    {
      id: response.deptid,
      name: response.deptName,
    },
     (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} New department added!\n`);
      start(); 
    });
    console.log(query.sql);
  })
};

// Adds new role
function addRole() {
  inquirer.prompt([
    {
    type: 'input', 
    name: 'roleid',
    message: "What is the role's ID number?",
    },
    {
    type: 'input', 
    name: 'title',
    message: "What is the role's title?",
    },
    {
    type: 'input', 
    name: 'salary',
    message: "What is the role's salary?",
    },
    {
    type: 'input', 
    name: 'deptid',
    message: "What is the role's department ID number?",
    },
  ])
  .then((response) => {
    const query = connection.query(
    'INSERT INTO role SET ?',
    {
      id: response.roleid,
      title: response.title,
      salary: response.salary,
      department_id: response.deptid,
    },
     (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} New role added!\n`);
      start(); 
    });
    console.log(query.sql);
  })
};

// Updates a specific role for an employee
function updateRole() {
  connection.query(`SELECT *, CONCAT (employee.last_name, ', ', employee.first_name) AS Full_name FROM employee `, (err, results) => {
    if (err) throw err;
    function choices() {
    let employeeArray;
    results.forEach(({Full_name, id}) => { 
    employeeArray.push({Full_name, id}); // trying to get full_name to show and id to be retieved
    });
    }
  inquirer.prompt([
    {
    name: 'emp',
    type: 'choice',
    message: `Which employee's role would you like to edit?`,
    choices() {return employeeArray;}
    },
    {
    type: 'input', 
    name: 'roleid',
    message: "What is the this employee's new role ID number?",
    },
  ])
  .then((response) => {
    let chosenemployee;
    results.forEach((empl) => {
      if (empl.Full_name === response.emp) {
        chosenemployee = empl;
        const query = connection.query(
        'UPDATE employee SET ? WHERE ?',
        [
          {
            role_id: response.roleid,
          },
          {
            id: employee.id,
          },
        ],       
        (error) => {
          if (error) throw err;
          console.log(`Employee's role successfully!`);
          start();
        });
        console.log(query.sql);
      };
    });
  });
});
};


connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  start();
});
