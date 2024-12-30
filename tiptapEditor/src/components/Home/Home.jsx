import React, { useState , useCallback  } from 'react'
import {TipTap , NewPost} from '../../../export'


const Home = () => {
  // retrive data from local storage when the page load 
  const storageData = localStorage.getItem('newpost');

  // set the local storage data into the state
  const [afterSavedContent , setAfterSavedContent] = useState(storageData || '') 

  // set data in the local storage or update the afterSaved state
  const saveContent  = useCallback((html) => {
         localStorage.setItem('newpost' , html)
         setAfterSavedContent(html)    
  }, [])

  return (
    <>
    <TipTap saveContent={saveContent} /> 
    <NewPost savedContent = {afterSavedContent}/>
    </>
  )
}

export default Home