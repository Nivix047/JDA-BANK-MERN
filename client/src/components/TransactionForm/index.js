import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_TRANSACTION } from "../../utils/mutations";

const TransactionForm = ({ userInfo }) => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [addTransaction, { error }] = useMutation(ADD_TRANSACTION);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addTransaction({
        variables: {
          recipient: recipient.toLowerCase(),
          amount,
          message,
        },
      });
      setRecipient("");
      setAmount("");
      setMessage("");
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "amount") {
      setAmount(parseInt(value));
    } else if (name === "recipient") {
      setRecipient(value);
    } else {
      setMessage(value);
    }
  };
  return (
    <div className="col">
      <form className="transaction-form p-4" onSubmit={handleFormSubmit}>
        <h3 className="cap">Hi, {userInfo.firstName}</h3>
        <h4>
          <span>Balance:</span>
          <span>$ {userInfo.balance}</span>
        </h4>
        <input type="hidden" name="current-user" />
        <input type="hidden" name="current-balance" />
        <div className="row">
          <div className="mb-3">
            <label htmlFor="recipient" className="form-label"></label>
            <input
              type="text"
              className="form-control"
              id="recipient"
              placeholder="Transfer to"
              name="recipient"
              value={recipient}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="transfer-amount" className="form-label"></label>
            <input
              type="number"
              className="form-control"
              id="transfer-amount"
              placeholder="Amount"
              name="amount"
              value={amount}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="transfer-message" className="form-label"></label>
            <input
              type="text"
              className="form-control"
              id="transfer-message"
              placeholder="For"
              name="message"
              value={message}
              onChange={handleChange}
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
