import React, { useState } from 'react';
import { Table } from '../../exports'; // Make sure your Table component supports title, option, data props

const Withdraw = () => {
  const [amount, setAmount] = useState('');
  const [wallet, setWallet] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // You can replace this with dynamic balance from backend or Redux
  const availableBalance = 1250.75;

  const handleWithdraw = (e) => {
    e.preventDefault();

    if (!amount || !wallet) {
      setError('Please fill in all fields');
      setSuccess('');
      return;
    }

    if (parseFloat(amount) > availableBalance) {
      setError('Withdrawal amount exceeds available balance');
      setSuccess('');
      return;
    }

    // Simulate success
    setSuccess('Withdrawal request submitted!');
    setError('');
    // TODO: Add API integration here
  };

  const option = ['Date', 'Transaction Hash', 'Amount', 'Status'];
  const data = []; // Use real data here

  return (
    <div className="flex flex-col gap-6">
      {/* Withdraw Form */}
      <div className="w-full mx-auto p-6 bg-[#1C1F26] text-white rounded-2xl border border-[#7c7c7c]">
        <h2 className="text-2xl font-bold mb-4 text-center ">
          Withdraw Funds
        </h2>

        {/* Available Balance */}
        <div className="text-sm text-center mb-4 text-gray-300">
          Available Balance:{' '}
          <span className="text-cyan font-semibold">
            ${availableBalance.toFixed(2)}
          </span>
        </div>

        <form onSubmit={handleWithdraw} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Wallet Address</label>
            <input
              type="text"
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
              placeholder="Enter your wallet address"
              className="w-full px-4 py-2 rounded-lg bg-[#121418] border border-[#7c7c7c] focus:outline-none focus:ring-2 focus:ring-[#00D1B2]"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount to withdraw"
              className="w-full px-4 py-2 rounded-lg bg-[#121418] border border-[#7c7c7c] focus:outline-none focus:ring-2 focus:ring-[#00D1B2]"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-400 text-sm">{success}</p>}

          <button
            type="submit"
            className="w-full py-2 mt-2 rounded-lg font-bold text-orange-300 transition bg-gradient-to-r from-[#5F3F2B] to-[#7a4f37] hover:from-[#6f4731] hover:to-[#8a5f47]"
          >
            Withdraw Now
          </button>
        </form>
      </div>

      {/* Withdraw Table */}
      <Table title="Payout Report" data={data} option={option} />
    </div>
  );
};

export default Withdraw;
