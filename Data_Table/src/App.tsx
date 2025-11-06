import { useEffect, useState } from 'react'
import './App.css'
import Table from './components/Table'
import { useDispatch } from 'react-redux'
import { setTableData } from './store/TableData'

function App() {
  const [loader, setLoader] = useState<boolean>(true)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchTableData = async():Promise<void> => {
        try {
          const res =  await fetch(`https://api.artic.edu/api/v1/artworks?page=1`)
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
  },[])
  return (
    <>
      <div>
        <Table/>
      </div>
    </>
  )
}

export default App
