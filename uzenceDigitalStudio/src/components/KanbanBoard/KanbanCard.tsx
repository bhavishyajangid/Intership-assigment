import { memo, useState } from "react";
import KanbanHeader from "../primitives/KanbanHeader";
import KanbanTask from "./KanbanTask";
type itemType = {
  item: kanbanCard;
};

const KanbanCard = ({ item }: itemType) => {
  const [collapse, setCollapse] = useState<boolean>(false);

  return (
    <>
      <div
        className={`max-w-[320px] w-full min-w-[220px] h-fit  rounded-md shadow-md overflow-hidden relative z-0 border   `}
        style={{ borderColor: item.color }}
      >
        <KanbanHeader item={item} setCollapse={setCollapse} />

        {!collapse && <KanbanTask />}
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
