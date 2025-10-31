



 type headerOptionType = {
      id  : string
     label : string,
     className : string,
     handleOption : (id:kanbanCard['id']) => void
 }

 type updateCardType = {
    id: string,
    show : boolean,
    value : string | number | null,
    field : string | null 
 }

 interface kanbanCard {
     id : string,
     title : string,
     color : string,
     maxTasks? : number,
     taskIds : string[],
 }

 