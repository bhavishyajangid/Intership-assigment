
type OptionType = {
    option : headerOptionType,
}

const Option = ({option} : OptionType) => {

  
  return (
     <li
     onClick={() => {option.handleOption(option.id , option.label)}}
      className={`hover:bg-gray-200 cursor-pointer border-gray-300 ${option.className}   px-2 py-1`}>{option.label}</li>
  )
}

export default Option