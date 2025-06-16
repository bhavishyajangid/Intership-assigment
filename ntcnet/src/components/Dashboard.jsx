import React from 'react'
import { useState } from 'react';
const Heading = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
      <div className="flex bg-[#0F1116] text-white">
      {/* Sidebar */}
      <aside className="bg-[#1C1F26] p-4 space-y-4 w-20 md:w-60 h-screen flex flex-col items-center md:items-start">
        <div className="text-xl md:text-2xl font-bold px-2 mb-6 hidden md:block">
          <span className="text-[#00D1B2]">NTC</span>NET
        </div>
        <SidebarItem icon={Home} active />
        <SidebarItem icon={Users} />
        <SidebarItem icon={TrendingUp} />
        <SidebarItem icon={Share2} />
        <SidebarItem icon={User} />
        <SidebarItem icon={BarChart2} />
        <SidebarItem icon={Monitor} />
        <SidebarItem icon={LogOut} />
      </aside>

      <div className="flex-1">
        {/* Header */}
        <header className="flex justify-between items-center p-4 border-b border-[#2D3748] sticky top-0 bg-[#0F1116] z-10">
          <div className="text-xl font-bold">
            <span className="text-[#00D1B2]">NTC</span>NET
          </div>
          <div className="space-x-6 text-sm font-medium hidden md:flex">
            <a href="#" className="hover:text-[#00D1B2]">Dashboard</a>
            <a href="#" className="hover:text-[#00D1B2]">Team</a>
            <a href="#" className="hover:text-[#00D1B2]">Invest</a>
            <a href="#" className="hover:text-[#00D1B2]">Withdraw</a>
            <a href="#" className="text-[#00D1B2]">Reports</a>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-4 space-y-6">
          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card title="Balance" value="0 USDT" />
            <Card title="Active Direct" value="0" />
            <Card title="Active Team" value="0 USDT" />
          </div>

          {/* Referral Link */}
          <div className="bg-[#1C1F26] rounded-2xl p-5 shadow-md">
            <h2 className="text-white text-lg font-bold mb-2">Referral Link</h2>
            <hr className="border-[#00D1B2] w-20 mb-3" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <p className="text-sm break-words">
                https://ntcnet.biz?refer=0xEe58d5471B85f1A60aB5BdcCAB3b5171E03BA6
              </p>
              <button className="border border-[#00D1B2] px-3 py-1 rounded hover:bg-[#00D1B2] hover:text-black">
                Copy
              </button>
            </div>
          </div>

          {/* Profile & Income */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#1C1F26] p-5 rounded-2xl shadow-md">
              <h2 className="text-white text-lg font-bold mb-2">Profile Overview</h2>
              <hr className="border-[#00D1B2] w-20 mb-3" />
              <div className="bg-[#0F1116] rounded-xl p-4">
                <p className="text-sm text-gray-400">User Since</p>
                <p className="text-white">2025-06-15</p>
              </div>
            </div>

            <div className="bg-[#1C1F26] p-5 rounded-2xl shadow-md">
              <h2 className="text-white text-lg font-bold mb-2">Income Report</h2>
              <hr className="border-[#00D1B2] w-20 mb-3" />
              <div className="bg-[#0F1116] rounded-xl p-4">
                <p className="text-sm text-gray-400">ROI Bonus</p>
                <p className="text-white">0 USDT</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Heading