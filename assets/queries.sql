USE schema_DB;

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;

-- 1st method
-- SELECT employee.id AS ID, employee.first_name AS First_name, employee.last_name AS Last_name, role.title AS Title, department.name AS Department, role.salary AS Salary, employee.manager_id AS Manager
-- FROM employee 
-- JOIN role ON employee.role_id = role.id 
-- JOIN department ON role.department_id = department.id
-- LEFT JOIN employee ON employee.id = employee.manager_id; 

-- 2nd method
SELECT DISTINCT e1.id AS ID, e1.first_name AS First_name, e1.last_name AS Last_name, r.title AS Title, department.name AS Department, r.salary AS Salary, e1.manager_id AS Manager
FROM employee e1, employee e2
LEFT JOIN role r ON employee.role_id = r.id 
LEFT JOIN department ON r.department_id = department.id
LEFT JOIN employee e ON e1.id = e2.manager_id;