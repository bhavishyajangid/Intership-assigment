
import Referral from './Referral'
import Notification from './Notification'
import Allcards from './Allcards'
import Overview from './Overview'
import CardHeading from './CardHeading'
import ReportOverView from './ReportOverView'

const Main = () => {
    let profileOverView = [
     {
      title : "User Since",
      value : "2025-06-15"
     },{
      title : "First Investment",
      value : "Not Active"
     },{
      title : "Total Invest",
      value : "0 USDT"
     },{
      title : "Total Business",
      value : "	0 USDT"
     },{
      title : "Reward Rank",
      value : "Tier 0"
     },
  ]

  const incomeOverView = [
    {
      title : "Income Report",
      value : "0 USDT"
     },{
      title : "ROI Bonus",
      value : "0 USDT"
     },{
      title : "Direct Bonus",
      value : "0 USDT"
     },{
      title : "Level Bonus",
      value : "0 USDT"
     },{
      title : "Reward Bonus",
      value : "0 USDT"
     },,{
      title : "Rank Rank",
      value : "0 USDT"
     },


  ]
  return (
          <div className="p-4 min-h-screen flex flex-col gap-5 flex-1 max-sm:p-2">
      <Allcards />

      <div className="flex flex-wrap gap-5 justify-between">
        {/* Column 1 */}
        <div className="flex flex-col gap-5 w-full md:w-[21rem]">
          <Notification />
          <ReportOverView/>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-5 w-full md:flex-1 min-w-[250px]">
          <Overview title={"Profile Overview"} data={profileOverView} />
          <div className="bg-card-primary rounded-2xl px-5 py-3 min-h-40 flex-1">
            <h2 className="text-white text-lg font-bold mb-2">Report</h2>
            <hr className="border-[#00D1B2] w-20 mb-4" />
          </div>
        </div>

        {/* Column 3 */}
        <div className=" min-w-[23vw] max-lg:w-full ">
          <div className="h-[90vh] max-lg:h-96 bg-card-primary rounded-2xl px-5 py-3">
            {/* <CardHeading title="Income OverView"/> */}
            <Overview title="Income OverView"  data={incomeOverView} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main