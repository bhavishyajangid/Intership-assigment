export const filterRow = (rows : rowType[] , searchVal : string) => {
    if(!searchVal.trim()) return rows


    const lowerSearch = searchVal.toLowerCase()

    return rows.filter((row : rowType) => 
        Object.values(row).some((val) => String(val).toLowerCase().includes(lowerSearch))
    )

}