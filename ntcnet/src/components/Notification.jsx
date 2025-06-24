import React from 'react';
import CardHeading from './CardHeading';
import OverViewCard from './OverViewCard';
const Notification = ({ notifications = ["hh"] }) => {
  return (
    <div className="bg-card-primary px-5 py-5 max-sm:px-3 rounded-2xl shadow-md max-sm:hidden">
      <CardHeading title='Notification' />

      <div className="flex flex-col gap-3 overflow-y-auto scrollbar-hide h-32">
        {
            notifications.length <= 0 ? <p className='text-sm text-gray-300 text-center mt-7'>No Notification</p> : 
            notifications.map((item) => (
                <div key={item} className="bg-[#66666636] px-3 py-2 rounded-lg text-white">
                {item}
              </div>
            ))
        }
      </div>
    </div>
  );
};

export default Notification;
