import React from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import CardHeading from './CardHeading';

const transactions = [
  {
    title: 'Netflix Subscription',
    date: 'June 22, 2025',
    amount: '-₹499.00',
    type: 'debit',
    method: 'Card Payment',
  },
  {
    title: 'Wallet Top-up',
    date: 'June 21, 2025',
    amount: '+₹1,000.00',
    type: 'credit',
    method: 'Bank Transfer',
  },
  {
    title: 'Spotify Premium',
    date: 'June 20, 2025',
    amount: '-₹129.00',
    type: 'debit',
    method: 'Card Payment',
  },
  {
    title: 'Spotify Premium',
    date: 'June 19, 2025',
    amount: '-₹129.00',
    type: 'debit',
    method: 'Card Payment',
  },
  {
    title: 'Amazon Top-up',
    date: 'June 18, 2025',
    amount: '-₹500.00',
    type: 'debit',
    method: 'UPI',
  },
  {
    title: 'Received Cashback',
    date: 'June 17, 2025',
    amount: '+₹200.00',
    type: 'credit',
    method: 'Reward',
  },
];

const TransactionHistory = () => {
  return (
    <div className=" shadow-[0_6px_30px_rgba(0,0,0,0.7)]   text-white rounded-xl w-full max-w-3xl mx-auto p-2 border border-[#2a2f3a] ">
      <CardHeading title="Recent Transactions" btn="View All" />

      {/* Scrollable area wrapper with fixed height */}
      <div className="h-[300px] overflow-y-auto pr-1 space-y-2">
        {transactions.length === 0 ? (
          <p className="text-center mt-20 text-gray-400">No transactions yet.</p>
        ) : (
          transactions.map((tx, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-[linear-gradient(to_right,_#66666636_0%,_#66666612_50%,_#66666600_100%)] p-4 rounded-lg hover:bg-[#302e2e] transition"
            >
              <div>
                <p className="font-medium text-md">{tx.title}</p>
                <p className="text-xs text-gray-400">{tx.method} • {tx.date}</p>
              </div>
              <div className={`font-semibold text-xs ${
                tx.type === 'debit' ? 'text-red-400' : 'text-green-400'
              }`}>
                {tx.amount}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TransactionHistory;
