import { gql } from "@apollo/client";

// Mutation is done in Apollo sandbox
export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $firstName: String!
    $lastName: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      firstName: $firstName
      lastName: $lastName
      password: $password
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TRANSACTION = gql`
  mutation addTransaction(
    $recipient: String!
    $amount: Int!
    $message: String
  ) {
    addTransaction(recipient: $recipient, amount: $amount, message: $message) {
      _id
      transaction_date
      recipient
      senderEndingBalance
      recipientEndingBalance
      sender
      amount
      message
    }
  }
`;
