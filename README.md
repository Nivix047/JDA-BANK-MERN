# JDAB-BANK-MERN

## Description

JDAB is a MERN stack cash transfer app that allows money transfer, credit and debit tracking and messaging between users. The purpose of this project was to rebuild the previous version (see JDA Bank in repo), that was built using the MVC framework to MERN stack with GraphQL with addtional features.

Being a MERN stack project, the database is built using MongoDB instead of SQL. The API querying is done using GraphQL instead of REST API. No controller is needed since it's replaced by Apollo from GraphQL. In terms of the CRUD operation, get routes were replaced by GraphQL's queries and the post, put, and delete routes were replaced by mutations.

In the frontend, pages are rendered using react-router-dom. The main function that allows the user to send money and messages to other users are done using React State Hook.

In comparison, the original version that uses the MVC model is more frontend heavy, where much of the calculation is being done in the frontend and then the data gets pushed into the database. The MERN stack version takes information from the forms and the calculations are done by the middleware and then pushed into the database.

Deployed URL: https://jdab-bank-mern.herokuapp.com

## Installation

To start the app please review the package.json file at the root, server folder and client folder, once ready, please enter npm i at the root folder. Enter npm run develop to start the app.

## Screenshots

Login form:
<img width="845" alt="Screenshot 2022-12-18 at 1 28 31 PM" src="https://user-images.githubusercontent.com/97267318/208323033-c3326a7e-4ebf-4d2d-a853-0e553f251278.png">

Signup form:
<img width="1667" alt="Screenshot 2022-12-18 at 1 28 45 PM" src="https://user-images.githubusercontent.com/97267318/208323085-5de440bc-4d33-4001-b89b-bbbead97cc0f.png">

Home page:
<img width="1672" alt="Screenshot 2022-12-18 at 2 14 31 PM" src="https://user-images.githubusercontent.com/97267318/208323143-861e712e-eb04-4168-a99e-65a12e4ea92c.png">

Running balance:
<img width="1666" alt="Screenshot 2022-12-18 at 2 15 06 PM" src="https://user-images.githubusercontent.com/97267318/208323163-1b899de2-a082-4127-a2a8-81f3f520c6f9.png">

Contact us page:
<img width="1675" alt="Screenshot 2022-12-18 at 2 15 18 PM" src="https://user-images.githubusercontent.com/97267318/208323173-2a0a4e12-05c4-45bb-acb5-ec207ae1ca3f.png">
