



 type headerOptionType = {
    id : number,
     label : string,
     className : string,
     handleOption : (id : number , label:string) => void
 }

 type updateCardType = {
    id: string | null | number,
    show : boolean,
    field : string | null 
 }

 interface kanbanCard {
     id : number,
     title : string,
     color : string,
     maxTasks? : number,
     taskIds : string[],
 }

 