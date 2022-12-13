import React from "react";

const TransactionList = ({ userInfo }) => {
  console.log("userInfo", userInfo);
  return (
    <div>
      {userInfo.transactions.length ? (
        <div>
          <div>{userInfo.transactions[0]._id}</div>
          <div>{userInfo.transactions[0].recipient}</div>
          <div>{userInfo.transactions[0].transaction_date}</div>
          <div>{userInfo.transactions[0].message}</div>
        </div>
      ) : (
        <div>No transactions...</div>
      )}
    </div>
    // <div>
    //   {userInfo.map((transaction) => (
    //     <div key={transaction._id}>
    //       <div>{transaction.transaction_date}</div>
    //     </div>
    //   ))}
    // </div>
    // <div className="col-8 text-center">
    //   <div className="col">
    //     <div className="m-4">
    //       <div id="debit-transaction">
    //         You paid
    //         <span className="cap"> recipient</span>
    //         on date
    //       </div>
    //       <div id="credit-transaction">
    //         <span className="cap">recipient</span>
    //         paid you $ credit on date
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default TransactionList;
