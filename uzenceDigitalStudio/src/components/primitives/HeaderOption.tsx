import Option from "./Option"

type idType = {
    id : kanbanCard['id'],
    handleRename : () =>  void,
    handleSetWip : () => void
}

const HeaderOption = ({id , handleRename , handleSetWip}:idType) => {

    const HandleDelete = (id:headerOptionType['id']) => {
        alert(id)
    }
    
let headerOption = [
        {  
            id : id,
            label : 'Rename',
            className : 'text-gray-500',
            handleOption : handleRename
        },{
            id : id,
            label : 'set WIP limit',
            className : 'text-gray-500',
            handleOption : handleSetWip
        },{
            id : id,
            label : 'Delete',
            className : 'text-red-500',
            handleOption : HandleDelete
        }
    ]
  return (
    <ol className='max-w-28 w-full flex flex-col border border-gray-300 rounded-md text-sm capitalize absolute top-14 bg-white right-0 z-10'>
        {
            headerOption.map((opt , i) => (
              <Option key={i} option={opt} /> 
            ))
        }
       </ol>
  )
}

export default HeaderOption