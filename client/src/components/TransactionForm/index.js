import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_TRANSACTION } from "../../utils/mutations";
import { QUERY_ME } from "../../utils/queries";

// import Auth from "../../utils/auth";

// Renders username, balance and form to conduct transaction
const TransactionForm = ({ userInfo }) => {
  const [recipient, setrecipient] = useState("");
  const [amount, setamount] = useState("");
  const [addTransaction, { error }] = useMutation(ADD_TRANSACTION, {
    update(cache, { data: { addTransaction } }) {
      try {
        const { transactions } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { transactions: [addTransaction, ...transactions] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addTransaction({
        variables: {
          recipient,
          amount,
          // Auth.getProfile().data.username,
        },
      });
      setrecipient("");
    } catch (err) {
      console.error(err);
    }
  };
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   if (name === "thoughtText" && value.length <= 280) {
  //     setrecipient(value);
  //     setamount(value.length);
  //   }
  // };
  return (
    <div className="col">
      <form className="transaction-form p-4">
        <h3 className="cap">Hi, {userInfo.firstName}</h3>
        <h4>
          <span>Balance:</span>
          <span>$ {userInfo.balance}</span>
        </h4>
        <input type="hidden" name="current-user" value="" />
        <input type="hidden" name="current-balance" value="" />
        <div className="row">
          <div className="mb-3">
            <label htmlFor="recipient" className="form-label"></label>
            <input
              type="text"
              className="form-control"
              id="recipient"
              placeholder="Transfer to"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="transfer-amount" className="form-label"></label>
            <input
              type="number"
              className="form-control"
              id="transfer-amount"
              placeholder="Amount"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="transfer-message" className="form-label"></label>
            <input
              type="text"
              className="form-control"
              id="transfer-message"
              placeholder="For"
            />
          </div>
          <div className="form-group mb-3">
            <button type="submit" className="btn btn-success w-100">
              Transfer
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default TransactionForm;
