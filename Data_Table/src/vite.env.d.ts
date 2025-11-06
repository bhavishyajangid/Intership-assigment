
interface TableData {
     title : string,
     place_of_origin : string,
     artist_display : string,
     inscriptions : string | null
     date_start : number
     date_end : number
}

interface Pagination {
    current_page : number 
    offset : number
    total : number
     total_pages : number
}


interface StoreType  {
    tableData : TableData[]
    pagination : Pagination | null
}