'use strict'

import React, { PropTypes } from 'react'

const MarkdownEditorHeader = ({ saveData }) => (
  <header className='editorHeader'>
    <button 
      onClick={saveData} 
      className='save'>Salvar</button> 
  </header>
)

MarkdownEditorHeader.propTypes = {
  saveData: PropTypes.func.isRequired
}

export default MarkdownEditorHeader