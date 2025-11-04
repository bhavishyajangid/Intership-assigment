



 type headerOptionType = {
    id : number | string,
     label : string,
     className : string,
     handleOption : (id : number | string , label:string) => void
 }

 type updateCardType = {
    id: string | null | number,
    show : boolean,
    field : string | null 
 }

 interface kanbanCard {
     id : number | string ,
     title : string,
     color : string,
     maxTasks? : number,
     taskIds : kanbanTaskColumn[],
 }

 interface kanbanTaskColumn {
     id : string | number,
     title : string,
     prior : string,
     assignTo : string,
     dueDate : string,
     tag : string[]
 }

 