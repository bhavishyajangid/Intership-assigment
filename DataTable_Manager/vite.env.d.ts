

type rowType = {
    id : string | number,
    name : string,
    email : string,
    age : number,
    role : string,
    hide : boolean,
    [key : string] : any
}

interface DataState {
    column : string[],
    additionalColumn : string[],
    rows : rowType[],
    filteredRows : rowType[],
    rowPerPage : number,
    searchval : string,
    searchResult : rowType[]
}


type paginationPayloadType = {
     data : rowType[],
     currentPage : number
}