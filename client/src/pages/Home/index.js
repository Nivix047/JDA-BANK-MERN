import React from "react";
import { useQuery } from "@apollo/client";

import Auth from "../../utils/auth";

import TransactionForm from "../../components/TransactionForm";
import TransactionList from "../../components/TransactionList";

import { QUERY_ME } from "../../utils/queries";

const Home = () => {
  // if (!Auth.loggedIn()) {
  //   window.location.replace("/login");
  // }

  const { data, loading } = useQuery(QUERY_ME);
  const userInfo = data?.me || {};
  return (
    <div>
      <div className="container">
        <div className="row">
          {loading ? (
            <div>
              <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-success" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-info" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>{" "}
            </div>
          ) : (
            <>
              <TransactionForm userInfo={userInfo} />
              <TransactionList userInfo={userInfo} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

// old codes
// function Home() {
//   return (
//     <div>
//       <div className="container">
//         <div className="row">
//           <div className="col">
//             <form className="transaction-form p-4">
//               <h3 className="cap">Hi,</h3>
//               <h4>
//                 <span>Balance:</span>
//                 <span>$</span>
//               </h4>
//               <input type="hidden" name="current-user" value="" />
//               <input type="hidden" name="current-balance" value="" />
//               <div className="row">
//                 <div className="mb-3">
//                   <label for="recipient" className="form-label"></label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="recipient"
//                     placeholder="Transfer to"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label for="transfer-amount" className="form-label"></label>
//                   <input
//                     type="number"
//                     className="form-control"
//                     id="transfer-amount"
//                     placeholder="Amount"
//                   />
//                 </div>
//                 <div className="form-group mb-3">
//                   <button type="submit" className="btn btn-success w-100">
//                     Transfer
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//           <div className="col-8 text-center">
//             <div className="col">
//               <div className="m-4">
//                 <div id="debit-transaction">
//                   You paid
//                   <span className="cap">recipient</span>
//                   on date
//                 </div>
//                 <div id="credit-transaction">
//                   <span class="cap">recipient</span>
//                   paid you $ credit on
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
