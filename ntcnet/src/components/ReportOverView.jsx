import { icons } from 'lucide-react'
import CardHeading from './CardHeading'
import { FiShare2 } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
const ReportOverView = () => {
  const reports = [
  { title: "Balance sheet" , icon : <FiShare2/> },
  { title: "Profit & loss" , icon : <BsGraphUpArrow />  },
  { title: "Cash flow statement" , icon : <IoDocumentTextOutline />},
  { title: "Referral Bonus" , icon : <FaMoneyBillTrendUp />}
]
  return (
    <div className="w-full rounded-2xl shadow-[0_6px_30px_rgba(0,0,0,0.7)]  px-2 py-3 border border-[#2a2f3a] ">
            <CardHeading title="Reports" btn="View all" />

      <div className="flex flex-col gap-3">
        {reports.map((report, index) => (
          <div
            key={index}
            className="bg-[linear-gradient(to_right,_#66666636_0%,_#66666612_50%,_#66666600_100%)] hover:bg-[#353940] transition-colors rounded-md p-2 flex  justify-between items-center cursor-pointer"
          >
            <div className='flex gap-5 items-center'>

            <span className='p-2 bg-[#272424] rounded-sm text-gray-200' >{report.icon}</span>
            <span className="text-white text-sm font-medium">{report.title}</span>
            </div>
          <MdArrowOutward className=' text-blue-400 text-lg' />
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default ReportOverView