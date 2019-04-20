'use strict'

import React from 'react'

const MarkdownEditorHeader = ({ value, saveData }) => (
  <header className='editorHeader'>
    <button 
      onClick={value && saveData(value)} 
      className='save'>Salvar</button> 
  </header>
)

export default MarkdownEditorHeader