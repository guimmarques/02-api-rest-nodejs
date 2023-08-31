<h1 align="center">
  Simple Bank Transactions API
</h1>

<p align="center">
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-extra-libs">Extra Libs</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-business-rules">Business Rules</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<br>

## 🚀 Technologies

This project was developed with the following technologies:

- NodeJs
- Fastify
- Typescript

## 📚 Extra Libs

This project uses the following libs:

- supertest
- knex
- vitest
- dotenv
- @fastify/cookie
- sqlite3
- zod

## 💻 Project

Simple API for manage bank account transactions using Fastify. All the business rules are described above. This project was developed during RocketSeat's Ignite React course.

## 🔖 Business Rules

- **RF** => Functional requirements
- **RN** => Business rule
- **RNF** => Non-functional requirements
# RF

 - [x] User should be able to create a new transaction;
 - [X] User should be able to get account balance;
 - [x] User should be able to list all transactions;
 - [x] User should be able to get an unique transaction;

# RN

 - [x] A transaction should be credit that increse total amount or debit that decrease;
 - [x] Should be able to identify user of each api requisition;
 - [x] User can see only own transactions;
## How to use?

Download this repositorie and with your teminal, enter in the directory

1. Run the command `npm install` to install the dependencies
2. Setup .env file using .env.example
3. And to start the application, run the command `npm run dev`
