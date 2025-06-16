import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Card from './components/Card'
import Referral from './components/Referral'
import ProfileOverview from './components/ProfileOverview'
import IncomeReport from './components/IncomeReport'
const App = () => {
  return (
     <div className="flex bg-[#0F1116] text-white">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-4 space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <Card title="Balance" value="0 USDT" />
            <Card title="Active Direct" value="0" />
            <Card title="Active Team" value="0 USDT" />
          </div>
          <Referral />
          <div className="grid md:grid-cols-2 gap-4">
            <ProfileOverview />
            <IncomeReport />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App