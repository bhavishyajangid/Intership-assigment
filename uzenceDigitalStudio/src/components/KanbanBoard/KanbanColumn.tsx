import React from "react";

const KanbanColumn = () => {
  let i = 0;
  return (
    <div className="w-full min-h-38 border border-gray-200 rounded-md bg-white p-3   shadow-sm relative">
      <div className="flex justify-between items-center">
        <h1 className="text-[15px] font-medium font-gray-700 ">Take Shower</h1>
        <span className="px-1.5 py-1 text-white font-medium bg-red-400 text-xs rounded-sm">
          High
        </span>
      </div>

      <div className="flex gap-3 mt-5">
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            className="text-sm px-2 py-0.5 bg-gray-100 text-gray-400 rounded-sm "
            key={i}
          >
            tag
          </span>
        ))}
        <span></span>
      </div>

      <div className="flex justify-between items-center absolute bottom-3 w-full   ">
       
            {/* <img
                className="w-8 h-8 rounded-full"
                src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
                alt="img"
            /> */}
          <div className="relative w-full ml-2">
            <span className="text-xs font-semibold text-orange-500">
              Assign To{" "}
            </span>
            <p className="text-[13px] font-medium text-gray-900">
              Bhavishya jangid
            </p>
          </div>

           <div className="relative w-full ml-2">
            <span className="text-xs font-semibold text-orange-500">
            Due After
            </span>
            <p className="text-[13px] font-medium text-gray-900">
              20/10/2025
            </p>
          </div>

           
        
      </div>
    </div>
  );
};

export default KanbanColumn;
