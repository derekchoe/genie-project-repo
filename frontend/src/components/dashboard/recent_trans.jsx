import React from 'react';
import RecentTransItem from './recent_trans_item';


const RecentTrans = props => {
  const transactions = props.transactions.slice(0, 11).map(tran => {
    return (
      <div>
        <RecentTransItem
          key={tran._id}
          deleteTrans={props.deleteTransaction}
          tran={tran}
          fetchCat={props.fetchCategoriesByExpenses}
          fetchTrans={props.fetchTransactionMonthly}
        />
      </div>
    );
  });

  return (
    <div className='pie-chart-income-expense-wrapper'>
      <div className='chart-handler1'>
        <div className='chart-container'>
          <div className="recent-trans-box">
            <div className="recent-trans-title">Recent Transactions</div>
            <div className="recent-trans-table">
              <ul className="rec-titles">
                <li>Description</li>
                <li>Date</li>
                <li>Category</li>
                <li>Amount</li>
              </ul>
              {transactions}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentTrans;

// const RecentTrans = props => {
//   const transactions = props.transactions.slice(0, 5).map(tran => {

//     return (
//       <ul key={tran.id} className={tran.typeOfTrans === 'expense' ? 'negative' : 'positive'}>
//         <li>{tran.description}</li>
//         <li>{tran.date.slice(5, 10)}</li>
//         <li>{tran.categoryName}</li>
//         <li>${tran.amount}</li>
//         <li className='delete-recent' onClick={this.deleteTrans(tran.)}>Delete</li>
//       </ul>
//     );
//   });

//   return (
//     <div className="recent-trans-box">
//       <div className="recent-trans-title">Recent Transactions</div>
//       <div className="recent-trans-table">
//         <ul className='rec-titles'>
//           <li>Description</li>
//           <li>Date</li>
//           <li>Category</li>
//           <li>Amount</li>
//         </ul>
//         {transactions}
//       </div>
//     </div>
//   );
// };

// export default RecentTrans;
