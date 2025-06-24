import React, { useRef, useState, useEffect } from 'react';
import { CardHeading, Overview } from '../../exports';
const bonusTypes = ['Referral Bonus', 'Level ROI Bonus', 'ROI Bonus', 'Reward Bonus', 'Rank Bonus'];

const dummyData = {
  'Referral Bonus': [],
  'Level ROI Bonus': [],
  'ROI Bonus': [],
  'Reward Bonus': [],
  'Rank Bonus': [],
};
 const incomeOverView = [
    {
      title: "Income Report",
      value: "0 USDT",
    },
    {
      title: "ROI Bonus",
      value: "0 USDT",
    },
    {
      title: "Direct Bonus",
      value: "0 USDT",
    },
    {
      title: "Level Bonus",
      value: "0 USDT",
    },
    {
      title: "Reward Bonus",
      value: "0 USDT",
    },
    ,
    {
      title: "Rank Rank",
      value: "0 USDT",
    },
  ];




const Report = () => {
  const [activeTab, setActiveTab] = useState('Referral Bonus');
  const [page, setPage] = useState(1);
  const tabRefs = useRef([]);
  const scrollContainerRef = useRef(null);
  const data = dummyData[activeTab];

  // Scroll to active tab
  useEffect(() => {
    const activeIndex = bonusTypes.findIndex((type) => type === activeTab);
    const activeEl = tabRefs.current[activeIndex];
    const container = scrollContainerRef.current;

    if (activeEl && container) {
      const leftOffset = activeEl.offsetLeft - container.offsetLeft - 16;
      container.scrollTo({ left: leftOffset, behavior: 'smooth' });
    }
  }, [activeTab]);

  return (
    <>
    <div className="w-full mx-auto shadow-[0_6px_30px_rgba(0,0,0,0.7)]  border border-[#2a2f3a] rounded-2xl p-6">
     <CardHeading title="Income Report"/>

      {/* Tabs with scroll hint */}
      <div className="relative ">
        {/* Right scroll gradient hint */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-[#1C1F26] to-transparent z-10 mt-3" />

        {/* Scrollable buttons */}
        <div
          ref={scrollContainerRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 border-b border-[#7c7c7c] mb-4 pr-4"
        >
          <div className="flex gap-3 min-w-max">
            {bonusTypes.map((type, index) => (
              <button
  key={type}
  ref={(el) => (tabRefs.current[index] = el)}
  onClick={() => {
    setActiveTab(type);
    setPage(1);
  }}
  className={`whitespace-nowrap px-4 py-1.5 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer outline-none focus:ring-0 ${
    activeTab === type
      ? 'bg-[#2A1F17] text-[#f5c679] border border-[#5F3F2B] '
      : 'text-white border border-transparent hover:border-[#333]'
  }`}
>
  {type}
</button>
            ))}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-xl min-h-[350px] mt-10 overflow-hidden border border-[#2a2f3a]">
        <table className="w-full text-sm text-white text-center">
          <thead className="bg-[#181818] border-b border-[#2a2f3a]">
            <tr>
              <th className="py-3 px-6">Date</th>
              <th className="py-3 px-6">Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="2" className="py-6 text-gray-400 italic">
                  No data available in "{activeTab}".
                </td>
              </tr>
            ) : (
              data.map((item, i) => (
                <tr
                  key={i}
                  className="hover:bg-[#00D1B214] transition duration-200"
                >
                  <td className="py-4 px-6">{item.date}</td>
                  <td className="py-4 px-6">{item.amount}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6 text-sm text-white">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="bg-[#2A1F17] border border-[#5F3F2B] text-[#f5c679] font-semibold px-4 py-2 rounded-xl shadow hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer "
        >
          Previous
        </button>
        <p className="text-gray-300">Page {page}</p>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="bg-[#2A1F17] border border-[#5F3F2B] text-[#f5c679] font-semibold px-4 py-2 rounded-xl shadow hover:scale-105 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>

<div className='mt-14'>

     <Overview
            title={"Income Overview"}
            data={incomeOverView}
            btn="View All"
          />
</div>
</>
  );
};

export default Report;
