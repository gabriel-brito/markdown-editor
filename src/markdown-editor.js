'use strict'

import React, { PropTypes } from 'react'

const MarkdownEditor = ({ value, handleChange, getMarkup }) => (
  <div className='editor'>
    <textarea value={value} onChange={handleChange} autoFocus/>
    <div className='view' dangerouslySetInnerHTML={getMarkup()} />
  </div>
)

MarkdownEditor.propTypes = {
  value: PropTypes.any,
  handleChange: PropTypes.func.isRequired
}

export default MarkdownEditor
