import { rejects } from 'assert'
import { error } from 'console'
import Papa from 'papaparse'


export const parseCSV = (file:File) => {
    return new Promise<any[]>((resolve , reject) => {
        Papa.parse(file , {
            header : true,
            skipEmptyLines : true,
            complete : (results) => {
                resolve(results.data as any[])
            },
            error : (err) => {
                reject(err)
            }
        })
    }) 
}


export const exportCSV = (data:any[] , filename ="table_data.csv") => {
   const csv = Papa.unparse(data);
   const blob = new Blob([csv] , {type : 'text/csv;charset=utf-8;'})
   const link = document.createElement('a')
   const url = URL.createObjectURL(blob)
   link.href = url
   link.setAttribute('download' , filename)
   document.body.appendChild(link)
   link.click()
   document.body.removeChild(link)
}