const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    balance: Int
  }
  type Transaction {
    _id: ID
    transaction_date: String
    recipient: String!
    senderEndingBalance: Int
    recipientEndingBalance: Int
    sender: String!
    amount: Int!
    message: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
  }

  type Mutation {
    addUser(
      username: String!
      email: String!
      password: String!
      firstName: String!
      lastName: String!
    ): Auth
    login(email: String!, password: String!): Auth
    addTransaction(
      recipient: String!
      amount: Int!
      message: String
    ): Transaction
  }
`;

//me: User // Allowing you to look up yourself
//users: [User] // Allow users to look up other users
// me.findAll.populate(transactions) for transactions

module.exports = typeDefs;
