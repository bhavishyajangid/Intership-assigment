import { useEffect, useState } from 'react'
import './App.css'
import Table from './components/Table'
import { useDispatch, useSelector } from 'react-redux'
import { setTableData } from './store/TableData'
import type { RootState } from './store/store'

function App() {
  const [loader, setLoader] = useState<boolean>(true)
  const dispatch = useDispatch()
  const {currentPage} = useSelector((state:RootState) => state.tableDataSlice)

  useEffect(() => {
    const fetchTableData = async():Promise<void> => {
        try {
          const res =  await fetch(`https://api.artic.edu/api/v1/artworks?page=${currentPage}`)
          const result  = await res.json()
               console.log(result);
               
          dispatch(setTableData(result))
          
        } catch (error) {
           console.log(error);
        }finally{
          setLoader(false)
        }
    }

    fetchTableData()
  },[currentPage])
  return (
    <>
      <div>
        <Table/>
      </div>
    </>
  )
}

export default App
