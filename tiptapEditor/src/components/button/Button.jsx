
const Button = ({label , editor , action , Option= {} , isActiveCheck}) => {
    
    if(!editor){
        return null
    }

    const handleBtn = () => {
    // for link button
      if(isActiveCheck === 'link'){
        // chekc the previous url 
        const previousUrl = editor.getAttributes('link').href 
        
        // take new url from user or show the previous url if present
        const url = window.prompt('URL', previousUrl)
      
    
        if (url === null) {
          return
        }
      
        // if url empty show a alert and unset the link
        if (url === '') {
          alert('Please enter a URL')
          editor.chain().focus().extendMarkRange('link').unsetLink()
            .run()
      
          return
        }
      
        // set the link if previous link present this will update it
        try {
           editor.chain().focus().extendMarkRange('link').setLink({ href: url })
            .run()
        } catch (e) {
          alert(e.message)  // handle error
        }
      }else{
        // for other buttons
        editor.chain().focus()[action](Option).run();   
      }
    }
  
    const isActive = isActiveCheck ? editor.isActive(isActiveCheck , Option) : false
    
  return (
    <button
          onClick={() => handleBtn()}
          className={`px-4 py-2  rounded-md  ${
            isActive ? 'bg-blue-500 text-white' : 'bg-gray-300 '
          }`}>
          {label}
        </button>
  )
}

export default Button