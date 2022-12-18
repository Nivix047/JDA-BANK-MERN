import { gql } from "@apollo/client";

// Query is done in Apollo sandbox
export const QUERY_USERS = gql`
  query users {
    users {
      username
      firstName
      lastName
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      firstName
      lastName
      email
      balance
      transactions {
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
  }
`;
