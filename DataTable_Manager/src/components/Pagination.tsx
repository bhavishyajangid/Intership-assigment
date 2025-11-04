 import { MdKeyboardArrowRight , MdKeyboardArrowLeft } from "react-icons/md";
const Pagination = () => {
   
  return (
    
        <div className="flex justify-center items-center gap-5 mt-5">
            <div className="text-gray-700 flex gap-1 items-center" ><MdKeyboardArrowLeft />Prev </div>
            <span className="px-2 py-.5 rounded-full bg-gray-500 text-white">1</span>
            <div className="text-gray-700 flex gap-1 items-center" > Next <MdKeyboardArrowRight /> </div>
        </div>
    
  )
}

export default Pagination