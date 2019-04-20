'use strict'

import React, { PropTypes } from 'react'
import MarkdownEditorHeader from './header'

const MarkdownEditor = ({ value, handleChange, getMarkup, saveData }) => (
  <section className='editor'>
    <MarkdownEditorHeader saveData={saveData} />

    <textarea value={value} onChange={handleChange} autoFocus/>
    <article className='view' dangerouslySetInnerHTML={getMarkup()} />
  </section>
)

MarkdownEditor.propTypes = {
  getMarkup: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  saveData: PropTypes.func.isRequired,
  value: PropTypes.any
}

export default MarkdownEditor
