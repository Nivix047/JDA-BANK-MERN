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
                      {transaction.sender} paid you
                      <span className="cap">
                        {" "}
                        ${transaction.amount}{" "}
                      </span> on {transaction.transaction_date}
                      {transaction.message ? (
                        <div>For {transaction.message}</div>
                      ) : (
                        <></>
                      )}
                    </div>
                  ) : (
                    <div id="debit-transaction" key={transaction._id}>
                      You paid
                      <span className="cap"> {transaction.recipient} </span>$
                      {transaction.amount} on {transaction.transaction_date}
                      {transaction.message ? (
                        <div>For {transaction.message} </div>
                      ) : (
                        <></>
                      )}
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

export default TransactionList;

// Old codes // Another way to do it
// const TransactionList = ({ userInfo }) => {
//   const { transactions, username } = userInfo;
//   const creditTrans = transactions
//     .filter((transaction) => transaction.recipient === username)
//     .sort(function (a, b) {
//       return b.transaction_date > a.transaction_date;
//     });
//   const debitTrans = transactions
//     .filter((transaction) => transaction.sender === username)
//     .sort(function (a, b) {
//       return b.transaction_date > a.transaction_date;
//     });
//   // const totalTrans = creditTrans.concat(debitTrans);
//   // const sortedTotalTrans = totalTrans.sort(function (a, b) {
//   //   return b.transaction_date > a.transaction_date;
//   // });
//   return (
//     <div className="col-8 text-center">
//       <div className="col">
//         <div className="m-4">
//           {userInfo.transactions.length ? (
//             <>
//               <div>
//                 {creditTrans.map((creditTrans) => (
//                   <div id="credit-transaction" key={creditTrans._id}>
//                     {creditTrans.sender} Paid you
//                     <span className="cap"> {creditTrans.amount} </span>
//                     on {creditTrans.transaction_date}
//                   </div>
//                 ))}
//               </div>
//               <div>
//                 {debitTrans.map((debitTrans) => (
//                   <div id="debit-transaction" key={debitTrans._id}>
//                     You paid {debitTrans.recipient}
//                     <span className="cap"> ${debitTrans.amount} </span>
//                     on {debitTrans.transaction_date}
//                   </div>
//                 ))}
//               </div>
//             </>
//           ) : (
//             <div>No transactions...</div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
