import React from "react";

const TransactionList = () => {
  return (
    <div className="col-8 text-center">
      <div className="col">
        <div className="m-4">
          <div id="debit-transaction">
            You paid
            <span className="cap">recipient</span>
            on date
          </div>
          <div id="credit-transaction">
            <span class="cap">recipient</span>
            paid you $ credit on
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
