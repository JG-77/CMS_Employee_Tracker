USE schema_DB;

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;

SELECT employee.id AS ID, employee.first_name AS First_name, employee.last_name AS Last_name, role.title AS Title, department.name AS Department, role.salary AS Salary, manager.Last_name AS Manager
FROM employee 
LEFT JOIN role ON employee.role_id = role.id 
LEFT JOIN department ON role.department_id = department.id
LEFT JOIN employee manager ON manager.id = employee.manager_id; 
 