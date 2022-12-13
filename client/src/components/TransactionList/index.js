const TransactionList = ({ userInfo }) => {
  const { transactions, username } = userInfo;

  return (
    <div className="col-8 text-center">
      <div className="col">
        <div className="m-4">
          {transactions.length ? (
            <>
              <div>
                {transactions.map((transaction) =>
                  transaction.recipient === username ? (
                    <div id="credit-transaction" key={transaction._id}>
                      {transaction.sender} Paid you
                      <span className="cap">
                        {" "}
                        ${transaction.amount}{" "}
                      </span> on {transaction.transaction_date}
                    </div>
                  ) : (
                    <div id="debit-transaction" key={transaction._id}>
                      You paid
                      <span className="cap"> {transaction.recipient} </span>$
                      {transaction.amount} on {transaction.transaction_date}
                    </div>
                  )
                )}
              </div>
            </>
          ) : (
            <div>No transactions...</div>
          )}
        </div>
      </div>
    </div>
  );
};

// Old codes
// {transactions
//   .filter((transaction) => transaction.sender === username)
//   .map((debitTrans) => (
//     <div id="debit-transaction" key={debitTrans._id}>
//       You paid {debitTrans.amount}
//       <span className="cap"> {debitTrans.recipient}</span>
//       on {debitTrans.transaction_date}
//     </div>
//   ))}
// </div>

// {userInfo.transactions.map((transaction) => (
//   <>
//     <div id="debit-transaction" key={transaction._id}>
//       You paid {transaction.amount}
//       <span className="cap"> {transaction.recipient} </span>
//       on {transaction.transaction_date}
//     </div>
//     <div id="credit-transaction" key={transaction._id}>
//       {transaction.recipient} Paid you
//       <span className="cap"> {transaction.amount} </span>
//       on {transaction.transaction_date}
//     </div>
//   </>
// ))}

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

/* <div id="debit-transaction" key={transaction._id}>
                    You paid {transaction.amount}
                    <span className="cap"> {transaction.recipient} </span>
                    on {transaction.transaction_date}
                  </div> */

export default TransactionList;
