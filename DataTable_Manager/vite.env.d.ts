

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
    rows : rowType[]
}