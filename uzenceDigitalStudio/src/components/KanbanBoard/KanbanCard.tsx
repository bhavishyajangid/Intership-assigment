import { memo, useState } from "react";
import KanbanCardHeader from "../primitives/KanbanCardHeader";
import KanbanTask from "./KanbanTask";
import { horizontalListSortingStrategy, SortableContext, useSortable } from "@dnd-kit/sortable";
import {CSS} from '@dnd-kit/utilities'
type itemType = {
  item: kanbanCard;
};

const KanbanCard = ({ item }: itemType) => {
  const [collapse, setCollapse] = useState<boolean>(false);

  const {attributes , listeners , setNodeRef , transform , transition}  = useSortable({id : item.id , data : {type : 'card'}})

  const style = {
    transition,
    transform : CSS.Transform.toString(transform)
  }

  return (
    <>
      <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style= {style}
        className={`max-w-[320px] w-full min-w-[220px] h-fit  rounded-md shadow-md overflow-hidden relative z-0 border touch-none  `}
      >
        <KanbanCardHeader item={item} setCollapse={setCollapse} />

        {!collapse &&
             <SortableContext items={item.taskIds} strategy={horizontalListSortingStrategy}>
               <KanbanTask task={item} />
             </SortableContext>
        }
      </div>
    </>
  );
};

export default memo(KanbanCard, (prev, next) => {
  return (
    prev.item.id === next.item.id &&
    prev.item.title === next.item.title &&
    prev.item.taskIds.length === next.item.taskIds.length &&
    prev.item.maxTasks === next.item.maxTasks
  );
});
