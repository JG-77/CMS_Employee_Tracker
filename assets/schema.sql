DROP DATABASE IF EXISTS employee_DB;

CREATE DATABASE employee_DB;

USE employee_DB;

CREATE TABLE department (
id INT PRIMARY KEY NOT NULL,
name VARCHAR(30) NOT NULL -- to hold department name
);

CREATE TABLE role (
id INT PRIMARY KEY NOT NULL,
title VARCHAR(30) NOT NULL,     -- to hold role title
salary DECIMAL (10,2) NOT NULL,        -- to hold role salary
department_id INT NOT NULL,
FOREIGN KEY (department_id) REFERENCES department(id)    -- to hold reference to department role belongs to
);

CREATE TABLE employee(
id INT PRIMARY KEY NOT NULL,
first_name VARCHAR(30)NOT NULL,  -- to hold employee first name
last_name VARCHAR(30) NOT NULL,   -- to hold employee last name
role_id INT NOT NULL NOT NULL,             -- to hold reference to role employee has
manager_id INT NULL,                         -- to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager
FOREIGN KEY (role_id) REFERENCES role(id),  -- links role table primary key
CONSTRAINT FOREIGN KEY (manager_id) REFERENCES employee(id)    -- constraint in foreign key since manager_id is in the same tables as employee id   
);

