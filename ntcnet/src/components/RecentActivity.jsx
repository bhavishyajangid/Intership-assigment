import React from 'react'
import CardHeading from './CardHeading'
const RecentActivity = () => {
  return (
    <div className="bg-card-primary rounded-2xl px-5 py-3  flex-1 max-sm:hidden">
       <CardHeading title="Recent Activity"/>
      <div className='overflow-auto h-24 flex flex-col gap-2 scrollbar-hide'>

    
           
             <div  className="bg-[linear-gradient(to_right,_#66666636_0%,_#66666612_50%,_#66666600_100%)]  px-3 py-2 rounded-sm  border-[#555555] border-l-6 text-white capitalize text-[15px]">
                today is 
              </div>

               <div  className="bg-[linear-gradient(to_right,_#66666636_0%,_#66666612_50%,_#66666600_100%)]  px-3 py-2 rounded-sm  border-[#555555] border-l-6 text-white capitalize text-[15px]">
                today is 
              </div>

               <div  className="bg-[linear-gradient(to_right,_#66666636_0%,_#66666612_50%,_#66666600_100%)]  px-3 py-2 rounded-sm  border-[#555555] border-l-6 text-white capitalize text-[15px]">
                today is 
              </div>
                </div>
          </div>
  )
}

export default RecentActivity