DROP DATABASE IF EXISTS schema_DB;

CREATE DATABASE schema_DB;

USE schema_DB;

CREATE TABLE department (
id INT PRIMARY KEY NOT NULL,
name VARCHAR(30) NOT NULL --to hold department name
);


CREATE TABLE role (
id INT PRIMARY KEY NOT NULL,
title VARCHAR(30) NOT NULL,     --to hold role title
salary DECIMAL (10,2) NOT NULL,        --to hold role salary
department_id INT NOT NULL      --to hold reference to department role belongs to
);



CREATE TABLE employee(
id INT PRIMARY KEY NOT NULL,
first_name VARCHAR(30)NOT NULL,  --to hold employee first name
last_name VARCHAR(30) NOT NULL,   --to hold employee last name
role_id INT NOT NULL NOT NULL,             --to hold reference to role employee has
manager_id INT NULL           --to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager
);

