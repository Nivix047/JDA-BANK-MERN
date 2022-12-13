import React from "react";

const TransactionList = ({ userInfo }) => {
  console.log("userInfo", userInfo);
  return (
    <div className="col-8 text-center">
      <div className="col">
        <div className="m-4">
          {userInfo.transactions.length ? (
            <div>
              {userInfo.transactions.map((transaction) => (
                <>
                  <div id="debit-transaction" key={transaction._id}>
                    You paid {transaction.amount}
                    <span className="cap"> {transaction.recipient} </span>
                    on {transaction.transaction_date}
                  </div>
                  <div id="credit-transaction" key={transaction._id}>
                    Paid you
                    <span className="cap"> {transaction.amount} </span>
                    on {transaction.transaction_date}
                  </div>
                </>
              ))}
            </div>
          ) : (
            <div>No transactions...</div>
          )}
        </div>
      </div>
    </div>
  );
};

/* <div className="col-8 text-center">
<div className="col">
   <div className="m-4">
    {userInfo.transaction.length ? (
      <div>
        {userInfo.transactions.map((transaction) => (
          <div id="debit-transaction" key={transaction._id}>
            You paid {transaction.amount}
            <span className="cap"> {transaction.recipient}</span>
            on {transaction.transaction_date}
          </div>
        ))}
      </div>
    ) : (
      <div>No transactions...</div>
    )}
  </div> 
  
</div>
</div> */

//  <div className="col-8 text-center">
//   <div className="col">
//     <div className="m-4">
//       <div id="debit-transaction">
//         You paid {transaction.recipient}
//         <span className="cap"> recipient</span>
//         on {transaction.transaction_date}
//       </div>
//       <div id="credit-transaction">
//         <span className="cap">recipient</span>
//         paid you $ credit on date
//       </div>
//     </div>
//   </div>
// </div>;

/* <div>
{userInfo.transactions.length ? (
  <div>
    {userInfo.transactions.map((transaction) => (
      <div key={transaction._id}>
        amount: {transaction.amount}
        transaction date: {transaction.transaction_date}
        message: {transaction.message}
        recipient: {transaction.recipient}
      </div>
    ))}
  </div>
) : (
  <div>No transactions...</div>
)}
</div> */

export default TransactionList;
