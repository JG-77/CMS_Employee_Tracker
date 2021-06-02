# CMS_Employee_Tracker ![Node.js](https://img.shields.io/badge/License-Node.js-blue.svg) ![GNU GPL v2](https://img.shields.io/badge/License-GNU_GPL_v2-green.svg)


## GitHub Repository and Application
---

[GitHub Link](https://github.com/JG-77/CMS_Employee_Tracker.git)

[Application Demo Video pt1](https://drive.google.com/file/d/1uGjmJ54k1EDL0Dtd3exj2JM_9bAVsuFF/view?usp=sharing)

[Application Demo Video pt2](https://drive.google.com/file/d/1UXvgnpR84cr73kxXPFW62W6BekY544aF/view?usp=sharing)

[Application Demo Video pt3](https://drive.google.com/file/d/1DWIt0ui6htfznO1ffwabWi1GhQSXlTQO/view?usp=sharing)

## Application Screenshots
---
![schema.sql tables](https://user-images.githubusercontent.com/76461629/120417727-2efc9700-c314-11eb-8b01-a42aac9a321e.png)

![all employees and app start() prompt](https://user-images.githubusercontent.com/76461629/120417736-32901e00-c314-11eb-96df-5efbddfe1541.png)

## Description
---
The CMS Employee Tracker application makes employee database management simpler with a user-friendly interface and command prompt. Employers will be able to to keep track of all their employees based on their departments and managers. In addition, new employees, departments, and job roles can be added into the database with the 'add' feature. When employees are displayed in the app, their ID number, full name, department, title (role), salary, and manager will be shown to provide detailed information about each individual. Using Node.js and a SQL database, this application makes employee management an simpler task!

## Technologies
---
### Node.js

* MySQL connection created with host, user, port, database, and password defined
* Initial inquirer prompt 'start()' function to begin inquirer prompts and app
* Function that displays all employees in database
* Function displays employees in specific departments
* "viewEmployeeByMan()" function displays employees based on the selected manager
* Functions to add new employee, role, and department
* Function to update an employee's role
* MySQL and Inquirer packages installed with Node.js

### MySQl/SQL
* All sql files in the "assets" folder
* __schema.sql__ file contains all three tables (employee, department, and role) for database
* __queries.sql__ file contains the main sql query to display all employee information on a table
* __Seeds.sql__ file contains values for sample data to create a database

## Contact 
Jessie Guadarrama: <jesguadarrama98@gmail.com>

## License
[Node.js License](https://raw.githubusercontent.com/nodejs/node/master/LICENSE)

Copyright Node.js contributors. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.

---
GNU GENERAL PUBLIC LICENSE
Version 2, June 1991

Copyright (C) 1989, 1991 Free Software Foundation, Inc.
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA

Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.

[Preamble](https://opensource.org/licenses/GPL-2.0)
