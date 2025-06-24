import {
  Allcards,
  CardHeading,
  Notification,
  Overview,
  RecentActivity,
  Referral,
  ReportOverView,
} from "../../exports";
import { useState } from "react";
import { FaShareAlt } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";
import ImageSlider from "../../components/ImageSlider";
import { PiHandDeposit } from "react-icons/pi";
import { PiHandWithdraw } from "react-icons/pi";
import TransactionHistory from "../../components/TransactionHistory";

const Dashboard = () => {
  const [showCard, setShowCard] = useState(false);

 let profileOverView = [
     {
       title: "User Since",
       value: "2025-06-15",
     },
     {
       title: "First Investment",
       value: "Not Active",
     },
     {
       title: "Total Invest",
       value: "0 USDT",
     },
     {
       title: "Total Business",
       value: "	0 USDT",
     },
     {
       title: "Reward Rank",
       value: "Tier 0",
     },
   ];
  return (
    <div className="p-4  flex flex-col gap-5 flex-1 max-sm:p-2 relative ">
      <div className=" text-white    font-sans overflow-hidden w-full">
        {/* Main Layout: Balance on left, card trigger on right */}
        <div className="flex flex-col md:flex-row justify-between mt-2 ml-2 md:items-center gap-4 ">
          {/* Wallet Info - Always visible */}
          <div className="z-10 flex flex-col pt-7 gap-2 px-2">
            <span className="text-sm text-gray-400">Total Balance</span>
            <h1 className="text-3xl font-bold  ">$ 313,042.67</h1>
            <div className="flex items-center gap-2 ">
              <span className="text-green-400 text-[10px] font-medium bg-green-900/20 px-2 py-1  rounded-full">
                ↑ 2.35% &nbsp; $719.99
              </span>
              <span className="text-xs text-gray-400">24h</span>
            </div>
          </div>

          {/* Card Peek (always partially visible) */}
          <div
            className="absolute top-2 right-[-100px] w-80 bg-gradient-to-tr from-pink-300 to-pink-100 text-black rounded-xl px-5 py-6  shadow-2xl transition-transform duration-500 ease-in-out cursor-pointer z-40"
            style={{
              transform: showCard ? "translateX(-100px)" : "translateX(160px)",
            }}
            onClick={() => setShowCard((prev) => !prev)}
          >
            <div className="flex justify-between">
              <div className="text-3xl font-bold">🪙</div>
              <div className="text-xl font-bold">XGO</div>
            </div>
            <div className="text-right text-lg font-semibold tracking-widest mt-10">
              {showCard ? "1234 •••• •••• 0000" : "1234 ••••"}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-around  gap-5 mt-10">
        <button className="group px-6 py-2 flex items-center gap-3 bg-[#2A1F17] border border-[#5F3F2B] hover:bg-[#3A2A20] text-white font-semibold rounded-xl shadow-sm transition-all duration-300">
          <PiHandWithdraw className="text-2xl group-hover:scale-110 transition-transform duration-300 text-[#f5c679]" />
          <span className="tracking-wide">Withdraw</span>
        </button>

        <button className="group px-7 py-2 flex items-center gap-3 bg-[#2A1F17] border border-[#5F3F2B] hover:bg-[#3A2A20] text-white font-semibold rounded-xl shadow-sm transition-all duration-300">
          <PiHandDeposit className="text-2xl group-hover:scale-110 transition-transform duration-300 text-[#f5c679]" />
          <span className="tracking-wide">Deposit</span>
        </button>
      </div>

      <Allcards />
      <ImageSlider />
      <TransactionHistory />

      <div className="relative bg-[#1c1f269f] text-white p-6 rounded-3xl max-w-md w-full shadow-lg overflow-hidden border border-[#2a2f3a] hover:shadow-xl transition-all duration-300">
        {/* Tag */}
        <div className="absolute top-3 left-5 bg-[#FDF4D1] text-[#5F3F2B] font-semibold px-4 py-1 rounded-full text-xs shadow-sm border border-[#F4E3A0]">
          BEST CHANCE TO BUY
        </div>

        {/* Text Content */}
        <div className="mt-8 space-y-2">
          <h2 className="text-xl font-medium leading-snug text-white">
            Get discount up to <br />
            <span className="text-3xl font-bold text-[#f0c76e] mr-2">
              ₹2000 Off
            </span>
            Card
          </h2>
          <p className="text-sm text-gray-400">Only on your first purchase</p>

          {/* CTA Button */}
          <button className="mt-4 px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-[#FDF4D1] to-[#F0D27A] text-[#1C1F26] hover:brightness-110 transition">
            Buy Now →
          </button>
        </div>

        {/* Decorative Image */}
      </div>
      
  <Overview  title={"Profile Overview"}
            data={profileOverView}
            btn="View All"/>

      {/* Column 2 */}

      {/* <Overview
            title={"Profile Overview"}
            data={profileOverView}
            btn="View All"
          /> */}
      <div className="rounded-2xl p-5 shadow-[0_6px_30px_rgba(0,0,0,0.7)]     border border-[#2a2f3a]">
        <div className="space-y-4">
          {/* Title */}
          <h2 className="text-xl font-semibold text-white">How to Use</h2>

          {/* Video Thumbnail */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer transition-all shadow-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoCViFCnLqddCN7uHZrEQ1u20IOBbAzvM4JA&s"
              alt="How to Use"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all flex items-center justify-center">
              <div className="w-14 h-14 bg-[#FDF4D1] text-[#1C1F26] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReportOverView />

     
      <Referral />
    </div>
  );
};

export default Dashboard;
