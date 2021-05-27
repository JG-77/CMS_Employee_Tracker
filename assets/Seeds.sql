USE employee_DB;

-- departments
INSERT INTO department (id, name)
VALUES (1, 'Production'),
(2, 'Storage'),
(3, 'Maintenance');

-- roles for each department
INSERT INTO role (id, title, salary, department_id)
VALUES (1, 'Foreman', 50000.00, 1),
(2, 'Producer', 35000.00, 1),
(3, 'Palletizer', 28000.00, 2),
(4, 'Trailer Replenisher', 37000.00, 2),
(5, 'Mechanic', 55000.00, 3),
(6, 'Engineer', 60000.00, 3),
(7, 'Manager', 75000.00, 1),
(8, 'Manager', 75000.00, 2),
(9, 'Manager', 75000.00, 3);

-- employees in each department and role
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, 'Sam', 'Hernandez', 7, NULL), -- dept 1 manager
(2, 'Bob', 'Hodges', 8, NULL), -- dept 2 manager
(3, 'David', 'Johnson', 9, NULL), -- dept 3 manager
(4, 'Gilbert', 'Cruz', 1, 1),
(5, 'Temo', 'Garcia', 2, 1),
(6, 'Daniel', 'Salcido', 3, 2),
(7, 'Marcus', 'Alexander', 4, 2),
(8, 'Ed', 'Vargas', 5, 3),
(9, 'Jesus', "Avila", 6, 3);
