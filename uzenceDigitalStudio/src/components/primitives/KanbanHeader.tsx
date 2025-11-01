import React, { memo, useRef, useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useDispatch } from "react-redux";
import { updateCardTitle } from "../../store/allTask";
import HeaderMenuOption from "./HeaderMenuOption";
type props = {
  item: kanbanCard;
  setCollapse : React.Dispatch<React.SetStateAction<boolean>>
};

const KanbanCardHeader = ({ item , setCollapse}: props) => {
  const dispatch = useDispatch();


  const [inputvalMaxTask, setInputValMaxTask] = useState<kanbanCard["maxTasks"]>(item.maxTasks);
  const [inputvalTitle, setInputValTitle] = useState<kanbanCard["title"]>(item.title);

  const arrowRef = useRef<HTMLSpanElement | null>(null)

  const [updateCard, setUpdateCard] = useState<updateCardType>({
    id: "",
    show: false,
    field: "",
  });


  const handleCollapseArrow = ():void => {
       setCollapse(prev => !prev)

       if(arrowRef.current){
        arrowRef.current.classList.toggle('rotate-90')
        arrowRef.current.classList.toggle('rotate-0')
       }
  }

  const handleUpdateValue = (
    e:
      | React.KeyboardEvent<HTMLTextAreaElement>
      | React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (e.key === "Enter") {
      let obj = {
        ...updateCard,
        value: updateCard.field === "Rename" ? inputvalTitle : inputvalMaxTask,
      };

      dispatch(updateCardTitle(obj));
      setUpdateCard({ id: null, field: "", show: false });
    }
  };

  return (
    <div className="p-3  flex justify-between items-center border-b border-gray-200">
      <div className="flex gap-2 items-center">
        {updateCard.show && updateCard.field === "Rename" ? (
          <textarea
            onKeyDown={(e) => handleUpdateValue(e)}
            value={inputvalTitle}
            onChange={(e) => setInputValTitle(e.target.value)}
            className=" border border-black w-28 h-10"
          ></textarea>
        ) : (
          <h1 className="  text-lg  font-bold" style={{ color: item.color }}>
            {item.title}{" "}
          </h1>
        )}

        {updateCard.show && updateCard.field !== "Rename" ? (
          <input
            min={0}
            max={10}
            value={inputvalMaxTask}
            onChange={(e) => setInputValMaxTask(parseInt(e.target.value))}
            onKeyDown={(e) => handleUpdateValue(e)}
            className="w-10 border border-black rounded-md"
            type="number"
            name=""
            id=""
          />
        ) : (
          item.maxTasks && (
            <p className="text-sm text-gray-500">
              (<span className="text-orange-500">5</span>/{item.maxTasks})
            </p>
          )
        )}
      </div>

      <div className="flex items-center gap-1">
        <span
        ref={arrowRef}
         onClick={() => handleCollapseArrow()}
         className={`text-sm text-gray-500 cursor-pointer transition-all ease-in-out duration-300 `}
        >
        <MdOutlineArrowForwardIos/>
        </span>

        <HeaderMenuOption id={item.id} setUpdateCard={setUpdateCard} />
      </div>
    </div>
  );
};

export default memo(KanbanCardHeader, (prev, next) => {
  return (
    prev.item.id === next.item.id &&
    prev.item.title === next.item.title &&
    prev.item.taskIds.length === next.item.taskIds.length &&
    prev.item.maxTasks === next.item.maxTasks
  );
});
