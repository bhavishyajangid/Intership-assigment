

export const getNewColumnVal = (item : rowType , additionalColumn : string[]):rowType => {
    
 const updatedItem : rowType = {...item}


 const existingKeys = new Set(Object.keys(updatedItem))

 for(const col of additionalColumn){
    if(!existingKeys.has(col)){
        updatedItem[col] = '-'
    }
 }

 return updatedItem
 
}