import React from 'react'
import {useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Button from '../button/Button';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import parse from 'html-react-parser';

// list of extensions which i have used in this project 
const extensions = [StarterKit , Underline , Link];

// content default shows in the editor
const content = `write here`;


const TipTap = ({saveContent}) => {
  // make a editor using useEditor which contain extension or content 
  const editor = useEditor({
    extensions, 
    content, 
  })


  // for save the content of the editor
  const handleSaveBtn = () => {
    const editorData =  editor.getHTML();
   
    // check if the editor data is empty show a alert message
    if(editorData){
      
      saveContent(editorData)

      // use parser to take pure data without tags
    }else if(parse(editorData).ref === null){
      alert("Please Write Some Thing");
    }
  }

  if(!editor){
    return null
  }
  
  return (
    <>
    <div className='w-full mt-5 px-5'>
      <div className='w-full flex flex-wrap gap-5 '>

        {/* // all buttons */}

      <Button editor={editor} label="B" action="toggleBold" isActiveCheck="bold"/>
      <Button editor={editor} label="I" action="toggleItalic" isActiveCheck="italic"/>
      <Button editor={editor} label="Strike" action="toggleStrike" isActiveCheck="strike"/>
      <Button editor={editor} label="Code" action="toggleCode" isActiveCheck="code"/>
      <Button editor={editor} label="Clear marks" action="unsetAllMarks"/>
      <Button editor={editor} label="Clear nodes" action="clearNodes" />
      <Button editor={editor} label="Paragraph" action="setParagraph" isActiveCheck="paragraph"/>
      <Button editor={editor} label="H1" action="toggleHeading" isActiveCheck="heading" Option={{ level: 1 }}/> 
      <Button editor={editor} label="H2" action="toggleHeading" isActiveCheck="heading" Option={{ level: 2 }}/> 
      <Button editor={editor} label="H3" action="toggleHeading" isActiveCheck="heading" Option={{ level: 3 }}/>
      <Button editor={editor} label="H4" action="toggleHeading" isActiveCheck="heading" Option={{ level: 4 }}/> 
      <Button editor={editor} label="H5" action="toggleHeading" isActiveCheck="heading" Option={{ level: 5 }}/> 
      <Button editor={editor} label="H6" action="toggleHeading" isActiveCheck="heading" Option={{ level: 6 }}/>
      <Button editor={editor} label="Bullet list" action="toggleBulletList" isActiveCheck="bulletList" />
      <Button editor={editor} label="Ordered list" action="toggleOrderedList" isActiveCheck="orderedList" />
      <Button editor={editor} label=" Code block" action="toggleCodeBlock" isActiveCheck="codeBlock" />
      <Button editor={editor} label=" Blockquote" action="toggleBlockquote" isActiveCheck="blockquote" />
      <Button editor={editor} label=" Horizontal rule" action="setHorizontalRule" />
      <Button editor={editor} label="Hard break" action="setHardBreak" />
      <Button editor={editor} label="Undo" action="undo" />
      <Button editor={editor} label="Redo" action="redo" />
      <Button editor={editor} label="Underline" action="toggleUnderline" isActiveCheck="underline"/>
      <Button editor={editor} label="Link" isActiveCheck="link"/>
      </div>

      <div className='w-full min-h-72  border-2  rounded-xl border-solid border-gray-500   mt-10 px-5 py-5  '>

      <EditorContent editor={editor}/>

      </div>

      <button 
      onClick={() => {
         handleSaveBtn();    
      }}
      className='px-5 py-2 bg-green-500 rounded-md border-none text-base capitalize mt-10 cursor-pointer'
      >
      save
      </button>
      </div>
      </>
  )
}

export default TipTap