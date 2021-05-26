USE schema_DB;

-- departments
INSERT INTO department (id, name)
VALUES (1, 'Production');

INSERT INTO department (id, name)
VALUES (2, 'Storage');

INSERT INTO department (id, name)
VALUES (3, 'Maintenance');

-- roles for each department
INSERT INTO role (id, title, salary, department_id)
VALUES (1, 'Foreman', 50000.00, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (2, 'Producer', 35000.00, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (3, 'Palletizer', 28000.00, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (4, 'Trailer Replenisher', 37000.00, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (5, 'Mechanic', 55000.00, 3);

INSERT INTO role (id, title, salary, department_id)
VALUES (6, 'Engineer', 60000.00, 3);

-- manager roles for each dept
INSERT INTO role (id, title, salary, department_id)
VALUES (7, 'Manager', 75000.00, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (8, 'Manager', 75000.00, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (9, 'Manager', 75000.00, 3);

-- employees in each department and role
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, 'Sam', 'Hernandez', 7, NULL); -- dept 1 manager

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (2, 'Bob', 'Hodges', 8, NULL); -- dept 2 manager

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (3, 'David', 'Johnson', 9, NULL); -- dept 3 manager

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (4, 'Gilbert', 'Cruz', 1, 1);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (5, 'Temo', 'Garcia', 2, 1);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (6, 'Daniel', 'Salcido', 3, 2);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (7, 'Marcus', 'Alexander', 4, 2);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (8, 'Ed', 'Vargas', 5, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (9, 'Jesus', "Avila", 6, 3);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;

SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, employee.manager_id AS Manager
FROM employee
JOIN role ON employee.role_id = role.id 
Join department ON role.department_id = department.id;

