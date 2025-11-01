import { memo } from "react";
import { IoAddOutline } from "react-icons/io5";
import KanbanColumn from "../primitives/KanbanColumn";

const KanbanTask = () => {

  return (
    <div
      className={`max-h-[450px]  bg-gray-100 p-3 flex flex-col gap-3 overflow-y-auto hide-scrollbar`}
    >
      <KanbanColumn />
      <KanbanColumn />
      <KanbanColumn />
      <KanbanColumn />


       
          <div className="bg-purple-500 w-10 h-10 rounded-full flex items-center justify-center absolute right-5 bottom-5 z-10 cursor-pointer">
          <IoAddOutline className="text-white text-2xl font-extrabold" />
        </div>
        

    </div>
  );
};

export default memo(KanbanTask);
