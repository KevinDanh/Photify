# CSC 317 Term Project

## Purpose

The purpose of this repository is to store all the code for your web application. This also includes the history of all commits made and who made them. Only code submitted on the master branch will be graded.

Please follow the instructions below and fill in the information requested when prompted.

## Team  Member Information

|               | Name          | Email         |
|:-------------:|:-------------:|:-------------:|
| Team Member 1 | Roberto Herman| rhermanvaldivia@mail.sfsu.edu|
| Team Member 2 | Kevin Danh    | kdanh@mail.sfsu.edu          |

## Changing Repository Name

Please change the name of the repository the to the following:
`csc317-termproject-username` to `csc317-termproject-teamNN` where NN is the number assigned to your team. If your team number is less than 10, please pad the number with a zero. For example, if you're team number is 8 then your repository name should be `csc317-termproject-team08`.

## Adding your team member to the repository

Which ever member created the repository will need to invite the other member to the repository. This can be done with the following steps:

* While at the repository on GitHub, select the `Settings` tab near the top.
* While on the `Settings` tab select the `Collaborators & Teams` tab from the menu on the left.
* While on this page, near the bottom enter the user name of the other member and click the `Add collaborator` button. 

# Build/Run Instructions

Below please explain how to fully install and run your application.

First, install the app's dependencies from within the Photify directory:
```
npm install

```
Next, use the init.sql script to set up your database.
Then, you'll need to change the following lines of code in Photify/core/pool.js according to your SQL setup:
```
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'your_sql_username',
    password: 'your_sql_password',
    database: 'PhotifyDB',
});
```
Finally, run the app:
```
npm start
```
Now you should be able to navigate to http://localhost:3000/ on your favorite browser and see the app running.
